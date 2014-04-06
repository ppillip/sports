Future = Npm.require('fibers/future');
fs = Npm.require( 'fs' );
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

        var cnt = 게임카테고리리그.find({소속종목_id:gid}).count();
        if( cnt >0){
            return {msg: cnt + " 건의 하위분류가 존재합니다."};
        };


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

        var fut = new Future()
            ,path =     process.env.PWD+'/public/icon/'
            ,name = obj["_id"];

        fs.writeFile(path + name, blob, encoding, function(err) {
            if (err) {
                throw (new Meteor.Error(500, 'Failed to save file.', err));
            } else {
                console.log( 'The file ' + name + ' (' + encoding + ') was saved to ' + path);
            }
            fut.return("good");
        });

        fut.wait();


        게임카테고리리그.insert(obj);

        console.log('## saveGameCategoryLeague');

        return {msg:"저장하였습니다"};

    }
    ,
    removeGameCategoryLeague: function(gid) {
        console.log('# removeGame');

        게임카테고리리그.remove({_id:gid});

        console.log('## removeGame');
        return {msg:"삭제 하였습니다."};

    }


});
