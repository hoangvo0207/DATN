import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createList } from '../../contexts/listContext/apiCall';
import { ListContext } from '../../contexts/listContext/ListContext';
import { getMovies } from '../../contexts/movieContext/apiCall';
import { MovieContext } from '../../contexts/movieContext/MovieContext';
import './newList.scss';

const NewList = () => {
    const [list, setList] = useState(null);
    const history = useHistory();

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    }

    const handleSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, (option) => option.value);
        setList({ ...list, [e.target.name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatch);
        history.push('/lists');
    }

    return (
        <Grid container spacing={3} className='newList'>
            <Grid item xs={12}>
                <Typography variant='h4' className='title'>
                    New List
                </Typography>
                <Paper elevation={5} style={{ width: '100%', marginLeft: 5, marginTop: 20 }}>
                    <form >
                        <div className='addListItem' >
                            <label>Title</label>
                            <TextField
                                name='title'
                                variant='outlined'
                                fullWidth
                                onChange={handleChange}
                            />
                        </div>

                        <div className='addListItem' >
                            <label>Type</label>
                            <select name='type' id='type' onChange={handleChange}>
                                <option value='movies'>Movies</option>
                                <option value='series'>Series</option>
                            </select>
                        </div>

                        <div className='addListItem' >
                            <label>Genre</label>
                            <TextField
                                name='genre'
                                variant='outlined'
                                fullWidth
                                onChange={handleChange}
                            />
                        </div>

                        <div className='addListItem' >
                            <label>Content</label>
                            <select
                                multiple
                                name='content'
                                id='content'
                                onChange={handleSelect}
                                style={{ height: 200 }}
                            >
                                {movies.map((movie) => (
                                    <option key={movie._id} value={movie._id}>{movie.title}</option>
                                ))}
                            </select>
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
            </Grid>
        </Grid>
    );
};

export default NewList;
