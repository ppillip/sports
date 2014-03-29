if(CollectionSettings.find().count() === 0) {
    var obj = sportsSchema.getSchema('schema_settings');
    obj.title = 'Sports';
    obj.point_sign_up = 'test';

    CollectionSettings.insert({

    });
}
