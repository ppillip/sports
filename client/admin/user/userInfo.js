
Template.userInfo.events({
    'click [name=createAgency]' : function(e,tmpl) {
        e.preventDefault();

        var schAgency = sportsSchema.getSchema('회원');

        _.each(schAgency,function(val,idx){
            schAgency[idx] = $(tmpl.find("[name="+idx+"]")).val();
        });

        회원.insert(schAgency);

        tmpl.find('form').reset();
        $(tmpl.find('[name=cancelCreateAgency]')).trigger('click');

//        $(tmpl.find('#myModal')).modal({'show':false});

    }
	,
	'click #btn_remove' : function(e,tmpl) {
        e.preventDefault();

        회원.remove({_id:this._id});
    }
	,
	'click [name=link_userDetails]' : function(e, tmpl) {
		var selectedId = $(e.target).attr('user_id');
//		Clipboard.insert({ selected_id : $(e.target).attr('user_id') });


		openPOP('/userDetails/'+selectedId, 'userDetails', 600, 600, 'yes');

//		ClipStream.on('selected_id', function(msg) {
//			console.log('msg' + msg);
//		});
//
//		ClipStream.emit('selected_id', $(e.target).attr('user_id'));
	}

//	// start new windows
//	,'click a[target=_blank]' : function (event) {
//		event.preventDefault();
//		window.open(event.target.href, '_blank');
//	}
});

Template.userInfo.rendered = function(){
	nav_page_height();
//	cl("test");
//	cl(this.data.testData);
};

Template.userInfo.helpers({
	현재화면이름 : function() {
		return 현재화면이름();
	}
});

Template.userTable.helpers({
	회원정보: function(){
		if(Session.get("현재화면이름") === "일반") {
			return 회원.find({회원종류 : "일반"});
		}
		else if(Session.get("현재화면이름") === "운영"){
			return 회원.find({회원종류 : "운영"});
		}
		else if(Session.get("현재화면이름") === "블랙리스트"){
			return 회원.find({회원종류 : "일반", $or : [ {$where:"this.메모.length > 0"}, {$where:"this.간단메모 > 0"} ] });
		}
	}
	,
	현재화면이름 : function() {
		return 현재화면이름();
	}
});

var 현재화면이름 = function() {
	return Session.get("현재화면이름");
}