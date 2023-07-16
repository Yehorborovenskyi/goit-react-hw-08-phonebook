import { Form } from './LoginForm.styled';
import { Button, TextField, Box, Container } from '@mui/material';
import { Puff } from 'react-loading-icons';
import { useSelector } from 'react-redux';
import { selectAuthIsLoading, selectAuthError } from 'redux/auth/selectors';

export const LoginForm = ({ onData }) => {
  const isLoading = useSelector(selectAuthIsLoading);
  const status = useSelector(selectAuthError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onData({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
    if (!isLoading && status !== null) {
      form.reset();
    }
  };

  return (
    <Container component="div" maxWidth="xs" style={{ maxWidth: 440 }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: ' rgb(33 33 33) 0px 2px 10px 1px',
        }}
      >
        <h1 style={{ textAlign: 'center', fontFamily: 'monospace' }}>
          Entrance
        </h1>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            label="Email"
            name="email"
            autoComplete="email"
            type="email"
            variant="standard"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          {isLoading ? (
            <Button fullWidth variant="contained" style={{ marginTop: 30 }}>
              <Puff height={22} stroke="#fff" />
            </Button>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ marginTop: 30 }}
            >
              Log In
            </Button>
          )}
        </Form>
      </Box>
    </Container>
  );
};