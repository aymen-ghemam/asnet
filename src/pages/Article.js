import React, { Fragment, useEffect, useState } from 'react'
import ArticleSection from '../components/ArticleSection'
import { useParams } from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';

const Article = (props) => {
  const [state, setstate] = useState({id: useParams().id, article: null})
  const userID = localStorage.getItem('id_user');

  useEffect(() => {
    axios.get(`/api/articles/${state.id}`)
    .then(res => {
      if (res.data.error === false) {
        setstate({...state, article: res.data.article})
      }
    });
  }, [state.id])
  

  return (
    <Fragment>
      <section className="headerContainer articleHeader">
      <div className="headerDesc articleHeaderDesc">
        <h1>This is a title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tempus mi mi, eu porttitor justo suscipit pretium. Integer non
          facilisis
        </p>
        {/* <Button link='#' text='Soutenire notre action' /> */}
      </div>
      <div className="articleHeaderImage">
        <img src="./assets/artcileHeaderIllus.svg" alt="" />
      </div>
    </section>
    {state.article ===null ? '' :
    <section className='article-container' >
        <div className='article'>
            <h2 className='title'>{state.article.titre}</h2>
            <div className='main-img flex'>
                <img src={state.article.image} alt="" />
            </div>
            <div className='desc'>
                <h4 className='title'>Description</h4>
                <p>{state.article.description}</p>
            </div>

            {
              state.article.sections.map(section => 
                <ArticleSection title={section.titre_section} text={section.contenu_section} image={section.image_section} key={section.indice} />
              )
            }
            {
              props.isLoggedIn === true?
              userID === state.id?<AiFillEdit className='edit-button' size='2em' />: ''
              :''
            }
        </div>

    </section>
    }
    </Fragment>
  )
}

export default Article