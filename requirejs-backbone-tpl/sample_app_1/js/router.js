// router.js

define(['backbone'], 
         function(Backbone, RootView) {	

	var Router = Backbone.Router.extend({	
		initialize : function() {
			

			
			
			if( ('onhashchange' in window) && ((typeof document.documentMode==='undefined') ||document.documentMode==8)) {
				$(window).bind('hashchange', this.dohashchange);
			} else {
				var router = this;
				setInterval(function() {
					router.dohashchange();
				}, 150);
			}				
		},	
		dohashchange : function() {
			if(this.lastHash !== location.hash) {
				this.lastHash = location.hash;
		        //var hash = (location.hash.replace(/^#/, '') || 'blank');
				hash = location.hash.replace(/^#/, '');
				console.log('hash is changed to='+ (hash||'blank') );
				if(hash=='') {
					//$('#userdetail').dialog('close');
				}
		    }
		},
		routes : {			
			'*anyword' : 'defaultMethod'
		},
		defaultMethod : function(anyword) {	
		
		}
	});	

	
	return Router;
});
