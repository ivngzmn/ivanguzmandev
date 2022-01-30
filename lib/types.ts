export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};
export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  artistUrl: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};
export type RecentlyPlayedSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  songUrl: string;
  title: string;
};
export type GitHub = {
  stars: number;
};
export type Views = {
  total: number;
};
