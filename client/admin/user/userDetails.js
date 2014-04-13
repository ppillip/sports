Template.userDetails.events({

});

Template.userDetails.rendered = function(){
	nav_page_height();
//	cl("rendered");
//	cl(this.data.selectedId);
};

Template.userDetails.helpers({
	회원정보 : function() {
		cl("helpers")
//		cl(this.selectedId);
		var 현재회원 = 회원.findOne(this.selectedId);
//		cl(현재회원);
		var 매장정보 = 총판매장.findOne(현재회원.소속_id);
//		cl(매장정보);
		_.extend(현재회원, {매장정보 : 매장정보});
		cl(현재회원);

		return 현재회원;
	}
});
