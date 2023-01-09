import React from 'react';
import Form from './Form/Form'
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList';
import { useState, useEffect } from 'react';


const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contact') ?? [])
  } );
  
  const [filter, setFilter] = useState('')
  
  const formSubmit = contact => {
    contact = {
      id: nanoid(),
      name: contacts.name,
      number: contacts.number
    }
    console.log(contacts)

    setContacts(prevState => 
      // const { name, number, id } = prevState;
      [contact, ...prevState]
    )
      
      const nameFilter = contacts.filter(cont => cont.name.includes(contact.name))
      const nameLength = nameFilter.length
       
      if (nameLength === 1) {
      
        return alert(contact.name, 'is already in contacts')
        
      }
    
  }

  const handleChangeFilter = evt => {
    setFilter(evt.target.value)
  };

 const handleDelete = contactId => {
   setContacts(prevState => contacts.filter(contact => contact.id !== contactId))
       
 }
  
  useEffect(() => {
    window.localStorage.setItem('contact', JSON.stringify(contacts))
    
  }, [contacts])


  // useEffect(() => {
  //   const contacts = localStorage.getItem('contact')
  //   const parsedContacts = JSON.parse(contacts)
  //   setContacts(parsedContacts)
  // }, [])

  

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contact', JSON.stringify(this.state.contacts))
  //   }
  // }

  
    
    const visibleContact = contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter))
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <div>
          <h1>PhoneBook</h1>
          <Form onSubmit={formSubmit} />
          
          <h2>Contacts</h2>
          <Filter
          onChange={handleChangeFilter}
          value={filter}
          />
          
          <ContactList
            contacts={visibleContact}
            handleDelete={handleDelete}
            />
      </div>
        
      </div>
    );
  };

export default App
