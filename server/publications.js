Meteor.publish('sportsSettings', function() {
    return SportsSettings.find();
});
Meteor.publish('agencies', function() {
    return Agencies.find();
});
Meteor.publish('branches', function() {
    return Branches.find();
});