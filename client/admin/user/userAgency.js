
Template.userAgency.events({
	'click [name=createAgency]' : function(e,tmpl) {
		e.preventDefault();
		var schAgency = sportsSchema.getSchema('총판매장');

//		console.log('******');
//		console.log($(tmpl.find("select[name=소속_id]")).find('option:selected').attr('data-id'));
//		$( tmpl.find('select[name=소속_id]')  ).find("option:selected").attr("data-id")
//		console.log('###test###');
//		console.log(e.currentTarget);
//		console.log(tmpl);
//		console.log($(tmpl.find("[name=소속_id]")));
//		console.log(this.data._id);

		_.each(schAgency,function(val,idx){
			//인풋값이 있는 놈만 넣어준다. 스킴구조 유지위함.
			var 임시소속아이디 = $(tmpl.find("select[name=소속_id]")).find('option:selected').attr('data-id')
			if(임시소속아이디) {
				schAgency['소속_id'] = 임시소속아이디;
			}
			else if($(tmpl.find("[name="+idx+"]")).val()) {
				schAgency[idx] = $(tmpl.find("[name="+idx+"]")).val();
			}
		});

//		console.log('### 저장된 객체 : ', schAgency);
//		console.log("### 저장된 총판매장 _id : ", 총판매장.insert(schAgency));

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
	console.log("!!! userAgency rendered helpers")
};

Template.userAgency.helpers({
	화면이름 : function() {
		console.log("!!! userAgency helpers")
		return this.화면이름;
	}
	,testWithData : function() {
		return
		{
			test1 : 'test1val';
		};
	}
});




Template.agencyTable.helpers({
	회원정보 : function() {
		console.log("!!! agencyTable helpers")

		cl(this.화면이름);
		if(this.화면이름 === '총판회원')
			return 총판매장.find({$where:"this.소속_id.length === 0"});
		else if(this.화면이름 === '매장회원') {
			return 총판매장.find({$where:"this.소속_id.length > 0"});
		}
		else {
			alert('Template.agencyTable.helpers({ : 화면이름에러 =' + this.화면이름);
		}
	}
	,화면이름 : function() {
		return this.화면이름;
	}


});




Template.userAgencyInputModal.helpers({
	화면이름 : function() {
		console.log("!!! userAgencyInputModal helpers")
		return this.화면이름;
	}
	,총판리스트 : function() {
		if(this.화면이름 === '매장회원') {
			var 임시총판 = 총판매장.find({$where:"this.소속_id.length === 0"}).fetch();
//			cl(임시총판[0]);

//			_.each(임시총판 |{},function(val,idx) {
//
//			};
//			_.extend(임시총판[0] || {}, {test11 : "test11"});
//			cl(임시총판[0]);
//			console.log(임시총판[0]);
//			cl("test");
			console.log('asdfasdfa');
			return 임시총판 = 총판매장.find({$where:"this.소속_id.length === 0"});
//			console.log(임시총판.length);
//			_.extend(임시총판[0] || {}, { a : 'test data' });
//			cl("ㅁㄴㅇㄹ");
//			var test = 임시총판[0];
//			_.extend(test,{test : 'test data'});
//			console.log(임시총판[0]);

		}
	}
});