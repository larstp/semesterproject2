/**
 * Creates a loading spinner
 * @param {string} message - Loading message
 * @returns {HTMLElement} Loader element
 */
export function createLoader(message = 'Loading...') {
  const loader = document.createElement('div');
  loader.className = 'flex flex-col items-center gap-3 my-4';
  loader.setAttribute('role', 'status');
  loader.setAttribute('aria-live', 'polite');

  const spinner = document.createElement('div');
  spinner.className =
    'w-8 h-8 border-4 rounded-full border-blue-slate-200 border-t-blue-slate-600 animate-spin';
  loader.appendChild(spinner);

  const text = document.createElement('p');
  text.className = 'text-sm text-cool-steel-600';
  text.textContent = message;
  loader.appendChild(text);

  return loader;
}
