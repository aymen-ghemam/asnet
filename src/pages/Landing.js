import React from 'react'
import Button from '../components/Button'

const Landing = () => {
  return (
    <section className='landing flex'>
        <div className='text flex'>
            <h1>Parce qu'un enfant en situation de handicap est avant tout un enfant</h1>
            <p>L'ASNET offre un service d'apprentissage et de prise en charge personnalisé.</p>
            <Button link='#' text='Soutenire notre action' />
        </div>
        <div className='svg'>
            <img src='./assets/enfant_qui_lit.svg' alt='' />
        </div>
    </section>
  )
}

export default Landing