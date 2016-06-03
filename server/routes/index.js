'use strict'

module.exports =
[{
    method: 'GET',
    path: '/home',
    handler: {
        directory: {
            path: '../../client/',
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
}];