
Template.userAgency.events({
    'submit form' : function(e) {
        e.preventDefault();

        console.log("asdfasdfasdf");

        var schAgency = sportsSchema.getSchema('schema_agency');
        schAgency.id = $(e.target).find('[name=id]').val();
        schAgency.name = $(e.target).find('[name=name]').val();
        schAgency.nick_name = $(e.target).find('[name=nick_name]').val();
        schAgency.cellphone = $(e.target).find('[name=cellphone]').val();
        schAgency.bank_account = $(e.target).find('[name=bank_account]').val();
        schAgency.bank_name = $(e.target).find('[name=bank_name]').val();
        schAgency.bank_owner_name = $(e.target).find('[name=bank_owner_name]').val();

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
        Session.set('tmp', obj);
        console.log(obj.fetch());
        return CollectionAgency.find();
    }
});


Template.agencyList.helpers({
    dataAgency: function(){
        var obj = CollectionAgency.find();
        Session.set('tmp', obj);
        console.log(obj.fetch());
        return CollectionAgency.find();
    }
});