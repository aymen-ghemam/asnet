import axios from "axios";
import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import "./SignUp.css";

const SignUp = (props) => {
  const [state, setState] = useState({error: false, msg: ''});
  const [photo, setPhoto] = useState('');

  const handleImageUpload = (url) => {
    console.log(url);
    setPhoto(url);
  } 

  const handleSubmit = (e) => {
    console.log('rani hna');
    e.preventDefault();
    const email = e.target[0].value;
    const nom = e.target[1].value;
    const prenom = e.target[2].value;
    const password = e.target[3].value;
    const numero = e.target[4].value;
    const sexe = e.target[5].value;
    const naissance = e.target[6].value;
    // const photo = e.target[7].value;

    if (email !== '' && password !== '' && nom !== '' && prenom !== '' && numero !== '' && photo !== '' ) {
      axios.post('/api/users', {
        nom, prenom, email, password, numero, sexe, naissance, photo
      })
      .then(res => {
          if (res.data.error === false) {
            window.location.reload();
            console.log(res.data.error);
          }
          else setState({...state, error: true, msg: res.data.msg})
      });
    }
    else setState({...state, error: true, msg: 'Please fill all the fields!'})
  };

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

        <form className="signUpInfoContainer" onSubmit = {handleSubmit}>
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
                <option value="1">Homme</option>
                <option value="0">femme</option>
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
              Photo :<span className="photoInputContain">+</span>
            </label>
            {/* <input
              type="file"
              name="photo"
              id="photoInput"
              className="hidden"
            
            /> */}
            <ImageUpload onUpload = {handleImageUpload} />
          </div>

          <p className='msg'>{state.error === true? state.msg: ''}</p>
          <div className="submitSignUpContainer">
            <button
              className="connectBtn"
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
        </form>
      </div>
    </div>
  );
};

export default SignUp;
