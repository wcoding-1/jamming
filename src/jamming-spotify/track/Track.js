
import React from "react";
import styles from './Track.module.css';

const style = {
    width:'300px', 
}

function Track({track, isRemoval, addOn, remove, id}) {

    function passAdd() {
        addOn(track)
    }

    function renderAdd(){
        if(isRemoval){
            return <button className={styles.addBtn} onClick={passAdd}>+</button>
        }else{
          
            return <button className={styles.addBtn} onClick={()=>removeTrack(track.id)}>-</button>
        }
    }

    function removeTrack(id){
     
      remove(id);
    }

    return(
        
        <div>
               
            <section className={styles.result} style={style}>
           
                <div className={styles.artist}>
                    <div>
                        <h3>{track.name}</h3>
                        <p>{track.artist} | {track.album}</p>
                    </div>

           
                        {renderAdd()}
              
                </div>
                <hr/>
          
            </section>
            
        </div>
    )
    
}

export default Track;

