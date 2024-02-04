function createPlaylist(playlistName) {
  let playlist = [];

  return {
    addSong: function (song, artist) {
      playlist.push({ song, artist });
    },
    listSongs: function () {
      return playlist
        .map((item) => `${item.song} by ${item.artist}`)
        .join(", ");
    },
  };
}

// Usage
const myPlaylist = createPlaylist("My Favorites");

// Task 2 Title: Adding Song to Playlist
myPlaylist.addSong("Song1", "Artist1");
myPlaylist.addSong("Song2", "Artist2");
myPlaylist.addSong("Song3", "Artist3");

// Task 3 Title: Listing Songs in Playlist with Closure
const playlistOutput = myPlaylist.listSongs();
console.log(`My Favorites Playlist: ${playlistOutput}`);
