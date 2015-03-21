import Ember from 'ember';

export default Ember.Controller.extend({
	possibleStates: ["borrowed", "returned"],

	contentDidChange: function(){
		console.log('Called when add or remove an article.');
	}.observes('model.[]'),
	
	StateDidChange: function(){
		console.log('Called when the state property changed for any of the articles.');		
	}.observes('model.@each.state')
});
