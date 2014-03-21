Router.map(function () {
/*기타관리 > 회사정보*/
this.route('company', {
    path: '/company'
    ,template:'company'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'company'
        }
    }
});

/*기타관리 > 공지관리*/
this.route('noticeManage', {
    path: '/noticeManage'
    ,template:'noticeManage'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'noticeManage'
        }
    }
});

/*기타관리 > IP차단*/
this.route('ipBlock', {
    path: '/ipBlock'
    ,template:'ipBlock'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'ipBlock'
        }
    }
});

/*기타관리 > 관리자IP*/
this.route('adminIp', {
    path: '/adminIp'
    ,template:'adminIp'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'adminIp'
        }
    }
});


});