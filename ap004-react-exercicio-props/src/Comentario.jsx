import React from 'react'

const Comentario = (props) => {
	return (
			<div className="d-flex">
				<div className="d-flex align-items-center">
					<img
						src={props.avatar}
						className='rounded-circle me-3'
						width='80'
						height='80'
					/>
				</div>
				{/* div>(h4.text-center+p.text-center) */}
				<div className="border flex-grow-1 rounded p-3">
					<p className="text">{props.texto}</p>
					<p className="text-muted text-body-secondary">{props.time}</p>
				</div>
			</div>
	)
}


export default Comentario