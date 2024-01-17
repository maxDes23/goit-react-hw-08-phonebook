import { useFormik } from 'formik';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

const StyledFlex = styled(Flex)`
  background-color: gray.100;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const StyledBox = styled(Box)`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
`;

const StyledButton = styled(Button)`
  width: full;
`;

export default function Login() {
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      try {
        const response = await axios.post(
          'URL_TO_YOUR_BACKEND_LOGIN_ENDPOINT',
          values
        );

        console.log(response.data);
      } catch (error) {
        setError(error.response.data.message || 'Помилка входу');
      }
    },
  });

  return (
    <StyledFlex>
      <StyledBox>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <StyledButton type="submit" colorScheme="purple">
              Login
            </StyledButton>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </VStack>
        </form>
      </StyledBox>
    </StyledFlex>
  );
}
