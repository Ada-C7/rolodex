import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';
import ContactView from '../views/contact_view.js';
import ContactListView from './contact_list_view.js';

const ContactDetail = Backbone.View.extend({
    initialize: function(params){
        //need to add more stuff here about adding class and listening events
        this.template = params.template;
    },

    render: function(){
        var compiledTemplate = this.template(this.model.toJSON());
        this.$el.html(compiledTemplate);
        return this;
    }

});

export default ContactDetail;
