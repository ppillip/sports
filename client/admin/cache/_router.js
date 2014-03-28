Router.map(function () {
/*머니내역 > 충전내역*/
this.route('moneyDeposit', {
    path: '/moneyDeposit'
    ,template:'moneyDeposit'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'moneyDeposit'
        }
    }
});

/*머니내역 > 환전내역*/
this.route('moneyWithdraw', {
    path: '/moneyWithdraw'
    ,template:'moneyWithdraw'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'moneyWithdraw'
        }
    }
});

/*머니내역 > 배당내역*/
this.route('moneyDividend', {
    path: '/moneyDividend'
    ,template:'moneyDividend'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'moneyDividend'
        }
    }
});

/*머니내역 > 베팅내역*/
this.route('moneyPurchase', {
    path: '/moneyPurchase'
    ,template:'moneyPurchase'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'moneyPurchase'
        }
    }
});

/*머니내역 > 지급내역*/
this.route('moneyPayment', {
    path: '/moneyPayment'
    ,template:'moneyPayment'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'moneyPayment'
        }
    }
});

/*머니내역 > 회수내역*/
this.route('moneyPayback', {
    path: '/moneyPayback'
    ,template:'moneyPayback'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'moneyPayback'
        }
    }
});

/*머니내역 > 관리자포인트*/
this.route('moneyAdminPoint', {
    path: '/moneyAdminPoint'
    ,template:'moneyAdminPoint'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'moneyAdminPoint'
        }
    }
});

});
