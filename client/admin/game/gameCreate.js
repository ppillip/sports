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
    ,
    "focus input" : function(e,tmpl){

        var tr = $(e.target).closest("tr[name=game]");

        console.log( $(tr).attr("id") );

    }
});

Template.gameCreateInput.rendered = function(){

};

Template.gameCreateInput.helpers({

});



Template.gameCreateInput.settings = {
    position: 'bottom',
    limit: 30,  // more than 20, to emphasize matches outside strings *starting* with the filter
    rules: [
        {
            token: '@',
            collection: '게임카테고리리그',  // Meteor.Collection object means client-side collection
            field: 'fullPath',
            limit: 10000,
            // set to true to search anywhere in the field, which cannot use an index.
            matchAll: true,  // 'ba' will match 'bar' and 'baz' first, then 'abacus'
            option:'g',
            template: Template.clientCollectionPill,
            callback: function(doc) {


                console.log(doc);
            }
        }
    ]
};