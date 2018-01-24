angular.module('bbcode', [])

var markItUp = require('markitup')

var horizontalLineIcon = require('./icons/horizontal-line.txt')
var listItemIcon = require('./icons/list-item.txt')
var youtubeIcon = require('./icons/youtube.txt')

markItUp.icons.horizontalLine = horizontalLineIcon
markItUp.icons.listItem = listItemIcon
markItUp.icons.youtube = youtubeIcon

require('./markitup')
require('./snippets')

var css = require.context('./css', true, /.css$/)
css.keys().forEach(css)

var directives = require.context('./directives', true, /.js$/)
directives.keys().forEach(directives)

module.exports = 'bbcode'
