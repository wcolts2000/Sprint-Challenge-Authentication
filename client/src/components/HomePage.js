import React from "react";
import styled from "styled-components";

const Div = styled.div`
  min-height: calc(100vh - 87px);
  background: #17333f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftButton = styled.button`
  cursor: pointer;
  padding: 20px;
  width: 250px;
  background: #fd554c;
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  letter-spacing: 2px;
  margin-right: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

const RightButton = styled.button`
  cursor: pointer;
  padding: 20px;
  width: 250px;
  background: white;
  color: #fd554c;
  text-transform: uppercase;
  border: 1px solid #fd554c;
  font-weight: bold;
  letter-spacing: 2px;

  &:hover {
    opacity: 0.8;
  }
`;

function HomePage(props) {
  return (
    <Div>
      <LeftButton onClick={() => props.history.push("/login")}>
        Register/Login Now
      </LeftButton>
      <RightButton onClick={() => props.history.push("/joke-bin")}>
        The Joke Factory
      </RightButton>
    </Div>
  );
}

export default HomePage;
