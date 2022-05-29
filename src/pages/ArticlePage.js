import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const ArticlePage = () => {
  const [state, setState] = useState({articles: []})

  useEffect(() => {
    axios.get('/api/articles', {
    })
    .then(res => {
      if(res.data.error === false) {
        setState({...state, articles: res.data.articles});
      }
    })
  }, [])
  
  return (
    <section className="articles">
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
      <SearchBar />
      <div className="flex list">
        {
          state.articles.map(article => 
            <Card 
            id={article.id_article}
            title={article.titre}
            text={article.text}    
            image = {article.image}
            description = {article.description}
            tags = {article.tags}     
            date={article.date} 
            />  
          )
        }
      </div>
    </section>
  );
};

export default ArticlePage;
