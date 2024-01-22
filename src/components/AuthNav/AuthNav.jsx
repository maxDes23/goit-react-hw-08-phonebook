import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinksContainer = styled.div`
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 7px;
  font-weight: 700;
  color: #2a363b;
  margin-right: 10px;
  background-color: #64aef3;
  border-radius: 3px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #e84a5f;
  }
`;

export const AuthNav = () => {
  return (
    <LinksContainer>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </LinksContainer>
  );
};
