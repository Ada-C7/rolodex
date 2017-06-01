import Backbone from 'backbone';
import Contact from '../models/contact.js'

const ContactList = Backbone.Collection.extend({
    model: Contact
  // This Rolodex represents a collection of Contacts
  // and should include any methods or attributes
  // that are involved in working with more than one
  // Contact.
});

export default ContactList;
