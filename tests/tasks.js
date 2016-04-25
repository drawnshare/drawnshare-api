/*
 * Dependencies
 */
var supertest = require('supertest');
var should = require('should');

// Setting up the supertest agent for easy http access
var server = supertest.agent('http://locahost:3000/tasks');

/*
 * Unit testing
 */
describe('Tasks interaction', function(done) {
    it('should return a welcome message', function(done) {
        server
        .get('/')
        .expect('content-type', 'json')
        .expect(200)
        .end(function(err, res){
            console.log(res)
            done();
        })
    })
});
