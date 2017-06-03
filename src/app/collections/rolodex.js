import Backbone from 'backbone';
import Contact from '../models/contact';

var Rolodex = Backbone.Collection.extend({
  model: Contact
});

export default Rolodex;
