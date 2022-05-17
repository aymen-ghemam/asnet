import './App.css';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import EventCard from './components/EventCard';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        <Navbar />
        <Landing />
        {/* <Slider  /> */}
        <div className='flex'>
          <EventCard />
          {/* <EventCard /> */}
        </div>
        <Footer />
      </div>
  );
}

export default App;
