#!/bin/env node

var restify = require('restify');

var routes_api_docker = require('./api/docker');
var routes_api_registry = require('./api/registry');
var routes_api_systemd = require('./api/systemd');

var server = restify.createServer({
    name: 'containers_ui',
    version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

routes_api_docker(server);
routes_api_registry(server);
routes_api_systemd(server);

server.get('/', function(req, res, next) {
    res.send("Test okay");
    return next();
});

server.listen(80, function() {
    console.log('%s listening at %s', server.name, server.url);
});