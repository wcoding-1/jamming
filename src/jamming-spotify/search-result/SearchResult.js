import React from "react";
import styles from './SearchResult.module.css';
import TrackList from '../track-list/TrackList';

const style = {


  
}
function SearchResult(props) {

    return (

      <div>
       <TrackList result={props.result} isRemoval={true} addOn={props.addOn}/>
      </div>
     
    )
}


export default SearchResult;
