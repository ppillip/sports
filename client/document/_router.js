Router.map(function () {
    /*머니내역 > 환전내역*/
    this.route('schema', {
        path: '/schema'
        ,template:'schema'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'change'
            }
        }
    });
});
