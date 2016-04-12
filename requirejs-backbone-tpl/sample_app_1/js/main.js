
require.config({
	paths : {
		'jquery' : 'js/lib/jquery-1.7.2',
		'less' : '../../lib/less-1.3.0.min'
	},

	shim: {
/*		
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquerymigrate': {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['jquery']
        },
        'jqueryui': {
            deps: ['jquery']
        },
        'jqueryuitimepicker': {
            deps: ['jqueryui']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'jqueryi18n': {
            deps: ['jquery']
        },
        'jqueryflot': {
            deps: ['jquery']
        },
        'utils': {
            deps: ['jquery','jqueryui','jqueryi18n']
        },
*/
        'app': {
            deps: [ 
                    'jquery',
//                    'jquerymigrate',
//                    'backbone',
//                    'domReady',
//                    'bootstrap',
//                    'jqueryui',
					  'less',
                    
//                    'jqueryflot',
//                    'jqueryi18n',
//                    'dateformat',
//                    'swfobject',
//                    'kokosetting'
                    
                    ]
        },
    },

	baseUrl: 'js',
	waitSeconds: 600
});

require(['app'], function(app){
	console.log("into requirejs callback");
	app.initialize();
});