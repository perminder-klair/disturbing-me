Contact = new Mongo.Collection('contact');

Schema = {};
Schema.skills = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    email: {
        type: String,
        label: "Email"
    },
    subject: {
        type: String,
        label: "Subject",
        optional: true
    },
    message: {
        type: String,
        label: "Message",
        optional: true
    },
    created: {
        type: Date,
        label: "Created",
        optional: true,
        denyUpdate: true,
        autoValue: function () {
            return new Date();
        }
    },
    updated: {
        type: Date,
        label: "Updated",
        optional: true,
        denyInsert: true,
        autoValue: function () {
            if (this.isUpdate) {
                return new Date();
            }
        }
    }
});

Contact.attachSchema(Schema.contact);
