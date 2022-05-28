import React from 'react'
import ArticleSection from '../components/ArticleSection'

const Event = () => {
  return (
    <section className='article-container' >
        <div className='article'>
            <h2 className='title'>This is the event's title.</h2>
            <div className='main-img'>
                <img src="/assets/Ramadan-2022.webp" alt="" />
            </div>
            <ArticleSection />
        </div>

    </section>
  )
}

export default Event