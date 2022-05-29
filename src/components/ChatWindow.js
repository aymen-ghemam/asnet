import React from "react";
import "./ChatWindow.css";
import MessageBubble from "./MessageBubble";

function ChatWindow() {
  const messages = [
    {
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        eius, a quidem laudantium fuga repellat at voluptate aliquam
        provident aliquid vel iusto recusandae. Quas quos non sit
        voluptatum. Magnam, ut.`,
      emeteur: 1,
      recepteur: 2,
    },
    {
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        eius, a quidem laudantium fuga repellat at voluptate aliquam
        provident aliquid vel iusto recusandae. Quas quos non sit
        voluptatum. Magnam, ut.`,
      emeteur: 1,
      recepteur: 2,
    },
    {
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        eius, a quidem laudantium fuga repellat at voluptate aliquam
        provident aliquid vel iusto recusandae. Quas quos non sit
        voluptatum. Magnam, ut.`,
      emeteur: 2,
      recepteur: 1,
    },
    {
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        eius, a quidem laudantium fuga repellat at voluptate aliquam
        provident aliquid vel iusto recusandae. Quas quos non sit
        voluptatum. Magnam, ut.`,
      emeteur: 1,
      recepteur: 2,
    },
    {
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        eius, a quidem laudantium fuga repellat at voluptate aliquam
        provident aliquid vel iusto recusandae. Quas quos non sit
        voluptatum. Magnam, ut.`,
      emeteur: 1,
      recepteur: 2,
    },
    {
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        eius, a quidem laudantium fuga repellat at voluptate aliquam
        provident aliquid vel iusto recusandae. Quas quos non sit
        voluptatum. Magnam, ut.`,
      emeteur: 2,
      recepteur: 1,
    },
  ];
  return (
    <div className="chatWindowContainer">
      <div className="chatContentContainer">
        {messages.map((element) => (
          <MessageBubble
            message={element.message}
            sent={element.emeteur === 1 ? "sent" : ""}
          />
        ))}
      </div>
      <div className="chatInputContainer">
        <div className="chatInput">
          <textarea
            type="text"
            placeholder="Message... (max-size 1000)"
            maxLength={1000}
          />
        </div>
        <div className="sendChatBtn">
          <button>Envoyer</button>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
