import React from 'react'
import './Tag.css'

const Tag = (props) => {
  return (
    <div className='tag'>
        <div className="left"></div>
        {props.name}
        <div className="right"></div>
    </div>
  )
}

export default Tag