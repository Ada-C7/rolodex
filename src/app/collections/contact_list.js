import Backbone from 'backbone';
import Contact from '../models/contact.js';

//an instance of backbone we create is going to be a Collection of  model (same model) instances here
//create a collection type

var ContactList = Backbone.Collection.extend({
  model: Contact//now all the instances therein will be initialized with DAta
});

export default ContactList;
