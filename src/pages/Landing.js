import React from "react";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import SimpleCard from "../components/SimpleCard";

const Landing = () => {
  const list = [
    {
      title: "Event 1",
      description: "Lorem ipsum dolor sit amet consectetur .",
      img: "/assets/Ramadan-2022.webp",
      link: "#",
    },
    {
      title: "something ",
      description:
        "something ..something ..something ..something ..something ..something ..something ...",
      img: "/assets/Ramadan-2022.webp",
      link: "#",
    },
    {
      title: "Ramadan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur aperiam! Qui nam odit optio. Amet itaque, possimus iure modi quisquam .",
      img: "/assets/Ramadan-2022.webp",
      link: "#",
    },
    {
      title: "Ramadan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur aperiam! Qui nam odit optio. Amet itaque, possimus iure modi quisquam .",
      img: "/assets/Ramadan-2022.webp",
      link: "#",
    },
    {
      title: "2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur aperiam! Qui nam odit optio. Amet itaque, possimus iure modi quisquam .",
      img: "/assets/Ramadan-2022.webp",
      link: "#",
    },
  ];
  return (
    <div>
      <section className="headerContainer">
        <div className="headerImage">
          <img src="./assets/enfant_qui_lit.svg" alt="" />
        </div>
        <div className="headerDesc">
          <h1>
            Parce qu'un <span className="OrangeText">enfant</span> en situation
            de handicap est avant tout un enfant
          </h1>
          <p>
            L'ASNET offre un service d'apprentissage et de prise en charge
            personnalisé.
          </p>
          {/* <Button link='#' text='Soutenire notre action' /> */}
        </div>
      </section>
      <section className="about">
        <div className="aboutMain">
          <div className="aboutText">
            <p>
              L'<span className="OrangeText">ASNET</span> s’engage depuis plus
              de 3 ans pour faire émerger une société inclusive dès le plus
              jeune âge{" "}
            </p>
          </div>
          <div className="aboutCardContainer">
            <div className="aboutCardDesc">
              <p>
                Accompagner et soutenir les familles à chaque étape de leurs
                parcours de vie
              </p>
            </div>
          </div>
          <div className="aboutCardContainer card2">
            <div className="aboutCardDesc aboutCardDesc2">
              <p>
                Favoriser l’accueil des enfants en situation de handicap dans le
                milieu ordinaire
              </p>
            </div>
          </div>
          <div className="aboutCardContainer card3">
            <div className="aboutCardDesc aboutCardDesc3">
              <p>
                Former tous les acteurs concernés par la situation de handicap
                de l’enfant vers une dynamique inclusive
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="latest">
        <div className="carouselHeader">
          <h2 className="title">Nos dernières actualités</h2>
        </div>
        <div className="carouselContainer">
          <Carousel list={list} />
        </div>
      </section>
    </div>
  );
};

export default Landing;
