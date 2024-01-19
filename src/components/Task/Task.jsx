import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/tasks/operations';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 8px;
`;

const Text = styled.p`
  margin: 0;
`;

const Button = styled.button`
  padding: 8px;
  cursor: pointer;
  background-color: #ff5757;
  color: #fff;
  border: none;
  border-radius: 4px;
`;

const Task = ({ id, text }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <Wrapper>
      <Text>{text}</Text>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Wrapper>
  );
};

export default Task;
