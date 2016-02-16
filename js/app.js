var app = angular.module("myMenu",['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',{
        url:'/',
        controller:'mainController',
        templateUrl: 'templates/index.html',
        controllerAs: 'home'
    })
    .state('menu',{
        url:'/menu',
        controller:'menuController',
        templateUrl: 'templates/menu/menu.html'

    })
    .state('menu.mainMenu',{
            url:'/mainMenu',
            templateUrl:'templates/menu/mainmenu.html'

    })
    .state('menu.houseSpecials',{
            url:'/houseSpecials',
            templateUrl:'templates/menu/housespecials.html'

    })
    .state('menu.lunchSpecials',{
            url:'/lunchSpecials',
            templateUrl:'templates/menu/lunchspecials.html'

    })
    .state('menu.comboPlatters',{
            url:'/comboPlatters',
            templateUrl:'templates/menu/comboplatters.html'

    })
    .state('menu.specialPlatters',{
            url:'/specialPlatters',
            templateUrl:'templates/menu/specialplatters.html'

    })
    .state('menu.partyTrays',{
            url:'/partyTrays',
            templateUrl:'templates/menu/partytrays.html'

    });
 });









/*
$('a[href*=#]:not([href=#])').click(function(){
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if(target.length){
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}

}

});
*/

/*$("#slideshow > div:gt(0)").hide();

var index = 1;
var maxindex = $('#slideshow > div').length;

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    $('ul li').removeClass('active1');
    $('ul li:eq(' + index + ')').addClass('active1');
    index = index < maxindex - 1 ? index + 1 : 0;
}, 3000);

$(document).ready(function(){
    $('a[href*=#]:not([href=#])').click(function(){


    })
})
*/
