import { clientId, clientSecret } from "./spKey";

const getSingles = async (bearer) => {
  const url = 'https://api.spotify.com/v1/playlists/1MnrvzqRhVtdSRRsMzCEha'

  return await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${bearer}`,
    }
  })
  .then(data => data.json())


}
// TODO 
// Create a state that holds the bearer to limit the amount of tokens created in a single site visit.

export const getMusic = async () => {
  return await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
  })
  .then(data => data.json())
  .then(token => token['access_token'])
  .then(bearer => getSingles(bearer))
}
