'use strict';

const Hapi = require('hapi');
const Path = require('path');
const Inert = require('inert');


const server = new Hapi.Server();
server.connection({ 
    host: 'localhost',
    port: process.env.PORT || 3000
});

server.register(Inert, () => {});

server.route(
[{
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: '../client/',
            redirectToSlash: true,
            index: true
        }
    }
},
{
    method: 'GET',
    path: '/api/{param*}',
    handler: {
        file: '../server/api/index.js'
    }    
}]);



// server.route({
//     method: 'GET',
//     path: '/',
//     handler: function (request, reply) {
//         reply('Hello, world!');
//     }
// });

// app.use('/api', require('../server/api'));
// app.use('/', require('serve-static')(require('path').resolve(__dirname, '../client')));


// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('☕  Coffee Machine is ready on port %d', server.info.port);
});