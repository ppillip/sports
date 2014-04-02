
Template.userAgency.events({
    'click [name=createAgency]' : function(e,tmpl) {
        e.preventDefault();

//        console.log("asdfasdfasdfffffffffffffffffffffffffffff : " + tmpl.find('#id'));

        var schAgency = sportsSchema.getSchema('총판');

        _.each(schAgency,function(val,idx){
//            console.log("IDX : ", idx, " : ", $("[name="+idx+"]").val());
            schAgency[idx] = $(tmpl.find("[name="+idx+"]")).val();
        });

//        $(tmpl.find("[name="+idx+"]")).val();

        총판.insert(schAgency);

        tmpl.find('form').reset();
        $(tmpl.find('[name=cancelCreateAgency]')).trigger('click');

//        $('#myModal').attr('aria-hidden')
//        console.log("fffffffffff : ");
//        console.log(tmpl.find('#myModal'));
//        $(tmpl.find('#myModal')).modal({'show':false});

//        var tmp = $(tmpl.find('#select-1')).val();
//        console.log(tmp);

    },
    'click #btn_remove' : function(e,tmp) {
        e.preventDefault();

        총판.remove({_id:this._id});

    }
});

Template.userAgency.rendered = function(){
//    $('#myModal').modal({show : false});
};

Template.userAgency.helpers({
    dataAgency: function(){
        var obj = 총판.find();
//        Session.set('tmp', obj);
//        console.log(obj.fetch());
        return 총판.find();
    }
});


Template.agencyTable.helpers({
    dataAgency: function(){
        var obj = 총판.find();
//        Session.set('tmp', obj);
//        console.log("asdfasdfasdf");
//        console.log(obj.fetch());
        return 총판.find();
    }
});



Template.userAgencyInputModal.helpers({
   회원종류 : function() {
       return 코드성데이터.회원종류;
   }
});