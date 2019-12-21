import React from 'react';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import './App.css';

function App() {
  return (
    <div className="App-wrapper">
      <Header/>
      <Sidebar/> 
      <Profile/> 
    </div>
  );
}

export default App;
