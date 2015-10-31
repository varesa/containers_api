var restify = require('restify');

function Docker() {
    this.url = process.env.DOCKER_URL;
    this.client = restify.createJsonClient(this.url);
}

Docker.prototype.getContainers = function getContainers(cb) {
    console.log("getting containers");

    this.client.get('/containers/json', function(err, req, res, obj) {
        cb(obj);
    });
};

module.exports = Docker;

