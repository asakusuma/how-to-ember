import Ember from 'ember';

export default Ember.Component.extend({
  totalAssets: Ember.computed('customers', function() {
    let customers = this.get('customers');
    let total = 0;
    for (let i = 0; i < customers.length; i++) {
      total += customers[i].money;
    }
    return total;
  }),
  actions: {
    onChildUpateMoney(index, newAmount) {
      let newCustomers = [];
      let oldCustomers = this.get('customers');
      for (let i = 0; i < oldCustomers.length; i++) {
        newCustomers[i] = oldCustomers[i];
        if (i === index) {
          newCustomers[i].money = newAmount;
        }
      }

      this.set('customers', [{name:'asa', money: 10}]);
    }
  }
});
