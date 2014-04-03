
Template.userInfo.events({
    'click [name=createAgency]' : function(e,tmpl) {
        e.preventDefault();

        var schAgency = sportsSchema.getSchema('회원');

        _.each(schAgency,function(val,idx){
            schAgency[idx] = $(tmpl.find("[name="+idx+"]")).val();
        });

        회원.insert(schAgency);

        tmpl.find('form').reset();
        $(tmpl.find('[name=cancelCreateAgency]')).trigger('click');

//        $(tmpl.find('#myModal')).modal({'show':false});

    },
    'click #btn_remove' : function(e,tmp) {
        e.preventDefault();

        회원.remove({_id:this._id});
    }
});

Template.userInfo.rendered = function(){
};

Template.userInfo.helpers({
    회원정보: function(){
        return 회원.find();
    }
});


Template.userTable.helpers({
    회원정보: function(){
        return 회원.find();
    }
});