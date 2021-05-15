import { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations } from '../redux/contacts';

import Section from '../components/Section';
import ContactsPageWrapper from '../components/contacts/ContactsPageWrapper';
import ContactForm from '../components/contacts/ContactForm';
import ContactList from '../components/contacts/ContactsList';

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Section>
          <ContactsPageWrapper>
            <ContactList />
            <ContactForm />
          </ContactsPageWrapper>
        </Section>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(Contacts);
