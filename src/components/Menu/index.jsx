import React from 'react'

const Menu = () => {
  return (
    <header>
      <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand">Teste Vielfy</a>

          <a href="/user/add" className="btn btn-primary m-2">
            Adicionar
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Menu