import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined';
import React, { useRef, useState } from 'react';
import './list.scss';
import ListItem from './ListItem';

const List = (props) => {
    const { list } = props || [];
    const { content } = list || [];
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleSlide = (direction) => {
        setIsMoved(true);

        const distance = listRef.current.getBoundingClientRect().x - 50;

        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${330 + distance}px)`;
        }

        if (direction === 'right' && slideNumber < 10) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-330 + distance}px)`;
        }
    }

    return (
        <div className='list'>
            <span className='listTitle'>
                {list.title}
            </span>

            <div className='wrapper'>
                <ArrowBackIosOutlined
                    className='sliderArrow left'
                    onClick={() => handleSlide('left')}
                    style={{ display: !isMoved && 'none' }}
                />

                <div className='container' ref={listRef}>
                    {
                        content.map((movieId, index) => (
                            <ListItem index={index} movieId={movieId} />
                        ))
                    }
                </div>

                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleSlide('right')} />
            </div>
        </div>
    );
};

export default List;