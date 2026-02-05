import { getUser } from '../utils/storage.js';

/**
 * Creates the hamburger menu button for mobile
 * @returns {HTMLButtonElement} The hamburger button element
 */
function createHamburgerButton() {
  const button = document.createElement('button');
  button.className =
    'p-2 text-2xl transition-colors text-blue-slate-700 hover:text-blue-slate-900';
  button.setAttribute('aria-label', 'Open menu');
  button.textContent = '☰';

  // Ill make it work later!
  button.addEventListener('click', () => {
    console.log('Hamburger menu clicked - implement menu toggle lateeeeeer');
  });

  return button;
}

/**
 * Creates the centered logo link
 * @returns {HTMLAnchorElement} The logo link element
 */
function createLogoLink() {
  const link = document.createElement('a');
  link.href = '/index.html';
  link.className = 'flex items-center justify-center';

  const img = document.createElement('img');
  img.src = '/public/img/logos/logo-65x65.svg';
  img.alt = 'Barter Auction House';
  img.className = 'h-8';

  link.appendChild(img);

  return link;
}

/**
 * Creates the user profile link with avatar image
 * @param {Object} user - The user object from storage
 * @returns {HTMLAnchorElement} The profile link element
 */
function createProfileLink(user) {
  const link = document.createElement('a');
  link.href = '/src/pages/profile.html';
  link.className = 'flex items-center justify-end';

  const img = document.createElement('img');
  img.src = user.avatar.url;
  img.alt = user?.name || 'User profile';
  img.className =
    'object-cover w-10 h-10 transition-colors border-2 rounded-full border-blue-slate-300 hover:border-blue-slate-500';

  link.appendChild(img);

  return link;
}

/**
 * Creates a login button for non-authenticated users
 * @returns {HTMLAnchorElement} Login button link element
 */
function createLoginButton() {
  const link = document.createElement('a');
  link.href = '/src/pages/login.html';
  link.className = 'flex items-center justify-end';

  const button = document.createElement('span');
  button.className =
    'px-4 py-2 text-sm font-semibold text-white transition-colors rounded-lg bg-blue-slate-700 hover:bg-blue-slate-800';
  button.textContent = 'Log In';

  link.appendChild(button);

  return link;
}

/**
 * Creates a placeholder for non-authenticated users
 * @returns {HTMLDivElement} Empty placeholder element
 */
function createPlaceholder() {
  const div = document.createElement('div');
  div.className = 'w-10';
  return div;
}

/**
 * Renders the mobile-first header component
 * @returns {HTMLElement} The header element
 */
export function renderHeader() {
  const user = getUser();
  const isLoginPage = window.location.pathname.includes('login.html');

  const header = document.createElement('header');
  header.className =
    'sticky top-0 z-50 grid items-center grid-cols-3 gap-2 px-4 py-4 bg-white shadow-md';

  // Mobile layout: hamburger (left) - logo (center) - profile/login/placeholder (right)
  const hamburger = createHamburgerButton();
  const logo = createLogoLink();

  let rightElement;
  if (user) {
    rightElement = createProfileLink(user);
  } else if (isLoginPage) {
    rightElement = createPlaceholder();
  } else {
    rightElement = createLoginButton();
  }

  header.appendChild(hamburger);
  header.appendChild(logo);
  header.appendChild(rightElement);

  return header;
}
