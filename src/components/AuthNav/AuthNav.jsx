import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinksContainer = styled.div`
  display: flex;
`;

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  &.active {
    color: #e84a5f;
  }
`;

const AuthNav = () => {
  return (
    <LinksContainer>
      <Link to="/register" activeClassName="active">
        Register
      </Link>
      <Link to="/login" activeClassName="active">
        Log In
      </Link>
    </LinksContainer>
  );
};

export default AuthNav;
