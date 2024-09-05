import { Song } from "../types/types";

export default function SongCard({ songName, artists }: Song) {
  return (
    <div className="song-card">
      <h1>{songName}</h1>
      <h2>Artists:</h2>
      {artists.map((artist) => (
        <p>{artist}</p>
      ))}
    </div>
  );
}
