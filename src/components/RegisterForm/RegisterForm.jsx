import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 250px;
  margin: 0 auto;
  background: linear-gradient(to right, #dad47e, #2489c4);
  width: 100%;
  border-radius: 8px;
  padding: 40px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 4px;
`;

const Button = styled.button`
  padding: 7px 20px;
  background-color: #2a363b;
  color: #fff;
  border: 2;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e84a5f;
  }
`;

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
