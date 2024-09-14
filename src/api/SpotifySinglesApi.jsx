export async function getSpotifyAlbums() {
  const playlistID = '';

  return await fetch()
  .then(data => data.json())
  .then(list => list.items);
}