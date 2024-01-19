import React from 'react';
import { Helmet } from 'react-helmet';
import  RegisterForm  from 'components/RegisterForm/RegisterForm';
import styled from 'styled-components';

const Container = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Register = () => {
  return (
    <Container>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Container>
  );
};

export default Register;
