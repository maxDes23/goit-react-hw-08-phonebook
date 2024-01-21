import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 4px;
`;

const Button = styled.button`
  padding: 8px;
  background-color: #2a363b;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e84a5f;
  }
`;

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
