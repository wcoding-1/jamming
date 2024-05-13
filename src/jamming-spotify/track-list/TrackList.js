
import React from "react";
import styles from './TrackList.module.css'
import Track from '../track/Track';

const style = {
    border:'1px solid',
    padding:'20px 40px',
    backgroundColor:'darkblue',
    borderRadius:'30px',
 
}



function TrackList(props) {
  

    return (
    <div className={styles.musicBox} style={style}>
      {props.result.map((track)=>(<Track track={track} isRemoval={props.isRemoval} addOn={props.addOn} remove={props.remove}/>))}
    </div>
    )
}


export default TrackList;