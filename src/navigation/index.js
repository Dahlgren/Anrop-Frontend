angular.module('navigation', [])

const directives = require.context('./directives', true, /.js$/)
directives.keys().forEach(directives)

const controllers = require.context('./controllers', true, /.js$/)
controllers.keys().forEach(controllers)

module.exports = 'navigation'
