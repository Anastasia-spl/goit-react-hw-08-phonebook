import { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../../redux/contacts';
import styles from './ContactForm.module.scss';

import TextField from '../../TextField';
import FormButton from '../../FormButton';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  checkDuplicateContacts = newContact => {
    const { existedContacts } = this.props;
    const isDuplicateNumber = existedContacts.find(
      ({ number }) => number === newContact.number,
    );
    const isDuplicateName = existedContacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (isDuplicateNumber) {
      alert('This number is already in contacts.');
      return true;
    }

    if (isDuplicateName) {
      alert(`${isDuplicateName.name} is already in contacts.`);
      return true;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.checkDuplicateContacts(this.state)) {
      return;
    }
    this.props.addContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <TextField
          type="text"
          // className={styles.input}
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
          label="Name"
        />

        <TextField
          type="tel"
          name="number"
          value={number}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
          label="Number"
        />
        <FormButton type="submit">Add contact</FormButton>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  existedContacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: data => dispatch(contactsOperations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
