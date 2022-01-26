import React from 'react';
import { useState } from 'react';
import shortid from 'shortid';
import styles from './phonebook.module.css';

import {
  useCreateContactMutation,
  useGetAllContactsQuery,
} from '../../redux/contacts';

export default function Form() {
  const { data } = useGetAllContactsQuery();
  const [createContact] = useCreateContactMutation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameInputId = shortid.generate();
  const phoneInputId = shortid.generate();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const findName = data.find(con => con.name === name);
    if (findName) {
      alert(`${name} is already in contacts`);
    } else {
      createContact({ name, phone });
    }
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={styles.Container} onSubmit={handleSubmit}>
      <h2>Phonebook</h2>
      <label htmlFor={nameInputId} className={styles.InputForm}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          id={nameInputId}
        ></input>
      </label>
      <label htmlFor={phoneInputId} className={styles.InputForm}>
        {' '}
        Phone
        <input
          type="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          id={phoneInputId}
        ></input>
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
