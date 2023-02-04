
const postUser = (name, email, gender, status) => {
  fetch(`https://gorest.co.in/public/v2/users/`, {
    method: 'POST',
    body: JSON.stringify({ name, email, gender, status }),
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': 'Bearer ' + process.env.TOKEN,
    },
  }).then(response => {
    if (response.ok) {
      alert("Adicionado com sucesso")
      window.location = "/user/add"
    } else {
      alert("Não foi possível adicionar")
    }
  })
}

export default postUser