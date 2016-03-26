  angular.module('numberPickerApp', [])
  .directive('numberPicker', function() {
    return {
        restrict: 'AE',
        templateUrl: function(){ 
          return 'number-picker-directive-template.html';
        },
		scope: {
      		num: '=',
      		min: '=',
      		max: '='
    	},        	
	    link : function($scope, $ele, $attrs){
	    	
          $scope.addNum = function() {
          	$scope.num = parseInt($scope.num);
          	if(isNaN($scope.num)) $scope.num = 0;
     	 	$scope.num = ($scope.num+1 > $scope.max)?$scope.max:$scope.num+1;
    	  };
    	  $scope.subNum = function() {
    	  	 $scope.num = parseInt($scope.num);
    	  	 if(isNaN($scope.num)) $scope.num = 0;
     	     $scope.num = ($scope.num-1 < $scope.min)?$scope.min:$scope.num-1;
    	  };
        }
    };
  })
  .controller('MainCtrl', function ($scope) {
  	    var self = $scope;  	    
 		$scope.size = 24;
 		$scope.left = 50;
 		$scope.leftMax = 800;
 		
 		$scope.resetToDefault = function(){
 			$scope.size = 24;
 			$scope.left = 50;
 		}
   });
   