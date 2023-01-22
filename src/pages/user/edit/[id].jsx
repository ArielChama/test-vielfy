import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import HEAD from "./../../../components/Header";

const editUSer = () => {
  const router = useRouter()
  const { id } = router.query

  const [user, setUser] = useState({})
  const api = `https://gorest.co.in/public/v2/users/${id}`

  const fetchAllData = async () => {
    try {
      const response = await fetch(api)
      const user = await response.json()

      if (!user)
        throw 'Problema na requisição'

      setUser(user)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllData()
  }, [api])

  const [name, setName] = useState(user.name || "")
  const [email, setEmail] = useState(user.email || "")
  const [gender, setGender] = useState()
  const [state, setState] = useState()

  const updateUser = () => {
    fetch(api, {
      method: 'PUT',
      body: JSON.stringify({ name: name, email: email, gender: gender, status: state }),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': 'Bearer 1a609420bad3a81219bf0535530fd16c3f7bea269068c991ba6f0f094c0916ca',
      },
    }).then(response => {
      if (response.ok) {
        alert("Atualizado com sucesso")
        window.location = "/"
      } else {
        alert("Não foi possível atualizar")
        console.log(response)
      }
    })
  }

  console.log(user)

  return (
    <>
      <HEAD title="Teste Vielfy - Editar usuário" />

      <section>
        <div className="container">
          <div className="d-flex justify-content-center py-5">
            <div className="card">
              <div className="card-body">
                  <h3 className="card-title mb-4">Editando o usuário "{user.name}"</h3>
                  <label htmlFor="">Nome:</label>
                  <input type="text" value={name} className="form-control mb-3" onChange={(event) => setName(event.target.value)}  />

                  <label htmlFor="">Email:</label>
                  <input type="email" value={email} className="form-control mb-3" onChange={(event) => setEmail(event.target.value)}  />

                  <label htmlFor="">Género:</label>
                  <select className="form-control mb-3" onClick={(event) => setGender(event.target.value)}>
                    <option value="">Escolha uma opção</option>
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                  </select>

                  <label htmlFor="">Estado</label>
                  <select className="form-control mb-3" onClick={(event) => setState(event.target.value)}>
                    <option value="">Escolha uma opção</option>
                    <option value="active">Activo</option>
                    <option value="inactive">Inativo</option>
                  </select>

                  <button type="button" className="btn btn-primary" onClick={updateUser}>
                    Editar
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default editUSer