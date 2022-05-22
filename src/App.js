import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import ArticlePage from './pages/ArticlePage';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Article from './pages/Article';

function App() {
  return (
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />}>
            </Route>
            <Route exact path="/articles" element={<ArticlePage />}>
            </Route>
            <Route exact path='/articles/1' element={<Article/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;
