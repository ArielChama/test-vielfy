import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import HEAD from "./../../../components/Header";
import Menu from "../../../components/Menu"

const showUser = () => {
  const router = useRouter()
  const { id } = router.query
  const token = '1a609420bad3a81219bf0535530fd16c3f7bea269068c991ba6f0f094c0916ca'

  const [data, setData] = useState({})
  const api = `https://gorest.co.in/public/v2/users/${id}`

  const fetchAllData = async () => {
    try {
      const response = await fetch(api)
      const data = await response.json()

      if (!data)
        throw 'Problema na requisição'

      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllData()
  }, [api])

  const deleteUser = (id) => {
    fetch(`https://gorest.co.in/public/v2/users/${id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Authorization': 'Bearer ' + token,
      }),
    }).then(response => {
      if (response.ok) {
        fetchAllData()
        alert("Apagado")
        window.location = "/"
      }
    })
  }

  if (data)
    return (
      <>
        <HEAD title={`Teste Vielfy - ${data.name}`} />

        <Menu />

        <section>
        <div className="container">
          <div className="d-flex justify-content-center py-5">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{data.name}</h3>
                <p>id: {data.id}</p>
                <p>Email: {data.email}</p>
                <p>Género: {data.gender}</p>
                <p>Estado: {data.status}</p>

                <div>
                  <a href={`/user/edit/${data.id}`} className="btn btn-warning mx-1  " onClick={() => deleteUser(id)}>
                    Editar
                  </a>

                  <button type='button' className="btn btn-danger" onClick={() => deleteUser(id)}>
                    Apagar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </>
    )
}

export default showUser