import React, { useEffect, useState } from 'react';
import Slider from "react-slick";  // Importing the slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './page.module.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";



const SectorsSlider: React.FC = ({}) => {
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      image: "",
      href: ""
    },
  ]);

  const getData = () => {
    fetch('/data/sectors.json', {
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
    <div className={styles.sectorsContainer}>
      <Slider {...settings}>
        {data.map((sector) => (
          <a 
            key={sector.id} 
            className={styles.cardContainer}
            href={sector.href}
          >
            <div className={styles.card}>
              <div className={styles.cardImageContainer}>
                <img src={sector.image} alt={sector.name} className={styles.cardImage} />
              </div>
              <div className={styles.cardText}>
                {sector.name}
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default SectorsSlider;
