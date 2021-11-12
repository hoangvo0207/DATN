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
    const user = useContext(AuthContext);

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    {user ? <Home /> : <Redirect to='/register' />}
                </Route>

                <Route path='/register'>
                    {!user ? <Register /> : <Redirect to='/' />}
                </Route>

                <Route path='/login'>
                    {!user ? <Login /> : <Redirect to='/' />}
                </Route>

                {user && (
                    <React.Fragment>
                        <Route path='/movies'>
                            <Home type='movie' />
                        </Route>

                        <Route path='/series'>
                            <Home type='series' />
                        </Route>

                        <Route path='/watch'>
                            <Watch />
                        </Route>
                    </React.Fragment>
                )}
            </Switch>
        </Router>
    );
};

export default App;