import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../constants/constant';
import Featured from './components/featured/Featured';
import List from './components/list/List';
import Navbar from './components/navbar/Navbar';

const useStyles = makeStyles(() => ({
    home: {
        backgroundColor: '#00202e',
        overflow: 'hidden'
    }
}));

const Home = (props) => {
    const { type } = props;
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

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
            {
                lists.map((list) => (
                    <List list={list} />
                ))
            }
        </div>
    );
};

export default Home;