import React from 'react'
import Button from './Button'

const Carousel = () => {
  return (
    <div className='carousel'>
        <h2 className='title'>Nos dernières actualités</h2>
        <div className='flex row'>
            <div className='image'>
                <img src="/assets/formation.jpg" alt="image" />
            </div>
            <div className='desc'>
                <h3>Ramadan 2022</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur aperiam! Qui nam odit optio. Amet itaque, possimus iure modi quisquam .</p>
                {/* <Button  */}
            </div>
        </div>
    </div>
  )
}

export default Carousel