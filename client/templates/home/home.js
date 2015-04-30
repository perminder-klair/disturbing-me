Tracker.autorun(function() {
	var disturbModal = Disturb.findOne({
		slug: 'andrew'
	});
	if (disturbModal) {
		Session.set("counter", disturbModal.disturbed);
	}
});

Template.home.helpers({
	counter: function() {
		if (_.isNull(Meteor.userId())) {
			FlashMessages.sendSuccess("Please login to report a disturb.");
		}
		
		return Session.get('counter');
	},
	formSchema: function () {
		return Schema.DisturbLog;
	},
	recentLog: function () {
        return {
            collection: DisturbLog,
            rowsPerPage: 10,
            showFilter: true,
            fields: [
				'reason',
				'user',
				{ key: 'created', label: 'Created', sort: 'descending' }
			]
        };
    }
});

AutoForm.hooks({
    insertDisturbForm: {
        onSuccess: function(operation, result, template) {
            console.log('success!!');
			
			Meteor.call('updateCount');
			
			var disturbCount = parseInt(Session.get('counter')) + 1;
			Session.set('counter', disturbCount);
			
			FlashMessages.sendSuccess("Thank you for disturbing me!");
        },
        onError: function(operation, error, template) {
			console.log(error);
            console.log('error!!');
        }
    }
});
