import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import HEAD from "./../../../components/Header";

const showUser = () => {
  const router = useRouter()
  const { id } = router.query

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

  console.log(data)


  if (data)
    return (
      <>
      <HEAD title={`Teste Vielfy - ${data.name}`} />
        <div className="container">
        <div className="d-flex justify-content-center py-5">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">{data.name}</h3>
              <p>id: {data.id}</p>
              <p>Email: {data.email}</p>
              <p>Género: {data.gender}</p>
              <p>Estado: {data.status}</p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default showUser