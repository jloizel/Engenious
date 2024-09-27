import React, { useEffect, useState } from 'react';
import Slider from "react-slick";  // Importing the slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './page.module.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { Box } from '@mui/material';


const Values: React.FC = ({}) => {
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      title: "",
      text: "",
      content: "",
      link: ""
    },
  ]);

  const getData = () => {
    fetch('/data/services.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      setData(myJson)
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // Custom Arrow components
  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.customNextArrow}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <IoIosArrowForward/>
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.customPrevArrow}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <IoIosArrowBack/>
      </div>
    );
  };

  // Slider settings
  const settings = {
    dots: true,  // Adds dots for navigation
    draggable: false,
    infinite: true,  // Enables infinite looping
    speed: 500,  // Speed of transitions
    slidesToShow: 4,  // Show 4 slides at a time
    slidesToScroll: 1,  // Scroll one slide at a time
    nextArrow: <NextArrow />,  // Use custom NextArrow
    prevArrow: <PrevArrow />,  // Use custom PrevArrow
    responsive: [
      {
        breakpoint: 1024,  // Tablet size
        settings: {
          slidesToShow: 2,  // Show 2 cards on tablets
        }
      },
      {
        breakpoint: 600,  // Mobile size
        settings: {
          slidesToShow: 1,  // Show 1 card on smaller devices
        }
      }
    ]
  };


  return (
    <div className={styles.servicesInfo}>
      <div className={styles.servicesInfoLeft}>
        <div className={styles.servicesHeader}>
          What makes us who we are:
        </div>
        <div className={styles.buttonContainer}>
          <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.button}>
            Recruit with Us
          </a>
        </div>
      </div>
      <div className={styles.servicesInfoRight}>
        {data.map((service) => (
          <div className={styles.textContainer} id={service.id}>
            <div className={styles.header}>
              <TiTick className={styles.tick}/>
              {service.title}
            </div>
            <div className={styles.text2}>
              {service.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
