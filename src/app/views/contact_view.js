import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';


const ContactView = Backbone.View.extend({
    initialize: function(params){
        this.template = params.template;
    }

});

export default ContactView;
