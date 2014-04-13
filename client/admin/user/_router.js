Router.map(function () {
	/*회원관리 > 회원정보 상세화면*/
	this.route('userDetails', {
		path: '/userDetails/:_id'
		,template:'userDetails'
		,waitOn: function () {
			$('#header').hide();
			$('[name=aLeftPanel]').hide();
			return [
				Meteor.subscribe('회원')
				,Meteor.subscribe('총판매장')
			];
		}
		,data: function() {
			Session.set("현재화면이름", '회원상세');
			return {
				selectedId     : this.params._id
			}
		}
	});

    /*회원관리 > 일반회원정보*/
    this.route('userInfo', {
        path: '/userInfo'
        ,template:'userInfo'
        ,waitOn: function () {
            return [
				Meteor.subscribe('회원')
			];
        }
        ,data: function() {
            Session.set("현재화면이름", '일반')
			return {
                testData     : '일반'
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
            Session.set("현재화면이름", '베팅회원')
			return {
                testData     : '베팅'
            }
        }
    });

    /*회원관리 > 블랙리스트*/
    this.route('userBlackList', {
        path: '/userBlackList'
        ,template:'userInfo'
        ,waitOn: function () {
            return [  ];
        }
        ,data: function() {
            Session.set("현재화면이름", '블랙리스트')
			return {
                testData     : '블랙리스트'
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
            Session.set("현재화면이름", '유저베팅현황')
			return {
                testData     : '유저베팅현황'
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
            Session.set("현재화면이름", '본사회원베팅현황')
			return {
                testData     : '본사회원베팅현황'
            }
        }
    });

    /*회원관리 > 운영회원*/
    this.route('userHQUser', {
        path: '/userHQUser'
        ,template:'userInfo'
        ,waitOn: function () {
            return [
				Meteor.subscribe('회원')
			];
        }
        ,data: function() {
            Session.set("현재화면이름", '운영')
			return {
                testData     : '운영'
            }
        }
    });

    /*회원관리 > 총판회원*/
    this.route('userAgency', {
        path: '/userAgency'
        ,template:'userAgency'
        ,waitOn: function () {
			return [
				Meteor.subscribe('총판매장')
			];
        }
        ,data: function() {
            Session.set("현재화면이름", '총판')
			return {
                testData     : '총판'
            }
        }
    });

    /*회원관리 > 매장회원*/
    this.route('userBranch', {
        path: '/userBranch'
        ,template:'userAgency'
        ,waitOn: function () {
			return [
				Meteor.subscribe('총판매장')
			];
        }
        ,data: function() {
            Session.set("현재화면이름", '매장')
			return {
                testData     : '매장'
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
            Session.set("현재화면이름", '탈퇴')
			return {
                testData     : '탈퇴회원'
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
            Session.set("현재화면이름", '가입승인')
			return {
                testData     : '가입승인'
            }
        }
    });


});
