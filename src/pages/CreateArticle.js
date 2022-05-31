import React, { Fragment, useState } from "react";
import Section from "../components/Section";

function CreateArticle() {
  const [sections, setsections] = useState(["section"]);
  const [images, setImages] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      title: e.target[0].value,
      description: e.target[1].value
    };
    const sectionsList = [];

    for (let i = 0; i < sections.length; i++) {
      let values = {};
      for (let j = 3; j < e.target.length; j++) {
        if (
          e.target[j].attributes["data-sectionnumber"] &&
          e.target[j].attributes["data-sectionnumber"].nodeValue == i
        ) {
          // console.log(e.target[j].attributes["name"]);
          values[e.target[j].attributes["name"].nodeValue] = e.target[j].value;
          values['indice'] = e.target[j].attributes["data-sectionnumber"].nodeValue;

          values['image'] = images[e.target[j].attributes["data-sectionnumber"].nodeValue] || '';
          // console.log(images[e.target[j].attributes["data-sectionnumber"].nodeValue]);
          // console.log(images);
        }
      }
      sectionsList.push(values);
    }
    article.sections = sectionsList;
    console.log(article);
    
  };

  const uploadImage = (url, index) => {
    setImages({...images, [index]: url});
  }

  return (
    <Fragment>
      <form
        action=""
        className="createArticleContainer"
        id="addArticle"
        onSubmit={handleSubmit}
      >
        <div className="createArticleHeader">
          <h1>Creer un article</h1>
        </div>
        <div className="articleHeaderContainer">
          <div className="articleHead">
            <h3>Article Info</h3>
          </div>
          <div className="articleTileInputContainer">
            <label htmlFor="articleHeader">Titre :</label>
            <input name="Title" id="articleHeader" type="text" />
          </div>
          <div className="articleDescInputContainer">
            <label htmlFor="articleDesc">Description :</label>
            <textarea
              name="desc"
              id="articleDesc"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="articleImageInputContainer">
            <label htmlFor="articleImage">Image :</label>
            <input type="file" />
          </div>
        </div>
        {sections.map((element, index) => (
          <Section handleUpload = {uploadImage} index={index} />
        ))}
      </form>
      <div className="addNewSection">
        <button onClick={() => setsections([...sections, "section"])}>
          Ajouter Section
        </button>
      </div>
      <div className="submitArticleContainer">
        <input type="submit" value={"Ajouter article"} form="addArticle" />
      </div>
    </Fragment>
  );
}
export default CreateArticle;
