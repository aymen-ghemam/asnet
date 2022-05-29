import React from "react";
import { useState } from "react";
import ChatRoomsList from "../components/ChatRoomsList";
import ChatWindow from "../components/ChatWindow";

const Salon = () => {
  return (
    <div className="salonContainer">
      <ChatRoomsList />
      <ChatWindow />
    </div>
  );
};

export default Salon;
