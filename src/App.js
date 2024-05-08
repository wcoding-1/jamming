import React , {useState, useEffect}from "react";
import styles from './style/App.module.css';
// import './style.css';

function App() {

  const [data, setData] = useState([])

  const music = async () =>{
    const url = 'https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '702e531af8mshe7690baa6521f69p19bfaejsn75b4ef9a7b5c',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  // setData(result)
  console.log(result)
  // alert(JSON.stringify(result))
 
} catch (error) {
	console.error(error);
}
  }


//   useEffect(()=>{
//  music();
//   }, [])
  return (

    <div className={styles.div}> 
      <div className={styles.searchBox}>
        <h1 className={styles.h1}>Jammming Spofity</h1>
        <form>
          <label htmlFor="searchMusic" className={styles.searchTitle}>Search Music</label><br />
          <input type="search" name="search"  className={styles.searchForm}/>
          <br/>
          <br/>
          <input type="submit" value='Search' className={styles.submit} />
        </form>

      </div>

      <div className={styles.musicBox}>
         <section className={styles.results}>
          <p>result</p>
         </section>
         <section className={styles.save}>
          <p>save</p>
         </section>
      </div>


    
    
    </div>
  )
  
}

export default App;
