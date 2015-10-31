var Registry = require('../../lib/registry.js');
var registry = new Registry();


var basepath = "/api/registry/";

function routes_api_registry(server) {
    server.get(basepath + "/repositories", function(err, res, next) {
        registry.getRepositories(function(repos) {
            res.send(repos);
        });
        return next();
    })
}

module.exports = routes_api_registry;