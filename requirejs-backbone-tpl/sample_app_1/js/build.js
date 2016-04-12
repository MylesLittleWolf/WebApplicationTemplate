({
    baseUrl: './',
    name: 'main',
    excludeShallow:['less'],
    out: 'app-built.js',
    wrap: true,
	optimize:'uglify2',
	preserveLicenseComments: false,
	generateSourceMaps : true,	
    paths: { 
		'less' : '../../js/lib/less/less-1.3.0.min'
    }
})