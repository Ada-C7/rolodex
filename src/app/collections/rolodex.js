import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from '../models/contact.js';


const Rolodex = Backbone.Collection.extend({

    model: Contact
});

export default Rolodex;
