import React from 'react';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';

class Form extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  nameId = nanoid();
  numberId = nanoid();

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState(prevState => {
      return {
        [name]: value,
      };
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.reset();

    this.props.onSubmit(this.state);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={this.state.name}
            id={this.nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            required
          />
        </label>
        <label htmlFor={this.numberId}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={this.state.number}
            id={this.numberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            required
          />
          <button className={styles.button__form} type="submit">
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

export default Form;
