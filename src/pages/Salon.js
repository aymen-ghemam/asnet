import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ChatRoomsList from "../components/ChatRoomsList";
import ChatWindow from "../components/ChatWindow";

const Salon = () => {
  const [currentRoom, setcurrentRoom] = useState({});
  const [searchInput, setsearchInput] = useState("");
  const [chatList, setchatList] = useState([]);
  const [active, setActive] = useState(false);

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
          setActive={setActive}
        />
        {active===true && <ChatWindow active={active} currentRoom={currentRoom} />}
        
      </div>
    </div>
  );
};

export default Salon;
