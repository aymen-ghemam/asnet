import React from 'react'
import './ArticleCard.css'

const ArticleCard = () => {
  return (
    <div className="event-card">
        <div className="image">
            <img src="./assets/projets/projet1.png" alt="" />
        </div>
        <div className="body">
            <h1>This is just an exemple to fill the space of some kinda long boring article.</h1>
            <p className='date'><span>2021/10/10</span></p>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A non at architecto nam, inventore nihil, nemo numquam mollitia necessitatibus dolorem.</p>
            <div className="tags flex">
                <p>Tags: </p>
                <div className='flex'>
                    <span>one</span>
                    <span>two</span>
                    <span>three</span>
                    <span>one</span>
                    <span>two</span>
                    <span>three</span>
                    <span>one</span>
                    <span>two</span>
                    <span>three</span>
                </div>
            </div>
        </div>
        <a className='link' href='#'>
            Lire l'article
        </a>
    </div>
  )
}

export default ArticleCard