import React, { useEffect, useState } from 'react'
import styles from './page.module.css'


const About: React.FC = ({}) => {
  const [data, setData] = useState([
    {
      id: "",
      title: "",
      text: ""
    },
  ]);

  const getData=()=>{
    fetch('/data/about.json',{
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
    <div className={styles.aboutContainer}>
        {data.map((about, index) => (
          <div className={styles.container} key={about.id}>
            <div className={styles.content}>
              <div className={styles.title}>{about.title}</div>
              <div className={styles.text}>{about.text}</div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default About