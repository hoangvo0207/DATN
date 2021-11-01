import { makeStyles } from '@material-ui/core';
import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined';
import React, { useRef } from 'react';
import ListItem from './ListItem';

const useStyles = makeStyles(() => ({
    list: {
        width: '100%',
        marginTop: 10
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 500,
        marginLeft: 50
    },
    wrapper: {
        position: 'relative'
    },
    container: {
        marginLeft: 50,
        display: 'flex',
        width: 'max-content',
        marginTop: 10,
        transform: 'translateX(0px)',
        transition: 'all 1s ease'
    },
    arrowIconLeft: {
        width: 40,
        height: '100%',
        backgroundColor: 'rgb(22, 22, 22, 0.5)',
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        zIndex: 99,
        cursor: 'pointer'
    },
    arrowIconRight: {
        width: 40,
        height: '100%',
        backgroundColor: 'rgb(22, 22, 22, 0.5)',
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        margin: 'auto',
        zIndex: 99,
        cursor: 'pointer'
    }
}))

const List = () => {
    const classes = useStyles();

    const listRef = useRef();

    const handleSlide = (direction) => {
        const distance = listRef.current.getBoundingClientRect().x - 40;
        if (direction === 'left') {
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === 'right') {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    return (
        <div className={classes.list}>
            <span className={classes.listTitle}>
                Continue to watch
            </span>
            <div className={classes.wrapper}>
                <ArrowBackIosOutlined className={classes.arrowIconLeft} onClick={() => handleSlide('left')} />
                <div className={classes.container} ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className={classes.arrowIconRight} onClick={() => handleSlide('right')} />
            </div>
        </div>
    );
};

export default List;