import { GetPlaylistItemsResponse } from "../types/types";
import { SPOTIFY_ACCESS_TOKEN } from "../config";
async function getPlaylistItems(
  playlistId: string
): Promise<GetPlaylistItemsResponse | undefined> {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${SPOTIFY_ACCESS_TOKEN}`);

  try {
    const response = await fetch(url, {
      headers,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch {
    console.error("Error in getPlaylistItems");
  }
}

export { getPlaylistItems };
