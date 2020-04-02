import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError
} from "./contactsActions";

const baseUrl = "https://goit-phonebook-api.herokuapp.com/contacts";
const setHeaders = headers => {
  return {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg1ZTg0ZjUwYWYwODAwMTc2OTAyMDYiLCJpYXQiOjE1ODU4MzQwNjN9.LPl_lfqqUkcIndFIwI1LyYUIrfprg9_rc4QpED_uivc",
    ...headers
  };
};

const addContact = (name, number) => dispatch => {
  dispatch(addContactRequest());

  const contact = {
    name,
    number
  };
  const option = {
    method: "POST",
    headers: setHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify(contact)
  };

  fetch(baseUrl, option)
    .then(response => response.json())
    .then(data => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const getContacts = () => dispatch => {
  dispatch(getContactRequest());

  const option = {
    method: "GET",
    headers: setHeaders()
  };

  fetch(baseUrl, option)
    .then(response => response.json())
    .then(data => dispatch(getContactSuccess(data)))
    .catch(error => dispatch(getContactError(error)));
};

const removeContact = id => dispatch => {
  dispatch(removeContactRequest());

  const option = {
    method: "DELETE",
    headers: setHeaders()
  };

  fetch(`${baseUrl}/${id}`, option)
    .then(response => response.json())
    .then(() => dispatch(removeContactSuccess(id)))
    .catch(error => dispatch(removeContactError(error)));
};

export { addContact, getContacts, removeContact };
