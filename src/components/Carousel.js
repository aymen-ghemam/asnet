import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Button from "./Button";
import "./Carousel.css";

const Carousel = (props) => {
  const [state, setState] = useState({
    list: [],
    // visible: state.list[0],
    index: 0,
  });

  useEffect(() => {
    if (props.hr) {
      setState({ ...state, list: props.hr });
    } else {
      axios.get("/api/actualites", {}).then((res) => {
        if (res.data.error === false) {
          // console.log(res.data.evenements);

          setState({ ...state, list: res.data.evenements });
        }
      });
    }
  }, []);

  // const [fade, setFade] = useState(false);
  // console.log(state.list);
  const prev = () => {
    let index = state.index === 0 ? state.list.length - 1 : state.index - 1;
    setState({ ...state, visible: state.list[index], index });
  };
  const next = () => {
    let index = state.index === state.list.length - 1 ? 0 : state.index + 1;
    setState({ ...state, visible: state.list[index], index });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [state]);

  return (
    <div className="carousel-container">
      <AiOutlineLeft className="controler" onClick={prev} />
      <div className="EventContainer">
        {state.list.map((event, index) => (
          <div
            className={`carousel ${
              state.index === index ? "fade-in" : "fade-out "
            }`}
            key={index}
          >
            <div className="carouselImage">
              <div className="img">
                <img src={event.image} alt="image" />
              </div>
            </div>
            <div className="carouselDesc">
              <h3>{event.titre}</h3>
              <p>
                {event.description.length > 200
                  ? event.description.slice(0, 300) + "..."
                  : event.description}
              </p>
              {!props.hr ? (
                <div>
                  <a
                    className="button"
                    href={`/evenements/${event.id_evenement}`}
                  >
                    Lire la suite.
                  </a>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
        {/* <div
          className={`carousel ${state.index === 0 ? "fade-in" : "fade-out "}`}
        >
          <div className="carouselImage">
            <div className="img">
              <img src={state.visible.img} alt="image" />
            </div>
          </div>
          <div className="carouselDesc">
            <h3>{state.visible.title}</h3>
            <p>
              {state.visible.description.length > 200
                ? state.visible.description.slice(0, 300) + "..."
                : state.visible.description}
            </p>
            <div>
              <Button link={state.visible.link} text="Lire la suite." />
            </div>
          </div>
        </div>
        <div
          className={`carousel ${state.index === 1 ? "fade-in" : "fade-out "}`}
        >
          <div className="carouselImage">
            <div className="img">
              <img src={state.visible.image} alt="image" />
            </div>
          </div>
          <div className="carouselDesc">
            <h3>{state.visible.title}</h3>
            <p>
              {state.visible.description.length > 200
                ? state.visible.description.slice(0, 100) + "..."
                : state.visible.description}
            </p>
            <div>
              <Button link={state.visible.link} text="Lire la suite." />
            </div>
          </div>
        </div>
        <div
          className={`carousel ${state.index === 2 ? "fade-in" : "fade-out "}`}
        >
          <div className="carouselImage">
            <div className="img">
              <img src={state.visible.image} alt="image" />
            </div>
          </div>
          <div className="carouselDesc">
            <h3>{state.visible.title}</h3>
            <p>{state.visible.description}</p>
            <div>
              <Button link={state.visible.link} text="Lire la suite." />
            </div>
          </div>
        </div>
        <div
          className={`carousel ${state.index === 3 ? "fade-in" : "fade-out "}`}
        >
          <div className="carouselImage">
            <div className="img">
              <img src={state.visible.image} alt="image" />
            </div>
          </div>
          <div className="carouselDesc">
            <h3>{state.visible.title}</h3>
            <p>{state.visible.description}</p>
            <div>
              <Button link={state.visible.link} text="Lire la suite." />
            </div>
          </div>
        </div>
        <div
          className={`carousel ${state.index === 4 ? "fade-in" : "fade-out"}`}
        >
          <div className="carouselImage">
            <div className="img">
              <img src={state.visible.image} alt="image" />
            </div>
          </div>
          <div className="carouselDesc">
            <h3>{state.visible.title}</h3>
            <p>{state.visible.description}</p>
            <div>
              <Button link={state.visible.link} text="Lire la suite." />
            </div>
          </div>
        </div> */}
      </div>
      <AiOutlineRight className="controler" onClick={next} />
    </div>
  );
};

export default Carousel;
