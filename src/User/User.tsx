// User.tsx
import "./User.scss";
import backimage from "../Assets/backimg.jpeg";
import profile from "../Assets/profile.png";
import { Address } from "../Types/Address";
import { ApplicationContext } from "../Context/ApplicationContext";
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

interface UserParams {
  userId: string;
}

export const User: React.FC = () => {
  const { userId } = useParams<UserParams>();
  const { users, setSidebar, setUsers } = useContext(ApplicationContext);
  const user = users.find((eachUser) => eachUser.id === +userId);
  const [isAddressForm, setIsAddressForm] = useState<boolean>(false);
  const [newAddress, setNewAddress] = useState<Address>({
    doorNo: 0,
    street: "",
    city: "",
    state: "",
    country: "",
  });
  const [error, setError] = useState<string>("");
  const history = useHistory();

  const handleSubmit = () => {
    if (
      newAddress.doorNo &&
      newAddress.city.trim() &&
      newAddress.country.trim() &&
      newAddress.state.trim() &&
      newAddress.street.trim()
    ) {
      const updatedUsers = [...users];
      const currentUserIndex = updatedUsers.findIndex((user) => user.id === +userId);
      if (currentUserIndex !== -1) {
        updatedUsers[currentUserIndex].addresslist.push(newAddress);
        setUsers(updatedUsers);
        setIsAddressForm(false);
      }
    } else {
      setError("Enter All Values");
    }
  };

  const handleHistory = () => {
    setSidebar(true);
    history.goBack();
  };

  const handleClick = (value: boolean) => {
    setIsAddressForm(value);
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="user-main">
      <div>
        <img src={backimage} alt="" className="back-button" onClick={handleHistory} />
      </div>
      <div className="user-details">
        <div className="details">
          <div>
            <img src={profile} className="profile-image" alt="Profile" />
          </div>
          <div>
            <p>Name : {user.name}</p>
            <p>Mobile : {user.mobile}</p>
            <p>Email : {user.email}</p>
          </div>
        </div>
        <div className="address-new"> 
          <div className="addresses">
            {user.addresslist.map((eachAddress, index) => (
              <div className="address" key={index}>
                <p>{eachAddress.doorNo}</p>
                <p>{eachAddress.city}</p>
                <p>
                  {eachAddress.state}, {eachAddress.country}
                </p>
              </div>
            ))}
          </div>
          <div>
            <button className="add-address-button" onClick={() => handleClick(true)}>Add Address</button>
          </div>
          </div>
          {isAddressForm && (
          <div className="new-add">
            <p className="heading">Add New Address</p>
            <form className="address-form">
              <div className="form-group">
                <label>Door No:</label>
                <input
                  type="number"
                  className="form-control"
                  id="doorNo"
                  placeholder="Enter door no"
                  onChange={(e) => {
                    setNewAddress((prevNewAddress) => ({ ...prevNewAddress, doorNo: +e.target.value }));
                  }}
                />
              </div>
              <div className="form-group">
                <label>Street:</label>
                <input
                  type="text"
                  className="form-control"
                  id="street"
                  placeholder="Enter street"
                  onChange={(e) => {
                    setNewAddress((prevNewAddress) => ({ ...prevNewAddress, street: e.target.value }));
                  }}
                />
              </div>
              <div className="form-group">
                <label>City:</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter city"
                  onChange={(e) => {
                    setNewAddress((prevNewAddress) => ({ ...prevNewAddress, city: e.target.value }));
                  }}
                />
              </div>
              <div className="form-group">
                <label>State:</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  placeholder="Enter state"
                  onChange={(e) => {
                    setNewAddress((prevNewAddress) => ({ ...prevNewAddress, state: e.target.value }));
                  }}
                />
              </div>
              <div className="form-group">
                <label>Country:</label>
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="Enter country"
                  onChange={(e) => {
                    setNewAddress((prevNewAddress) => ({ ...prevNewAddress, country: e.target.value }));
                  }}
                />
              </div>
              {error && <div className="error">{error}</div>}
              <button
                type="button"
                className="submit-button"
                onClick={(e) => {
                  handleSubmit();
                  e.preventDefault();
                }}
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
