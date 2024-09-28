import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface ServicesProps {
  pageName?: string
}

const Services: React.FC<ServicesProps> = ({pageName}) => {
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
    const section = document.getElementById(id); // Find section with the correct id
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    }
  };

  const handleButtonClick = (id: string) => {
    if (pageName === 'ourWork') {
      scrollToSection(id); // Scroll to section if on the same page
    } else {
      window.location.href = '/about/our-work'; // Full-page redirect
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
          onClick={() => handleButtonClick(service.name)}
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