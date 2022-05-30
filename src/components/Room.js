import React from "react";

function Room(props) {
  return (
    <div
      className={`roomContainer ${props.current ? "activeChat" : ""}`}
      onClick={props.onClick}
    >
      <div className="roomImage">
        <img src={`${props.info.photo || './assets/Ramadan-2022.webp'}`} alt="" />
      </div>
      <div className="roomContent">
        <div className="roomTitle">{props.info.name}</div>
        <div className="roomMessage">{props.info.message}</div>
      </div>
    </div>
  );
}

export default Room;
