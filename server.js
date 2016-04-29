var http = require('http'),
    url = require('url'),
    fs = require('fs');
var messages = ["testing"];
var clients = [];

http.createServer(function (req, res) {
   // parse URL
   var url_parts = url.parse(req.url);
   console.log(url_parts);
   if(url_parts.pathname == '/') {
      // file serving
      fs.readFile('./index.html', function(err, data) {
         res.end(data);
      });
   } else if(url_parts.pathname.substr(0, 5) == '/poll') {
     // polling code here
	   var count = url_parts.pathname.replace(/[^0-9]*/, '');
	   console.log(count);
	   console.log(messages.length);
	   console.log(messages);
	   if(messages.length > count) {
	     res.end(JSON.stringify( {
	       count: messages.length,
	       appendd: messages.slice(count).join("\n")+"\n"
	     }));
	   } else {
		   console.log(count);
		   console.log(messages.length);
	     clients.push(res);
	   }
   }
	   else if(url_parts.pathname.substr(0, 5) == '/msg/') {
	     // message receiving
	     var msg = unescape(url_parts.pathname.substr(5));
	     messages.push(msg);
	     while(clients.length > 0) {
	       var client = clients.pop();
	       client.end(JSON.stringify( {
	         count: messages.length,
	         appendd: msg+"\n"
	       }));
	     }
	     res.end();
	   }
}).listen(8080, 'localhost');
console.log('Server running.');