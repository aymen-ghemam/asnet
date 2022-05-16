import React from 'react'
import './EventCard.css'

const EventCard = () => {
  return (
    <div className="event-card">
        <div className="image">
            <img src="./assets/projets/projet1.png" alt="" />
        </div>
        <div className="body">
            <h1>Title</h1>
            <p className='date'><span>2021/10/10</span></p>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A non at architecto nam, inventore nihil, nemo numquam mollitia necessitatibus dolorem.</p>
            <div className="tags">
                <p>Tags: </p>
                <span>one</span>
                <span>two</span>
                <span>three</span>
            </div>
        </div>
    </div>
  )
}

export default EventCard