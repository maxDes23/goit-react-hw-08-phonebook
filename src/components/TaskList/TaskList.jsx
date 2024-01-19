import React from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { selectAllTasks } from '../../redux/tasks/selectors';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <List>
      {tasks.map(({ id, text }) => (
        <ListItem key={id}>
          <Task id={id} text={text} />
        </ListItem>
      ))}
    </List>
  );
};
