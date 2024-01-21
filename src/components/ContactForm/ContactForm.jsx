import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  padding: 20px;
  background-color: #addeeb;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    margin-top: 5px;
  }

  button {
    padding: 8px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = evt => {
    setName(evt.target.value);
  };

  const handleNumberChange = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !number) {
      alert('Please fill in all fields');
      return;
    }

    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Name"
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          required
          placeholder="0123456789"
        />
      </label>
      <button type="submit">Add contact</button>
    </Form>
  );
};

export default ContactForm;
