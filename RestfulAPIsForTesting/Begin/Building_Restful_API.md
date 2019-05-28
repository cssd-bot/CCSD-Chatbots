This folder contains a test project using Visual Studio to create a Restful API that can connect to a database.

Here are some links to sites that provide step by step instructions on building the simple Restful Api above, as well as some related links to help in the process
* https://stackoverflow.com/questions/51596084/deploy-asp-net-core-2-1-web-api-to-iis-using-visual-studio-code
* About authenticating a Restful Api: [Step by Step Tutorial - Authenticating to a REST API in c#](https://www.youtube.com/watch?v=XX5pn4pJ4b0)
* Site that lets you test calling your Restful API:  https://repl.it/languages/javascript
* Sample code to call this Restful API: 
```var https = require ('https');
var pathString = "/ContactManager/api/Contacts"

var request = https.get({
       host: "URL to your hosting server goes here",
       path: pathString
   }, function (response) {
       var json = "";
       response.on('data', function(chunk) {
           console.log("received JSON response: " + chunk);
           json += chunk;
       });
       response.on('end', function(){
           var jsonData = JSON.parse(json);
           console.log ("the contacts are:" + json);
       });
});
```
