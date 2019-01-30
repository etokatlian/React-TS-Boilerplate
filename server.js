const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const expressStaticGzip = require('express-static-gzip');

const port = process.env.PORT || 8080;

const app = express();
// serve static assets normally
app.use(expressStaticGzip(__dirname + '/dist'));
app.use(history());

app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port);
console.log('server started on port ' + port);
