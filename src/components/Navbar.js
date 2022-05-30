import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const logout = () => {
    localStorage.removeItem('ASNET_ACCESS_TOKEN');
    localStorage.removeItem('id_user');
    window.location.reload();
  }
  return (
    <div className="navbar flex">
      <a href="/" className="flex logo-wrapper">
        <img src="/assets/logo_asnet.jpg" alt="logo" className="logo" />
        ASNET
      </a>

      {/* <button id="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
        </button> */}

      <nav>
        <ul
          id="primary-navigation"
          className="navigation flex"
          data-visible="false"
        >
          <li>
            <a href="#">Découvrir ASNET</a>
          </li>
          <li>
            <a href="/evenements">Nos actualité</a>
          </li>
          <li>
            <a href="/articles">Articles</a>
          </li>
          <li>
            <a href="#" aria-expanded="false">
              Devenir bénévole
            </a>
          </li>
          <li>
            <a href="">Faire un don</a>
          </li>
          {props.isLoggedIn && <li><a href="/salon">Salon chat</a></li>}
          {!props.isLoggedIn && 
          <li className="signInBtnContainer">
              <button
                className="signInBtn"
                onClick={() => props.setSignInHidden((prev) => !prev)}
              >
                Se connecter
              </button>
          </li>}
          {props.isLoggedIn && <li onClick = {logout}><a href="#">Logout</a></li>}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
