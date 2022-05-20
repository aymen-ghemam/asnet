import React from 'react'
import Button from '../components/Button'
import Carousel from '../components/Carousel'
import SimpleCard from '../components/SimpleCard'

const Landing = () => {
  const list = [
    {
      title: 'Event 1',
      description: 'Lorem ipsum dolor sit amet consectetur .',
      img: '/assets/Ramadan-2022.webp',
      link: '#'
    },
    {
      title: 'something ',
      description: 'something ..something ..something ..something ..something ..something ..something ...',
      img: '/assets/Ramadan-2022.webp',
      link: '#'
    },
    {
      title: 'Ramadan',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur aperiam! Qui nam odit optio. Amet itaque, possimus iure modi quisquam .',
      img: '/assets/Ramadan-2022.webp',
      link: '#'
    },
    {
      title: 'Ramadan',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur aperiam! Qui nam odit optio. Amet itaque, possimus iure modi quisquam .',
      img: '/assets/Ramadan-2022.webp',
      link: '#'
    },
    {
      title: '2022',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur aperiam! Qui nam odit optio. Amet itaque, possimus iure modi quisquam .',
      img: '/assets/Ramadan-2022.webp',
      link: '#'
    }
  ]
  return (
    <div>
      <section className='landing flex row'>
        <div className='text flex'>
            <h1>Parce qu'un enfant en situation de handicap est avant tout un enfant</h1>
            <p>L'ASNET offre un service d'apprentissage et de prise en charge personnalisé.</p>
            <Button link='#' text='Soutenire notre action' />
        </div>
        <div className='svg flex'>
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
      <section className='latest'>
        <h2 className='title'>Nos dernières actualités</h2>
        <Carousel 
          list = {list}
        />
      </section>
    </div>

  )
}

export default Landing