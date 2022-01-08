import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined';
import React, { useRef, useState } from 'react';
import ListItem from './ListItem';

const useStyles = makeStyles(() => ({
    list: {
        width: '100%',
        marginTop: 10
    },
    listTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 500,
        marginLeft: 50
    },
    slideArrowLeft: {
        width: 50,
        height: '100%',
        backgroundColor: 'rgb(22, 22, 22, 0.5)',
        color: 'white',
        position: 'absolute',
        zIndex: 99,
        top: 0,
        bottom: 0,
        margin: 'auto',
        cursor: 'pointer',
        left: 0
    },
    slideArrowRight: {
        width: 50,
        height: '100%',
        backgroundColor: 'rgb(22, 22, 22, 0.5)',
        color: 'white',
        position: 'absolute',
        zIndex: 99,
        top: 0,
        bottom: 0,
        margin: 'auto',
        cursor: 'pointer',
        right: 0
    },
    wrapper: {
        position: 'relative'
    },
    container: {
        marginLeft: 50,
        display: 'flex',
        marginTop: 10,
        width: 'max-content',
        transform: 'translateX(0px)',
        transition: 'all 1s ease'
    }
}));

const List = (props) => {
    const { list } = props || [];
    const { content } = list || [];
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const classes = useStyles();

    const listRef = useRef();

    const handleSlide = (direction) => {
        setIsMoved(true);

        const distance = listRef.current.getBoundingClientRect().x - 50;

        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${345 + distance}px)`;
        }

        if (direction === 'right' && slideNumber < 10) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-345 + distance}px)`;
        }
    }

    return (
        <div className={classes.list}>
            <span className={classes.listTitle}>
                {list.title}
            </span>

            <div className={classes.wrapper}>
                <ArrowBackIosOutlined
                    className={classes.slideArrowLeft}
                    onClick={() => handleSlide('left')}
                    style={{ display: !isMoved && 'none' }}
                />

                <div className={classes.container} ref={listRef}>
                    {
                        content.map((movieId, index) => (
                            <ListItem index={index} movieId={movieId} />
                        ))
                    }
                </div>

                <ArrowForwardIosOutlined className={classes.slideArrowRight} onClick={() => handleSlide('right')} />
            </div>
        </div>
    );
};

export default List;