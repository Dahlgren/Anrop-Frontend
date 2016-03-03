require('expose?$!expose?jQuery!jquery');
require('jquery-ui');

require('bootstrap-webpack!./bootstrap.config.js');

var css = require.context('./css', true, /.css$/);
css.keys().forEach(css);

require('angular');
require('angular-ui-bootstrap');
require('angular-ui-sortable');
require('ng-file-upload');
require('ng-imgur');

var app = angular.module('app', [
  'ui.bootstrap',
  'ui.sortable',
  'ngFileUpload',
  'ngImgur',
]);

var services = require.context('./services', true, /.js$/);
services.keys().forEach(services);

var controllers = require.context('./controllers', true, /.js$/);
controllers.keys().forEach(controllers);
