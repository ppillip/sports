
Template.userAgency.events({
    'submit form' : function(e) {
        e.preventDefault();

        console.log("asdfasdfasdf");

        var schAgency = sportsSchema.getSchema('schema_agency');


        _.each(schAgency,function(val,idx){
            schAgency[idx] = $(e.target).find('[name='+idx+']').val();
        });

        CollectionAgency.insert(schAgency);



        document.getElementById("insertAgency").reset();
        $('#insertAgency').trigger("reset");
    }
});

Template.userAgency.rendered = function(){

};

Template.userAgency.helpers({
    dataAgency: function(){
        var obj = CollectionAgency.find();
//        Session.set('tmp', obj);
//        console.log(obj.fetch());
        return CollectionAgency.find();
    }
});


Template.agencyTable.helpers({
    dataAgency: function(){
        var obj = CollectionAgency.find();
//        Session.set('tmp', obj);
        console.log(obj.fetch());
        return CollectionAgency.find();
    }
});