angular.module('registry').directive('componentTable', function (Component) {
    return {
        restrict: 'E',
        templateUrl: 'component-table/component-table-view.html',
        replace: true,
        scope: true,
        link: function postLink($scope, iElement, iAttrs/*, controller*/) {
            $scope.filter = $scope.$parent.$eval(iAttrs.filter);
            $scope.filterFn = $scope.filter.match.bind($scope.filter);

            $scope.hiddenCount = 0;
            $scope.$watch("filter", function() {
                $scope.hiddenCount = _.countBy($scope.components, $scope.filter.match, $scope.filter)[false];
            }, true);

            $scope.components = Component.query();
        }
    };
});
