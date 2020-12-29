import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './redux/state';
// import Dialogs from "./components/Dialogs/Dialogs";

// const DialogsData = [
//   {id: 1, name: "Teddy"},
//   {id: 2, name: "Maria"},
//   {id: 3, name: "Ezra"},
//   {id: 4, name: "Evgenia"},
//   {id: 5, name: "Lars"}
// ];
//
// const MessagesData = [
//   {id: 1, text: "How do you feel?"},
//   {id: 2, text: "Let's talk about React!"},
//   {id: 3, text: "Yep! I love pizza."},
//   {id: 4, text: "It's amazing"},
//   {id: 5, text: "Functional programming is great!"}
// ];

ReactDOM.render(
  <React.StrictMode>
    {/*<App dialogsData={State.DialogsData} messagesData={State.MessagesData}/>*/}
    <App Data={State}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
