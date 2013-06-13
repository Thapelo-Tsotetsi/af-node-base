var http = require('http');
var path = require('path');

//array of our pages

var pages = [
				{route:'', output: '<p><b>sharing board via Node.js</b> <br /> <a href="bursaries">1</a> <b>&rsaquo;&rsaquo; </b> <a href="bursaries">Bursaries</a></p> <p> <a href="gp">2</a> <b>&rsaquo;&rsaquo; </b><a href="gp">Graduate Programmes</a> </p> <p> <a href="intern">3</a> <b>&rsaquo;&rsaquo; </b><a href="intern">Internships</a> </p> <p> <a href="ls">4</a> <b>&rsaquo;&rsaquo; </b><a href="ls">Learnerships</a> </p> <p> <a href="sj">5</a> <b>&rsaquo;&rsaquo; </b><a href="sj">Startup Jobs</a> </p>'},
				{route:'home', output: 'bursaries page <a href="bursaries">Bursary</a>'},
	 			{route:'bursaries', output: '<p><b>Bursary page </b></p> <br /> <p> <a href="/">5</a> <b>&rsaquo; </b><a href="/">Home</a> </p>'},
	 			{route: 'gp', output: '<p><b>Graduate Programme page</b></p> <br /> <p> <a href="/">5</a> <b>&rsaquo; </b><a href="/">Home</a> </p>'},
	 			{route: 'intern', output: '<p><b>Internships</b></p> <br /> <p> <a href="/">5</a> <b>&rsaquo; </b><a href="/">Home</a> </p>'},
	 			{route: 'ls', output: '<p><b>Learnerships page</b></p> <br /> <p> <a href="/">5</a> <b>&rsaquo; </b><a href="/">Home</a> </p>'},
	 			{route: 'sj', output: '<p><b>Startup jobs page</b></p> <br /> <p> <a href="/">5</a> <b>&rsaquo; </b><a href="/">Home</a> </p>'},	
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
  //res.end('Hello from <a href="http://appfog.com">AppFog.com</a>');
}).listen(process.env.VMC_APP_PORT || 1337, null);