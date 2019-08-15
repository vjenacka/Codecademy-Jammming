let accessToken = "";
let expiresIn = null;
const clientID = "";
const redirectURL = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const userURL = window.location.href;

    if (
      userURL.match(/access_token=([^&]*)/) &&
      userURL.match(/expires_in=([^&]*)/)
    ) {
      accessToken = userURL.match(/access_token=([^&]*)/);
      expiresIn = userURL.match(/expires_in=([^&]*)/);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
    } else {
      window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURL}`;
    }
  },
  search(term) {
    fetch("https://api.spotify.com/v1/search?type=track&q=" + term, {
      headers: {
        headers: { Authorization: `Bearer ${accessToken}` }
      }
    })
      .then(resp => {
        return resp.json();
      })
      .then(jsonResp => {
        if(jsonResp.length){
            return []
        }
        return jsonResp.map(track=>{
            return{
                id:track.id,
                name:track.name,
                artist:track.artists[0].name,
                album:track.album.name,
                uri:track.uri
            }
        })
      });
  }
};

export default Spotify;
