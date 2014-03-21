Router.map(function () {
/*커뮤니티 > 게시판*/
this.route('boards', {
    path: '/boards'
    ,template:'boards'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'boards'
        }
    }
});

/*커뮤니티 > 게시판공지*/
this.route('boardNotice', {
    path: '/boardNotice'
    ,template:'boardNotice'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'boardNotice'
        }
    }
});

/*커뮤니티 > 이벤트*/
this.route('events', {
    path: '/events'
    ,template:'events'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'events'
        }
    }
});

/*커뮤니티 > 이벤트공지*/
this.route('eventNotice', {
    path: '/eventNotice'
    ,template:'eventNotice'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'eventNotice'
        }
    }
});

/*커뮤니티 > 고객센터*/
this.route('cs', {
    path: '/cs'
    ,template:'cs'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'cs'
        }
    }
});

/*커뮤니티 > 고객센터 공지*/
this.route('csNotice', {
    path: '/csNotice'
    ,template:'csNotice'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'csNotice'
        }
    }
});

/*커뮤니티 > 게시판관리*/
this.route('boardManage', {
    path: '/boardManage'
    ,template:'boardManage'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'boardManage'
        }
    }
});


});