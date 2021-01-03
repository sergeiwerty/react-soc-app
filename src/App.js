import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import { Dialogs } from './components/Dialogs/Dialogs';
import UserProfile from './components/UserProfile/UserProfile';
import {addPost} from "./redux/state";

function App(props) {
  // debugger
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Aside Friends={props.State.Friends} />
        <div className="dialogs-wrapper">
          {/*<Route exact path="/userprofile" render={()=> <UserProfile PostsData={props.Data}*/}
          <Route exact path="/userprofile" render={()=> <UserProfile PostsData={props.State.Data}
                                                                     AddPostFunc={props.addPostFunc}
                                                                     AddSymbFunc={props.addSymbFunc}/>}/>
          <Route exact path="/dialogs" render={()=> <Dialogs MessagesData={props.Data} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
