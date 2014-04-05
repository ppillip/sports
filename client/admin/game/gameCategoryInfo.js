
Template.gameCategoryInfo.events({

});

Template.gameCategoryInfo.rendered = function(){

    console.log(this);
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


Template.gameInputForm.events({
    'click button[name=save]' : function(e,tmpl){
        var _이름 = tmpl.find('input[name=분류명]').value;
        var obj = sportsSchema.getSchema('게임카테고리종목',{이름:_이름});

        Meteor.call('saveGameCategoryEvents',obj,'', '', 'UTF-8',function(err,result){

            if(err){
                alert(err);
            }else{
                tmpl.find('input[name=분류명]').value = '';
                $(tmpl.find('file')).val('');
                alert(result.msg);
            }

        });

    }
});

Template.gameInputForm.rendered = function(){

};

Template.gameInputForm.helpers({

});

Template.listItem.events({
    'click .glyphicon-remove' : function(e){

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

        console.log('this',this);

        $('h2[name=_hidden_gameName]').html('['+this.이름+'] 리그목록');

        Session.set('game_id',this._id);

    }
});

Template.listItem.rendered = function(a,b){
    cl('listItem rendered');
};

Template.listItem.helpers({

});



Template.leagueInputForm.events({

    'click button[name=save]' : function(e,tmpl){

        if( !Session.get('game_id')) {
            alert('종목을 선택하세요');
            return;
        };

        var 리그명 = tmpl.find('input[name=리그명]').value;

        var obj = sportsSchema.getSchema('게임카테고리리그',{이름:리그명});

        obj.소속종목_id = Session.get('game_id');

        Meteor.call('saveGameCategoryLeague',obj,'', '', 'UTF-8',function(err,result){

            if(err){
                alert(err);
            }else{
                tmpl.find('input[name=리그명]').value = '';
                $(tmpl.find('file')).val('');
                alert(result.msg);
            }

        });

    }
});

Template.leagueInputForm.rendered = function(){

};

Template.leagueInputForm.helpers({

});


Template.leagueListItem.events({

});

Template.leagueListItem.rendered = function(){
    cl('leagueListItem rendered');
};

Template.leagueListItem.helpers({

});
