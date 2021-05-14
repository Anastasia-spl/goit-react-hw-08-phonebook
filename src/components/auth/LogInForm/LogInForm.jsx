import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../../redux/auth';

import Form from '../../Form';
import TextField from '../../TextField';
import FormButton from '../../FormButton';

class LogInForm extends Component {
  state = {
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
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <TextField
          type="email"
          name="email"
          onChange={this.handleChange}
          value={email}
          label="Email"
        />
        <TextField
          type="password"
          name="password"
          onChange={this.handleChange}
          value={password}
          label="Password"
        />
        <FormButton type="submit">Log in</FormButton>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  onFormSubmit: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LogInForm);
