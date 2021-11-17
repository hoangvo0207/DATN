import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { updateList } from '../../contexts/listContext/apiCall';
import { ListContext } from '../../contexts/listContext/ListContext';
import './listItem.scss';

const ListItem = () => {
    const location = useLocation();
    const [listItem, setListItem] = useState(location.listItem);
    console.log({ listItem })

    const { dispatch } = useContext(ListContext);

    useEffect(() => {
        setListItem(listItem)
    }, [listItem]);

    const handleChange = (e) => {
        const value = e.target.value;
        setListItem({ ...listItem, [e.target.name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateList(listItem, dispatch);
        //setListItem({ ...listItem, [e.target.name]: e.target.value });
        //history.push('/lists');
    }

    return (
        <div className='listItem'>
            <div className='listTitleContainer'>
                <h1 className='listTitle'>List</h1>
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
                            <span className='listInfoKey'>Type:</span>
                            <span className='listInfoValue'>{listItem.type}</span>
                        </div>
                        <div className='listInfoItem'>
                            <span className='listInfoKey'>Genre:</span>
                            <span className='listInfoValue'>{listItem.genre}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='listBottom'>
                <form className='listForm'>
                    <div className='listFormLeft'>
                        <label>List Title</label>
                        <input name='title' type='text' value={listItem.title} onChange={handleChange} />
                        <label>Type</label>
                        <input name='type' type='text' value={listItem.type} onChange={handleChange} />
                        <label>Genre</label>
                        <input name='genre' type='text' value={listItem.genre} onChange={handleChange} />
                    </div>
                    <div className='listFormRight'>
                        <button className='listButton' onClick={handleSubmit} >Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListItem
