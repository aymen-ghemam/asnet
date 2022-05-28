import "./App.css";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import Salon from "./pages/Salon";
import ArticlePage from "./pages/ArticlePage";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setstate] = useState({
    isLoggedin: false, 
    loading: true,
    user: null,
    token: localStorage.getItem('ASNET_ACCESS_TOKEN')
  });
  useEffect(() => {
    if(state.token){
      getUser();
    }
    else setstate({loading: false})
  }, [])

  const getUser = () => {
    axios.get('/api/user', {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('ASNET_ACCESS_TOKEN')}`
      }
    })
    .then(res => {
      if(res.data.error === false) {
        localStorage.setItem('id_user', res.data.user.id_user);
        setstate({loading: false, isLoggedin: true, user: res.data.user})
      }
      else setstate({...state, loading: false}) 
    })
  }
  const login = (token) => {
    localStorage.setItem('ASNET_ACCESS_TOKEN',token);
    // setstate({...state, token})
    window.location.reload();
  }

  const [signInHidden, setSignInHidden] = useState(true);
  const [signUpHidden, setSignUpHidden] = useState(true);

  return (
    state.loading === true ? 'loading...':
    <div id="pageContainer">
      <Navbar setSignInHidden={setSignInHidden} isLoggedin = {state.isLoggedin} />
      <SignIn
        login = {login}
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
          <Route exact path="/salon" element={<Salon />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
