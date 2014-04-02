Future = Npm.require('fibers/future');

Meteor.methods({
    /*
     *   대분류 저장
     * */
    saveGameCategoryEvents: function(obj, blob, name, encoding) {


        if(!obj.이름)
            throw new Meteor.Error(404, '이름누락');

        if(!obj._id)
            obj["_id"] = Meteor.uuid();

        게임카테고리종목.insert(obj);

        return {msg:"저장하였습니다"};

    }


});
