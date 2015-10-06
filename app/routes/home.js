import Ember from 'ember';
import EmberData from 'ember-data'

export default Ember.Route.extend({
  model() {
    return {
      name: 'Steve'
    }
  }
});
