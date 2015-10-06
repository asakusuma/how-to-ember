import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        name: 'Steve',
        money: 20
      },
      {
        name: 'Chrispy',
        money: 150
      }
    ];
  }
});
