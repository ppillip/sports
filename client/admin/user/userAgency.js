
Template.userAgency.events({
    'click [name=createAgency]' : function(e,tmpl) {
        e.preventDefault();

        var schAgency = sportsSchema.getSchema('총판');

        _.each(schAgency,function(val,idx){
            schAgency[idx] = $(tmpl.find("[name="+idx+"]")).val();
        });

        총판.insert(schAgency);

        tmpl.find('form').reset();
        $(tmpl.find('[name=cancelCreateAgency]')).trigger('click');

//        $(tmpl.find('#myModal')).modal({'show':false});

    },
    'click #btn_remove' : function(e,tmp) {
        e.preventDefault();

        총판.remove({_id:this._id});
    }
});

Template.userAgency.rendered = function(){
};

Template.userAgency.helpers({
    회원정보: function(){
        return 총판.find();
    }
});


Template.agencyTable.helpers({
    회원정보: function(){
        return 총판.find();
    }
});

Template.userAgencyInputModal.helpers({
   회원종류 : function() {
       return 코드성데이터.회원종류;
   }
});