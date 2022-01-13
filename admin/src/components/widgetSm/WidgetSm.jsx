import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { apiUrl } from '../../constants/constant';

const useStyles = makeStyles(() => ({
  widgetSm: {
    flex: 1,
    WebkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    marginRight: 20,
    backgroundColor: 'white'
  },
  widgetSmTitle: {
    fontSize: 22,
    fontWeight: 600
  },
  widgetSmImg: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    objectFit: 'cover'
  },
  widgetSmList: {
    margin: 0,
    padding: 0,
    listStyle: 'none'
  },
  widgetSmListItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '20px 0px'
  },
  widgetSmUser: {
    display: 'flex',
    flexDirection: 'column'
  },
  widgetSmUsername: {
    fontWeight: 600
  },
  widgetSmUserTitle: {
    fontWeight: 300
  },
  widgetSmButton: {
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    borderRadius: 10,
    padding: '7px 10px',
    backgroundColor: '#eeeef7',
    color: '#555',
    cursor: 'pointer'
  },
  widgetSmIcon: {
    fontSize: '16px !important',
    marginRight: 5
  }
}));

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  const classes = useStyles();

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
    <div className={classes.widgetSm}>
      <span className={classes.widgetSmTitle}>New Join Members</span>
      <ul className={classes.widgetSmList}>
        {newUsers.map((newUser) => (
          <li className={classes.widgetSmListItem}>
            {
              newUser.profilePic !== '' ?
                <img
                  src={newUser.profilePic}
                  alt='avatar'
                  className={classes.widgetSmImg}
                />
                : <AccountCircleIcon className={classes.widgetSmImg} />
            }

            <div className={classes.widgetSmUser}>
              <span className={classes.widgetSmUsername}>{newUser.username}</span>
            </div>

            <button className={classes.widgetSmButton}>
              <Visibility className={classes.widgetSmIcon} />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
