import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
      <div>
        <Navbar />
        <ArticlePage />
        <Footer />
      </div>
  );
}

export default App;
