import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Services: React.FC = ({}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [buttonClass, setButtonClass] = useState<string | null>(null);
  const [data, setData] = useState([
    {
      id: "",
      name: "",
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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className={styles.servicesContainer}>
      {data.map((service, index) => (
        <div
          className={styles.container}
          onMouseEnter={() => setHoveredItem(service.id)}
          onMouseLeave={() => setHoveredItem(null)}
          id={service.id}
          key={service.id}
        >
          <div className={styles.content}>
            <div className={styles.title}>{service.title}</div>
            <div className={styles.text}>{service.text}</div>
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${
                hoveredItem === service.id ? styles.buttonActive : ''
              }`}
              onClick={() => scrollToSection(service.name)} // Scroll to section on click
            >
              Learn More <KeyboardArrowRightIcon className={styles.arrow} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;