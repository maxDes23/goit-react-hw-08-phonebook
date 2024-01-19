import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { TaskList } from 'components/TaskList/TaskList';
import TaskEditor from 'components/TaskEditor/TaskEditor';
import { fetchTasks } from '../redux/tasks/operations';
import { selectLoading } from '../redux/tasks/selectors';
import styled from 'styled-components';

const LoadingMessage = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

const TasksContainer = styled.div`
  margin-top: 20px;
`;

const Tasks = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskEditor />
      <TasksContainer>
        {isLoading && <LoadingMessage>Request in progress...</LoadingMessage>}
      </TasksContainer>
      <TaskList />
    </>
  );
};

export default Tasks;
