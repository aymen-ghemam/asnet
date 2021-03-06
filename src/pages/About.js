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
            Th??rapeutique
          </h1>
          <p>
            Troubles du Spectre Autistique. Troubles de l'oralit??. Dyslexie.
            Dysortographie. Retard du langage. B??gaiement. Parkinson. Alzheimer.
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
              Benmoussa, Professeur ?? l'Universit?? Alger 2, est membre expert de
              soci??t??s savantes internationales en orthophonie et Ma??tre de
              recherches dans les neurosciences cognitives, de l'orthophonie et
              de la phoniatrie. L'ASNET est constitu??e de juriste, de graphiste,
              de nutritioniste, de praticiens et d'une ??quipe pluridisciplinaire
              de sp??cialistes qui ??uvrent avec des techniques modernes,
              r??guli??rement mises ?? jour et un mat??riel scientifique de pointe ??
              l'instar du tout premier logiciel th??rapeutique en Alg??rie, le
              ??THVOC 001??.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutCarouselContainer">
        <div className="aboutCarouselHeader">
          <h3>D??couvrez notre ??quipe</h3>
          <h4>
            l'ASNET est dot??e d'une ??quipe pluridisciplinaire qualifi??e et
            passionn??e pour rendre la vie meilleure.
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
              <li>Aide ?? l'inclusion scolaire & sociale.</li>
              <li>Cours de soutien scolaire et classes de pr??scolaire.</li>
              <li>
                Diagnostic et prise en charge de troubles cognitifs, moteurs et
                du langage.
              </li>
              <li>
                Traitement ?? l'aide de programmes de technologie informative.
              </li>
              <li>Formation professionnelle.</li>
              <li>Sorties p??dagogiques.</li>
              <li>Activit??s artistiques & culturelles.</li>
              <li>
                Porte d'entr??e privil??gi??e pour la formation d'??quipes
                sp??cialis??es,l'ASNET ??uvre ?? la cr??ation d'une p??pini??re de
                comp??tences et soutient la recherche de demain, ?? travers un
                apprentissage scientifique, ?? l'aide des derni??res technologies
                ??ducatives & th??rapeutiques
              </li>
            </ul>
            <h3>Nos objectifs</h3>
            <p>
              Assurer l'employabilit?? de nos ??l??ments ?? besoins sp??cifiques
              apr??s leur formation professionnelle en les int??grant dans les
              unit??s de productions de l'ASNET. Faciliter ainsi leur int??gration
              au sein d'une ??quipe et d??velopper leur niveau d'expertise par la
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
