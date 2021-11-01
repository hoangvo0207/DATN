import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Featured from '../components/featured/Featured';
import Navbar from '../components/navbar/Navbar';
import List from '../components/list/List';

const useStyles = makeStyles((theme) => ({
    home: {
        backgroundColor: '#0b0b0b',
        color: 'white',
        overflow: 'hidden'
    }
}))

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.home}>
            <Navbar />
            <Featured type="movie" />
            <List />
            <List />
            <List />
            <List />
        </div>
    );
};

export default Home;