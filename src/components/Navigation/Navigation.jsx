import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 8px;
  margin-right: 16px;
  font-weight: 600;
  color: #2a363b;

  &:hover {
    color: #e84a5f;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};
