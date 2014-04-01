Meteor.publish('sportsSettings', function() {
    return SportsSettings.find();
});
Meteor.publish('agencies', function() {
    return Agencies.find();
});

Meteor.publish('gameCategoryEvents', function() {
    return GameCategoryEvents.find();
});