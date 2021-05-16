import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../../redux/auth';

import Form from '../../Form';
import TextField from '../../TextField';
import FormButton from '../../FormButton';

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <TextField
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
          label="Name"
          required
        />

        <TextField
          type="email"
          name="email"
          onChange={this.handleChange}
          value={email}
          label="Email"
          required
        />
        <TextField
          type="password"
          name="password"
          onChange={this.handleChange}
          value={password}
          label="Password"
          required
        />
        <FormButton type="submit">Sign up</FormButton>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  onFormSubmit: authOperations.signUp,
};

export default connect(null, mapDispatchToProps)(SignUpForm);
