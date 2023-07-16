import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectError, selectContacts } from 'redux/contacts/selectors';
import Modal from 'components/Modal/Modal';
import {
  BoxSection,
  // TwoSections,
  BackGround,
  Add,
  Close,
} from 'components/ContactForm/ContactForm.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* <h1 style={{ fontFamily: 'revert-layer' }}>Phonebook</h1> */}

      <Section title="Contacts">
        <BoxSection style={{ maxWidth: 500 }}>
          <Add type="button" onClick={openModal}>
            +
          </Add>
          {contacts.length !== 0 && <Filter />}
          {!error && <ContactList />}
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <BackGround>
                <Close type="button" onClick={closeModal}>
                  x
                </Close>
                <Section title="Additor">
                  <ContactForm onClose={closeModal} style={{ maxWidth: 500 }} />
                </Section>
              </BackGround>
            </Modal>
          )}
        </BoxSection>

        {error && (
          <b style={{ margin: '10px auto', width: '50%', textAlign: 'center' }}>
            The operation failed with error: ${error}
          </b>
        )}
      </Section>
      {/* </TwoSections> */}
    </div>
  );
};

export default Contacts;
