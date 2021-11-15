import React, { useContext } from 'react';
import {
    BrowserRouter as Router, Redirect, Route, Switch
} from 'react-router-dom';
import './app.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { AuthContext } from './authContext/AuthContext';

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

                        <Route exact path='/watch'>
                            <Watch />
                        </Route>
                    </React.Fragment>
                ) : <Redirect to='/login' />}
            </Switch>
        </Router>
    );
};

export default App;