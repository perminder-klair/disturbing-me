Meteor.startup(function () {

    Meteor.Mailgun.config({
        username: 'MAILGUN-USER-NAME-HERE',
        password: 'MAILGUN-PASSWORD-HERE'
    });

    Meteor.methods({
        'sendEmail': function (data) {
            this.unblock();

            //insert into db
            Contact.insert(data);

            Meteor.Mailgun.send({
                to: 'to@site.com',
                from: 'My Name' + ' <from@site.com>',
                subject: 'New Message ' + data.subject,
                text: data.message
            });
        }
    });
});
