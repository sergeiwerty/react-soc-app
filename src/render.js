import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPostFunc, addSymbFunc } from "./redux/state"
import reportWebVitals from "./reportWebVitals";

export let rerenderEntireTree = (props) => {
  // debugger
  ReactDOM.render(
    <React.StrictMode>
      <App State={props} addPostFunc={addPostFunc} addSymbFunc={addSymbFunc} />
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
}
