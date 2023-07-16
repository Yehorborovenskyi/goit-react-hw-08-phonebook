import { Puff } from 'react-loading-icons';
import { useSelector, useDispatch } from 'react-redux';
import { selectError } from 'redux/contacts/selectors';
import { useState } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ContactLi } from './Contact.styled';
import { deleteContact } from 'redux/contacts/contactsOperations';

export const Contact = ({ id, name, number }) => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loader = () => {
    setIsLoading(true);
  };

  return (
    <ContactLi>
      <p style={{ fontFamily: 'Caveat', fontWeight: '400', fontSize: 18 }}>
        {name}: {number}
      </p>
      {isLoading && !error ? (
        <Button style={{ marginLeft: 25, height: 36 }} variant="contained">
          <Puff height={18} stroke="#fff" style={{ padding: '0.5px 10.5px' }} />
        </Button>
      ) : (
        <Button
          type="button"
          style={{ marginLeft: 25, height: 36 }}
          variant="contained"
          endIcon={<DeleteIcon />}
          size="small"
          onClick={() => {
            dispatch(deleteContact(id));
            loader();
          }}
        >
          Delete
        </Button>
      )}
    </ContactLi>
  );
};