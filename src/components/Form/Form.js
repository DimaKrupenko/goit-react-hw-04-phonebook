import React from 'react';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [contacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const data = { contacts, name, number };

  const nameId = nanoid();
  const numberId = nanoid();

  // handleChange = evt => {
  //   const { name, value } = evt.target;
  //   this.setState(prevState => {
  //     return {
  //       [name]: value,
  //     };
  //   });
  // };

  const handleChangeName = evt => {
    console.log(evt.target.value);
    setName(evt.target.value);
  };

  const handleChangeNunmber = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    reset();

    onSubmit(data);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          id={nameId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChangeName}
          required
        />
      </label>
      <label htmlFor={numberId}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          id={numberId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChangeNunmber}
          required
        />
        <button className={styles.button__form} type="submit">
          Add contact
        </button>
      </label>
    </form>
  );
};

export default Form;
