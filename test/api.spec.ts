import request from 'supertest';
import app from '../src/poke-dex/app';

afterAll(() => {
    app.close();
});

describe('get types by pokemon', () => {
    const test = () => {
        request(app).get('/type?pokemon_name=pikachu')
            .expect(200)
    };
    it('should return pokemom types', test);
});
