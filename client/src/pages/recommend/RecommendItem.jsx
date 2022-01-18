import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        width: 225,
        height: 312,
        marginRight: 20,
        backgroundColor: '#0a344a'
    },
    content: {
        color: 'white'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    }
}));

const RecommendItem = (props) => {
    const { recommend } = props || {};

    const classes = useStyles();

    return (
        <Link className={classes.link} to={{ pathname: '/recommend/detail', recommend: recommend }}>
            <Card elevation={16} className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        alt='movie-image'
                        height='200'
                        image={recommend.image}
                        title='Movie Image'
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant='h6' component='h2'>
                            {recommend.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default RecommendItem;