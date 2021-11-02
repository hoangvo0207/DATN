import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined';
import React, { useRef, useState } from 'react';
import './list.scss';
import ListItem from './ListItem';

const List = () => {
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
        <div className="list">
            <span className="listTitle">
                Continue to watch
            </span>

            <div className="wrapper">
                <ArrowBackIosOutlined
                    className="sliderArrow left"
                    onClick={() => handleSlide('left')}
                    style={{ display: !isMoved && 'none' }}
                />

                <div className="container" ref={listRef}>
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

                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleSlide('right')} />
            </div>
        </div>
    );
};

export default List;