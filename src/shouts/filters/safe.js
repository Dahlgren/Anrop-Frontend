require('../module').filter('safe', function($sce) {
  return $sce.trustAsHtml;
});
