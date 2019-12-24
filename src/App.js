import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import './App.css';

function App() {
  return (
  	<BrowserRouter>
    <div className="App-wrapper">
      <Header/>
      <Sidebar/>
      <div className="Content"> 
        <Route exact path="/" component={Profile}/>
      	<Route path="/profile" component={Profile}/>
      	<Route path="/dialogs" component={Dialogs}/>
      </div> 
    </div>
    </BrowserRouter>
  );
}
export default App;
