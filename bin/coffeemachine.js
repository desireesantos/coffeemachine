'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const Routes = require('./../server/routes');


const server = new Hapi.Server();
server.connection({ 
    host: 'localhost',
    port: process.env.PORT || 9000
});

server.register(Inert, () => {

    server.route(Routes);

});


server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('☕  Coffee Machine is ready on port %d', server.info.port);
});

module.exports = server