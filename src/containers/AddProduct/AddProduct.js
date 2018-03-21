import React from 'react'
import { Link } from 'react-router-dom'

class AddProducts extends React.Component {
  render() {
    return(
      <div>
        <p>Añadir Productos</p>
        <Link to={'/products-list'}>Listar </Link>
      </div>
    )
  }
}

export default AddProducts