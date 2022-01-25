import React, { useContext } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import { AuthContext } from './contexts/authContext/AuthContext';
import FeedbackItem from './pages/feedback/FeedbackItem';
import Feedbacks from './pages/feedback/Feedbacks';
import Home from './pages/home/Home';
import List from './pages/list/List';
import ListItem from './pages/listItem/ListItem';
import Login from './pages/login/Login';
import Movie from './pages/movie/Movie';
import MovieList from './pages/movieList/MovieList';
import NewList from './pages/newList/NewList';
import NewMovie from './pages/newMovie/NewMovie';
import Recommend from './pages/recommend/Recommend';
import RecommendList from './pages/recommend/RecommendList';
import User from './pages/user/User';
import UserList from './pages/userList/UserList';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {user ? (
            <React.Fragment>
              <Topbar />
              <Home />
            </React.Fragment>
          ) : <Redirect to='/login' />
          }
        </Route>

        <Route exact path='/login'>
          {!user ? <Login /> : <Redirect to='/' />}
        </Route>

        {user ? (
          <React.Fragment>
            <Topbar />
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/users'>
              <UserList />
            </Route>
            <Route path='/users/:userId'>
              <User />
            </Route>
            <Route exact path='/movies'>
              <MovieList />
            </Route>
            <Route path='/movies/:movieId'>
              <Movie />
            </Route>
            <Route path='/newMovie'>
              <NewMovie />
            </Route>
            <Route exact path='/lists'>
              <List />
            </Route>
            <Route path='/lists/:listId'>
              <ListItem />
            </Route>
            <Route path='/newList'>
              <NewList />
            </Route>
            <Route exact path='/recommends'>
              <RecommendList />
            </Route>
            <Route path='/recommends/:recommendId'>
              <Recommend />
            </Route>
            <Route exact path='/feedbacks'>
              <Feedbacks />
            </Route>
            <Route exact path='/feedbacks/:feedbackId'>
              <FeedbackItem />
            </Route>
          </React.Fragment>
        ) : <Redirect to='/login' />}
      </Switch>
    </Router>
  );
}

export default App;
