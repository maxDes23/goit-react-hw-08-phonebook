
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styled from 'styled-components';
import {
  addContact,
  deleteContact,
  setFilter,
  fetchContacts,
} from './contactsSlice';
import { login, logout } from '../redux/authSlice';
import Register from './Register';
import Login from './Login';

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
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
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

  const filteredContacts = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <Container>
      <h1>Phonebook</h1>
      {user && (
        <>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleLogout}>Logout</button>
          <ContactForm onSubmit={handleAddContact} />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
          />
        </>
      )}
      {!user && (
        <>
          <p>Please log in or register.</p>
        </>
      )}
      <Routes>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
       
      </Routes>
    </Container>
  );
};

export default App;
