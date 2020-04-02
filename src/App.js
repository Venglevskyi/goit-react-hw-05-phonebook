import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { getContacts } from "./redux/contacts/contactsOperations";
import {
  getLoadingContact,
  getErrorServer,
  getContact
} from "./redux/contacts/contactsSelectors";

import styles from "./base.module.css";
import animationTitle from "./css-animation-title/animationTitle.module.css";
import animationFormContact from "./Components/ContactForm/animationFormContact.module.css";

import Layout from "./Components/Layout/Layout";
import Spiner from "./Components/Loader/Loader";
import Toggler from "./Components/Toggler/Toggler";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import ThemeContext from "./context/ThemeContext";
import ServerError from "./Components/ServerError/ServerError";

class App extends Component {
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    const { isLoadingContact, errorServer, contacts } = this.props;
    return (
      <ThemeContext>
        {errorServer && <ServerError />}
        {!errorServer && (
          <Layout>
            <Toggler />
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames={animationTitle}
              unmountOnExit
            >
              <h1 className={styles.title}>Phonebook</h1>
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames={animationFormContact}
              unmountOnExit
            >
              <ContactForm />
            </CSSTransition>
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames={animationTitle}
              unmountOnExit
            >
              <h2 className={styles.title}>Contacts</h2>
            </CSSTransition>
            {contacts.length > 1 && <Filter />}
            {contacts.length === 1 && <ContactList />}
            {isLoadingContact && <Spiner />}
          </Layout>
        )}
      </ThemeContext>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContact: getLoadingContact(state),
  errorServer: getErrorServer(state),
  contacts: getContact(state)
});

const mapDispatchToProps = {
  onGetContacts: getContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
