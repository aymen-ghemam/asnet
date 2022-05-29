import React from "react";

function Room(props) {
  return (
    <div className="roomContainer" onClick={props.onClick}>
      <div className="roomImage"></div>
      <div className="roomContent">
        <div className="roomTitle">{props.info.name}</div>
        <div className="roomMessage">{props.info.lastMessage}</div>
      </div>
    </div>
  );
}

export default Room;
