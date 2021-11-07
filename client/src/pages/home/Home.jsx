import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../constants/constant';
import Featured from './components/featured/Featured';
import List from './components/list/List';
import Navbar from './components/navbar/Navbar';
import './home.scss';

const Home = (props) => {
    const { type } = props;
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}/lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODM1ZWM3NjJlYzQyNWVjMDUwMzdlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjI3Njc2OSwiZXhwIjoxNjM2NzA4NzY5fQ.lMy7Bg6YcJP6h_9ff_OWhcV-MHYA4iLlj8ux04lJ1mc"
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
        <div className='home'>
            <Navbar />
            <Featured type={type} />
            {
                lists.map((list) => (
                    <List list={list} />
                ))
            }
        </div>
    );
};

export default Home;