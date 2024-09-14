export async function getYtVideos() {
  const playlistID = '';

  return await fetch()
  .then(data => data.json())
  .then(list => list.items);
}