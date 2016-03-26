  angular.module('colorPickerApp', [])
  .directive('colorPicker', function() {
    return {
        //restrict: 'AE',
        //template: '{{myargs.num}}'
        templateUrl: function(){ 
        	return 'color-picker-directive-template.html';
    	},
		scope: {
      		red: '=',
      		green: '=',
      		blue: '=',
      		alpha: '='
    	},      		
        link : function(scope, ele, attrs){

        }    
    };
  })  	  
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
        link : function(scope, ele, attrs){
          scope.addNum = function() {
          	scope.num = parseInt(scope.num);
          	if(isNaN(scope.num)) scope.num = 0;
     	 	scope.num = (scope.num+1 > scope.max)?scope.max:scope.num+1;
    	  };
    	  scope.subNum = function() {
    	  	 scope.num = parseInt(scope.num);
    	  	 if(isNaN(scope.num)) scope.num = 0;
     	     scope.num = (scope.num-1 < scope.min)?scope.min:scope.num-1;
    	  };
        }
    };
  })
  .controller('MainCtrl', function ($scope) {
 		$scope.r = 120;
 		$scope.g = 50;
 		$scope.b = 10;
 		$scope.a = 1;
 		$scope.sz = 64;
   });