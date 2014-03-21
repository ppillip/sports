Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.map(function () {
    this.route('admin', {
        path: '/admin',
        data: function() {
            return {
                hey: "헤이 맨"
            };
        }
    });
});
