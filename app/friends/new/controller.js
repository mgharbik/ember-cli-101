import FriendsBaseController from '../base-controller';

export default FriendsBaseController.extend({
	actions: {
		cancel: function(){
			this.transitionToRoute('friends');
			return false;
		}
	}
});
