
Template.schema.events({

});

Template.schema.rendered = function(){
    nav_page_height();
};

Template.schema.helpers({
    schema : function(){
        return schema;
    }
})