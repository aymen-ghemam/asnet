import React from 'react'
import './SimpleCard.css'

const SimpleCard = () => {
  return (
    <div className='simple-card'>
        <img className='image' src="/assets/enfants.jpg" alt="" />
        <div className="body">
            <h3>Accueillir</h3>
            <p>Favoriser l’accueil des enfants en situation de handicap dans le milieu ordinaire</p>
        </div>
    </div>
  )
}

export default SimpleCard