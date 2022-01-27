import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../constants/constant';
import Featured from '../home/components/featured/Featured';
import Navbar from '../home/components/navbar/Navbar';
import RecommendItem from './RecommendItem';
import SearchFeature from './SearchFeature';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    recommend: {
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

const RecommendList = () => {
    const [recommends, setRecommends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                setIsLoading(false);
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
                <SearchFeature />
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            isLoading ?
                                <div className={classes.loading}>
                                    <CircularProgress className={classes.progress} />
                                </div>
                                :
                                recommends.map((recommend) => (
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