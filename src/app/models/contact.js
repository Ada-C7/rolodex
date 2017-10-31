import Backbone from 'backbone';

var Contact = Backbone.Model.extend({

  getImage: function(){
    var images = [
      "imgs/andy.png",
      "imgs/angela.png",
      "imgs/creed.png",
      "imgs/dwight.png",
      "imgs/gabe.png",
      "imgs/jim.png",
      "imgs/kelly.png",
      "imgs/michael.png",
      "imgs/pam.png"
    ];
    return _.shuffle(images)[0];
  },

  defaults: {
    name: "YOUR NAME",
    phone: "1-800-555-5555",
    email: "youremail@gmail.com",
    image: "imgs/pam.png"
    // getImage()
  }


});

export default Contact;
