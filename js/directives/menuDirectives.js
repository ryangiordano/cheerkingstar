app.directive('mainMenuItems', function(){
	return {
		restrict:"E",
		scope: true,
    	controller: 'menuController',
		templateUrl: '/templates/menutypes.html'
	};

});