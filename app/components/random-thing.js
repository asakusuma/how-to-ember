import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    talk() {
      this.attrs.myAction(this.get('theMessage'));
    }
  }
});
