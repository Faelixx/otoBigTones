import { clientId, clientSecret } from "./spKey";

const getAlbums = async (bearer) => {
  const url = 'https://api.spotify.com/v1/artists/2VH86MazYojDoIJbU8st1E/albums?include_groups=album'

  return await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${bearer}`,
    }
  })
  .then(data => data.json())
  .then(albums => albums.items)

}

export const getAccessToken = async () => {
  return await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
  })
  .then(data => data.json())
  .then(token => token['access_token'])
  .then(bearer => getAlbums(bearer))
}