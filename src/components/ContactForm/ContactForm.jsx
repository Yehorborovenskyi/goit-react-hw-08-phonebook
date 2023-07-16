import { Form, Label } from './ContactForm.styled';
import { Input } from '@mui/material';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { Puff } from 'react-loading-icons';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function ContactForm({ onClose }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isGeneralLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} is already in contacts`);
    } else {
      setIsLoading(true);
      dispatch(addContact({ name, number }));
      form.reset();
      onClose();
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <Form onSubmit={handleSubmit}>
      <Label
        htmlFor={nameInputId}
        style={{ fontFamily: 'Caveat', fontWeight: '600' }}
      >
        Name
        <Input
          color="primary"
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label
        htmlFor={numberInputId}
        style={{ fontFamily: 'Caveat', fontWeight: '600' }}
      >
        Number
        <Input
          color="primary"
          type="tel"
          name="number"
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      {isLoading && !error && isGeneralLoading ? (
        <Button variant="contained" style={{ margin: '0 auto' }}>
          <Puff height={24} stroke="#fff" style={{ padding: '0 40px' }} />
        </Button>
      ) : (
        <Button variant="contained" style={{ margin: '0 auto' }} type="submit">
          Add to contact
        </Button>
      )}
    </Form>
  );
}