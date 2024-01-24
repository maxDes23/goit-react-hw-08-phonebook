import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { Box, Container, CssBaseline } from '@mui/material';

import { deleteContact } from '../redux/contacts/operations'; 

export default function ContactsPage() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {

    if (typeof deleteContact === 'function') {
      dispatch(deleteContact(contactId));
    } else {
      console.error('deleteContact is not defined');
    }
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
          <Filter />
          <ContactList
            contacts={contacts}
            deleteContact={handleDeleteContact}
          />
        </Box>
      </Container>
    </>
  );
}
