Router.map(function () {
/*기타관리 > 설정정보*/
this.route('manageSettings', {
    path: '/manageSettings'
    ,template:'manageSettings'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'manageSettings'
        }
    }
});

/*기타관리 > 공지관리*/
this.route('manageNoticeManage', {
    path: '/manageNoticeManage'
    ,template:'manageNoticeManage'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'manageNoticeManage'
        }
    }
});

/*기타관리 > IP차단*/
this.route('manageIpBlock', {
    path: '/manageIpBlock'
    ,template:'manageIpBlock'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'manageIpBlock'
        }
    }
});

/*기타관리 > 관리자IP*/
this.route('manageAdminIp', {
    path: '/manageAdminIp'
    ,template:'manageAdminIp'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'manageAdminIp'
        }
    }
});


});