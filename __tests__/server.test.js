'use strict';
const server = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('my API Server', ()=> {

    // add scenarios & test cases 
    it('handles not found request', async () => {
        // add test
        const response = await request.get('/kiraa'); // async
        expect(response.status).toEqual(404);
    });

    it('handles not found request', async () => {
        // add test
        const response = await request.post('/person'); // async
        expect(response.status).toEqual(404);
    });

        
    // it('get data from /data ', async () => {
    //     const response = await request.get('/data'); // async
    //     expect(response.status).toEqual(200);
    //     expect(typeof response.body).toEqual('object'); // superagent is behind this 
    // });
    
    // it('/ route works', async () => {
    //     const response = await request.get('/'); // async
    //     expect(response.status).toEqual(200);
    //     console.log(response.text);
    //     expect(response.text).toEqual('Welcome to Home page');
    // });


});