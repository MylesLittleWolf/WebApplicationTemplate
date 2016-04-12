// app.js
define(['router'],
	function(Router) {
		console.log("into app callback");
		window.console = (window.console) || {};
		window.console.log = (window.console.log) || function(){};			
		var App = {
			initialize : function() {
				console.log("into App initialize");
				
				new Router();
				
				//在此處建立view
				var rootView = new RootView({buttonName:"456"});
				rootView.render();
			},
		};
//		domReady(function() {	
//			App.initialize();
//		});	
		return App;
});
