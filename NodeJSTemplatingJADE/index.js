var ws = require('./WebServer'),
    jade = require('jade'),
    server = ws.WebServer({ 'port': 9000, 'hostname': 'localhost' });

server.AddRoute("GET", /^\/$/, function (request, response, view, params) {
    var locals, result;
    
    locals = {
        'PageTitle': 'Jade!',
        'Content': 'Hello, World!'
    };

    result = view.Render('./temp.jade', locals);

    response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': result.length });
    response.write(result);
    response.end();
});

server.AddRoute("GET", /profile\/(.*)/, function (request, response, view, id) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write("PROFILE ID: " + id);
    response.end();
});

server.Start();
