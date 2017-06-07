import Backbone from 'backbone';

var Contact = Backbone.Model.extend({

  defaults: {
    name: "YOUR NAME",
    phone: "1-800-555-5555",
    email: "youremail@gmail.com",
    image: "imgs/andy.png"
  }

});

export default Contact;
