import React from "react";
import "./ChatRoomsList.css";
import Room from "./Room";
import { useState } from "react";
import ChatWindow from "./ChatWindow";

function ChatRoomsList(props) {
  const [insideRoom, setinsideRoom] = useState(false);
  const [chatName, setchatName] = useState("Salon chat");

  return (
    <div className="chatRoomsContainer">
      <div className="noRoomContainer">
        <div className="searchBarContainer">
          <div className="searchChatContainer">
            <input
              type="text"
              placeholder="Search"
              className="searchRoomInput"
              onChange={(e) => {
                props.setsearchInput(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="roomsListContainer">
          {props.chatList.map((element, index) => (
            <Room
              current={props.currentRoom.id === element.id ? true : false}
              info={element}
              onClick={() => {props.setcurrentRoom(element); props.setActive(true)}}
              key={element.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatRoomsList;
