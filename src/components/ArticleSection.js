import React from 'react'

const ArticleSection = () => {
  return (
    <div className='article-section'>
        <h4 className='title'>Section title.</h4>
        <div className='section-body flex row'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus repudiandae blanditiis veniam nemo laborum praesentium, eos corporis recusandae porro, voluptas tenetur amet earum numquam ipsa cum et ex eius sequi.</p>
            <div className='img'>
                <img src="/assets/Ramadan-2022.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ArticleSection