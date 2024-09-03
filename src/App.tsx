import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import { getPlaylistItems } from "./api/spotify";
import { GetPlaylistItemsResponse, Song } from "./types/types";

import TopToolbar from "./components/header/TopToolbar";
import SongCard from "./components/SongCard";

function transformPlaylistItemsResponse(
  playlistItemsResponse: GetPlaylistItemsResponse
): Song[] {
  const songs: Song[] = [];
  const items = playlistItemsResponse?.tracks?.items;

  items?.forEach((item) =>
    songs.push({
      songName: item.track.name,
      artists: item.track.artists.map((artist) => artist.name),
    })
  );

  return songs;
}

// TODO: review promises and async awaits and useCallback
function App() {
  const [songs, setSongs] = useState<Song[]>([]);

  const getPlaylistItemsCallback = useCallback(async (playlistId: string) => {
    const playlistItemsResponse = await getPlaylistItems(playlistId);

    if (playlistItemsResponse) {
      setSongs(transformPlaylistItemsResponse(playlistItemsResponse));
    }
  }, []);

  useEffect(() => {
    getPlaylistItemsCallback("2lhj9HBZHC6sh8ayXeWcYg?si=fa7f9ef1f1e944c9");
  }, [getPlaylistItemsCallback]);

  return (
    <div className="App">
      <TopToolbar />
      <h1>Playlist Name</h1>
      {songs.map((song, index) => (
        <SongCard
          key={index} // TODO: switch to id
          songName={song.songName}
          artists={song.artists}
        />
      ))}
    </div>
  );
}

export default App;
