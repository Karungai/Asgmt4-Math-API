const request = require('supertest');
const app = require('./app');

describe('GET /add', () => {
    it('should return the sum of two valid positive numbers', async () => {
        const response = await request(app).get('/add?a=1.5&b=2');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ result: 3.5 });
    });

    it('should return 400 Bad Request if a parameter is missing', async () => {
        const response = await request(app).get('/add?a=1');
        expect(response.status).toBe(400);
    });

    it('should return 400 Bad Request if a parameter is not a number', async () => {
        const response = await request(app).get('/add?a=1&b=apple');
        expect(response.status).toBe(400);
    });
});
