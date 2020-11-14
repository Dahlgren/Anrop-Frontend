require('./module')

require('./css/shouts.css')

const services = require.context('./services', true, /.js$/)
services.keys().forEach(services)

const directives = require.context('./directives', true, /.js$/)
directives.keys().forEach(directives)

const controllers = require.context('./controllers', true, /.js$/)
controllers.keys().forEach(controllers)

module.exports = 'shouts'
