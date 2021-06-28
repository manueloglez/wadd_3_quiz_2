import React, {useEffect, useState} from 'react'
import { User, Session, Auction } from "./requests";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomePage from './components/WelcomePage'
import AuctionsIndexPage from './components/AuctionIndexPage';
import Navbar from './components/Navbar';
import SignInPage from './components/SignInPage';
import AuctionNewPage from './components/AuctionNewPage';
import AuthRoute from './components/AuthRoute';

import './App.css';
import AuctionShowPage from './components/AuctionShowPage';

const App = () => {
  const [state, setState] = useState({ user: null })

  const getCurrentUser = () => {
    return User.current().then(user => {
      if (user?.id) { 
        setState(state => {
          return { user }
        })
      }
    })
  }
  const destroySession = () => {
    Session.destroy().then((res) => {
      setState((state) => {
        return { user: null };
      });
    });
  }
  const handleSubmit = (params) => {
    Session.create(params)
      .then(() => {
        return Session.currentUser();
      })
      .then((user) => {
        console.log("user", user);
        setState((state) => {
          return { user: user };
        });
      });
  }
  const onSignOut = () => {
    setState({
      user: null
    })
  }
  useEffect(() => {
    getCurrentUser()
  }, [])

  return <div className="App">
    <BrowserRouter>
      <Navbar currentUser={state.user} destroySession={destroySession}/>
      <Switch>
        <AuthRoute path="/auctions/new" 
          isAuthenticated={state.user}
          component={AuctionNewPage}/>
        <Route path="/auctions/:id" component={AuctionShowPage} />
        <Route exact path="/auctions" component={AuctionsIndexPage}/>
        <Route exact path='/sign_in' render={(routeProps)=><SignInPage {...routeProps} onSignIn={getCurrentUser}/>} />
        <Route exact path="/" component={WelcomePage}/>
      </Switch>
    </BrowserRouter>
  </div>
}

export default App;
