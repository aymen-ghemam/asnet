import React, { useEffect, useRef, useState } from "react";
import "./ChatWindow.css";
import MessageBubble from "./MessageBubble";
import io from 'socket.io-client'
import axios from "axios";

const id = parseInt(localStorage.getItem('id_user'));

function ChatWindow(props) {
  const socket = io.connect('http://localhost:5000', {
    query: {
      token: localStorage.getItem('ASNET_ACCESS_TOKEN'),
      roomID: `${props.currentRoom.id_specialiste}-${props.currentRoom.id_user}`
    }
  });

  const [state, setState] = useState({message: ''});

  const [messages, _setmessages] = useState([]);
  const messagesRef = useRef(messages);

  const setmessages = (data) => {
    messagesRef.current = data;
    _setmessages(data);
  }


  var array = []
  useEffect(() => {
    if(props.active === true){
      axios.get('api/messages', {
        headers: {
          'authorization': `Bearer ${localStorage.getItem('ASNET_ACCESS_TOKEN')}`
        },
        params: {
          id_user: props.currentRoom.id_user,
          id_specialiste: props.currentRoom.id_specialiste
        }
      })
      .then(res => {
        if(res.data.error === false) {
          // console.log(res.data.messages);
          setmessages([...messages, ...res.data.messages]);
        }
      });

      socket.emit('join', {

      })
    }
  
  }, [props.currentRoom])

  useEffect(() => {
    const listener = (message) => {
      // console.log(messagesRef.current);
      setmessages([...messagesRef.current, message]);
    };

    socket.on('receive_message', listener);

    return () => socket.off('receive_message', listener);
  }, [socket])

  const send = (e) => {
    if(state.message !== ''){
      socket.emit('send_message', {
        text: state.message,
        emeteur: id,
        recepteur: id===props.currentRoom.id_user? props.currentRoomid_specialiste: props.currentRoom.id_user
      });

      setmessages([...messages, {
        text: state.message,
        emeteur: id,
        recepteur: id===props.currentRoom.id_user? props.currentRoomid_specialiste: props.currentRoom.id_user
      }])
    }
  }

  const handleChange = (e) => {
    setState({...state, message: e.target.value})
  }

  // const messages = [
    // {
    //   message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
    //     eius, a quidem laudantium fuga repellat at voluptate aliquam
    //     provident aliquid vel iusto recusandae. Quas quos non sit
    //     voluptatum. Magnam, ut.`,
    //   emeteur: 1,
    //   recepteur: 2,
    // },
    // {
    //   message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
    //     eius, a quidem laudantium fuga repellat at voluptate aliquam
    //     provident aliquid vel iusto recusandae. Quas quos non sit
    //     voluptatum. Magnam, ut.`,
    //   emeteur: 1,
    //   recepteur: 2,
    // },
    // {
    //   message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
    //     eius, a quidem laudantium fuga repellat at voluptate aliquam
    //     provident aliquid vel iusto recusandae. Quas quos non sit
    //     voluptatum. Magnam, ut.`,
    //   emeteur: 2,
    //   recepteur: 1,
    // },
    // {
    //   message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
    //     eius, a quidem laudantium fuga repellat at voluptate aliquam
    //     provident aliquid vel iusto recusandae. Quas quos non sit
    //     voluptatum. Magnam, ut.`,
    //   emeteur: 1,
    //   recepteur: 2,
    // },
    // {
    //   message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
    //     eius, a quidem laudantium fuga repellat at voluptate aliquam
    //     provident aliquid vel iusto recusandae. Quas quos non sit
    //     voluptatum. Magnam, ut.`,
    //   emeteur: 1,
    //   recepteur: 2,
    // },
    // {
    //   message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
    //     eius, a quidem laudantium fuga repellat at voluptate aliquam
    //     provident aliquid vel iusto recusandae. Quas quos non sit
    //     voluptatum. Magnam, ut.`,
    //   emeteur: 2,
    //   recepteur: 1,
    // },
  // ];
  return props.active === true ? (
    <div className="chatWindowContainer">
      <div className="chatContentContainer">
        {messages.map((element, index) => (
          <MessageBubble
            key={index}
            message={element.text}
            sent={element.emeteur === id ? "sent" : ""}
          />
        ))}
      </div>
      <div className="chatInputContainer">
        <div className="chatInput">
          <textarea
            onChange = {handleChange}
            type="text"
            placeholder="Message... (max-size 1000)"
            maxLength={1000}
          />
        </div>
        <div className="sendChatBtn">
          <button onClick={send}>Envoyer</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="noChatWindowContainer"></div>
  );
}

export default ChatWindow;
