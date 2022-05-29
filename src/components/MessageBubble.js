import React from "react";

function MessageBubble(props) {
  return (
    <div className={"messageContainer " + props.sent}>
      <div className="message">{props.message}</div>
    </div>
  );
}

export default MessageBubble;
