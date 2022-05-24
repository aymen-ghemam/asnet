import React from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const ArticlePage = () => {
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default ArticlePage;
