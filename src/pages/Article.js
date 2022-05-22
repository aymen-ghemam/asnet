import React from 'react'
import ArticleSection from '../components/ArticleSection'

const Article = () => {
  return (
    <section className='article-container' >
        <div className='article'>
            <h2 className='title'>This is a title.</h2>
            <div className='main-img'>
                <img src="/assets/Ramadan-2022.webp" alt="" />
            </div>
            <div className='desc'>
                <h4 className='title'>Description</h4>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada risus urna, nec lobortis lorem blandit quis. Cras scelerisque rutrum dapibus. Suspendisse id risus at magna finibus condimentum.Duis at semper lorem.
                </p>
            </div>

            <ArticleSection />
            <ArticleSection />
        </div>

    </section>
  )
}

export default Article