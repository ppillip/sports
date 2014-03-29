Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.map(function () {
    this.route('admin', {
        path: '/admin',
        action: function () {
            Route.go('dashBoard');
        }
    });
    this.route('dashBoard', {
        path: '/dashBoard',
        template: 'dashBoard',
        data: function () {
            console.log("dashBoard");
            return {
                hey: "헤이 맨"
            };
        }
    });
});
