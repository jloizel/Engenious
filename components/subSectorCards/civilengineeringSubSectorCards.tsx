import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import { FaCircleChevronRight } from "react-icons/fa6";

const SubSectorCards: React.FC = ({}) => {
  const [data, setData] = useState([
    {
      id: "",
      name: "",
      image: "",
      text: "",
      jobs: [],
    },
  ]);

  const getData = () => {
    fetch('/data/subSectors/civilengineering.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.subSectorsContainer}>
      <div className={styles.listHeader}>
        <span>We work across several areas of the <span style={{color: "#008489"}}>Civil Engineering Sector:</span></span>
        
      </div>
      {data.map((subSector, index) => {
        // Split the jobs array into two halves
        const midIndex = Math.ceil(subSector.jobs.length / 2); // Calculate middle index
        const list1 = subSector.jobs.slice(0, midIndex); // First half
        const list2 = subSector.jobs.slice(midIndex); // Second half

        return (
          <div key={subSector.id} className={styles.subSector}>
            <div className={styles.subSectorImage}>
              <img src={subSector.image} alt={subSector.name} />
            </div>
            <div className={styles.subSectorTextContainer}>
              <div className={styles.subSectorHeader}>
                <FaCircleChevronRight className={styles.circle} />
                {subSector.name}
              </div>
              <div className={styles.subSectorText}>{subSector.text}</div>
              <div className={styles.listHeader}>
                <span>Hire <span style={{ color: '#008489' }}>{subSector.name} </span>Talent.</span>
                
              </div>
              <div className={styles.listHeader2}>
                Our recruiters can help you hire across...
              </div>
              <div className={styles.listContainer}>
                <div className={styles.list1}>
                  {list1.map((job, idx) => (
                    <li key={idx}>{job}</li>
                  ))}
                </div>
                <div className={styles.list2}>
                  {list2.map((job, idx) => (
                    <li key={idx}>{job}</li>
                  ))}
                </div>
              </div>
              <a
                href="/employers/submit-vacancy"
                style={{ textDecoration: 'none' }}
                className={styles.buttonContainer}
              >
                <button className={styles.button}>Hire talent</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubSectorCards;
