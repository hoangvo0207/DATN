import { Visibility } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { apiUrl } from '../../constants/constant';
import './widgetSm.scss';

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/users?new=true`, {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
          }
        }
        );
        setNewUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {newUsers.map((newUser) => (
          <li className='widgetSmListItem'>
            {
              newUser.profilePic !== '' ?
                <img
                  src={newUser.profilePic}
                  alt='avatar'
                  className='widgetSmImg'
                />
                : <AccountCircleIcon className='widgetSmImg' />
            }

            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{newUser.username}</span>
            </div>

            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
