export async function getYtVideos(playlistID, apiKey) {
  return await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=${playlistID}&key=${apiKey}`)
  .then(data => data.json())
  .then(list => list.items);
}