Contact.allow({
    'insert': function () {
        // anyone allowed to insert
        return true;
    }
});

Meteor.publish('listContacts', function() {
    return Contact.find({}, {sort: {created: -1}});
});
