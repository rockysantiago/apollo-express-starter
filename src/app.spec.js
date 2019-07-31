import request from 'supertest';
import app from './app';

describe('GraphQL /api', () => {
  it('should successfully return "Cardo Dalisay"', async () => {
    const response = await request(app)
      .post('/api')
      .send({ query: '{me {username}}' });

    expect(response.status).toBe(200);

    const { me } = response.body.data;

    expect(me.username).toBe('Cardo Dalisay');
  });
});
