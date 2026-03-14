// rafce
import React from 'react'

const Cartao = (props) => {
  return (
    <div className='card'>
        {/* .card>(car-header+card-body) */}
      <div className="card-header h5">{props.cabecalho}</div>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

export default Cartao
