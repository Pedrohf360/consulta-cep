const request = require('supertest');
const { Server } = require('../../api/server');

const server = new Server().app;

describe('GET /api/address/:cepNumber', () => {

    it('should receive statusCode 200 (valid, regular and existing CEP)', async () => {
        const testValue = '31573550';
        const res = await request(server).get(`/api/address/${testValue}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('cep');
    });

    it('should receive statusCode 200 (valid, with spaces and existing CEP)', async () => {
        const testValue = '31 573 550';
        const res = await request(server).get(`/api/address/${testValue}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('cep');
    });

    it('should receive statusCode 200 (valid, with special characters and existing CEP)', async () => {
        const testValue = '31.573-550';
        const res = await request(server).get(`/api/address/${testValue}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('cep');
    });

    it('should receive statusCode 400 (invalid CEP: contains 9 digits)', async () => {
        const testValue = '123456789'
        const res = await request(server).get(`/api/address/${testValue}`);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('error');
    });

    it('should receive statusCode 404 (valid format but unexisting CEP)', async () => {
        const testValue = '31573555';
        const res = await request(server).get(`/api/address/${testValue}`);

        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('error');
    });
})