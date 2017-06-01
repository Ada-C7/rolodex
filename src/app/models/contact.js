import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
    // This model should have the attributes for
    // a single contact: name, phone number, and email.

    defaults: {
        name: '',
        phoneNumber: '',
        email: ''
    },

    logStatus: function(){
        console.log('Model' + this.cid);
        console.log('Name' + this.get('name'));
        console.log('Phone' + this.get('phoneNumber'));
        console.log('Email' + this.get('email'));
    },

    initialize: function(params){
        console.log('Starting');
        this.logStatus();
    }
});

export default Contact;
