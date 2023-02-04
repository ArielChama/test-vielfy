import React from 'react'
import { useRouter } from 'next/router'
import HEAD from "./../../../components/Header"
import Menu from "../../../components/Menu"
import deleteUser from '../../../components/Requests/DeleteUser'
import getUser from './../../../components/Requests/getUser'

const showUser = () => {
  const [data, setData] = React.useState({})
  const router = useRouter()
  const { id } = router.query

  React.useEffect(() => {
    getUser(id, data, setData)
  })

  if (data)
    return (
      <>
        <HEAD title={data.name} />

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
                  <a href={`/user/edit/${data.id}`} className="btn btn-warning mx-1">
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