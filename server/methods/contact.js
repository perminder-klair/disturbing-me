Contact.allow({
    'insert': function () {
        // anyone allowed to insert
        return true;
    }
});

Meteor.methods({
    'sendContactEmail': function (data) {
        this.unblock();

        //insert into db
        Contact.insert(data);

        /*Meteor.Mailgun.send({
            to: 'to@site.com',
            from: 'My Name' + ' <from@site.com>',
            subject: 'New Message ' + data.subject,
            text: data.message
        });*/
    }
});