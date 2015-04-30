Disturb = new Mongo.Collection("disturb");
DisturbLog = new Mongo.Collection("disturb_log");

Schema = typeof Schema !== "undefined" ? Schema : {};
Schema.DisturbLog = new SimpleSchema({
    reason: {
        type: String,
        label: "Reason"
    },
	user: {
        type: String,
        label: "Username",
        optional: true,
		autoValue: function () {
            return Meteor.user().username;
        }
    },
	userId: {
        type: String,
        label: "User ID",
        optional: true,
		autoValue: function () {
            return Meteor.userId();
        }
    },
    created: {
        type: Date,
        label: "Created",
        optional: true,
        autoValue: function () {
            if (!this.isSet) {
                return new Date();
            }
        }
    },
    updated: {
        type: Date,
        label: "Updated",
        optional: true,
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        }
    }
});

DisturbLog.attachSchema(Schema.DisturbLog);

Meteor.methods({
	'insertLog': function (doc) {		
		var id = DisturbLog.insert({reason: doc.reason});
		return id;
	},
    'updateCount': function () {
        Disturb.upsert({slug:'andrew'}, {
			$inc: {
				disturbed: 1
			}
		});
    }
});