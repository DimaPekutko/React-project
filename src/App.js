import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App-wrapper">
      <header className="Header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png"/>
      </header>
      <nav className="Sidebar-nav">
        <div>
          <a href="#f">Profile</a>
        </div>
        <div>
          <a href="#f">Messages</a>
        </div>
        <div>
          <a href="#f">News</a>
        </div>
        <div>
          <a href="#f">Music</a>
        </div>
        <div>
          <a href="#f">Settings</a>
        </div>
      </nav>
      <div className="Main-content">
        <div>
          <img className="Main-background-img" src="https://ak9.picdn.net/shutterstock/videos/18681329/thumb/1.jpg"/>
        </div>
        <div className="Main-desc">
          <div className="left-content">
            <img src="https://pngimage.net/wp-content/uploads/2018/05/duff-logo-png-3.png"/>
          </div>
          <div className="right-content">
            <h2>James Duff</h2>
            <p>Date of Birth: 21 February</p>
            <p>City: Springfield</p>
            <p>Education: School 97</p>
            <p>Web Site: <a href="https://reactjs.org/">https://reactjs.org/</a></p>
          </div>
        </div>
        <div className="Main-posts">
          <hr/>
          <div>
            <h2>My posts</h2>
          </div>
          <div className="Main-add-post">
            <form action="#">
              <input className="Main-add-post-message" type="text" name="post-text" placeholder="Your message..."/>
              <input className="Main-add-post-submit" type="submit" name="submit-post" value="Send" />
            </form>
          </div>
        </div>
        <div className="Main-posts-list">
          <div className="Main-posts-post">
            <img src="https://pngimage.net/wp-content/uploads/2018/05/duff-logo-png-3.png"/>
            <span>There some post about React.</span>
          </div>
        </div>
        <div className="Main-posts-list">
          <div className="Main-posts-post">
            <img src="https://pngimage.net/wp-content/uploads/2018/05/duff-logo-png-3.png"/>
            <span>This site made with React framework</span>
          </div>
        </div>
        <div className="Main-posts-list">
          <div className="Main-posts-post">
            <img src="https://pngimage.net/wp-content/uploads/2018/05/duff-logo-png-3.png"/>
            <span>Another post here.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
