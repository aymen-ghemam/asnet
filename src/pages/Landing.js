import React from 'react'
import Button from '../components/Button'
import SimpleCard from '../components/SimpleCard'

const Landing = () => {
  return (
    <div>
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
      <section className='about'>
        <p className='text'>L'ASNET s’engage depuis plus de 3 ans pour faire émerger une société inclusive dès le plus jeune âge </p>
        <div className='cards flex'>
          <SimpleCard />
          <SimpleCard />
          <SimpleCard />
        </div>
        
      </section>
    </div>

  )
}

export default Landing