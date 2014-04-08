Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.map(function () {
    this.route('admin', {
        path: '/admin',
        action: function () {
            Router.go('dashBoard');
        }
    });
    this.route('root', {
        path: '/',
        action: function () {
            Router.go('dashBoard');
        }
    });
    this.route('dashBoard', {
        path: '/dashBoard',
        template: 'dashBoard',
        data: function () {
            return {
                hey: "헤이 맨"
            };
        }
    });
});
