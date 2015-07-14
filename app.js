(function(){
  var app = angular.module('i18n', ['pascalprecht.translate']);

  app.config(function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
      prefix: '/',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage(localStorage.lang || 'zh-CN');
  });
})();