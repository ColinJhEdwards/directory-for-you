import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHead>
      <h1>Directory For You</h1>
      <p>View your entire employee directory below.</p>
    </StyledHead>
  );
};

export default Header;

const StyledHead = styled.div`
  min-height: 10vh;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
`;
