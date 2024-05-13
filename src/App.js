import React , {useState}from "react";
import styles from './style/App.module.css';
import SearchBar from './jamming-spotify/search-bar/SearchBar';
import SearchResult from "./jamming-spotify/search-result/SearchResult";
import PlayList from './jamming-spotify/play-list/PlayList';
// import TopLevel from './githubjamming/App/App'
import {Spotify} from './uri/Spotify';


function App() {

  const [searchResult, setSearchResult] = useState([
    {
    name:'The track name',
    artist: 'The track artist',
    album: 'The track album1',
    id: 1
    },
    {
    name:'The track name',
    artist: 'The track artist',
    album: 'The track album',
    id: 4
    },
    {
    name:'The track name',
    artist: 'The track artist',
    album: 'The track album',
    id: 5
    },
    {
    name:'the track name',
    artist: 'track artist',
    album: 'track album',
    id: 2
    },
    
]);

const [playListTrack, setplayListTrack]= useState([
    {
      name:'the trackplayList name',
      artist: 'Ttrack trackplayList artist',
      album: 'The track trackplayList album',
      id: 8
    },
    {
      name:'The track name',
      artist: 'The track artist',
      album: 'The track album1',
      id: 7
      },

    // {
    //   name:'the trackplayList name',
    //   artist: 'Ttrack trackplayList artist',
    //   album: 'The track trackplayList album',
    //   id: 4
    // },

    {
      name:'the trackplayList name',
      artist: 'Ttrack trackplayList artist',
      album: 'The track trackplayList album23',
      id: 11
    }


 
])

function addTrack(track){
  const trackIsExist = playListTrack.find(({id})=> id === track.id);
  const newTrack = playListTrack.concat(track);

  if(trackIsExist){
    alert('Track Already Exist');
    }else{
     setplayListTrack( newTrack )
    }
}

function removePlayTrack(keyid) {
  setplayListTrack(()=>(
    playListTrack.filter(({id})=>id !== keyid)
  ))

}

const search = (term) =>{
  Spotify.search(term).then(result=>{
    console.log(result)
    // if(result.ok){
    //   alert(result)
    // }else{
    //   alert('error')
    // }
  })
  
}



  return (

    <div >
        <SearchBar onSearch={search}/>
    <div className={styles.div}> 

      <SearchResult result={searchResult} addOn={addTrack}/> 
      <PlayList playListTrack={playListTrack} remove={removePlayTrack}/> 
    </div>
    </div> 


)
  
}

export default App;
