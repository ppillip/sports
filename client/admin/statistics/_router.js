Router.map(function () {
/*통계관리 > 통계정보*/
this.route('statisticsInfo', {
    path: '/statisticsInfo'
    ,template:'statisticsInfo'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'statisticsInfo'
        }
    }
});

/*통계관리 > 기간별베팅집계*/
this.route('statisticsAggrBettingByTerm', {
    path: '/statisticsAggrBettingByTerm'
    ,template:'statisticsAggrBettingByTerm'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'statisticsAggrBettingByTerm'
        }
    }
});

/*통계관리 > 회원별베팅집계*/
this.route('statisticsAggrBettingByUser', {
    path: '/statisticsAggrBettingByUser'
    ,template:'statisticsAggrBettingByUser'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'statisticsAggrBettingByUser'
        }
    }
});

/*통계관리 > 기간별입출금집계*/
this.route('statisticsAggrMoneyByTerm', {
    path: '/statisticsAggrMoneyByTerm'
    ,template:'statisticsAggrMoneyByTerm'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'statisticsAggrMoneyByTerm'
        }
    }
});

/*통계관리 > 회원별입출금집계*/
this.route('statisticsAggrMoneyByUser', {
    path: '/statisticsAggrMoneyByUser'
    ,template:'statisticsAggrMoneyByUser'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'statisticsAggrMoneyByUser'
        }
    }
});

/*통계관리 > 기간별금액*/
this.route('statisticsMoneyByTerm', {
    path: '/statisticsMoneyByTerm'
    ,template:'statisticsMoneyByTerm'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'statisticsMoneyByTerm'
        }
    }
});

/*통계관리 > 정산내역*/
this.route('statisticsSettle', {
    path: '/statisticsSettle'
    ,template:'statisticsSettle'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'statisticsSettle'
        }
    }
});


});