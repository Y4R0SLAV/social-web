import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
// navs chapters
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';


import store from "./redux/reduxStore";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />

    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />

              <Route path="/users" render={() => <UsersContainer />} />

              <Route path="/settings" render={() => <Settings />} />

              <Route path="/login" render={() => <Login />} />
            </div>
          </div>
        </Provider>
      </BrowserRouter>)
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, { initializeApp })(App);
