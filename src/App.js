import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Post from './components/Post/Post';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Post />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/postDetail/:postId">
         <PostDetail></PostDetail>
        </Route>
        {/* <Route path="/">
          <Home />
        </Route> */}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
