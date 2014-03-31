if(CollectionSettings.find().count() === 0) {
    var obj = sportsSchema.getSchema('settings');
    obj.title = 'Sports';

    CollectionSettings.insert(obj);
}
