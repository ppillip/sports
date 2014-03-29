Meteor.publish('CollectionSettings', function() {
    return CollectionSettings.find();
});