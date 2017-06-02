import Backbone from 'backbone';
import Contact from 'app/models/contact.js';

const Rolodex = Backbone.Collection.extend({
  model: Contact
});

export default Rolodex;
