import React from "react";
import "./ChatRoomsList.css";
import Room from "./Room";
import { useState } from "react";
import ChatWindow from "./ChatWindow";

function ChatRoomsList({ props }) {
  const [insideRoom, setinsideRoom] = useState(false);
  const [chatName, setchatName] = useState("Salon chat");
  const chatList = [
    {
      name: "Hamaidi Youcef Islam",
      lastMessage: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut neque
        quia quos officiis similique doloremque aliquid aliquam fuga maiores
        minima. Error sapiente tenetur praesentium amet impedit nostrum ex
        laborum repellat.`,
      image: null,
    },
    {
      name: "Ghamem Hammed Aymen",
      lastMessage: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut neque
        quia quos officiis similique doloremque aliquid aliquam fuga maiores
        minima. Error sapiente tenetur praesentium amet impedit nostrum ex
        laborum repellat.`,
      image: null,
    },
    {
      name: "Hamaidi Youcef Islam",
      lastMessage: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut neque
        quia quos officiis similique doloremque aliquid aliquam fuga maiores
        minima. Error sapiente tenetur praesentium amet impedit nostrum ex
        laborum repellat.`,
      image: null,
    },
    {
      name: "Ghamem Hammed Aymen",
      lastMessage: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut neque
        quia quos officiis similique doloremque aliquid aliquam fuga maiores
        minima. Error sapiente tenetur praesentium amet impedit nostrum ex
        laborum repellat.`,
      image: null,
    },
    {
      name: "Hamaidi Youcef Islam",
      lastMessage: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut neque
        quia quos officiis similique doloremque aliquid aliquam fuga maiores
        minima. Error sapiente tenetur praesentium amet impedit nostrum ex
        laborum repellat.`,
      image: null,
    },
  ];

  return (
    <div className="chatRoomsContainer">
      <div className="chatRoomsTitle">
        {insideRoom ? (
          <button
            className="returnBtn"
            onClick={() => {
              setchatName("Salon chat");
              setinsideRoom((prev) => !prev);
            }}
          >
            return
          </button>
        ) : null}
        <h3>{chatName}</h3>
      </div>
      {insideRoom ? (
        <ChatWindow />
      ) : (
        <div className="noRoomContainer">
          <div className="searchBarContainer">
            <div className="searchChatContainer">
              <input
                type="text"
                placeholder="Search"
                className="searchRoomInput"
              />
            </div>
            <div className="sendNewMessageContainer">
              <button className="newMessageBtn">New</button>
            </div>
          </div>
          <div className="roomsListContainer">
            {chatList.map((element) => (
              <Room
                info={element}
                onClick={() => {
                  setinsideRoom((prev) => !prev);
                  setchatName(element.name);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatRoomsList;
