Template.userAgency.events({
	'click [name=createAgency]' : function(e,tmpl) {
		e.preventDefault();
		var schAgency = sportsSchema.getSchema('총판매장');

		_.each(schAgency,function(val,idx){
			//인풋값이 있는 놈만 넣어준다. 스킴구조 유지위함.
			if($(tmpl.find("[name="+idx+"]")).val()) {
				schAgency[idx] = $(tmpl.find("[name="+idx+"]")).val();
			}
		});

		//선택한 소속아이디를 소속_id에 할당.
		var 임시소속아이디 = $(tmpl.find("select[name=소속_id]")).find('option:selected').attr('data-id')
		cl(임시소속아이디);
		schAgency['소속_id'] = 임시소속아이디;

		총판매장.insert(schAgency);

		tmpl.find('form').reset();
		$(tmpl.find('[name=cancelCreateAgency]')).trigger('click');

//        $(tmpl.find('#myModal')).modal({'show':false});

	},
	'click #btn_remove' : function(e,tmp) {
		e.preventDefault();

		총판매장.remove({_id:this._id});
	}
});

Template.userAgency.rendered = function(){
	nav_page_height();
};

Template.userAgency.helpers({
	현재화면이름 : function(obj) {
		return 현재화면이름(obj);
	}
});




Template.agencyTable.helpers({
	현재화면이름 : function(obj) {
		return 현재화면이름(obj);
	}
	,
	test : function() {
		return {no1 : "no1"};
	}
});


Template.userAgencyInputModal.helpers({
	현재화면이름 : function(obj) {
		return 현재화면이름(obj);
	}
	,
	총판리스트 : function() {
		if(Session.get("현재화면이름") === '매장') {
			var 임시총판 = 총판매장.find({$where:"this.소속_id.length === 0"}).fetch();
			_.each(임시총판 ,function(val,idx){

//				cl(idx);
//				cl(val.아이디);

//				cl(임시총판[idx].소속_id);
//				_.extend(val, {test2 : "test2val"});
			});
//			cl(임시총판);
			return 임시총판;

		}
	}
});

Template.agencyList.helpers({
	현재화면이름 : function(obj) {
		return 현재화면이름(obj);
	}
	,
	회원정보 : function() {

		if(Session.get("현재화면이름") === '총판')
			return 총판매장.find({$where:"this.소속_id.length === 0"});
		else if(Session.get("현재화면이름") === '매장') {
			//매장 회원 아이디를 구해서 붙여줌.
			var 매장리스트 = 총판매장.find({$where:"this.소속_id.length > 0"}).fetch();
			var 총판리스트 = 총판매장.find({$where:"this.소속_id.length === 0"}).fetch();

			_.each(매장리스트 ,function(val,idx){
				var 소속_id = 매장리스트[idx].소속_id
				var 해당총판 = _.findWhere(총판리스트, {_id : 소속_id});
				_.extend(val, {소속총판정보 : 해당총판});
			});

			return 매장리스트;
		}
//		else {
//			alert('Template.agencyTable.helpers({ : 화면이름에러 =' + Session.get("현재화면이름"));
//		}
	}
});

var 현재화면이름 = function(object) {
//	cl(object);
	return (typeof object === "undefined") ? Session.get("현재화면이름") : Session.get("현재화면이름") === object;
}