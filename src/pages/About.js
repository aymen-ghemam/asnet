import React, { Fragment } from "react";
import Carousel from "../components/Carousel";

function About() {
  const hrList = [
    {
      titre: "Coach sportif",
      description: `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      titre: "Psychologue",
      description: `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      titre: "Psychologue clinicienne.",
      description: `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      titre: "Orthophoniste.",
      description: `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
      titre: "Biologiste.",
      description: `orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
  ];
  return (
    <Fragment>
      <section className="headerContainer">
        <div className="headerDesc">
          <h1>
            Association des Sciences de Neurotechnologie Educative et
            Thérapeutique
          </h1>
          <p>
            Troubles du Spectre Autistique. Troubles de l'oralité. Dyslexie.
            Dysortographie. Retard du langage. Bégaiement. Parkinson. Alzheimer.
          </p>
          {/* <Button link='#' text='Soutenire notre action' /> */}
        </div>
        {/* <div className="articleHeaderImage">
          <img src="./assets/artcileHeaderIllus.svg" alt="" />
        </div> */}
      </section>
      <div className="whoAreWeContainer">
        <div className="whoAreWeTitle">
          <h3>Qui sommes-nous?</h3>
        </div>
        <div className="whoAreWeContent">
          <div className="whoAreWeContent1">
            <p>
              <img
                className="whoAreWeContentImg"
                src="./assets/Benmoussa.jpg"
                alt=""
              />
              L'ASNET est une association scientifique dont la fondatrice Lamia
              Benmoussa, Professeur à l'Université Alger 2, est membre expert de
              sociétés savantes internationales en orthophonie et Maître de
              recherches dans les neurosciences cognitives, de l'orthophonie et
              de la phoniatrie. L'ASNET est constituée de juriste, de graphiste,
              de nutritioniste, de praticiens et d'une équipe pluridisciplinaire
              de spécialistes qui œuvrent avec des techniques modernes,
              régulièrement mises à jour et un matériel scientifique de pointe à
              l'instar du tout premier logiciel thérapeutique en Algérie, le
              «THVOC 001».
            </p>
          </div>
        </div>
      </div>
      <div className="aboutCarouselContainer">
        <div className="aboutCarouselHeader">
          <h3>Découvrez notre équipe</h3>
          <h4>
            l'ASNET est dotée d'une équipe pluridisciplinaire qualifiée et
            passionnée pour rendre la vie meilleure.
          </h4>
        </div>
        <div className="carouselContainer">
          <Carousel hr={hrList} />
        </div>
      </div>
      <div className="missionContainer">
        <div className="missionHeader">
          <h3>Notre mission et nos objectifs</h3>
        </div>
        <div className="missionContentContainer">
          <div className="missionImage">
            <img src="./assets/flyer.jpg" alt="" />
          </div>
          <div className="missionContent">
            <h3>Notre mission</h3>
            <ul>
              <li>Aide à l'inclusion scolaire & sociale.</li>
              <li>Cours de soutien scolaire et classes de préscolaire.</li>
              <li>
                Diagnostic et prise en charge de troubles cognitifs, moteurs et
                du langage.
              </li>
              <li>
                Traitement à l'aide de programmes de technologie informative.
              </li>
              <li>Formation professionnelle.</li>
              <li>Sorties pédagogiques.</li>
              <li>Activités artistiques & culturelles.</li>
              <li>
                Porte d'entrée privilégiée pour la formation d'équipes
                spécialisées,l'ASNET œuvre à la création d'une pépinière de
                compétences et soutient la recherche de demain, à travers un
                apprentissage scientifique, à l'aide des dernières technologies
                éducatives & thérapeutiques
              </li>
            </ul>
            <h3>Nos objectifs</h3>
            <p>
              Assurer l'employabilité de nos éléments à besoins spécifiques
              après leur formation professionnelle en les intégrant dans les
              unités de productions de l'ASNET. Faciliter ainsi leur intégration
              au sein d'une équipe et développer leur niveau d'expertise par la
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
