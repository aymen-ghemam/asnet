import axios from "axios";
import React, { useState } from "react";
import "./SignIn.css";

const SignIn = (props) => {
  const [state, setState] = useState({error: false, msg: ''})
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (email !== '' && password !== '') {
      axios.post('/api/login', {
        email: email,
        password: password
      })
      .then(res => {
          if (res.data.error === false) {
              props.login(res.data.token)
          }
          else setState({...state, error: true, msg: res.data.msg})
      });
    }
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

            />
          </div>
          <div>
            {/* <button
              className="switchSignBtn"
              onClick={() => {
                props.setSignInHidden((prev) => !prev);
                props.setSignUpHidden((prev) => !prev);
              }}
            >
              vous n'avez pas de compte ? S'inscrire
            </button> */}
            <a href='signup' className='switchSignBtn'>vous n'avez pas de compte ? S'inscrire</a>
          </div>
        </form>

        <p className='msg'>{state.error === true? state.msg: ''}</p>
      </div>
    </div>
  );
};

export default SignIn;
