Meteor.startup(function () {
    Meteor.Mailgun.config({
        username: 'MAILGUN-USER-NAME-HERE',
        password: 'MAILGUN-PASSWORD-HERE'
    });
});
