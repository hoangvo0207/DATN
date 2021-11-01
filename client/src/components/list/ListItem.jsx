import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    listItem: {
        width: 225,
        height: 120,
        backgroundColor: 'white',
        color: 'black',
        marginRight: 5
    }
}))

const ListItem = () => {
    const classes = useStyles();

    return (
        <div className={classes.listItem}>
            Item
        </div>
    );
};

export default ListItem;