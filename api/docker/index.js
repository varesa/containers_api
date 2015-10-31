var Docker = require('../../lib/docker');
var docker = new Docker();


var basepath = "/api/docker/";

function routes_api_docker(server) {
    server.get(basepath + "/containers", function(err, res, next) {
        docker.getContainers(function(containers) {
            res.send(containers);
        });
        return next();
    });
}

module.exports = routes_api_docker;