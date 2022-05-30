import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";

const EventPage = () => {
  const [state, setState] = useState({events: []})

  useEffect(() => {
    getEvents();
  }, [])
  
  const getEvents = () => {
    axios.get('/api/evenements', {
    })
    .then(res => {
      if(res.data.error === false) {
        setState({...state, events: res.data.evenements});
      }
    })
  }
  // const search = ()=>{
  //   state.events.filter(event => event.titre.includes(e))
  // }

  const handleSearch = (e) => {
    if (e.target.value === '') getEvents();
    else setState({...state, events: state.events.filter(event => event.titre.includes(e.target.value))})
  }

  return (
    <section className="articles">
      <section className="headerContainer articleHeader">
        <div className="headerDesc articleHeaderDesc">
          <h1>Nos Evenements</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tempus mi mi, eu porttitor justo suscipit pretium. Integer non
            facilisis
          </p>
          {/* <Button link='#' text='Soutenire notre action' /> */}
        </div>
        <div className="articleHeaderImage">
          <img src="./assets/artcileHeaderIllus.svg" alt="" />
        </div>
      </section>
      <SearchBar handleSearch = {handleSearch} />
      <div className="flex list">
        {
          state.events.map(event => 
            <EventCard 
            key = {event.id_evenement}
            id={event.id_evenement}
            date = {event.date_evenement}
            title={event.titre}
            description={event.description} 
            image = {event.image}
            />  
          )
        }
      </div>
    </section>
  );
};

export default EventPage;
