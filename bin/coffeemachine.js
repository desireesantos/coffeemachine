'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');
const Vision = require('Vision')
const Routes = require('./../server/routes');


const server = new Hapi.Server();

server.register([Inert, Vision]);
server.connection({ 
    host: 'localhost',
    port: process.env.PORT || 9000
});

server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    path: './../client'
});

server.route(Routes);





server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('☕  Coffee Machine is ready on port %d', server.info.port);
});

module.exports = server