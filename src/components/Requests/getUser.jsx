import React from 'react'

const getUser = async (id, data, setData) => {
  const api = `https://gorest.co.in/public/v2/users/${id}`

  try {
    const response = await fetch(api)
    const data = await response.json()

    if (!data)
      throw 'Problema na requisição'

    setData(data)
  } catch (error) {
    console.log(error)
  }

  return data
}

export default getUser