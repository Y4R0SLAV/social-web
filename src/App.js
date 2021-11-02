import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Provider, connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import store from "./redux/reduxStore";

// commons
import Preloader from './components/common/Preloader/Preloader';

// Core components
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/login';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <Preloader />

    return (
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
          <Route path="/login" render={() => < Login />} />
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SocialNetworkApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default SocialNetworkApp;
