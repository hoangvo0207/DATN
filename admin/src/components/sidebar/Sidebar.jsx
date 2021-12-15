import Paper from '@material-ui/core/Paper';
import LineStyle from '@material-ui/icons/LineStyle';
import PermIdentity from '@material-ui/icons/PermIdentity';
import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline';
import Reorder from '@material-ui/icons/Reorder';
import { Link } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
  return (
    <Paper elevation={5} className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h2 className='sidebarTitle'>Dashboard</h2>
          <ul className='sidebarList'>
            <Link to='/' className='link'>
              <li className='sidebarListItem active'>
                <LineStyle className='sidebarIcon' />
                Home
              </li>
            </Link>
          </ul>
        </div>

        <div className='sidebarMenu'>
          <h2 className='sidebarTitle'>Quick Menu</h2>
          <ul className='sidebarList'>
            <Link to='/users' className='link'>
              <li className='sidebarListItem'>
                <PermIdentity className='sidebarIcon' />
                Users
              </li>
            </Link>
            <Link to='/movies' className='link'>
              <li className='sidebarListItem'>
                <PlayCircleOutline className='sidebarIcon' />
                Movies
              </li>
            </Link>
            <Link to='/lists' className='link'>
              <li className='sidebarListItem'>
                <Reorder className='sidebarIcon' />
                Lists
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </Paper>
  );
};

export default Sidebar;
