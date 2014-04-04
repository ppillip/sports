
Template.gameCategoryInfo.events({

});

Template.gameCategoryInfo.rendered = function(){

    console.log(this);
};

Template.gameCategoryInfo.helpers({
    list : function(){
        return 게임카테고리종목.find();
    }
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
                tmpl.find('file').value = '';
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
    'click .glyphicon-remove' : function(){
        Meteor.call('removeGame',this._id,function(err,result){
            if(err){
                alert(err);
            }else{
                alert(result.msg || '성공했습니다.');
            }
        });
    }
});

Template.listItem.rendered = function(){

};

Template.listItem.helpers({

});
