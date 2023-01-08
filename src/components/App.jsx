import React from 'react';
import Form from './Form/Form'
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList';


class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  formSubmit = contact => {
    contact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number
    }
    console.log(contact)

    this.setState(prevState => {
      // const { name, number, id } = prevState;
      const nameFilter = this.state.contacts.filter(cont => cont.name.includes(contact.name))
      const nameLength = nameFilter.length
       
      if (nameLength === 1) {
      
        return alert(contact.name, 'is already in contacts')
        
      }
       
      return {
        contacts: [contact, ...prevState.contacts]       
      }
    })
  }

  handleChangeFilter = evt => {
    
    this.setState(prevState => {
      return {
        filter: evt.target.value,
      };
    });
  };

  handleDelete = contactId => {
   
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
      }
    })
       
  }
  render() {
    
    const visibleContact = this.state.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
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
          <Form onSubmit={this.formSubmit} />
          
          <h2>Contacts</h2>
          <Filter
          onChange={this.handleChangeFilter}
          value={this.state.filter}
          />
          
          <ContactList
            contacts={visibleContact}
            handleDelete={this.handleDelete}
            />
      </div>
        
      </div>
    );
  }
};

export default App
