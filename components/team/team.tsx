import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image';


const Team: React.FC = ({}) => {
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      role: "",
      src: "",
      text: [""],
      quote: [""]
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
          <div className={`${styles.container} ${
            index % 2 === 0 ? styles.evenContainer : styles.oddContainer
          }`} key={team.id}>
            <div className={`${styles.imageContainer} ${index % 2 === 0 ? styles.evenContainer : styles.oddContainer}`}>
              <img src={team.src} alt="Image" className={styles.image}/>
            </div>
            <div className={`${styles.textContainer} ${index % 2 === 0 ? styles.evenTextContainer : styles.oddTextContainer}`}>
              <div className={styles.name}>{team.name}</div>
              <div className={styles.role}>{team.role}</div>
              {team.text.map((paragraph, idx) => (
                <p key={idx} className={styles.text}>{paragraph}</p>
              ))}
              {team.quote.map((paragraph, idx) => (
                <p key={idx} className={styles.text}>
                  {idx === 0 ? `"${paragraph}` : idx === team.quote.length - 1 ? `${paragraph}"` : paragraph}
                </p>
              ))}
            </div>
            {/* <hr className={styles.line}></hr> */}
          </div>
        ))}
    </div>
  )
}

export default Team