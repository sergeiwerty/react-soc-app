import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPostFunc } from "./redux/state"
import reportWebVitals from "./reportWebVitals";

export let rerenderEntireTree = (props) => {
  ReactDOM.render(
    <React.StrictMode>
      <App Data={props} addPostFunc={addPostFunc} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
}
