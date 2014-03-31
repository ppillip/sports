
Template.userAgency.events({
    'submit form' : function(e,tmpl) {
        e.preventDefault();

        console.log("asdfasdfasdf");

        var schAgency = sportsSchema.getSchema('schema_agency');


        _.each(schAgency,function(val,idx){
            console.log("IDX : ", idx);
            schAgency[idx] = $(e.target).find('[name='+idx+']').val();
        });

        CollectionAgency.insert(schAgency);

        tmpl.find('form').reset();

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