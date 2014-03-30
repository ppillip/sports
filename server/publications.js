Meteor.publish('CollectionSettings', function() {
    return CollectionSettings.find();
});
Meteor.publish('CollectionAgency', function() {
    return CollectionAgency.find();
});