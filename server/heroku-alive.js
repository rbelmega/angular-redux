const http = require('http'); //importing http

function run() {
    setInterval(() => {
      var options = {
        host: 'angular-redux-demo.herokuapp.com',
        port: 80,
        path: '/'
      };
    http.get(options, function (res) {
      res.on('data', function (chunk) {
        try {
          // optional logging... disable after it's working
          console.log("HEROKU RESPONSE: " + chunk);
        } catch (err) {
          console.log(err.message);
        }
      });
    }).on('error', function (err) {
      console.log("Error: " + err.message);
    });
  }, 20 * 60 * 1000); // load every 20 minutes
  }

module.exports = {
  run: run
};
