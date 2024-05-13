import React from "react";
import styles from './PlayList.module.css';
import TrackList from "../track-list/TrackList";
const style = {
    textAlign:'center',
    fontSize:'1rem',
 
}

const input = {
    padding:'10px 100px',
    textAlign:'center',
    borderRadius:'6px',
}

function PlayList({playListTrack, remove}) {

    return(
        <div style={style}>
            <input defaultValue='Give New Name' style={input} />
           
            <TrackList result={playListTrack} isRemoval={false} save={true} remove={remove}/>
            <div className={styles.saveBtnCenter}>
                <button className={styles.saveButton}>Save To Spofity</button>
            </div>  
           

        </div>
    )
    
}
 export default PlayList;