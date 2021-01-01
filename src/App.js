import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import { Dialogs } from './components/Dialogs/Dialogs';
import UserProfile from './components/UserProfile/UserProfile';
import {addPost} from "./redux/state";
// import State from "./redux/state";
// import Post from "./components/UserProfile/MyPosts/Post/Post";
// import Dialog from "./components/Dialogs/Dialog";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Aside FriendsData={props.Data} />
        <div className="dialogs-wrapper">
          <Route exact path="/userprofile" render={()=> <UserProfile PostsData={props.Data}
                                                                     AddPostFunc={props.addPostFunc}/>} />
          <Route exact path="/dialogs" render={()=> <Dialogs MessagesData={props.Data} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
