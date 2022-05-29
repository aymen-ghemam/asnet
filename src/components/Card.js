import React from "react";
import "./Card.css";
import Tag from "./Tag";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Card = (props) => {
  
  return (
    <div className="card">
      <div className="top">
        <div className="tags flex">
          {
            props.tags.map(tag => 
              <Tag name = {tag.nom} />  
            )
          }
        </div>
      </div>
      <div className="bottom">
        <h2 className="title">{props.title}</h2>
        <p>
          {props.description.length > 100 ? props.description.slice(0, 100) + "..." : props.description}
          <a href={`/articles/${props.id}`}>
            Continue
            <AiOutlineDoubleRight size="1rem" className="" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
