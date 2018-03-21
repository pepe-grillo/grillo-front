import React  from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => (
  <ul>
    <li><Link to={'/'}>Añadir </Link></li>
    <li><Link to={'/products-list'}>Listar </Link></li>
  </ul>
)

export default Navigation