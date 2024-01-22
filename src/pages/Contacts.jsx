import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

import { Box, Container, CssBaseline } from '@mui/material';

export default function ContactsPage() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: '#ECC424',
            color: '#314448',
            width: '50vw',
            marginTop: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '16px',
            borderRadius: '12px',
          }}
        >
          <ContactForm />
          <Filter />
          <ContactList />
        </Box>
      </Container>
    </>
  );
}
