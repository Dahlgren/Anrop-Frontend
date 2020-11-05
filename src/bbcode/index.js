angular.module('bbcode', [])

const markItUp = require('markitup')

const horizontalLineIcon = require('./icons/horizontal-line.txt')
const listItemIcon = require('./icons/list-item.txt')
const youtubeIcon = require('./icons/youtube.txt')

markItUp.icons.horizontalLine = horizontalLineIcon.default
markItUp.icons.listItem = listItemIcon.default
markItUp.icons.youtube = youtubeIcon.default

require('./markitup')
require('./snippets')

const css = require.context('./css', true, /.css$/)
css.keys().forEach(css)

const directives = require.context('./directives', true, /.js$/)
directives.keys().forEach(directives)

module.exports = 'bbcode'
