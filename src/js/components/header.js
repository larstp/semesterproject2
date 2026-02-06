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
 * Creates the logo link
 * @returns {HTMLAnchorElement} The logo link element
 */
function createLogoLink() {
  const link = document.createElement('a');
  link.href = '/index.html';
  link.className = 'flex items-center justify-center lg:justify-start';

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
  link.className =
    'flex items-center justify-end transition-transform hover:scale-105';

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
  link.className =
    'flex items-center justify-end transition-transform hover:scale-105';

  const button = document.createElement('span');
  button.className =
    'px-4 py-2 text-sm font-semibold text-white transition-colors rounded-lg bg-blue-slate-700 hover:bg-blue-slate-800';
  button.textContent = 'Log In';

  link.appendChild(button);

  return link;
}

/**
 * Creates a placeholder for non-authenticated users on login page specifically, to avoid confusion with login button and profile link
 * @returns {HTMLDivElement} Placeholder with user icon
 */
function createPlaceholder() {
  const div = document.createElement('div');
  div.className = 'flex items-center justify-end';

  const img = document.createElement('img');
  img.src = '/public/icons/flowbite_user-circle-solid-black.svg';
  img.alt = 'User';
  img.className = 'w-10 h-10';

  div.appendChild(img);

  return div;
}

/**
 * Creates the "All Auctions" link for desktop navigation
 * @returns {HTMLAnchorElement} All auctions link
 */
function createAllAuctionsLink() {
  const link = document.createElement('a');
  link.href = '/src/pages/listings.html';
  link.className =
    'px-4 py-2 text-sm font-medium transition-all text-blue-slate-700 hover:text-blue-slate-900 hover:scale-105';
  link.textContent = 'All Auctions';

  return link;
}

/**
 * Creates the wishlist link for desktop navigation
 * @param {Object|null} user - The user object from storage
 * @returns {HTMLAnchorElement} Wishlist link
 */
function createWishlistLink(user) {
  const link = document.createElement('a');
  if (user) {
    link.href = '/src/pages/wishlist.html';
  } else {
    link.href = `/src/pages/login.html?redirect=${encodeURIComponent('/src/pages/wishlist.html')}`;
  }
  link.className =
    'px-4 py-2 text-sm font-medium transition-all text-blue-slate-700 hover:text-blue-slate-900 hover:scale-105';
  link.setAttribute('aria-label', 'Wishlist');
  link.textContent = 'Wishlist';

  return link;
}

/**
 * Creates the search button placeholder for desktop navigation
 * @returns {HTMLButtonElement} Search button
 */
function createSearchButton() {
  const button = document.createElement('button');
  button.className =
    'px-4 py-2 text-sm font-medium transition-all text-blue-slate-700 hover:text-blue-slate-900 hover:scale-105';
  button.setAttribute('aria-label', 'Search');
  button.textContent = 'Search';

  button.addEventListener('click', () => {
    console.log('Search clicked - implement search functionality later');
  });

  return button;
}

/**
 * Creates the "Create new auction" button for desktop navigation
 * @param {Object|null} user - The user object from storage
 * @returns {HTMLAnchorElement} Create auction button link
 */
function createNewAuctionButton(user) {
  const link = document.createElement('a');
  if (user) {
    link.href = '/src/pages/create-listing.html';
  } else {
    link.href = `/src/pages/login.html?redirect=${encodeURIComponent('/src/pages/create-listing.html')}`;
  }
  link.className =
    'px-4 py-2 text-sm font-semibold text-white transition-all rounded-lg bg-blue-slate-700 hover:bg-blue-slate-800 hover:scale-105';
  link.textContent = 'Create new auction';

  return link;
}

/**
 * Creates the desktop navigation menu
 * @param {Object|null} user - The user object from storage
 * @param {boolean} isLoginPage - Whether current page is login page
 * @returns {HTMLElement} Desktop navigation container
 */
function createDesktopNav(user, isLoginPage) {
  const nav = document.createElement('nav');
  nav.className = 'items-center hidden gap-2 lg:flex';

  nav.appendChild(createAllAuctionsLink());
  nav.appendChild(createWishlistLink(user));
  nav.appendChild(createSearchButton());
  nav.appendChild(createNewAuctionButton(user));

  if (user) {
    nav.appendChild(createProfileLink(user));
  } else if (isLoginPage) {
    nav.appendChild(createPlaceholder());
  } else {
    nav.appendChild(createLoginButton());
  }

  return nav;
}

/**
 * Renders the responsive header component
 * @returns {HTMLElement} The header element
 */
export function renderHeader() {
  const user = getUser();
  const isLoginPage = window.location.pathname.includes('login.html');

  const header = document.createElement('header');
  header.className =
    'sticky top-0 z-50 px-8 py-4 bg-white shadow-md min-h-[72px]';

  const container = document.createElement('div');
  container.className =
    'grid items-center grid-cols-3 gap-2 lg:flex lg:justify-between lg:gap-4 min-h-[56px]';

  const logo = createLogoLink();

  const mobileLeft = document.createElement('div');
  mobileLeft.className = 'flex items-center justify-start lg:hidden';
  mobileLeft.appendChild(createHamburgerButton());

  const mobileRight = document.createElement('div');
  mobileRight.className = 'flex items-center justify-end lg:hidden';

  if (user) {
    mobileRight.appendChild(createProfileLink(user));
  } else if (isLoginPage) {
    mobileRight.appendChild(createPlaceholder());
  } else {
    mobileRight.appendChild(createLoginButton());
  }

  const desktopNav = createDesktopNav(user, isLoginPage);

  container.appendChild(mobileLeft);
  container.appendChild(logo);
  container.appendChild(mobileRight);
  container.appendChild(desktopNav);

  header.appendChild(container);

  return header;
}
