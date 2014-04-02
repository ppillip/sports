
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
        alert('nice');
        var _이름 = tmpl.find('input[name=분류명]').value;
        var obj = sportsSchema.getSchema('게임카테고리종목',{이름:_이름});
        console.log(obj);

        Meteor.call('saveGameCategoryEvents',obj,'', '', 'UTF-8',function(err,result){
            if(err){

            }

            console.log(result);
        });

    }
});

Template.gameInputForm.rendered = function(){

};

Template.gameInputForm.helpers({

});

Template.listItem.events({

});

Template.listItem.rendered = function(){

};

Template.listItem.helpers({

});
