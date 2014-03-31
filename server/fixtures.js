if(SportsSettings.find().count() === 0) {
    var obj = sportsSchema.getSchema('sportsSettings');
    obj.title = 'Sports';

    SportsSettings.insert(obj);
}
