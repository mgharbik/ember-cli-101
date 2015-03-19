import Ember from 'ember';

export default Ember.Controller.extend({
	hasDescription: Ember.computed.notEmpty('model.description'),
	hasNotes: Ember.computed.notEmpty('model.notes'),
	isValid: Ember.computed.and('hasDescription', 'hasNotes'),
	actions: {
		save: function(){
			if (this.get('isValid')){
				return true;
			} else {
				this.set('errorMessage', 'You have to fill all the fields');
				return false;
			}
		},
		cancel: function(){
			this.set('errorMessage', '');
			return true;
		}
	}
});
