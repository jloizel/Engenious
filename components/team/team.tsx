import React, { useEffect, useState } from 'react'
import styles from './page.module.css'


const Team: React.FC = ({}) => {
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      role: "",
      src: "",
      text:""
    },
  ]);

  const getData=()=>{
    fetch('/data/team.json',{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
    }

  useEffect(()=>{
    getData()
  },[])


  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamHeader}>
        Meet the Team
      </div>
        {data.map((team, index) => (
          <div className={styles.container} key={team.id}>
            <div className={`${styles.imageContainer} ${index % 2 === 0 ? styles.evenContainer : styles.oddContainer}`}>
              <img src={team.src} alt="Image" className={styles.image}/>
            </div>
            <div className={`${styles.textContainer} ${index % 2 === 0 ? styles.evenTextContainer : styles.oddTextContainer}`}>
              <div className={styles.name}>{team.name}</div>
              <div className={styles.role}>{team.role}</div>
              <div className={styles.text}>{team.text}</div>
            </div>
            {/* <hr className={styles.line}></hr> */}
          </div>
        ))}
    </div>
  )
}

export default Team