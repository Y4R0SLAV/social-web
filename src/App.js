import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Provider, connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import store from "./redux/reduxStore";

// commons
import Preloader from './components/common/Preloader/Preloader';

// Core components
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';

// popular componetns
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const Login = React.lazy(() => import('./components/Login/login'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Redirect exact from="/" to="/profile" />

              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/users" render={() => <UsersContainer title="Пользователи" />} />
              <Route path="/settings" render={() => <Settings />} />
              <Route path="/login" render={() => < Login />} />
              <Route path="*" render={() => <div> 404 NOT FOUND </div>} />
            </Switch>
          </Suspense>
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
