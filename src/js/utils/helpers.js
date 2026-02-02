export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

export function formatDateTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleString();
}

export function calculateTimeRemaining(endsAt) {
  const now = new Date();
  const end = new Date(endsAt);
  const diff = end - now;

  if (diff <= 0) {
    return 'Auction ended';
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return `${days}d ${hours}h`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
}

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidNoroffEmail(email) {
  return email.endsWith('@stud.noroff.no');
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}
