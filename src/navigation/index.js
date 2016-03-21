var app = angular.module('navigation', []);

var directives = require.context('./directives', true, /.js$/);
directives.keys().forEach(directives);

var controllers = require.context('./controllers', true, /.js$/);
controllers.keys().forEach(controllers);

module.exports = 'navigation';
