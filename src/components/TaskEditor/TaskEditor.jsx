import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/operations';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  margin-bottom: 16px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
`;

const Button = styled.button`
  padding: 8px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text.trim() !== '') {
      dispatch(addTask(text));
      form.reset();
    } else {
      alert('Task cannot be empty. Enter some text!');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="text" placeholder="Enter your task" />
      <Button type="submit">Add task</Button>
    </Form>
  );
};

export default TaskEditor;
