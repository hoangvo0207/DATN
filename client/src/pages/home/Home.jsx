import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../constants/constant';
import Featured from './components/featured/Featured';
import List from './components/list/List';
import Navbar from './components/navbar/Navbar';
import SearchFeature from './components/search/SearchFeature';

const useStyles = makeStyles(() => ({
    home: {
        backgroundColor: '#00202e',
        overflow: 'hidden'
    },
    loading: {
        backgroundColor: '#00202e',
        width: '100%',
        height: 900
    },
    progress: {
        marginLeft: '50%',
        marginTop: 32,
        color: 'white'
    }
}));

const Home = (props) => {
    const { type } = props;
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const classes = useStyles();

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}/lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
                    headers: {
                        token: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
                    }
                }
                );
                setLists(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        getRandomLists();
    }, [type, genre]);

    return (
        <div className={classes.home}>
            <Navbar />

            <Featured type={type} setGenre={setGenre} genre={genre} />

            <SearchFeature />

            {
                isLoading ?
                    <div className={classes.loading}>
                        <CircularProgress className={classes.progress} />
                    </div>
                    :
                    lists.map((list) => (
                        <List list={list} isLoading={isLoading} />
                    ))
            }
        </div>
    );
};

export default Home;