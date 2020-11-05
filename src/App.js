import React, { useEffect, useState } from "react";
import { Chat, Sidebar } from "./components";
import Pusher from "pusher-js";
import axios from "./axios";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, []);

  useEffect(() => {
    var pusher = new Pusher("061b84e266327d24d8e1", {
      cluster: "ap1",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <>
      <div className="app">
        <div className="app__body">
          <Sidebar />
          <Chat messages={messages} />
        </div>
      </div>
    </>
  );
}

export default App;
