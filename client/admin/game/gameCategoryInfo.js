
Template.gameCategoryInfo.events({

});

Template.gameCategoryInfo.rendered = function(){
	nav_page_height();
    $('#datepicker').datepicker();
};

Template.gameCategoryInfo.helpers({
    list : function(){
        return 게임카테고리종목.find();
    }
    ,
    leagueList : function(){
        return 게임카테고리리그.find();
    }
    ,
    game : function(){
        Session.get('game_id');
    }
});

Deps.autorun(function() {
    console.log(Session.get('game_id'));
});

/*
* 종목등록
* */
Template.gameInputForm.events({
    'click button[name=save]' : function(e,tmpl){
        var _이름 = tmpl.find('input[name=분류명]').value;
        var obj = sportsSchema.getSchema('게임카테고리종목',{이름:_이름});

        Meteor.call('saveGameCategoryEvents',obj,'', '', 'UTF-8',function(err,result){

            if(err){
                alert(err);
            }else{
                tmpl.find('input[name=분류명]').value = '';
                alert(result.msg);
            }

        });

    }
});

Template.gameInputForm.rendered = function(){
	nav_page_height();

};

Template.gameInputForm.helpers({

});

Template.listItem.events({
    'click .glyphicon-remove' : function(e,tmpl){

        if(!confirm('삭제하시겠습니까?')){
            console.log('취소됨',this._id);
            return;
        }

        Meteor.call('removeGameCategoryEvents',this._id,function(err,result){
            if(err){
                alert(err);
            }else{
                alert(result.msg || '성공했습니다.');
            }
        });
    }
    ,
    'click .dd-handle' : function(e,tmpl){

        $('h3[name=_hidden_gameName]').html('<b>['+this.이름+']</b> 목록');

        Session.set('game_id',this._id);
        Session.set('종목명',this.이름);

    }
});

Template.listItem.rendered = function(a,b){
    cl('listItem rendered');
};

Template.listItem.helpers({

});


/*
 * 리그등록
 * */
Template.leagueInputForm.events({

    'click button[name=save]' : function(e,tmpl){

        if( !Session.get('game_id')) {
            alert('종목을 선택하세요');
            return;
        };

        if(!tmpl.find('input[type=file]').files[0]){
            alert('아이콘이미지 필수입니다.');
            return;
        }

        var obj = sportsSchema.getSchema('게임카테고리리그',{
            이름          :tmpl.find('input[name=리그명]').value
           ,소속종목_id   :Session.get('game_id')
           ,경로명        :Session.get('종목명') + ' > ' + tmpl.find('input[name=리그명]').value
           ,fullPath     :Session.get('종목명') + ' > ' + tmpl.find('input[name=리그명]').value
        })

        ,fileObj = tmpl.find('input[type=file]').files[0]

        ,fileReader = new FileReader();

        fileReader.onload = function(file) {
            Meteor.call('saveGameCategoryLeague',obj,file.srcElement.result,obj.name,'binary',function(err,result){

                if(err){
                    alert(err);
                }else{
                    tmpl.find('input[name=리그명]').value = '';
                    $(tmpl.find('file')).val('');
                    alert(result.msg);
                }

            });
        };

        fileReader['readAsBinaryString'](fileObj);

    }
});

Template.leagueInputForm.rendered = function(){
	nav_page_height();

};

Template.leagueInputForm.helpers({

});


Template.leagueListItem.events({
    'click .glyphicon-remove' : function(e){

        if(!confirm('삭제하시겠습니까?')){
            console.log('취소됨',this._id);
            return;
        }

        Meteor.call('removeGameCategoryLeague',this._id,function(err,result){
            if(err){
                alert(err);
            }else{
                alert(result.msg || '성공했습니다.');
            }
        });
    }
});

Template.leagueListItem.rendered = function(){
	nav_page_height();
    cl('leagueListItem rendered');
};

Template.leagueListItem.helpers({

});

