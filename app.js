(function () {
'use strict';
var h=1;
angular.module('myFirstApp',[])
.controller('MyFirstController',DIC);
function DIC($scope,$filter){
      $scope.name="LOL1";;
      $scope.hello=function(){
        return "POP";
    };
    $scope.upper=function(){
        var upCase=$filter('lowercase');
        $scope.name=upCase($scope.name);
    };
};

})();
