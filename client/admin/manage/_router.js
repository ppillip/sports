Router.map(function () {
/*기타관리 > 회사정보*/
this.route('manageCompany', {
    path: '/manageCompany'
    ,template:'manageCompany'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'manageCompany'
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