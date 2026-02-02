import { STORAGE_KEYS } from './constants.js';

export function saveToken(token) {
  localStorage.setItem(STORAGE_KEYS.token, token);
}

export function getToken() {
  return localStorage.getItem(STORAGE_KEYS.token);
}

export function removeToken() {
  localStorage.removeItem(STORAGE_KEYS.token);
}

export function saveUser(user) {
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem(STORAGE_KEYS.user);
  return user ? JSON.parse(user) : null;
}

export function removeUser() {
  localStorage.removeItem(STORAGE_KEYS.user);
}

export function clearStorage() {
  removeToken();
  removeUser();
}
