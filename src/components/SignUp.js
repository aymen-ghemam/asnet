import React from "react";
import "./SignUp.css";

const SignUp = (props) => {
  return (
    <div
      className={
        "signUpContainer " + (props.signUpHidden ? " hidden " : " visible ")
      }
    >
      <div
        className="closePopUpArea"
        onClick={() => props.setSignUpHidden((prev) => !prev)}
      ></div>
      <div className="signUpPopUp">
        <div className="signUpImageContainer"></div>
        <div className="signUpInfoContainer">
          <div className="signUpInfoTitle">
            <h3>S'inscrire</h3>
          </div>
          <div className="signUpInputContainer">
            <label htmlFor="emailInput">Email :</label>
            <input
              type="text"
              name="email"
              id="emailInput"
              className="signUpInput"
            />
          </div>
          <div className="signUpInputContainer nomPrenomContainer">
            <div className="nomInputContainer">
              <label htmlFor="nomInput">Nom :</label>
              <input
                type="text"
                name="nom"
                id="nomInput"
                className="signUpInput"
              />
            </div>
            <div className="prenomInputContainer">
              <label htmlFor="prenomInput">Prénom :</label>
              <input
                type="text"
                name="prenom"
                id="prenomInput"
                className="signUpInput"
              />
            </div>
          </div>
          <div className="signUpInputContainer">
            <label htmlFor="passwordInput">Mot de passe :</label>
            <input
              type="password"
              name="password"
              id="passwordInput"
              className="signUpInput"
            />
          </div>
          <div className="signUpInputContainer">
            <label htmlFor="numInput">Numéro de téléphone :</label>
            <input
              type="number"
              name="num"
              id="numInput"
              className="signUpInput"
            />
          </div>
          <div className="signUpInputContainer nomPrenomContainer">
            <div className="prenomInputContainer">
              <label htmlFor="sexeInput">sexe :</label>

              <select id="sexeInput">
                <option value="homme">Homme</option>
                <option value="femme">femme</option>
              </select>
            </div>
            <div className="prenomInputContainer">
              <label htmlFor="dateNaissanceInput">date de naissance :</label>
              <input
                type="date"
                name="dateNaissance"
                id="dateNaissanceInput"
                className="signUpInput"
              />
            </div>
          </div>
          <div className="signUpInputContainer">
            <label htmlFor="photoInput">
              Photo :<span className="photoInputContain"></span>
            </label>
            <input
              type="file"
              name="photo"
              id="photoInput"
              className="hidden"
            />
          </div>
          <div className="submitSignUpContainer">
            <button
              className="connectBtn"
              onClick={() => props.setSignUpHidden((prev) => !prev)}
            >
              Connecter
            </button>
            <div>
              <button
                className="switchSignBtn"
                onClick={() => {
                  props.setSignInHidden((prev) => !prev);
                  props.setSignUpHidden((prev) => !prev);
                }}
              >
                vous n'avez pas de compte ? S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
