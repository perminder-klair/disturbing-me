Template.contact.events({
    "submit form": function (e) {
        e.preventDefault();

        var post = {
            name: $(e.target).find('[name=name]').val(),
            email: $(e.target).find('[name=email]').val(),
            subject: $(e.target).find('[name=subject]').val(),
            message: $(e.target).find('[name=message]').val()
        };

        //console.log(post);
        Meteor.call('sendContactEmail', post);
    }
});
