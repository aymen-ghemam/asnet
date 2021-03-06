import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer flex">
      <div className="socials">
        <a className="facebook" href="#">
          <AiFillFacebook color="#fff" size={"2rem"} />
        </a>
        <a className="instagram" href="#">
          <AiFillInstagram color="#fff" size={"2rem"} />
        </a>
        <a className="twitter" href="#">
          <AiFillTwitterCircle color="#fff" size={"2rem"} />
        </a>
      </div>
      <p className="copyright">
        © 2022. ASNET - Association des Sciences de Neurotechnologie Educative
        et Thérapeutique
      </p>
    </footer>
  );
};

export default Footer;
