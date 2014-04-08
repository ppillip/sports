Template.userDetails.events({

});

Template.userDetails.rendered = function(){
	nav_page_height();
	Session.set('isPopup', true);
};

Template.userDetails.helpers({

});