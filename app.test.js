// app.test.js
const request = require('supertest');
const app = require('./app');

describe('GET /hello', () => {
  it('should return a 200 status and a message', async () => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello, world!');
  });
});

