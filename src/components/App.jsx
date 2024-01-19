import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { LayoutContainer as Layout } from './Layout';
import { useSelector } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Filter from './Filter/Filter';

import styled from 'styled-components';
import {
  addContact,
  deleteContact,
  setFilter,
  fetchContacts,
} from './contactsSlice';
import { logout } from '../redux/authSlice';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/Tasks'));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f6d6;
`;

const App = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.contacts);

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (name, number) => {
    dispatch(addContact({ id: Date.now(), name, number }));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const handleLogout = () => {
    dispatch(logout());
  };
 const userName = user?.email;
  return (
    <Container>
      <h1>Phonebook</h1>
      {user && (
        <>
          <p>Welcome, {userName}!</p>
          <button onClick={handleLogout}>Logout</button>
          <ContactForm onSubmit={handleAddContact} />
          <h2>Contacts</h2>
          {contacts && (
            <>
              <Filter value={filter} onChange={handleFilterChange} />
              <ContactList
                contacts={contacts
                  .filter(contact =>
                    contact.name.toLowerCase().includes(filter.toLowerCase())
                  )
                  .map(contact => (
                    <ContactList
                      key={contact.id}
                      {...contact}
                      onDelete={handleDeleteContact}
                    />
                  ))}
              />
            </>
          )}
        </>
      )}
      {!user && (
        <>
          <p>Please log in or register.</p>
        </>
      )}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RestrictedRoute
                  redirectTo="/tasks"
                  component={<RegisterPage />}
                />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <RestrictedRoute
                  redirectTo="/tasks"
                  component={<LoginPage />}
                />
              </Suspense>
            }
          />
          <Route
            path="/tasks"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PrivateRoute redirectTo="/login" component={<TasksPage />} />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
