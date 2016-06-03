'use strict'

module.exports =
[{
	method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('index');
    }
},
{
    path: '/api/{param*}',
    method: 'GET',
    handler: {
        file: '../server/api/index.js'
    }
}];