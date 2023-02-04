import React,{ useState } from 'react'

const updateUser = (id, name, email, gender, status) => {
  const api = `https://gorest.co.in/public/v2/users/${id}`

  fetch(api, {
    method: 'PUT',
    body: JSON.stringify({ name, email, gender, status }),
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': 'Bearer ' + process.env.TOKEN,
    },
  }).then(response => {
    if (response.ok) {
      alert("Atualizado com sucesso")
      window.location = "/"
    } else {
      alert("Não foi possível atualizar")
    }
  })

}

export default updateUser