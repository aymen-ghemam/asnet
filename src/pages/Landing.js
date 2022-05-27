import React from "react";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import { useEffect } from "react";

const Landing = () => {
  const list = [
    {
      title: "Event 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Previous",
      img: "./assets/Ramadan-2022.webp",
      link: "#",
    },
    {
      title: "Event 2",
      description:
        "something ..something ..something ..something ..something ..something ..something ...",
      img: "./assets/Ramadan-2022.webp",
      link: "#",
    },
    {
      title: "Event 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur aperiam! Qui nam odit optio. Amet itaque, possimus iure modi quisquam .",
      img: "./assets/Ramadan-2022.webp",
      link: "#",
    },
    {
      title: "Event 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur aperiam! Qui nam odit optio. Amet itaque, possimus iure modi quisquam .",
      img: "./assets/Ramadan-2022.webp",
      link: "#",
    },
    {
      title: "Event 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur aperiam! Qui nam odit optio. Amet itaque, possimus iure modi quisquam .",
      img: "./assets/Ramadan-2022.webp",
      link: "#",
    },
  ];

  return (
    <div>
      <section className="headerContainer">
        <div className="headerImage">
          <img src="./assets/enfant1.png" alt="" />
        </div>
        <div className="headerDesc">
          <h1>
            Parce qu'un <span className="OrangeText">enfant</span> en situation
            d'handicap est avant tout un enfant
          </h1>
          <p>
            L'ASNET offre un service d'apprentissage et de prise en charge
            personnalisée Et agit au quotidien pour l’accueil de tous les
            enfants et l’accompagnement de leur famille.
          </p>
          {/* <Button link='#' text='Soutenire notre action' /> */}
        </div>
      </section>
      <section className="about box">
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
      <section className="latest box">
        <div className="carouselHeader">
          <h2 className="title">Nos dernières actualités</h2>
        </div>
        <div className="carouselContainer">
          <Carousel list={list} />
        </div>
      </section>
      <section className="ourContent box">
        <div className="ourContentContainer">
          <div className="ourContentHeader">
            <h4>Qui sommes-nous?</h4>
          </div>
          <div className="ourContentText">
            <p>
              Découvrez l'association des Sciences de Neurotechnologie Educative
              et Thérapeutique
            </p>
          </div>
          <div className="ourContentLink">
            <a href="#">Découvrez l'ASNET!</a>
          </div>
        </div>
        <div className="ourContentContainer">
          <div className="ourContentHeader">
            <h4>Nos évènements</h4>
          </div>
          <div className="ourContentText">
            <p>
              Retrouvez les dernières actualités, évenements et activités de
              l’association ASNET.
            </p>
          </div>
          <div className="ourContentLink">
            <a href="#">Liste des évènements</a>
          </div>
        </div>
        <div className="ourContentContainer">
          <div className="ourContentHeader">
            <h4>Nos témoignages</h4>
          </div>
          <div className="ourContentText">
            <p>
              Découvrez les témoignages des familles de nos petits anges, ainsi
              que leur évolution.
            </p>
          </div>
          <div className="ourContentLink">
            <a href="#">Lire les témoignages</a>
          </div>
        </div>
      </section>
      <section className="stateContainer box">
        <div className="stateTitle">ASNET en quelques chiffres (2022)</div>
        <div className="stateContentContainer">
          <div className="stateContent">
            <div className="stateSvg">
              <img src="./assets/childs.png" alt="enfant" />
            </div>
            <div className="stateNum">161</div>
            <div className="stateDesc">
              enfants accueillis dans notre association
            </div>
          </div>
          <div className="stateContent">
            <div className="stateSvg">
              <img src="./assets/chat.png" alt="enfant" />
            </div>
            <div className="stateNum">1524</div>
            <div className="stateDesc">
              sollicitations de notre service Questions-Réponses
            </div>
          </div>
          <div className="stateContent">
            <div className="stateSvg">
              <img src="./assets/support.png" alt="" />
            </div>
            <div className="stateNum">200</div>
            <div className="stateDesc">Bénévoles et donnateurs</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
