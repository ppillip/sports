Router.map(function () {
/*머니내역 > 충전내역*/
this.route('charge', {
    path: '/charge'
    ,template:'charge'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'charge'
        }
    }
});

/*머니내역 > 환전내역*/
this.route('change', {
    path: '/change'
    ,template:'change'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'change'
        }
    }
});

/*머니내역 > 배당내역*/
this.route('dividend', {
    path: '/dividend'
    ,template:'dividend'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'dividend'
        }
    }
});

/*머니내역 > 구매내역*/
this.route('purchase', {
    path: '/purchase'
    ,template:'purchase'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'purchase'
        }
    }
});

/*머니내역 > 지급내역*/
this.route('payment', {
    path: '/payment'
    ,template:'payment'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'payment'
        }
    }
});

/*머니내역 > 회수내역*/
this.route('payback', {
    path: '/payback'
    ,template:'payback'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'payback'
        }
    }
});

/*머니내역 > 관리자포인트*/
this.route('adminPoint', {
    path: '/adminPoint'
    ,template:'adminPoint'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'adminPoint'
        }
    }
});

});
