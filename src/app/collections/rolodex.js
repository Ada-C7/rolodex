import Backbone from 'backbone';
import Contact from '../models/contact.js';

var Rolodex = Backbone.Collection.extend({
  model: Contact
});

export default Rolodex;
