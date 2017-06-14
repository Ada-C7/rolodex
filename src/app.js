import $ from 'jquery';
import _ from 'underscore';
import Yolodex from './app/collections/yolodex.js'
import YolodexView from './app/views/yolodex_view.js'

var contactData = [
     {
          name: 'Princess Leia',
          email: 'princess@therebellion.com',
          phone: '+3 (333) 333-3333'
     }, {
          name: 'Darth Vadar',
          email: 'darth@theempire.com',
          phone: '+1 (111) 111-1111'
     }, {
          name: 'Han Solo',
          email: 'han@themilleniumfalcon.com',
          phone: '7+ (777) 777-7777'
     }
];

var firstYolodex = new Yolodex(contactData);

$( document ).ready( function() {

     var firstYolodexView = new YolodexView({
          model: firstYolodex,
          template: _.template($('#tmpl-contact-card').html()),
          el: '#application'
     });

     firstYolodexView.render();
});
