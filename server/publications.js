Meteor.publish('SportsSettings', function() {
    return SportsSettings.find();
});
Meteor.publish('Agencies', function() {
    return Agencies.find();
});