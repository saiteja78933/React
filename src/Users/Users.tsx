import { useContext } from "react";
import "./Users.scss";
import profile from "../Assets/profile.svg";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../Context/ApplicationContext";

const Users: React.FC = () => {
  const { users, setSidebar } = useContext(ApplicationContext);
  return (
    <div className="users-container">
      {users.map((eachUser) => {
        return (
          <Link
            key={eachUser.id}
            to={`/users/${eachUser.id}`}
            onClick={() => setSidebar(false)}
            className="link-text"
          >
            <div className="user-card">
              <div className="profile-container">
                <img src={profile} className="profile-img"></img>
              </div>
              <div className="user-info">
                <p className="user-name">Name: {eachUser.name}</p>
                <p className="user-email">E-mail: {eachUser.email}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Users;
