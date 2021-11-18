import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateList } from '../../contexts/listContext/apiCall';
import { ListContext } from '../../contexts/listContext/ListContext';
import './listItem.scss';

const ListItem = () => {
    const { list, dispatch } = useContext(ListContext);

    const [updatedList, setUpdatedList] = useState(list);

    const history = useHistory();

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
        <Grid container spacing={3} className='listItem'>
            <Grid item xs={12}>
                <Typography variant='h4' className='listTitle'>
                    Update List
                </Typography>

                <Paper elevation={10} style={{ width: '100%', height: '90%', marginLeft: 5, marginTop: 20 }}>
                    <Paper elevation={3}>
                        <Card className='cardRoot'>
                            <CardMedia
                                className='media'
                                image='https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
                                title='marvel'
                            />
                            <div className='cardDetail'>
                                <CardContent className='cardContent'>
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
                    </Paper>

                    <Paper elevation={10} style={{ marginTop: 80 }}>
                        <form>
                            <div className='addListItem' >
                                <label>Title</label>
                                <TextField
                                    name='title'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedList.title}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='addListItem' >
                                <label>Type</label>
                                <TextField
                                    name='type'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedList.type}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='addListItem' >
                                <label>Genre</label>
                                <TextField
                                    name='genre'
                                    variant='outlined'
                                    fullWidth
                                    value={updatedList.genre}
                                    onChange={handleChange}
                                />
                            </div>

                            <Button
                                variant='contained'
                                color='primary'
                                className='button'
                                onClick={handleSubmit}
                                style={{ marginLeft: 20, marginBottom: 20 }}
                            >
                                Submit
                            </Button>
                        </form>
                    </Paper>
                </Paper>
            </Grid>
        </Grid >
    );
};

export default ListItem
