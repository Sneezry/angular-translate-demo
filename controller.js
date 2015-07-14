app.controller('translate', function($translate, $scope) {
  $scope.initLang = function() {
    $scope.lang = localStorage.lang || 'zh-CN';
  }

  $scope.isAvailableItem = function(item) {
    return !/^i18n\./.test(item);
  }

  $scope.setLanguage = function(lang) {
    $translate.use(lang);
    $scope.lang = lang;
    localStorage.lang = lang;
  }
});