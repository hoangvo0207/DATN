import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteRecommend, getRecommends } from '../../contexts/recommendContext/apiCall';
import { RecommendContext } from '../../contexts/recommendContext/RecommendContext';

const useStyles = makeStyles(() => ({
    movieList: {
        flex: 4,
        marginTop: 80,
        height: 625
    },
    movieListImg: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: 10,
        marginTop: 20
    },
    movieListDelete: {
        color: 'red',
        cursor: 'pointer'
    }
}));

const RecommendList = () => {
    const { recommends, findRecommend, dispatch } = useContext(RecommendContext);

    const history = useHistory();

    const classes = useStyles();

    useEffect(() => {
        getRecommends(dispatch);
    }, [dispatch]);

    const handleFindRecommend = (recommendId) => {
        findRecommend(recommendId);
        history.push(`/recommends/${recommendId}`);
    }

    const handleDelete = (id) => {
        deleteRecommend(id, dispatch);
    };

    const columns = [
        { field: '_id', headerName: 'ID', width: 300 },
        {
            field: 'title',
            headerName: 'Movie',
            width: 250,
            renderCell: (params) => {
                return (
                    <div>
                        <img className={classes.movieListImg} src={params.row.image} alt='' />
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: 'score', headerName: 'Score', width: 250 },
        {
            field: 'action',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => {
                return (
                    <React.Fragment>
                        <IconButton onClick={handleFindRecommend.bind(this, params.row._id)}>
                            <EditIcon style={{ color: green[500] }} />
                        </IconButton>
                        <DeleteOutline
                            className={classes.movieListDelete}
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </React.Fragment>
                );
            },
        },
    ];

    return (
        <div className={classes.movieList}>
            <DataGrid
                rows={recommends}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                getRowId={row => row._id}
            />
        </div>
    );
};

export default RecommendList;
