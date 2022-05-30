import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ChatRoomsList from "../components/ChatRoomsList";
import ChatWindow from "../components/ChatWindow";

const Salon = () => {
  const [currentRoom, setcurrentRoom] = useState(1);
  const [searchInput, setsearchInput] = useState("");
  const [chatList, setchatList] = useState([]);

  useEffect(() => {
    axios.get('api/conversations', {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('ASNET_ACCESS_TOKEN')}`
      }
    })
    .then(res => {
      if(res.data.error === false) {
        setchatList(res.data.conversations);
      }
    })
  
  }, [])
  
  // const chatList = [
  //   {
  //     id: 1,
  //     name: "Hamaidi Youcef Islam",
  //     lastMessage: `Lorem ipsum dolor, `,
  //     image: null,
  //   },
  //   {
  //     id: 2,
  //     name: "Ghamem Hammed Aymen",
  //     lastMessage: `Lorem ipsum dolor, `,
  //     image: null,
  //   },
  //   {
  //     id: 3,
  //     name: "Hamaidi Youcef Islam",
  //     lastMessage: `Lorem ipsum dolor, `,
  //     image: null,
  //   },
  //   {
  //     id: 4,
  //     name: "Ghamem Hammed Aymen",
  //     lastMessage: `Lorem ipsum dolor, `,
  //     image: null,
  //   },
  //   {
  //     id: 5,
  //     name: "Hamaidi Youcef Islam",
  //     lastMessage: `Lorem ipsum dolor, `,
  //     image: null,
  //   },
  //   {
  //     id: 6,
  //     name: "Hamaidi Youcef Islam",
  //     lastMessage: `Lorem ipsum dolor, `,
  //     image: null,
  //   },
  //   {
  //     id: 7,
  //     name: "Hamaidi Youcef Islam",
  //     lastMessage: `Lorem ipsum dolor, `,
  //     image: null,
  //   },
  // ];
  return (
    <div className="salonContainer">
      {/* <div className="chatRoomsTitle">
        <h3>Salon chat</h3>
      </div> */}
      <div className="saloContentContainer">
        <ChatRoomsList
          setsearchInput={setsearchInput}
          chatList={
            searchInput
              ? chatList.filter(
                  (element) =>
                    element.name
                      .toLowerCase()
                      .indexOf(searchInput.toLowerCase()) > -1
                )
              : chatList
          }
          currentRoom={currentRoom}
          setcurrentRoom={setcurrentRoom}
        />
        {/* <ChatWindow currentRoom={currentRoom} /> */}
      </div>
    </div>
  );
};

export default Salon;
