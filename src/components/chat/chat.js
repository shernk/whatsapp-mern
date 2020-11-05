import React, { useState } from "react";
import axios from "../../axios";
import "./chat.css";
import { Avatar } from "@material-ui/core";

export default function Chat({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "SherkName",
      timestamp: "Live",
      received: true,
    });

    setInput('');
  };

  return (
    <div className="chat">

      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${message.received && "chat__receiver"}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type messages"
            type="text"
          />
          <button onClick={sendMessage} type="submit" />
        </form>
      </div>

    </div>
  );
}
