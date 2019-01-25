import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  padding: 30px 40px;
  box-shadow: 0 70px 50px rgba(0, 0, 0, 1);
  font-size: 20px;
`;

const NavRight = styled.div`
  margin-left: auto;
`;
const HomeNavLink = styled(NavLink)`
  text-decoration: none;
  color: #17333f;
  font-weight: bolder;
  margin-right: 30px;

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

function Navbar() {
  return (
    <Nav>
      <HomeNavLink exact to="/">
        THE<span>JOKE</span>FACTORY
      </HomeNavLink>
      <NavRight>
        <HomeNavLink to="/login">Signin/Register</HomeNavLink>
        <HomeNavLink to="/joke-bin">JokeBin</HomeNavLink>
      </NavRight>
    </Nav>
  );
}

export default withRouter(Navbar);
