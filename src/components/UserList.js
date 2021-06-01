import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import styled from "styled-components";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((data) => {
        setUserData(data.data.results);
        setSearchData(data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    result = userData.filter((data) => {
      return (
        `${data.name.first.toLowerCase()} ${data.name.last.toLowerCase()}`.search(
          value
        ) != -1
      );
    });
    if (value === "") {
      setUserData(searchData);
    } else {
      setUserData(result);
    }
  };

  return (
    <div>
      <StyledInput>
        <input
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="Search"
        />
      </StyledInput>
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
    </div>
  );
};

const StyledList = styled.div`
  margin-top: 2rem;
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.div`
  margin-top: 2rem;
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
  }
`;

export default UserList;
