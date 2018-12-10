var ses = require('node-ses')
var client = ses.createClient({ key: 'aws key', secret: 'secretkey' });
 
// Give SES the details and let it construct the message for you.
client.sendEmail({
   to: 'gg2685@columbia.edu'
 , from: '1994ggh@gmail.com'
 , subject: 'greetings'
 , message: 'your <b>message</b> goes here'
 , altText: 'plain text'
}, function (err, data, res) {
 	if(err) console.log(err)
 	else console.log(data)
});
 