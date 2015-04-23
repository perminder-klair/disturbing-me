# Meteor Boilerplate

Created this boilerplate for my personal use, but feel free to fork and use it!

## Start App

`meteor --settings settings.json`

## To deploy

`meteor build .`

Then extract tar file on server and run following:

`PORT=3000 ROOT_URL='http://localhost' MONGO_URL='mongodb://localhost:27017/database-name' node main.js`

## DIRECTORY STRUCTURE

```
client                  directory only runs on the client
	helpers/			contains client shared configurations
	lib/        		contains client libraries
	styles/			    contains application CSS or SCSS files
	templates/			contains the entry script and Web resources
lib                     loaded before anything else
	collections/		contains mongo collections
	router/        		contains routing files
packages                contains npm dependent 3rd-party packages
private                 contains private files
public                  contains static assets (fonts, images, etc.)
server                  directory only runs on the server
	helpers/			contains server shared configurations
	lib/        		contains server libraries
	methods/			contains methods
	publications/		contains publications
	startup/		    contains server's startup files
```

## Packages

- `twbs:bootstrap` - Bootstrap-styled accounts-ui with multi-language support.
- `ian:accounts-ui-bootstrap-3` - Simple templates to add login widgets to an app
- `accounts-password` - Password support for accounts
- `alanning:roles` - Role-based authorization
- `aldeed:autoform` - Easily create forms with automatic insert and update, and automatic reactive validation.
- `aldeed:collection2` - Automatic validation of insert and update operations on the client and server.
- `aldeed:simple-schema` - A simple schema validation object with reactivity. Used by collection2 and autoform.
- `aslagle:reactive-table` -  A reactive table designed for Meteor
- `browser-policy` - Configure security policies enforced by the browser
- `cunneen:mailgun` -  Easily send emails using Mailgun as your email provider.
- `http` -  Make HTTP calls to remote servers
- `iron:router` - Routing specifically designed for Meteor
- `linto:fontawesome` - fontawesome 4.2.0 re-packaged for meteorjs
- `manuelschoebel:ms-seo` - Easily config SEO for your routes
- `meteorhacks:fast-render` - Render you app even before the DDP connection comes live. - magic?
- `meteorhacks:kadira` - Performance Monitoring for Meteor
- `meteorhacks:npm` - Use npm modules with your Meteor App
- `momentjs:moment` - Moment.js (official): parse, validate, manipulate, and display dates
- `stevezhu:sass` - Meteor package for using sass or scss stylesheets.
- `underscore` - Collection of small helpers: _.map, _.each, ...
- `sacha:spin` - Simple spinner package for Meteor
- `matb33:collection-hooks` - Extends Mongo.Collection with before/after hooks for insert/update/remove/find/findOne   

#### Removed Packages

`autopublish` and `insecure`

## Bug tracker and feature requests
If you find any bugs or have a feature request?, please create an issue at [issue tracker for project Github repository](https://github.com/perminder-klair/Meteor-Boilerplate/issues).

## License
This work is licensed under a MIT license. Full text is included in the `LICENSE` file in the root of codebase.

## Authors
**Parminder Klair**