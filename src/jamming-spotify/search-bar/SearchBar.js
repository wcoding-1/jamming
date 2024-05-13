
import React, {useState} from "react";
import styles from './SearchBar.module.css';

function SearchBar({onSearch}) {
    const [term, setTerm]=useState('');

    const passTerm = () =>{
        onSearch(term)
    }

    const hangleChange = ({target}) =>{
        setTerm(target.value);
    }

    return (
        <>
        <div className={styles.searchBox}>
            <h1 className={styles.h1}>Ja<span className={styles.jamm}>mmm</span>ing</h1>
        
            <input 
            type="search" 
            name="search"  
            className={styles.searchForm}
            onChange={hangleChange}
            />
            <br/>
            <br/>
            <button 
            className={styles.submit}
            onClick={passTerm}
            >
                Search
            </button>
        

        </div>
        </>
    )
    
}


export default SearchBar;