import "react-chat-elements/dist/main.css";
import {
  MessageBox,
  ChatItem,
  MessageList,
  Navbar,
  ChatList,
  Input,
  Button,
} from "react-chat-elements";
// import { BiArrowBack} from "react-icons/bi"
// import { io } from "socket.io-client";
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Return from "../components/Return";

const Chats = () => {
  return (
    <div className="chats">
      {/* <Return url="/" name="Messagerie" /> */}
      <div className="container">
        <ChatList
          className="chat-list"
          dataSource={[
            {
              avatar: "../assets/man.jpg",
              alt: "Reactjs",
              title: "Toufik ALI BEY",
              subtitle: "Bonjour ...",
              date: new Date("2021-07-08 17:00:00"),
              unread: 0,
            },
          ]}
        />
        {/* <ChatList
          className="chat-list"
          dataSource={[
            {
              avatar: "../assets/woman.jpg",
              alt: "Reactjs",
              title: "Melissa",
              subtitle: "Bonjour Dr ...",
              date: new Date("2021-07-08 10:00:00"),
              unread: 0,
            },
          ]}
        /> */}
      </div>
    </div>
  );
};

export default Chats;
