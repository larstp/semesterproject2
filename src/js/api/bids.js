import { API_ENDPOINTS } from '../utils/constants.js';
import { getToken } from '../utils/storage.js';

export async function placeBid(listingId, amount) {
  const token = getToken();

  const response = await fetch(
    `${API_ENDPOINTS.auction.listings}/${listingId}/bids`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors?.[0]?.message || 'Failed to place bid');
  }

  return await response.json();
}
