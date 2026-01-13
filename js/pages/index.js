(function () {
    Portfolio.App.controller('IndexController', function ($scope) {
        Portfolio.IndexScope = $scope;
        Portfolio.IndexScope.ViewLevelEditor = false;

        Portfolio.IndexScope.init = function () {
          Portfolio.IndexScope.LoadMembers();
        };

        Portfolio.IndexScope.LoadMembers = function () {
           
        };
    });
})();