Session.set("contact-success", false);

Template.contact.helpers({
    success: function () {
        return Session.get("contact-success");
    }
});

Template.contact.events({
    "submit form": function (e) {
        e.preventDefault();

        var form = {
            name: $(e.target).find('[name=name]').val(),
            email: $(e.target).find('[name=email]').val(),
            subject: $(e.target).find('[name=subject]').val(),
            message: $(e.target).find('[name=message]').val()
        };

        Meteor.call('sendContactEmail', form);
        $(e.target).trigger("reset");
        Session.set("contact-success", true);
    }
});