import request from 'supertest';

import app from '../src/poke-dex/pokemons/infrastructure/apirest/app';

describe('get types by pokemon', () => {
  it('should return pokemom types', () => request(app).get('/type?pokemon_name=pikachu')
      .expect(200)
      .expect((body) => {
        console.log(body);
      })
  );
});
