import React from 'react'

const ArticleSection = (props) => {
  return (
    <div className='article-section'>
        <h4 className='title'>{props.title}</h4>
        <div className='section-body flex row'>
            <p>{props.text}</p>
            <div className='img flex'>
                <img src={props.image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ArticleSection