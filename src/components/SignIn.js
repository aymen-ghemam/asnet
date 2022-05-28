import React from "react";
import "./SignIn.css";

const SignIn = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value); // get the email value
  };
  return (
    <div
      className={
        "signInContainer " + (props.signInHidden ? " hidden " : " visible ")
      }
    >
      <div
        className="closePopUpArea"
        onClick={() => props.setSignInHidden((prev) => !prev)}
      ></div>
      <div className="signInPopUp">
        <div className="signInImageContainer"></div>
        <form className="signInInfoContainer" onSubmit={handleSubmit}>
          <div className="signInInfoTitle">
            <h3>Connexion</h3>
          </div>
          <div className="inputContainer">
            <label htmlFor="emailInput">Email :</label>
            <input
              type="text"
              name="email"
              id="emailInput"
              className="signInInput"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="passwordInput">Mot de passe :</label>
            <input
              type="password"
              name="password"
              id="passwordInput"
              className="signInInput"
            />
          </div>
          <div className="additionalInfoContainer">
            {/* <div className="rememberMe"> */}
            <label className="rememberMeContainer">
              Mémoriser info
              <input type="checkbox" name="remember" value={true} />
              <span className="checkmark"></span>
            </label>
            {/* </div> */}
            {/* <div className="forgotPsw"> */}
            <a className="switchSignBtn" href="#">
              Mot de passe oublié?
            </a>
            {/* </div> */}
          </div>
          <div className="connectBtnContainer">
            <input
              type="submit"
              value="Connecter"
              className="connectBtn"
              onClick={() => props.setSignInHidden((prev) => !prev)}
            />
          </div>
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
        </form>
      </div>
    </div>
  );
};

export default SignIn;
