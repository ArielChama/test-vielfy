import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import HEAD from "./../../../components/Header"
import Menu from '../../../components/Menu'
import getUser from './../../../components/Requests/getUser'
import updateUser from '../../../components/Requests/updateUser'

const editUSer = () => {
  const router = useRouter()
  const { id } = router.query
  const api = `https://gorest.co.in/public/v2/users/${id}`

  const [data, setData] = React.useState({})
  const [name, setName] = useState(data.name || "")
  const [email, setEmail] = useState(data.email || "")
  const [gender, setGender] = useState()
  const [status, setStatus] = useState()

  React.useEffect(() => {
    getUser(id, data, setData)
  })

  const update = () => {
    updateUser(id, name, email, gender, status)
  }

  return (
    <>
      <HEAD title="Editar usuário" />

      <Menu />

      <section>
        <div className="container">
          <div className="d-flex justify-content-center py-5">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4">Editando o usuário "{data.name}"</h3>
                <label>Nome:</label>
                <input type="text" value={name} className="form-control mb-3" onChange={(event) => setName(event.target.value)} />

                <label>Email:</label>
                <input type="email" value={email} className="form-control mb-3" onChange={(event) => setEmail(event.target.value)} />

                <label>Género:</label>
                <select className="form-control mb-3" onClick={(event) => setGender(event.target.value)}>
                  <option value="">Escolha uma opção</option>
                  <option value="male">Masculino</option>
                  <option value="female">Feminino</option>
                </select>

                <label>Estado</label>
                <select className="form-control mb-3" onClick={(event) => setStatus(event.target.value)}>
                  <option value="">Escolha uma opção</option>
                  <option value="active">Activo</option>
                  <option value="inactive">Inativo</option>
                </select>

                <button type="button" className="btn btn-primary" onClick={update}>
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