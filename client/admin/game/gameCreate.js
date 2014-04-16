var Bulk = new Meteor.Collection( null );

Template.gameCreate.events({
    'click button[name=addGameCreateInput]' : function(e,tmpl){
       Bulk.insert({});
    }
});

Template.gameCreate.rendered = function(){

    nav_page_height();

};

Template.gameCreate.created = function(){
    Bulk.insert({});
    Bulk.insert({});
    Bulk.insert({});
    Bulk.insert({});
    Bulk.insert({});
};

Template.gameCreate.helpers({
    blankList : function(){
        return Bulk.find();
    },
    nba :  function(){
        return ['축구','축축구','축축축구'];
    }
});



Template.gameCreateInput.events({
    'click button[name=removeThisLine]' : function(e,tmpl){
        console.log(this._id);
    }
    ,
    "click .grp" : function(e,tmpl){
        $(e.target).parent().find(".grp").removeClass("btn-danger");
        $(e.target).addClass("btn-danger");
    }
    ,
    "click button[name=removeThisLine]" : function(e,tmpl){
        Bulk.remove({_id:this._id});
    }

    ,
    "focus input" : function(e,tmpl){

        var tr = $(e.target).closest("tr[name=game]");

        console.log( $(tr).attr("id") );

    }
    ,
    //??????????
    "focus .typeahead" : function(e,tmpl){

        Meteor.typeahead.inject();

        console.log('여기야','오ㅑㅗ야');
        //Meteor.typeahead(e.target);

    }



});

Template.gameCreateInput.rendered = function(){
};

Template.gameCreateInput.helpers({
    nba :  function(){
        return ['축구','축축구','축축축구'];
    }
});


//UI.body.rendered = function(){
//    Meteor.typeahead.inject();
//};




