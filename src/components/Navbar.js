import React from 'react'
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar flex">
    <a href = '/' className='flex logo-wrapper'>
            <img src="/assets/logo_asnet.jpg" alt="logo" className="logo" />
            ASNET
        </a>

        {/* <button id="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
        </button> */}

        <nav>
          <ul id="primary-navigation" className="navigation flex" data-visible="false">
            <li>
              <a href="#" >Découvrir ASNET</a>
            </li> 
            <li>
              <a href="#">Nos actualité</a>
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
            <li>
              <a href="">Se connecter</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar