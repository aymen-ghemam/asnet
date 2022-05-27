import "./App.css";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import ArticlePage from "./pages/ArticlePage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import { useState } from "react";

function App() {
  const [signInHidden, setSignInHidden] = useState(true);
  const [signUpHidden, setSignUpHidden] = useState(true);

  return (
    <div id="pageContainer">
      <Navbar setSignInHidden={setSignInHidden} />
      <SignIn
        signInHidden={signInHidden}
        setSignInHidden={setSignInHidden}
        setSignUpHidden={setSignUpHidden}
      />
      <SignUp
        signUpHidden={signUpHidden}
        setSignUpHidden={setSignUpHidden}
        setSignInHidden={setSignInHidden}
      />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/articles" element={<ArticlePage />}></Route>
          <Route exact path="/articles/1" element={<Article />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
