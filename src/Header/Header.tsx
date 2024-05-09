import "./Header.scss";
import { useContext, useEffect } from "react";
import { ApplicationContext } from "../Context/ApplicationContext";

const Header: React.FC = () => {
  const {header}=useContext(ApplicationContext);
  return (
    <div className="header-container">
      <div className="header">
        <p>{header}</p>
      </div>
    </div>
  );
};
export default Header;
