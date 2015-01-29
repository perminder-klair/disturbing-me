Router.route('/contact', {
    name: 'contact',
    //fastRender: true,
    onAfterAction: function () {
        //var post;
        // The SEO object is only available on the client.
        // Return if you define your routes on the server, too.
        if (!Meteor.isClient) {
            return;
        }
        SEO.set({
            title: 'Lets Get In Touch - ' + Meteor.App.NAME,
            meta: {
                'description': 'Use the contact form below to get in touch'
            }
        });
    }
});
