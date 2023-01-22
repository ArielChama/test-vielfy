import React from 'react'
import HEAD from "./../../../components/Header";

const add = () => {
  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState()
  const [gender, setGender] = React.useState()
  const [state, setState] = React.useState()

  const createUser = (data) => {
    fetch(`https://gorest.co.in/public/v2/users/`, {
      method: 'POST',
      body: JSON.stringify({ name: name, email: email, gender: gender, status: state }),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': 'Bearer 1a609420bad3a81219bf0535530fd16c3f7bea269068c991ba6f0f094c0916ca',
      },
    }).then(response => {
      if (response.ok) {
        alert("Adicionado com sucesso")
        window.location = "/user/add"
      } else {
        alert("Não foi possível adicionar")
        console.log(response)
      }
    })
  }

  return (
    <>
      <HEAD title="Teste Vielfy - Cadastrar novo usuário" />

      <section>
        <div className="container">
          <div className="d-flex justify-content-center py-5">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4">Adicionando novo usuário</h3>

                <label htmlFor="">Nome:</label>
                <input type="text" className="form-control mb-3" onChange={(event) => setName(event.target.value)} />

                <label htmlFor="">Email:</label>
                <input type="email" className="form-control mb-3" onChange={(event) => setEmail(event.target.value)} />

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

                <button type="button" className="btn btn-primary" onClick={createUser}>
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default add