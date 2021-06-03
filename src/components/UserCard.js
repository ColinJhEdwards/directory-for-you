import React from "react";
import styled from "styled-components";

const UserCard = ({
  cell,
  name,
  picture,
  age,
  gender,
  email,
  location,
  hired,
  timeAtCompany,
}) => {
  return (
    <StyledUser>
      <div className="head">
        <img src={picture} alt="user-image" />
        <h2> {name} </h2>
        <p>
          <span>Age:</span> {age} <span>Gender:</span> {gender}
        </p>
      </div>
      <div className="contact">
        <p>
          <span>Cell:</span> {cell} <span>Email:</span> {email}
        </p>
      </div>
      <div className="info">
        <p>
          <span>Location:</span> {location}
        </p>
        <p>
          <span>Hired:</span> {hired}
        </p>
        <p>
          <span>Time At Company:</span> {timeAtCompany} Years
        </p>
      </div>
    </StyledUser>
  );
};

const StyledUser = styled.div`
  box-shadow: 0px 0px 10px rgba(8, 122, 27, 0.5);
  padding: 1rem;
  margin: 1rem;
  border-radius: 15px;
  height: 400px;
  width: 400px;
  span {
    font-weight: bolder;
  }
  .head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  }
  .contact {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
  }
  .info {
    min-height: 100px;
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.8rem;
    flex-direction: column;
  }
`;

export default UserCard;
