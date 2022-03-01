import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Chat, Sidebar } from "./components";
import Pusher from "pusher-js";
import axios from "./axios";
import "./App.css";
import Login from "./components/login/login";
import { useStateValue } from "./utils/stateprovider";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

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
        {!user ? (
          <div>
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
              </Routes>
            </Router>
          </div>
        ) : (
          <div className="app__body">
            <Router>
              <Sidebar />
              <Routes>
                <Route
                  path="/rooms/:roomId"
                  element={<Chat messages={messages} />}
                />
                <Route path="/" element={<Chat messages={messages} />} />
              </Routes>
            </Router>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
