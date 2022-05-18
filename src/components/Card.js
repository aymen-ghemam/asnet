import React from 'react'
import './Card.css'
import Tag from './Tag'

const Card = () => {
  return (
    <div className='card'>  
        <div className="top">
            <div className="tags flex">
                <Tag />
                <Tag />
                <Tag />
            </div>
        </div>
        <div className="bottom">
            <h2 className='title'>This is a title.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, accusantium sunt esse voluptas dignissimos recusandae laudantium tempora soluta quod dolorum eveniet deserunt quas, sint atque id harum tenetur, a eaque.</p>
        </div>
    </div>
  )
}

export default Card