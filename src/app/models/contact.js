import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
    defaults: {
      'name': "Fluff Butt",
      'email': "butt@fluff.com",
      'phone': '555-5555'
    }
});

export default Contact;
