import React from 'react'
import { Link } from 'react-router-dom'

class ProductsList extends React.Component {
  render() {
    return(
      <div>
        <p>Lista de Productos</p>
        <Link to={'/'}>Añadir </Link>
      </div>
    )
  }
}

export default ProductsList