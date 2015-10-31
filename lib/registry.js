var restify = require('restify');

function Registry() {
    this.url = process.env.REGISTRY_URL;
    this.client = restify.createJsonClient(this.url);
}

Registry.prototype.getRepositories = function getRepositories(cb) {
    console.log("getting repositories");

    this.client.get('/v2/_catalog', function(err, req, res, obj) {
        var repositories = obj.repositories;
        cb(repositories);
    });
};

module.exports = Registry;
