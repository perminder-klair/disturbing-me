Meteor.publish('getDisturb', function() {
    return Disturb.find({
			slug: 'andrew'
		});
});

Meteor.publish('disturbLog', function() {
    return DisturbLog.find();
});
