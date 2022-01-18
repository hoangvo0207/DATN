import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../constants/constant';
import Featured from '../home/components/featured/Featured';
import Navbar from '../home/components/navbar/Navbar';
import RecommendItem from './RecommendItem';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },
    recommend: {
        backgroundColor: '#00202e',
        overflow: 'hidden'
    }
}));

const RecommendList = () => {
    const [recommends, setRecommends] = useState([]);

    const classes = useStyles();

    useEffect(() => {
        const getRecommendList = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}/recommends`, {
                    headers: {
                        token: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken
                    }
                }
                );
                setRecommends(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getRecommendList();
    }, []);

    return (
        <React.Fragment>
            <div className={classes.recommend}>
                <Navbar />
                <Featured />
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {recommends.map((recommend) => (
                            <Grid item xs={2}>
                                <RecommendItem recommend={recommend} />
                            </Grid>
                        )
                        )}

                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
};

export default RecommendList;