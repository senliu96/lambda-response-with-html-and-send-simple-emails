var request = require('request')
var fs = require('fs')
exports.handler = function(event, context) {
    // var html = '<html><head><title>HTML from API Gateway/Lambda</title></head>' + 
    //     '<body><h1>HTML from API Gateway/Lambda</h1></body></html>';
    var option ={
		method :'POST',
		url : "http://micro-rds-env.ycmt9p6fh8.us-east-1.elasticbeanstalk.com/users/setstatus",
		json: true,
		body :{
			'email' : event.email
		}
	}
	request(option , function(error,response,body){
	    if(!error && response.statusCode == 200 )
	    {
	    	fs.readFile('index.html','utf8',function(err,data){
				if(err) throw err;
		        context.succeed(data);
			})
	    }
	})
};






