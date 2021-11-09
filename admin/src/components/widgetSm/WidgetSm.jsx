import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../constants/constant";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/users?new=true`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODM1ZWM3NjJlYzQyNWVjMDUwMzdlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjI3Njc2OSwiZXhwIjoxNjM2NzA4NzY5fQ.lMy7Bg6YcJP6h_9ff_OWhcV-MHYA4iLlj8ux04lJ1mc"
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
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((newUser) => (
          <li className="widgetSmListItem">
            <img
              src={newUser.profilePic || <AccountCircleIcon />}
              alt="avatar"
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{newUser.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
