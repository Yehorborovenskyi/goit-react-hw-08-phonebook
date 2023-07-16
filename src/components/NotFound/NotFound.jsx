import { Center, Title, Description } from './NotFound.styled';
import React, { useState, useEffect } from 'react';

function RedirectingPage() {
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(seconds => seconds - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.replace('/goit-react-hw-08-phonebook');
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <Title>Redirecting...</Title>
      <Description>
        You will be redirected to the home page in {secondsLeft} seconds.
      </Description>
    </div>
  );
}

function NotFoundPage() {
  return (
    <Center>
      <Title>404 Not Found</Title>
      <Description>
        Sorry, the page you are looking for could not be found.
      </Description>
      <RedirectingPage />
    </Center>
  );
}

export default NotFoundPage;