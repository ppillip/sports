if(CollectionSettings.find().count() === 0) {
    var obj = sportsSchema.getSchema('schema_settings');
    obj.title = 'Sports';

    CollectionSettings.insert(obj);
}
