Router.map(function () {

/*게임관리 > 게임정보*/
this.route('gameInfo', {
    path: '/gameInfo'
    ,template:'gameInfo'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'gameInfo'
        }
    }
});

/*게임관리 > 진행게임정보*/
this.route('gameCreate', {
    path: '/gameCreate'
    ,template:'gameCreate'
    ,onRun : function(){
        Session.set('isPopup',true);
    }
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'gameCreate'
        }
    }
});

/*게임관리 > 진행게임정보*/
this.route('gameStatus', {
    path: '/gameStatus'
    ,template:'gameStatus'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'gameStatus'
        }
    }
});

    /*게임관리 > 종료게임정보*/
this.route('gameFinished', {
    path: '/gameFinished'
    ,template:'gameFinished'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'gameFinished'
        }
    }
});

/*게임관리 > 게임분류정보*/
this.route('gameCategoryInfo', {
    path: '/gameCategoryInfo'
    ,template:'gameCategoryInfo'
    ,waitOn: function () {

        return [ Meteor.subscribe('게임카테고리종목')
                , Meteor.subscribe('종목별리그',Session.get('game_id')||'') ];
    }
    ,data: function() {
        return {
            test     : 'gameCategoryInfo'
        }
    }
});

/*게임관리 > 보너스배당*/
this.route('gameBonusConfig', {
    path: '/gameBonusConfig'
    ,template:'gameBonusConfig'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'gameBonusConfig'
        }
    }
});


});