import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Services: React.FC = ({}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [buttonClass, setButtonClass] = useState<string | null>(null);
  const [data, setData] = useState([
    {
      id: "",
      title: "",
      text: "",
      link: "",
    },
  ]);

  const getData=()=>{
    fetch('/data/services.json',{
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

  useEffect(()=>{
    if (hoveredItem) {
      setButtonClass("buttonActive")
    } else {
      setButtonClass ("button")
    }
  },[hoveredItem])


  return (
    <div className={styles.servicesContainer}>
      {data.map((service, index) => (
          <a 
            href="/employers/our-services"
            style={{textDecoration: "none"}}
            className={styles.container}
            onMouseEnter={() => setHoveredItem(service.id)}
            onMouseLeave={() => setHoveredItem(null)}
            id={service.id}
            key={service.id}>
            <div className={styles.content}>
              <div className={styles.title}>{service.title}</div>
              <div className={styles.text}>{service.text}</div>
            </div>
            <div className={styles.buttonContainer}>
              <button 
                className={`${styles.button} ${hoveredItem === service.id ? styles.buttonActive : ''}`}
                id={service.id}>
                Learn More <KeyboardArrowRightIcon className={styles.arrow}/>
              </button>
            </div>
          </a>
      ))}
    </div>
  )
}

export default Services