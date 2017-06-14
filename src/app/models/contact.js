import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
     defaults: {
       name: '',
       email: '',
       phone: ''
     }
});

export default Contact;
