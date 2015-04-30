if (Meteor.App) {
    throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
    NAME: 'You Are Disturbing Me',
    DESCRIPTION: 'You Are Disturbing Me - Official Disturb Reporting Tool'
};
