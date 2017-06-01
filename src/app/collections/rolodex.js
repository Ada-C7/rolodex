import Backbone from 'backbone';
import Contact from '../models/contact';


var Rolodex = Backbone.Collection.extend({

  model: Contact

  save: function(){
    return this.where({save: true})
  },


})






// const Rolodex = Backbone.Collection.extend({
  // This Rolodex represents a collection of Contacts
  // and should include any methods or attributes
  // that are involved in working with more than one
  // Contact.
// });

export default Rolodex;
