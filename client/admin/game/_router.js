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

/*게임관리 > 게임진행정보*/
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

/*게임관리 > 마감게임정보*/
this.route('gameClosed', {
    path: '/gameClosed'
    ,template:'gameClosed'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'gameClosed'
        }
    }
});

/*게임관리 > 게임분류정보*/
this.route('gameCate', {
    path: '/gameCate'
    ,template:'gameCate'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'gameCate'
        }
    }
});

/*게임관리 > 보너스배당설정*/
this.route('bounsConfig', {
    path: '/bounsConfig'
    ,template:'bounsConfig'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'bounsConfig'
        }
    }
});


});