import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { lazy } from 'react';

import { contactsOperations, contactsSelectors } from '../../../redux/contacts';
import Loader from '../../Loader';
const Error = lazy(() =>
  import('../../Error' /* webpackChunkName: "error-page" */),
);

const useStyles = createUseStyles({
  contactItem: {
    borderBottom: ' 1px solid grey',
  },
  deleteBtn: {
    margin: 15,
    marginLeft: 25,
    fontSize: '16px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    color: '#3f51b5',
    textTransform: 'capitalize',
    border: '1px solid #3f51b5',
    borderRadius: '5px',
    transition: 'boxShadow 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover, &:focus': {
      cursor: 'pointer',
      boxShadow:
        '0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.12)',
    },
  },
  text: {
    fontSize: '16px',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    color: '#3f51b5',
  },
});

const ContactList = ({
  filteredContacts,
  onDeleteContact,
  isLoading,
  emptyContacts,
  isError,
}) => {
  const { contactItem, deleteBtn, text } = useStyles();

  return (
    <>
      {isError && <Error error={isError} />}
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {filteredContacts.map(({ name, number, id }) => (
            <li key={id} className={contactItem}>
              <span className={text}>
                {name}: {number}
              </span>
              <button
                type="button"
                className={deleteBtn}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {!isLoading && emptyContacts && (
        <p className={text}>Add your first contact</p>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  emptyContacts: contactsSelectors.getContacts(state).length === 0,
  filteredContacts: contactsSelectors.getFilteredContacts(state),
  isLoading: contactsSelectors.getLoader(state),
  isError: contactsSelectors.getIsError(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
