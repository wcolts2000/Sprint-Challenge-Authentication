import PropTypes from "prop-types";
import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  padding: 30px 40px;
  box-shadow: 0 70px 50px rgba(0, 0, 0, 1);
  font-size: 20px;
`;

const NavRight = styled.div`
  margin-left: auto;

  @media (max-width: 450) {
    display: none;
  }
`;
const HomeNavLink = styled(NavLink)`
  text-decoration: none;
  color: #17333f;
  font-weight: bolder;
  margin-right: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.6;
  }

  &:last-child {
    margin-right: 0;
  }

  & > span {
    font-weight: normal;
    opacity: 0.6;
  }
`;

const StyledLink = styled(Link)`
  background: #17333f;
  padding: 10px 15px;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fd554c;
  }
`;

function Navbar({ logout }) {
  return (
    <Nav>
      <HomeNavLink exact to="/">
        THE<span>JOKE</span>FACTORY
      </HomeNavLink>
      <NavRight>
        <HomeNavLink to="/login">Signin/Register</HomeNavLink>
        <HomeNavLink to="/joke-bin">JokeBin</HomeNavLink>
        <StyledLink to="/" onClick={() => logout()}>
          Logout
        </StyledLink>
      </NavRight>
    </Nav>
  );
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired
};

export default withRouter(Navbar);
