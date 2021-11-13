import { Link, useLocation } from 'react-router-dom';
import './listItem.css';

const ListItem = () => {
    const location = useLocation()
    const listItem = location.listItem;
    
    return (
        <div className='listItem'>
            <div className='listTitleContainer'>
                <h1 className='listTitle'>List</h1>
                <Link to='/newList'>
                    <button className='listAddButton'>Create</button>
                </Link>
            </div>

            <div className='listTop'>
                <div className='listTopRight'>
                    <div className='listInfoTop'>
                        <span className='listName'>{listItem.title}</span>
                    </div>
                    <div className='listInfoBottom'>
                        <div className='listInfoItem'>
                            <span className='listInfoKey'>Id:</span>
                            <span className='listInfoValue'>{listItem._id}</span>
                        </div>
                        <div className='listInfoItem'>
                            <span className='listInfoKey'>Genre:</span>
                            <span className='listInfoValue'>{listItem.genre}</span>
                        </div>
                        <div className='listInfoItem'>
                            <span className='listInfoKey'>Type:</span>
                            <span className='listInfoValue'>{listItem.type}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='listBottom'>
                <form className='listForm'>
                    <div className='listFormLeft'>
                        <label>List Title</label>
                        <input type='text' placeholder={listItem.title} />
                        <label>Type</label>
                        <input type='text' placeholder={listItem.type} />
                        <label>Genre</label>
                        <input type='text' placeholder={listItem.genre} />
                    </div>
                    <div className='listFormRight'>
                        <button className='listButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListItem
