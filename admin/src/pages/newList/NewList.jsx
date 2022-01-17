import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createList } from '../../contexts/listContext/apiCall';
import { ListContext } from '../../contexts/listContext/ListContext';
import { getMovies } from '../../contexts/movieContext/apiCall';
import { MovieContext } from '../../contexts/movieContext/MovieContext';

const useStyles = makeStyles(() => ({
    newList: {
        flex: 4,
        padding: 20
    },
    listTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    paper: {
        width: '100%',
        marginLeft: 5,
        marginTop: 20,
        backgroundColor: '#491b1d',
        color: 'white',
        borderRadius: 10
    },
    addListItem: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20
    },
    textField: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    formControl: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    chip: {
        margin: 2
    },
    button: {
        margin: '10px 0px 20px 20px',
        borderRadius: 10,
        backgroundColor: '#743a36',
        width: 150,
        height: 50,
        color: 'white'
    },
    cancel: {
        margin: '10px 0px 20px 20px',
        borderRadius: 10,
        backgroundColor: '#b96a59',
        width: 150,
        height: 50,
        color: 'white'
    }
}));

const NewList = () => {
    const [list, setList] = useState(null);
    const [type, setType] = useState(null);
    const [moviesSelect, setMoviesSelect] = useState([]);

    const theme = useTheme();

    const history = useHistory();

    const classes = useStyles();

    const { dispatch } = useContext(ListContext);
    const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const getStyles = (title, moviesSelect, theme) => {
        return {
            fontWeight:
                moviesSelect.indexOf(title) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium
        }
    };

    useEffect(() => {
        getMovies(dispatchMovie);
    }, [dispatchMovie]);

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
        setType(value);
    };

    const handleSelect = (e) => {
        let value = e.target.value;
        setList({ ...list, [e.target.name]: value });
        setMoviesSelect(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatch);
        history.push('/lists');
    };

    const handleCancel = () => {
        history.push('/lists');
    };

    return (
        <Grid container spacing={3} className={classes.newList}>
            <Grid item xs={12}>
                <Typography variant='h4' className={classes.listTitle}>
                    New List
                </Typography>
                <Paper elevation={5} className={classes.paper}>
                    <form >
                        <div className={classes.addListItem} >
                            <Typography variant='body1'>Title</Typography>
                            <TextField
                                name='title'
                                variant='outlined'
                                className={classes.textField}
                                fullWidth
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addListItem} >
                            <Typography variant='body1'>Type</Typography>
                            <FormControl className={classes.formControl}>
                                <Select
                                    id='type'
                                    name='type'
                                    variant='outlined'
                                    value={type}
                                    onChange={handleChange}
                                >
                                    <MenuItem value='movies'>Movies</MenuItem>
                                    <MenuItem value='series'>Series</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className={classes.addListItem} >
                            <Typography variant='body1'>Genre</Typography>
                            <TextField
                                name='genre'
                                variant='outlined'
                                className={classes.textField}
                                fullWidth
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.addListItem} >
                            <Typography variant='body1'>Content</Typography>
                            <FormControl className={classes.formControl}>
                                <Select
                                    id='content'
                                    name='content'
                                    variant='outlined'
                                    multiple
                                    value={moviesSelect}
                                    onChange={handleSelect}
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} className={classes.chip} />
                                            ))}
                                        </div>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {movies.map((movie) => (
                                        <MenuItem key={movie._id} value={movie._id} style={getStyles(movie.title, moviesSelect, theme)}>
                                            {movie.title}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <Button
                            color='primary'
                            className={classes.button}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>

                        <Button
                            variant='contained'
                            className={classes.cancel}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default NewList;
