let accessToken;
const clientId = "e8f0642aea8f466f96c7106d6163e557";
const redirectURL = "http://localhost:3000";
const Spotify = {
    getAccessToken(){
        if(accessToken) return accessToken;
    const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
    const expireTime = window.location.href.match(/access_in=([^&]*)/);
    if(tokenInURL && expireTime ){
        accessToken =  tokenInURL;
        const expiteIn = Number(expireTime[1]);
        window.setTimeout(()=>(accessToken = ""), expireTime * 1000);
        window.history.pushState('access token', null, "/");
        return accessToken;
    }

    const redirect ="https://accounts.spotify.com/en-GB/status?";

    },

    search(term){
       accessToken = Spotify.getAccessToken()
   
           return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
                method:"GET",
                headers: {Authorization: `Bearer ${ accessToken }`},
        
                }).then(response => response.json())
                .then(jsonResponse => {
                  

                    if(!jsonResponse){
                        alert('Response Error!');
                    }


             
                   return jsonResponse.tracks.items.map((t)=>({
                        id: t.id,
                        name: t.name,
                        artist: t.artists[0].name,
                        album: t.album[0].name,
                        uri: t.uri
                    }))
                })
   
        
       

    }
}

export {Spotify};