import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import styled from "styled-components";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((data) => {
        setUserData(data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("UserData", userData);
  return (
    <StyledList>
      {userData.map((user) => (
        <UserCard
          cell={user.cell}
          age={user.dob.age}
          email={user.email}
          gender={user.gender}
          location={`${user.location.city}, ${user.location.country}`}
          name={`${user.name.first} ${user.name.last}`}
          picture={user.picture.large}
          hired={user.registered.date}
          timeAtCompany={user.registered.age}
        />
      ))}
    </StyledList>
  );
};

const StyledList = styled.div`
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default UserList;
