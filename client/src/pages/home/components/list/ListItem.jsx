import Add from '@material-ui/icons/Add';
import PlayArrow from '@material-ui/icons/PlayArrow';
import ThumbDownOutlined from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import React, { useState } from 'react';
import './listItem.scss';

const ListItem = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="listItem"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src="https://afamilycdn.com/150157425591193600/2020/10/6/du-lich-quoc-hoc-hue-7-16019624869481270067688.jpg"
                alt=""
            />

            {isHovered && (
                <React.Fragment>
                    {/* <ReactPlayer
                        style={{
                            width: '100%',
                            height: 150,
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0
                        }}
                        //height={150}
                        playing
                        url='https://youtu.be/aUZ-u-V99cw?t=1'
                    /> */}

                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>

                        <div className="itemInfoTop">
                            <span>1 hour 27 mins</span>
                            <span className="limit">18+</span>
                            <span>1999</span>
                        </div>

                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Itaque repellendus, possimus, magnam, natus obcaecati repudiandae nesciunt velit commodi nam at
                            totam rerum soluta omnis temporibus debitis ea cum atque veniam.
                        </div>

                        <div className="genre">
                            Action
                        </div>
                    </div>
                </React.Fragment>
            )}

        </div>
    );
};

export default ListItem;