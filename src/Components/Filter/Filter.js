import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { formFilter } from "../../redux/contacts/contactsActions";
import {
  getFilterContact,
  getVisibleContacts
} from "../../redux/contacts/contactsSelectors";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem/ContactListItem";

import styles from "./filter.module.css";
import contactList from "../ContactList/contactList.module.css";

const Filter = ({ value, onChange, contacts }) => (
  <div className={styles.filterForm}>
    <label className={styles.FormLabel}>
      Find contacts by name
      <input
        className={styles.FormInput}
        type="name"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
    <TransitionGroup component="ul">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames={contactList}>
          <ContactListItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
  value: getFilterContact(state)
});

const mapDispatchToProps = {
  onChange: formFilter
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
