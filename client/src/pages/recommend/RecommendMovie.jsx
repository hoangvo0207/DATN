import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(() => ({
    card: {
        height: 400,
        backgroundColor: '#00202e',
        color: 'white'
    }
}));

const RecommendMovie = (props) => {
    const { recommend } = props || {};

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    alt='movie-image'
                    height='300'
                    image={recommend.image}
                    title='Movie Image'
                />
                <CardContent>
                    <Typography gutterBottom variant='h6' component='h2'>
                        {recommend.title}
                    </Typography>
                </CardContent>
            </CardActionArea>

            {/* <CardActions>
                <Button size='small' color='primary'>
                    Detail
                </Button>
            </CardActions> */}
        </Card>
    );
};

export default RecommendMovie;