import { test, expect, request } from '@playwright/test';

const BASE_URL = 'https://pokeapi.co/api/v2';

test.describe('PokeAPI tests (GET / POST / DELETE)', () => {

  test('GET /pokemon/ditto - weryfikacja poprawnych danych', async () => {
    const response = await request.get(`${BASE_URL}/pokemon/ditto`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.name).toBe('ditto');
    expect(body.id).toBe(132);
    expect(body.types).toBeDefined();
  });

  test('POST /pokemon - powinno zwrócić błąd (method not allowed)', async () => {
    const response = await request.post(`${BASE_URL}/pokemon`, {
      data: {
        name: 'test-pokemon'
      }
    });

    // PokeAPI nie obsługuje POST → 405 / 404 albo inne
    expect([404, 405]).toContain(response.status());
  });

  test('DELETE /pokemon/1 - powinno zwrócić błąd (method not allowed)', async () => {
    const response = await request.delete(`${BASE_URL}/pokemon/1`);
    expect([404, 405]).toContain(response.status());
  });

});
