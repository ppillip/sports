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
});

Template.gameCreateInput.rendered = function(){

};

Template.gameCreateInput.helpers({

});
