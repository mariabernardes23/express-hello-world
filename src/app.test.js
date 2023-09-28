const request = require('supertest');
const { app } = require('./app');

describe('/test endpoints', () => {
  it('check if endpoint /hello returns `Hello World!`', async () => {
    const data = await request(app).get('/hello');
    expect(data.statusCode).toBe(200);
    expect(data.body.message).toBe('Hello World!');
  });
  
  it('check if endpoint /req returns `Yo!`', async () => {
    const data = await request(app).get('/req');
    console.log(data.responde);
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('Yo!');
  });

  it('check if endpoint /meu-nome  returns `Meu nome é Maria Eduarda Bernardes Lopes`', async () => {
    const data = await request(app).get('/meu-nome');
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('Meu nome é Maria Eduarda Bernardes Lopes');
  });

  /*it('check if endpoint /meu-nome  returns `Meu nome é Leandro Marques`', async () => {
    const data = await request(app).get('/meu-nome');
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('Meu nome é Leandro Marques');
  });*/

  it('check if endpoint /tico returns `Teco`', async () => {
    const data = await request(app).get('/tico');
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('Teco');
  });

  /*it('check if endpoint /tico returns `tico no fubá`', async () => {
    const data = await request(app).get('/tico');
    expect(data.statusCode).toBe(200);
    expect(data.text).toBe('tico no fubá');
  });*/

  it('check if endpoint /pokemons returns `list pokemons`', async () => {
    const data = await request(app).get('/pokemons');
    expect(data.statusCode).toBe(200);
    expect(data.body).toEqual([
      { id: 1, name: 'Pikachu' },
      { id: 2, name: 'Caterpie' },
      { id: 3, name: 'Pidgeotto' },
      { id: 4, name: 'Bulbasaur' },
      { id: 5, name: 'Charmander' },
      { id: 6, name: 'Squirtle' },
      { id: 7, name: 'Krabby' },
      { id: 8, name: 'Muk' },
      { id: 9, name: 'Tauros' },
      { id: 10, name: 'Lapras' } ]);
  });

  /*it('check if endpoint /pokemons returns `Bulbasaur`', async () => {
    const data = await request(app).get('/pokemons');
    expect(data.statusCode).toBe(200);

    expect(data.body[0].name).toBe('Bulbasaur');
  });*/

  it('check if endpoint /series returns list serie', async () => {
    const data = await request(app).post('/series');
    expect(data.statusCode).toBe(200);
    expect(data.body).toEqual([ 
      { id: 1, name: 'Atypical' },
     { id: 2, name: 'Cozinhado o Impossível'},
     { id: 3, name: 'Only Murdes In The Building'} ]);
  });

  /*it('check if endpoint /series returns Atypical', async () => {
    const data = await request(app).post('/series');
    expect(data.statusCode).toBe(200);
    expect(data.body[0].name).toBe('Only Murdes In The Building');
  });*/
});