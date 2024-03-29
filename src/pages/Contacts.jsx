import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Box, Container, CssBaseline } from '@mui/material';

import { deleteContact } from '../redux/contacts/operations';

export default function ContactsPage() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: '#ECC424',
            color: '#314448',
            width: '25vw',
            marginTop: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '16px',
            borderRadius: '12px',
          }}
        >
          <ContactForm />
          <Filter value={filter} onChange={handleFilterChange} />
          <ContactList
            contacts={filteredContacts}
            deleteContact={handleDeleteContact}
          />
        </Box>
      </Container>
    </>
  );
}
