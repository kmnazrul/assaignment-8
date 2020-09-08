import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NewsFeed from './components/NewsFeed/NewsFeed';
import PostDetail from './components/PostDetail/PostDetail';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="bg-color">
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <NewsFeed/>
          </Route>
          <Route path='/post/:userId'>
            <PostDetail />
          </Route>
          <Route exact path="/">
            <NewsFeed />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
