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

  .link {
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2a363b;
  }

  .link.active {
    color: #e84a5f;
  }
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul>
        <li>
          <Link className="link" to="/register">
            Register
          </Link>
        </li>
        <li>
          <Link className="link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="link" to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
