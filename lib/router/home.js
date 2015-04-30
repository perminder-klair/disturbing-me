Router.route('/', {
    name: 'home',
    //fastRender: true,
	waitOn: function() {
        return [
			Meteor.subscribe('disturbLog'),
			Meteor.subscribe('getDisturb')
		];
    },
    onAfterAction: function () {
        //var post;
        // The SEO object is only available on the client.
        // Return if you define your routes on the server, too.
        if (!Meteor.isClient) {
            return;
        }
        SEO.set({
            title: 'Home - ' + Meteor.App.NAME,
            meta: {
                'description': 'Welcome to my site.'
            }
        });
    }
});
