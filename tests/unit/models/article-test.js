import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('article', 'Article', {
  // Specify the other units that are required for this test.
  needs: ['model:friend']
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(model);
});

test('state to be borrowed by default', function(assert){
	var model = this.subject({description: 'Article for test'});
	assert.equal(model.get('state'), 'borrowed');
});

test('friend relationship', function(assert){
	var klass = this.subject({}).constructor;
	var relationship = Ember.get(klass, 'relationshipsByName').get('friend');
	assert.equal(relationship.key, 'friend');
	assert.equal(relationship.kind, 'belongsTo');
});