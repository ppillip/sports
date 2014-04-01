
Template.userAgency.events({
    'click .createAgency' : function(e,tmpl) {
        e.preventDefault();

//        console.log("asdfasdfasdfffffffffffffffffffffffffffff : " + tmpl.find('#id'));

        var schAgency = sportsSchema.getSchema('agencies');

        _.each(schAgency,function(val,idx){
//            console.log("IDX : ", idx, " : ", $("[name="+idx+"]").val());
            schAgency[idx] = $(tmpl.find("[name="+idx+"]")).val();
        });

        $(tmpl.find("[name="+idx+"]")).val();

        Agencies.insert(schAgency);

        tmpl.find('form').reset();

//        $('#myModal').attr('aria-hidden')
        $('#myModal').modal('toggle');

    },
    'click #btn_remove' : function(e,tmp) {
        e.preventDefault();

        Agencies.remove({_id:this._id});

    }
});

Template.userAgency.rendered = function(){
//    $('#myModal').modal({show : false});
};

Template.userAgency.helpers({
    dataAgency: function(){
        var obj = Agencies.find();
//        Session.set('tmp', obj);
//        console.log(obj.fetch());
        return Agencies.find();
    }
});


Template.agencyTable.helpers({
    dataAgency: function(){
        var obj = Agencies.find();
//        Session.set('tmp', obj);
        console.log("asdfasdfasdf");
        console.log(obj.fetch());
        return Agencies.find();
    }
});