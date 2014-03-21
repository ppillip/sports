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

    /*회원관리 > 배팅회원*/
    this.route('bettingUser', {
        path: '/bettingUser'
        ,template:'bettingUser'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'bettingUser'
            }
        }
    });

    /*회원관리 > 블랙리스트*/
    this.route('blackList', {
        path: '/blackList'
        ,template:'blackList'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'blackList'
            }
        }
    });

    /*회원관리 > 유저배팅현황*/
    this.route('userBattingStatus', {
        path: '/userBattingStatus'
        ,template:'userBattingStatus'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'userBattingStatus'
            }
        }
    });

    /*회원관리 > 본사회원배팅현황*/
    this.route('HQUserBattingStatus', {
        path: '/HQUserBattingStatus'
        ,template:'HQUserBattingStatus'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'HQUserBattingStatus'
            }
        }
    });

    /*회원관리 > 본사회원*/
    this.route('HQUser', {
        path: '/HQUser'
        ,template:'HQUser'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'HQUser'
            }
        }
    });

    /*회원관리 > 총판*/
    this.route('agency', {
        path: '/agency'
        ,template:'agency'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'agency'
            }
        }
    });

    /*회원관리 > 매장*/
    this.route('branch', {
        path: '/branch'
        ,template:'branch'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'branch'
            }
        }
    });

    /*회원관리 > 탈퇴회원*/
    this.route('withdrawal', {
        path: '/withdrawal'
        ,template:'withdrawal'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'withdrawal'
            }
        }
    });

    /*회원관리 > 가입승인*/
    this.route('underLine', {
        path: '/underLine'
        ,template:'underLine'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            return {
                test     : 'underLine'
            }
        }
    });


});
