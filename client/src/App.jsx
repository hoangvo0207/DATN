import React, { useContext } from 'react';
import {
    BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import { AuthContext } from './authContext/AuthContext';
import FeedbackItemDetail from './pages/feedback/FeedbackItemDetail';
import FeedbackList from './pages/feedback/FeedbackList';
import NewFeedback from './pages/feedback/NewFeedback';
import ListItemDetail from './pages/home/components/list/ListItemDetail';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import RecommendItemDetail from './pages/recommend/RecommendItemDetail';
import RecommendList from './pages/recommend/RecommendList';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';

const App = () => {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    {user ? <Home /> : <Redirect to='/login' />}
                </Route>

                <Route exact path='/register'>
                    <Register />
                </Route>

                <Route exact path='/login'>
                    {!user ? <Login /> : <Redirect to='/' />}
                </Route>

                {user ? (
                    <React.Fragment>
                        <Route exact path='/movies'>
                            <Home type='movies' />
                        </Route>

                        <Route exact path='/series'>
                            <Home type='series' />
                        </Route>

                        <Route exact path='/feedbacks'>
                            <FeedbackList />
                        </Route>

                        <Route exact path='/feedbacks/detail'>
                            <FeedbackItemDetail />
                        </Route>

                        <Route path='/feedbacks/new'>
                            <NewFeedback />
                        </Route>

                        <Route exact path='/recommends'>
                            <RecommendList />
                        </Route>

                        <Route exact path='/recommends/detail'>
                            <RecommendItemDetail />
                        </Route>

                        <Route exact path='/watch'>
                            <Watch />
                        </Route>

                        <Route exact path='/detail'>
                            <ListItemDetail />
                        </Route>
                    </React.Fragment>
                ) : <Redirect to='/login' />}
            </Switch>
        </Router>
    );
};

export default App;