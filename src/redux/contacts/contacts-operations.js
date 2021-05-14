import axios from 'axios';
import  contactsActions  from './contacts-actions'; 
const { fetchContactsRequest,
  fetchContactsSuccess,
   fetchContactsError,
   addContactRequest,
   addContactSuccess,
   addContactError,
   deleteContactRequest,
    deleteContactSuccess,
    deleteContactError } = contactsActions;


const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
}

const addContact = (contact) => async dispatch => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
}

const deleteContact = (contactId) => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message))
  }
}

//eslint-disable-next-line 
export default { fetchContacts, addContact, deleteContact }