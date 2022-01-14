import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateList } from '../../contexts/listContext/apiCall';
import { ListContext } from '../../contexts/listContext/ListContext';

const useStyles = makeStyles(() => ({
    listItem: {
        flex: 4,
        padding: 20
    },
    listTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    addListItem: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    cardRoot: {
        display: 'flex',
        marginTop: 20,
        borderRadius: 10
    },
    cardDetail: {
        display: 'flex',
    },
    cardContent: {
        flex: '1 0 auto',
    },
    cardForm: {
        display: 'block',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#491b1d',
        color: 'white'
    },
    media: {
        width: 250,
        height: 250
    },
    textField: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    button: {
        margin: '10px 0px 20px 20px',
        borderRadius: 10,
        backgroundColor: '#b96a59',
        width: 150,
        height: 50,
        color: 'white'
    }
}));

const ListItem = () => {
    const { list, dispatch } = useContext(ListContext);

    const [updatedList, setUpdatedList] = useState(list);

    const history = useHistory();

    const classes = useStyles();

    useEffect(() => {
        setUpdatedList(list);
    }, [list]);

    const handleChange = (e) => {
        setUpdatedList({
            ...updatedList,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateList(updatedList, dispatch);
        setUpdatedList({
            ...updatedList,
            [e.target.name]: e.target.value
        })
        history.push('/lists');
    }

    return (
        <Grid container spacing={3} className={classes.listItem}>
            <Grid item xs={12}>
                <Typography variant='h4' className={classes.listTitle}>
                    Update List
                </Typography>

                <Card elevation={10} className={classes.cardRoot}>
                    <CardMedia
                        className={classes.media}
                        image='https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
                        title='movie-image'
                    />
                    <div className={classes.cardDetail}>
                        <CardContent className={classes.content}>
                            <Typography component='h5' variant='h5'>
                                {updatedList.title}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Id: {updatedList._id}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Type: {updatedList.type}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                                Genre: {updatedList.genre}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>

                <Card elevation={10} className={classes.cardForm}>
                    <form>
                        <div className={classes.addListItem} >
                            <Typography variant='body1'>Title</Typography>
                            <TextField
                                name='title'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedList.title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addListItem} >
                            <Typography variant='body1'>Type</Typography>
                            <TextField
                                name='type'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedList.type}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addListItem} >
                            <Typography variant='body1'>Genre</Typography>
                            <TextField
                                name='genre'
                                variant='outlined'
                                fullWidth
                                className={classes.textField}
                                value={updatedList.genre}
                                onChange={handleChange}
                            />
                        </div>

                        <Button
                            variant='contained'
                            className={classes.button}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </form>
                </Card>
            </Grid>
        </Grid >
    );
};

export default ListItem
