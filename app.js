var http = require('http');
var path = require('path');


//array of our pages

var pages = [
	{route: '', output: 'Welcome,via Node.js <br> <a href="bursaries">Bursaries</a> <br> <a href="gb">Graduate Programmes</a> <br> <a href="intern">Internships</a> <br> <a href="learnerships">Learnerships</a> <br> <a href="startup">Startup Jobs</a>'},	
	{route: 'bursaries', output: 'Department of Education Bursaries 2014'},
	{route: 'gb', output: '<h3> Graduate Programmes 2014 </h3>'},
	{route: 'intern', output: 'Internships 2013/14'},
	{route: 'learnerships', output: 'Learnerships 2013/14'},
	{route: 'startup', output: 'Startup Jobs Closing This Month'},
	{route: 'another page', output: function(){return 'Here\'s '+this.route;}},
	];


http.createServer(function (request, response) {

	var lookup = path.basename(decodeURI(request.url));

	pages.forEach(function(page){
		if(page.route === lookup){
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.end(typeof page.output === 'function' ? page.output(): page.output);
		}
	});
	if(!response.finished){
		response.writeHead(404);
		response.end('Page Not Found');
	}
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('Hello from mxit <a href="http://appfog.com">AppFog.com</a>');
}).listen(process.env.VMC_APP_PORT || 1337, null);