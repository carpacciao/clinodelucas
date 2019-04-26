'use strict'

module.exports = [
  //your routes here
  {
    method: 'GET',
    path: '/newRoute',
    // config: {auth: 'jwt'},
    handler: (request, reply) => {
      return reply.response('NewRoute')
    }
  }
]