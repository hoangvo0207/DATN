import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import Chart from '../../components/chart/Chart';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { apiUrl } from '../../constants/constant';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  home: {
    marginTop: 70,
    backgroundColor: '#310A0B'
  },
  homeWidget: {
    display: 'flex'
  }
}));

const Home = () => {
  const MONTHS = useMemo(() => [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ], []);

  const [userStats, setUserStats] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/users/stats`, {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken
          }
        }
        );
        const statsList = response.data.sort((a, b) => {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) =>
            [...prev, { name: MONTHS[item._id - 1], 'New User': item.total }]))
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className={classes.home}>
      <Chart
        data={userStats}
        title='User Analytics'
        grid
        dataKey='New User'
      />
      <div className={classes.homeWidget}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
