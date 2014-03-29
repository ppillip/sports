Router.map(function () {
    /*회원관리 > 회원정보*/
    this.route('userInfo', {
        path: '/userInfo'
        ,template:'userInfo'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'userInfo'
            }
        }
    });

    /*회원관리 > 베팅회원*/
    this.route('userBettingUser', {
        path: '/userBettingUser'
        ,template:'userBettingUser'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'userBettingUser'
            }
        }
    });

    /*회원관리 > 블랙리스트*/
    this.route('userBlackList', {
        path: '/userBlackList'
        ,template:'userBlackList'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'userBlackList'
            }
        }
    });

    /*회원관리 > 유저베팅현황*/
    this.route('gameUserBettingStatus', {
        path: '/gameUserBettingStatus'
        ,template:'gameUserBettingStatus'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'gameUserBettingStatus'
            }
        }
    });

    /*회원관리 > 본사회원베팅현황*/
    this.route('gameHQUserBettingStatus', {
        path: '/gameHQUserBettingStatus'
        ,template:'gameHQUserBettingStatus'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'gameHQUserBettingStatus'
            }
        }
    });

    /*회원관리 > 본사회원*/
    this.route('userHQUser', {
        path: '/userHQUser'
        ,template:'userHQUser'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'userHQUser'
            }
        }
    });

    /*회원관리 > 총판회원*/
    this.route('userAgency', {
        path: '/userAgency'
        ,template:'userAgency'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'userAgency'
            }
        }
    });

    /*회원관리 > 매장회원*/
    this.route('userBranch', {
        path: '/userBranch'
        ,template:'userBranch'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'userBranch'
            }
        }
    });

    /*회원관리 > 탈퇴회원*/
    this.route('userLeft', {
        path: '/userLeft'
        ,template:'userLeft'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'userLeft'
            }
        }
    });

    /*회원관리 > 가입승인*/
    this.route('userJoinApprove', {
        path: '/userJoinApprove'
        ,template:'userJoinApprove'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'userJoinApprove'
            }
        }
    });


});
