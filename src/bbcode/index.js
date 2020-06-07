angular.module('bbcode', [])

var markItUp = require('markitup')

var horizontalLineIcon = require('./icons/horizontal-line.txt')
var listItemIcon = require('./icons/list-item.txt')
var youtubeIcon = require('./icons/youtube.txt')

markItUp.icons.horizontalLine = horizontalLineIcon.default
markItUp.icons.listItem = listItemIcon.default
markItUp.icons.youtube = youtubeIcon.default

require('./markitup')
require('./snippets')

var css = require.context('./css', true, /.css$/)
css.keys().forEach(css)

var directives = require.context('./directives', true, /.js$/)
directives.keys().forEach(directives)

module.exports = 'bbcode'
