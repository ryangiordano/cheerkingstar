angular.module("myMenu")
.factory("Menu",['$http', function menuFactory($http){
	return {
		all: function(){
		return $http({method:'GET', url:'/js/json/menu.json'});
	 }
	};
}]);