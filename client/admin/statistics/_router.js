Router.map(function () {
/*통계내역 > 통계*/
this.route('statistics', {
    path: '/statistics'
    ,template:'statistics'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'statistics'
        }
    }
});

/*통계내역 > 기간별배팅집계*/
this.route('aggrBettingByTerm', {
    path: '/aggrBettingByTerm'
    ,template:'aggrBettingByTerm'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'aggrBettingByTerm'
        }
    }
});

/*통계내역 > 회원별배팅집계*/
this.route('aggrBettingByUser', {
    path: '/aggrBettingByUser'
    ,template:'aggrBettingByUser'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'aggrBettingByUser'
        }
    }
});

/*통계내역 > 기간별입출금집계*/
this.route('aggrMoneyByTerm', {
    path: '/aggrMoneyByTerm'
    ,template:'aggrMoneyByTerm'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'aggrMoneyByTerm'
        }
    }
});

/*통계내역 > 회원별입출금집계*/
this.route('aggrMoneyByUser', {
    path: '/aggrMoneyByUser'
    ,template:'aggrMoneyByUser'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'aggrMoneyByUser'
        }
    }
});

/*통계내역 > 기간별금액*/
this.route('moneyByTerm', {
    path: '/moneyByTerm'
    ,template:'moneyByTerm'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'moneyByTerm'
        }
    }
});

/*통계내역 > 정산내역*/
this.route('statement', {
    path: '/statement'
    ,template:'statement'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'statement'
        }
    }
});


});