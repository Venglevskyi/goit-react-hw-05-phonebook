import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/contactsSelectors";
import PropTypes from "prop-types";

import contactList from "./contactList.module.css";
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id }) => (
      <CSSTransition key={id} timeout={250} classNames={contactList}>
        <ContactListItem id={id} />
      </CSSTransition>
    ))}
  </ul>
);

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state)
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps)(ContactList);
