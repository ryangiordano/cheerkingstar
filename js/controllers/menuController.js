app.controller('menuController',['$scope','$http','Menu',function($scope,$http, Menu){
	var menuController = this;
	Menu.all().success(function(data){
	 	 $scope.menuData = data;
	 	 $scope.tab = '0';
	 	 $scope.tabChange = function(wizecks){

	 	$scope.tab = wizecks;

	 	 }
	 });
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
	//Tabbed Menu//
	$scope.selectedMenu = 'all';
	$scope.mainMenuFocus = function(subMenu){
		TweenMax.to(".menuWrapper", .2, {
         y:"50px",
         opacity:1,
         delay:0.2,
        ease: Sine.easeOut
      },.1);

		$scope.selectedMenu = subMenu;

	};
	$scope.selectedSpecialPlatter = 'single';
	$scope.specialPlatterFocus = function(focus){

		$scope.selectedSpecialPlatter = focus;
		TweenMax.to(".menuWrapper", .2, {
         opacity:1,
        ease: Sine.easeOut
      },.1);
	}
}]);
