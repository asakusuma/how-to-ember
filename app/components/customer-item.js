import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateMoney(newAmount) {
      this.attrs.updateMoneyAction(newAmount);
    }
  }
});
