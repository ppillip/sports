Future = Npm.require('fibers/future');

Meteor.methods({
    /*
     *   대분류 저장
     * */
    saveGameCategoryEvents: function(obj, blob, name, encoding) {
        console.log('# saveGameCategoryEvents');

        if(!obj.이름)
            throw new Meteor.Error(404, '이름누락');

        if(!obj._id)
            obj["_id"] = Meteor.uuid();

        게임카테고리종목.insert(obj);

        console.log('## saveGameCategoryEvents');
        return {msg:"저장하였습니다"};

    }
    ,
    removeGameCategoryEvents: function(gid) {
        console.log('# removeGame');

        게임카테고리종목.remove({_id:gid});

        console.log('## removeGame');
        return {msg:"삭제 하였습니다."};

    }
    ,
    saveGameCategoryLeague: function(obj, blob, name, encoding) {
        console.log('# saveGameCategoryLeague');

        if(!obj.이름)
            throw new Meteor.Error(404, '이름누락');

        if(!obj._id)
            obj["_id"] = Meteor.uuid();

        게임카테고리리그.insert(obj);

        console.log('## saveGameCategoryLeague');
        return {msg:"저장하였습니다"};

    }








});
