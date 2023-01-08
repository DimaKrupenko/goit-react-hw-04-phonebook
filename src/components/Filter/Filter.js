import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.filter__label} htmlFor="">
      Find contacts by names
      <input
        className={styles.filter__input}
        type="text"
        onChange={onChange}
        value={value}
      />
    </label>
    //     );
  );
};

export default Filter;
