import React from 'react'
import Menu from '../../../components/Menu'
import HEAD from "./../../../components/Header"
import postUser from '../../../components/Requests/postUser'


const add = () => {
  const [name, setName] = React.useState()
  const [email, setEmail] = React.useState()
  const [gender, setGender] = React.useState()
  const [status, setStatus] = React.useState()

  const createUser = () => {
    postUser(name, email, gender, status)
  }

  return (
    <>
      <HEAD title="Cadastrar novo usuário" />

      <Menu />

      <section>
        <div className="container">
          <div className="d-flex justify-content-center py-5">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4">Adicionando novo usuário</h3>
                <label>Nome:</label>
                <input type="text" className="form-control mb-3" onChange={(event) => setName(event.target.value)} />

                <label>Email:</label>
                <input type="email" className="form-control mb-3" onChange={(event) => setEmail(event.target.value)} />

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