import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// navs chapters
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  // props = [posts dialogsData messagesData]
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div class="app-wrapper-content">
          <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.messagePage.dialogs} messages={props.state.messagePage.messages} />} />
          <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts} />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
