import './App.css';
import Slider from './components/Slider';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import EventCard from './components/EventCard';

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
      </div>
  );
}

export default App;
