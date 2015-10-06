import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sayMessage(msg) {
      alert(msg);
    }
  }
});
