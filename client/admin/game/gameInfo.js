
Template.gameInfo.events({
    'click button[name=newGame]' : function(e,tmpl){
        openPOP('/gameCreate', 'gameCreate', 1400, 700, 'no');

    }
});

Template.gameInfo.rendered = function(){
    
};

Template.gameInfo.helpers({

});