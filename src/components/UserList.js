import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import styled from "styled-components";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [alpha, setAlpha] = useState(true);
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

  const sortHandler = () => {
    let sortEmp = [];
    if (alpha) {
      sortEmp = searchData.sort((a, b) => {
        const nameA = a.name.last.toLowerCase(),
          nameB = b.name.last.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    } else {
      sortEmp = searchData.sort((a, b) => {
        const nameA = a.name.last.toLowerCase(),
          nameB = b.name.last.toLowerCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
    }
    setAlpha(!alpha);
    setUserData(sortEmp);
  };

  return (
    <div>
      <StyledInput>
        <input
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="Search"
        />
        <button onClick={sortHandler}>Alphabetize</button>
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
  button {
    margin-left: 1rem;
    background: rgb(8, 122, 27);
    padding: 1rem;
    border-radius: 15px;
    border: solid 1px black;
    color: white;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    transition: all ease 0.5s;
    &:hover {
      background: white;
      color: rgb(8, 122, 27);
    }
  }
`;

export default UserList;
