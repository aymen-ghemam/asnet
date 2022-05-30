import axios from "axios";
import React, { Fragment } from "react";
import ImageUpload from "./ImageUpload";
import SectionImageUpload from "./SectionImageUpload";

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
            name="contenu"
            id="sectionContenu"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="sectionImageInputContainer">
          <label htmlFor="articleImage">Image :</label>
          {/* <input name='image' type="file" data-sectionNumber={props.index} onChange={handleUpload} accept ="image/*" /> */}
          <SectionImageUpload index={props.index} onUpload = {props.handleUpload} />
        </div>
      </div>
    </Fragment>
  );
}

export default Section;
