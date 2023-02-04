import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu'
import HEAD from "./../../components/Header"
import deleteUser from './../../components/Requests/DeleteUser'

const index = () => {
  const [data, setData] = useState([])

  const fetchAllData = async () => {
    try {
      const response = await fetch(`https://gorest.co.in/public/v2/users`)
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
  }, [])

  console.log(data)


  if (data)
    return (
      <>
        <HEAD title="Listagem" />

        <Menu />

        <section>
          <div className="container">
            <div className="d-flex justify-content-center py-5">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-borderless table-hover">
                      <caption>Lista de usuários</caption>
                      <thead>
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Operações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map(({ id, name, email, status }) => (
                          <tr key={id}>
                            <th scope="row">{id}</th>
                            <td>
                              <Link href={`/user/show/${id}`}>{name}</Link>
                            </td>
                            <td>{email}</td>
                            <td>{status}</td>
                            <td>
                              <a href={`/user/edit/${id}`} className="btn btn-warning mx-1  ">
                                <i class="bi bi-pencil"></i>
                              </a>

                              <button type='button' className="btn btn-danger" onClick={() => deleteUser(id)}>
                                <i class="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default index