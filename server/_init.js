if(CollectionSportsSettings.find().count() === 0) {
    CollectionSportsSettings.insert( {
        title: 'Sports'
    });
}

