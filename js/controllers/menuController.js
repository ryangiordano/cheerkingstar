app.controller('menuController',['$scope','$http','Menu',function($scope,$http, Menu){
	Menu.all().success(function(data){
	 	 $scope.menuData = data;
	 });
	//  Keeps tab definition on refresh
	 	 switch(window.location.hash){
			 case '#/menu/mainMenu':
			 $scope.tab = '0';
			 break;
			 case '#/menu/houseSpecials':
			 $scope.tab = '1';
			 break;
			 case '#/menu/lunchSpecials':
			 $scope.tab = '2';
			 break;
			 case '#/menu/comboPlatters':
			 $scope.tab = '3';
			 break;
			 case '#/menu/specialPlatters':
			 $scope.tab = '4';
			 break;
			 case '#/menu/partyTray':
			 $scope.tab = '5';
			 break;
		}
		$scope.tabChange = function(wiz){
		$scope.tab = wiz;
	 	}
		$scope.menuSections  =[
		{
			name: 'Main Menu',
			parens:''
		},
		{
			name: 'House Specials',
			parens:'Hunan and Szechuan Style w. White Rice'
		},
		{
			name: 'Lunch Specials',
			parens:'10:30am to 3:00pm ・ Monday to Saturday',
			parens2:'(Served w. Fried Rice or White Rice & Egg Drop or Wonton or Hot & Sour Soup or Egg Roll)'
		},
		{
			name: 'Combination Plates',
			parens:'All Served w. Egg Roll & Pork Fried Rice'
		},
		{
			name: 'Special Platters',
			parens:''
		},
		{
			name: 'Party Trays',
			parens:''
		}
		];
	//Main Menu subTypes//
	$scope.menuTypes = [
	{
		menuType: 'Appetizers',
		parens:'',
		display: true
	},
	{
		menuType: 'Soup',
		parens:'(w. Fried Noodles)',
		display: true

	},
	{
		menuType: 'Fried Rice',
		parens:'',
		display: true

	},
	{
		menuType: 'Lo Mein',
		parens:'(Soft Noodles)',
		display: true

	},
	{
		menuType: 'Chow Mein',
		parens:'(w. White Rice & Crispy Noodles)',
		display: true

	},
	{
		menuType: 'Chop Suey',
		parens:'(w. White Rice)',
		display: true

	},
	{
		menuType: 'Chow Mei Fun',
		parens:'(Thin Rice Noodles)',
		display: true

	},
	{
		menuType: 'Egg Foo Young',
		parens:'(w. White Rice & Gravy)',
		display: true

	},
	{
		menuType: 'Pork',
		parens:'(w. White Rice)',
		display: true

	},
	{
		menuType: 'Seafood',
		parens:'(w. White Rice)',
		display: true

	},
	{
		menuType: 'Poultry',
		parens:'(w. White Rice)',
		display: true

	},
	{
		menuType: 'Beef',
		parens:'(w. White Rice)',
		display: true

	},
	{
		menuType: 'Sweet & Sour',
		parens:'(w. White Rice)',
		display: true

	},
	{
		menuType: 'Vegetables',
		parens:'(w. White Rice)',
		display: true

	},
	{
		menuType: 'Side Order',
		parens:'',
		display: true

	}]
	//Tabbed Menus
	$scope.selectedMenu = 'all';
	$scope.mainMenuFocus = function(subMenu){
	$scope.selectedMenu = subMenu;
	};
	$scope.selectedSpecialPlatter = 'single';
	$scope.specialPlatterFocus = function(focus){
	$scope.selectedSpecialPlatter = focus;
	};
	$scope.selectedLunchSpecial = 'all';
	$scope.lunchSpecialFocus = function(focus){
	$scope.selectedLunchSpecial = focus;
	}
}]);
