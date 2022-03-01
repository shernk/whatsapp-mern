import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../utils/reducer";
import { useStateValue } from "../../utils/stateprovider";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/450/102/non_2x/vector-chat-icon.jpg"
          alt="chat-icon"
        />
        <div className="login_text">
          <h1>Sign in to chat</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
