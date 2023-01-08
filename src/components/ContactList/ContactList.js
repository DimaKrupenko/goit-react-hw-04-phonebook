// import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={styles.contact}>
      {contacts.map(contact => (
        <li className={styles.contact__list} key={contact.id}>
          {contact.name + ': ' + contact.number}
          <button
            className={styles.contact__buttton}
            type="click"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
};
