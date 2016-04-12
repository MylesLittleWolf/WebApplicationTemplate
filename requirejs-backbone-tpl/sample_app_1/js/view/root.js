define(['jquery','backbone', 'text!tpl/sample.html'],
		function($, Backbone, sampleTemplate){		
	var SampleView = Backbone.View.extend({
		
		el: "document.body",		
		initialize : function(options) {
			this.buttonName = options.buttonName;
			this.template = _.template(sampleTemplate);			

		},
		render : function() {			
			$(this.el).html(this.template({buttonName:this.buttonName}));								
			 
			return this;
		},
		events : {
		}
	});
	return SampleView;
});