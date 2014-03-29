Router.map(function () {
/*커뮤니티 > 게시판*/
this.route('communityBoards', {
    path: '/communityBoards'
    ,template:'communityBoards'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'communityBoards'
        }
    }
});

/*커뮤니티 > 게시판공지*/
this.route('communityBoardNotice', {
    path: '/communityBoardNotice'
    ,template:'communityBoardNotice'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'communityBoardNotice'
        }
    }
});

/*커뮤니티 > 이벤트*/
this.route('communityEvents', {
    path: '/communityEvents'
    ,template:'communityEvents'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'communityEvents'
        }
    }
});

/*커뮤니티 > 이벤트공지*/
this.route('communityEventNotice', {
    path: '/communityEventNotice'
    ,template:'communityEventNotice'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'communityEventNotice'
        }
    }
});

/*커뮤니티 > 고객센터*/
this.route('communityCs', {
    path: '/communityCs'
    ,template:'communityCs'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'communityCs'
        }
    }
});

/*커뮤니티 > 고객센터 공지*/
this.route('communityCsNotice', {
    path: '/communityCsNotice'
    ,template:'communityCsNotice'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'communityCsNotice'
        }
    }
});

/*커뮤니티 > 게시판관리*/
this.route('communityBoardManage', {
    path: '/communityBoardManage'
    ,template:'communityBoardManage'
    ,waitOn: function () {
        return [  ];
    }
    ,data: function() {
        return {
            test     : 'communityBoardManage'
        }
    }
});


});