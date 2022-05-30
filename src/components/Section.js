import React, { Fragment } from "react";

function Section(props) {
  return (
    <Fragment>
      <div className="addSection">
        <div>
          <h3>Ajouter une section :</h3>
        </div>
        <div className="sectionHeaderInputContainer">
          <label htmlFor="sectionHeader">Titre :</label>
          <input
            name="titre"
            data-sectionNumber={props.index}
            id="sectionHeader"
            type="text"
          />
        </div>
        <div className="sectionParagraphInputContainer">
          <label htmlFor="sectionContenu">Contenu :</label>
          <textarea
            data-sectionNumber={props.index}
            name="sectionContenu"
            id="sectionContenu"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="sectionImageInputContainer">
          <label htmlFor="articleImage">Image :</label>
          <input
            name="sectionImage"
            type="file"
            data-sectionNumber={props.index}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Section;
