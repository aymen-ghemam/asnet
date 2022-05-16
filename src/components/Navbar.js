import React from 'react'
import { Menu, Icon } from 'antd'
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import './Navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar flex">
        <div className='flex logo-wrapper'>
            <img src="./assets/logo_asnet.jpg" alt="logo" className="logo" />
            ASNET
        </div>

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
            <li className="dropdown">
              <a href="#" aria-expanded="false">
                Agir avec nous
              </a>
              {/* <ul className="submenu">
                <li><a href="#">Devenir bénévole</a></li>
                <li><a href="#">Rejoindre en tant qu'expert</a></li>
              </ul> */}
            </li>

            <li>
              <a href="">Faire un don</a>
            </li>
            <li>
              <a href="">Nous contater</a>
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