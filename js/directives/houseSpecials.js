app.directive('houseSpecials', function(){
	return {
		restrict:"E",
		scope: true,
    controller: 'menuController',
		template: '<div class="menuHeader"><span class="english">{{ menu.dish }}</span><span class="price pull-right">{{ menu.price | currency }} </span></div><div class="menuLayout"><span class="english">{{ menu.parens }}</span></div>',
    link: function(){
      TweenMax.staggerTo(".miniMenuWrapper", .2, {
         y:"20px",
         opacity:1,
         delay:0.2,
        ease: Sine.easeOut
      },.1);
    }
	};

});