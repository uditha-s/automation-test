import { test, expect, request } from '@playwright/test';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test.describe('Posts API Tests', () => {

  test('Get all posts', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/posts`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(Array.isArray(body)).toBeTruthy();
  expect(body.length).toBe(100);
  body.forEach((post: any) => {
    expect(post).toHaveProperty('userId');
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
  });
  });

  test('Get single post', async ({ request }) => {
   const response = await request.get(`${BASE_URL}/posts/1`);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body).toHaveProperty('userId');
  expect(body).toHaveProperty('title');
  expect(body).toHaveProperty('body');
  });

  test('Create a post', async ({ request }) => {
    const payload = {
      title: 'automation test e2e',
      body: 'automation test e2e',
      userId: 1
    };
    const response = await request.post(`${BASE_URL}/posts`, { data: payload });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.id).toBeDefined();
  });

  test('Update a post', async ({ request }) => {
    const payload = {
      title: 'automation test API',
      body: 'automation test API',
      userId: 1
    };
    const response = await request.put(`${BASE_URL}/posts/1`, { data: payload });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.title).toBe('automation test API');
  });
test('endpoint behavior-unconventional API behavior', async ({ request }) => {
  
  const putPayload = { id: 10001, title: 'PUT Insert', body: 'Test PUT', userId: 1 };
  const putResponse = await request.put(`${BASE_URL}/posts/10001`, { data: putPayload });
  if (putResponse.status() === 500) {
    console.log('PUT Insert Status: 500.Cannot create a new resource via PUT');
  } else {
    console.log('PUT Insert Status:', putResponse.status());
  }

  const postPayload = { id: 10001, title: 'POST Update', body: 'Test POST', userId: 1 };
  const postResponse = await request.post(`${BASE_URL}/posts/101`, { data: postPayload });
  if (postResponse.status() === 404) {
    console.log('POST Update Status: 404.Cannot update an existing resource via POST');
  } else {
    console.log('POST Update Status :', postResponse.status());
  }

  const getResponse = await request.get(`${BASE_URL}/posts/101`);
  if (getResponse.status() === 404) {
    console.log('GET simulate DELETE Status 404.GET cannot delete a resource');
  } else {
    console.log('GET simulate DELETE Status:', getResponse.status());
    console.log('Response Body:', await getResponse.json());
  }

  //In a real REST API, attempting to delete a resource via GET is invalid. 
  // GET requests are intended to retrieve data only and should never modify or delete resources. 
  // If DELETE is attempted via GET, the server should ignore the operation or return an error. 
  // Allowing deletion via GET would violate REST principles and could result in unintended data loss.//
});
});
