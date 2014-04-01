if(SportsSettings.find().count() != 1) {
    var obj = sportsSchema.getSchema('sportsSettings');
    obj.title = 'Sports';

    SportsSettings.insert(obj);
}

//UI.head.mainTitle = 'merong';
