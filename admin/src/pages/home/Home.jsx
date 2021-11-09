import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from 'axios';
import { apiUrl } from '../../constants/constant';

const Home = () => {
  const MONTHS = useMemo(() => [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ], []);

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/users/stats`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODM1ZWM3NjJlYzQyNWVjMDUwMzdlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjI3Njc2OSwiZXhwIjoxNjM2NzA4NzY5fQ.lMy7Bg6YcJP6h_9ff_OWhcV-MHYA4iLlj8ux04lJ1mc"
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
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="New User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
