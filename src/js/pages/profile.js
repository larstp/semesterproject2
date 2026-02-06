import { getProfile } from '../api/profile.js';
import { getUser } from '../utils/storage.js';
import { renderHeader } from '../components/header.js';

// Check if user is logged in, if not - straight to jail (login screen)
const user = getUser();
if (!user) {
  window.location.href = '/src/pages/login.html';
} else {
  const body = document.querySelector('body');
  if (body) {
    body.insertBefore(renderHeader(), body.firstChild);
  }
}
