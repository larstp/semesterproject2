import { API_ENDPOINTS } from '../utils/constants.js';
import { saveToken, saveUser } from '../utils/storage.js';

export async function register(name, email, password) {
  const response = await fetch(API_ENDPOINTS.auth.register, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors?.[0]?.message || 'Registration failed');
  }

  return await response.json();
}

export async function login(email, password, remember = true) {
  // this was confusing
  const response = await fetch(API_ENDPOINTS.auth.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors?.[0]?.message || 'Login failed');
  }

  const data = await response.json();

  if (data.data.accessToken) {
    saveToken(data.data.accessToken, remember);
  }

  if (data.data) {
    saveUser(data.data, remember);
  }

  return data;
}
