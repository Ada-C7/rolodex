import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Contact from 'app/models/contact';

const Rolodex = Backbone.Collection.extend ({
  model: Contact

})

export default Rolodex;
