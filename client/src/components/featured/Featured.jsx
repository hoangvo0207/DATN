import React from 'react';
import PlayArrow from '@material-ui/icons/PlayArrow';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    featured: {
        height: '90vh',
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    info: {
        width: '35%',
        position: 'absolute',
        left: 50,
        bottom: 100,
        display: 'flex',
        flexDirection: 'column'
    },
    description: {
        margin: '20px 0px'
    },
    buttons: {
        display: 'flex'
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bolder',
        marginRight: 10,
        cursor: 'pointer'
    },
    category: {
        position: 'absolute',
        top: 80,
        left: 50,
        fontSize: 30,
        fontWeight: 500,
        display: 'flex',
        alignItems: 'center'
    },
    select: {
        cursor: 'pointer',
        backgroundColor: 'black',
        border: '1px solid white',
        color: 'white',
        marginLeft: 20,
        padding: 5
    }
}))

const Featured = (props) => {
    const { type } = props;

    const classes = useStyles();

    return (
        <div className={classes.featured}>
            {type && (
                <div className={classes.category}>
                    <span>
                        {type === 'movie' ? 'Movies' : 'Series'}
                    </span>
                    <select className={classes.select} name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                className={classes.image}
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />

            <div className={classes.info}>
                <Typography variant="h1">Title</Typography>
                <span className={classes.description}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptatum et a laudantium unde?
                    Tempora, quisquam doloribus.
                    Repudiandae totam debitis pariatur natus. Animi libero, nihil modi quod tempore labore accusantium.
                </span>
                <div className={classes.buttons}>
                    <button className={classes.button}>
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className={classes.button}>
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;