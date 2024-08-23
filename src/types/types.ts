export interface Artist {
  name: string;
}

export interface Song {
  songName: string;
  artists: string[];
}

export interface Item {
  track: {
    name: string;
    artists: Artist[];
  };
}

export interface GetPlaylistItemsResponse {
  tracks: {
    items: Item[];
  };
}
