import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import UserProfile from './components/UserProfile/UserProfile';
// import State from "./redux/state";
// import Post from "./components/UserProfile/MyPosts/Post/Post";
// import Dialog from "./components/Dialogs/Dialog";

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

// const DialogsDataMap = DialogsData.map( dialog => <DialogItem id={dialog.id } name={dialog.name} />);

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Aside FriendsData={props.Data} />
        <div className="dialogs-wrapper">
          <Route exact path="/userprofile" render={()=> <UserProfile PostsData={props.Data} />} />
          <Route exact path="/dialogs" render={()=> <Dialogs MessagesData={props.Data} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
