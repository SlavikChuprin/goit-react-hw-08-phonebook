import Filter from '../Filter';
import ContactList from '../ContactList';
import ContactForm from '../ContactForm';

function Contacts() {
  return (
    <div className="App">
      <div className="Contacts">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2> Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default Contacts;
