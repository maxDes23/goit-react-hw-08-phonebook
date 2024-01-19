import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-right: 16px;
  }

  button {
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2a363b;
    background: none;
    border: none;
    cursor: pointer;
  }

  button[aria-current='page'] {
    color: #e84a5f;
  }
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul>
        <li>
          <button as={Link} to="/register">
            Register
          </button>
        </li>
        <li>
          <button as={Link} to="/login">
            Login
          </button>
        </li>
        <li>
          <button as={Link} to="/contacts">
            Contacts
          </button>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
