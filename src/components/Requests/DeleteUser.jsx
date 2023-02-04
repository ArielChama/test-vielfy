
const deleteUser = ({ id, functionFetch }) => {
  fetch(`https://gorest.co.in/public/v2/users/${id}`, {
    method: 'DELETE',
    headers: new Headers({
      'Authorization': 'Bearer ' + process.env.TOKEN,
    }),
  }).then(response => {
    if (response.ok) {
      functionFetch()
      alert("Apagado")
    }
  })
}

export default deleteUser