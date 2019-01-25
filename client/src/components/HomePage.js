import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Div = styled.div`
  min-height: 100vh;
  height: 100%;
  background: #17333f;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 300px;
  background-image: url("https://images.pexels.com/photos/1115680/pexels-photo-1115680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-size: cover;
  background-position: center;
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

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default HomePage;
