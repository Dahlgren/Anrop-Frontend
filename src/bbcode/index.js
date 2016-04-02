angular.module('bbcode', []);

require('./snippets');

var directives = require.context('./directives', true, /.js$/);
directives.keys().forEach(directives);

module.exports = 'bbcode';
