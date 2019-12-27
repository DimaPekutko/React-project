import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import './App.css';

function App(props) {
  return (
  	<BrowserRouter>
    <div className="App-wrapper">
      <Header/>
      <Sidebar/>
      <div className="Content"> 
        <Route exact path="/" render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/> }/>
        <Route path="/profile" render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/> }/>
        <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
      </div> 
    </div>
    </BrowserRouter>
  );
}
export default App;
