import React, { useEffect, useState } from 'react';
import { Box, createTheme, useMediaQuery } from '@mui/material';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./page.module.css";
import Overview from '../overview/overview';

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null); // State to track active item

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleItemListClick = (item: string) => {
    setActiveItem(item); // Update active item when clicked
  };

  const handleItemListHover = (item: string) => {
    if (!activeItem) {
      setActiveItem(item); // Update active item on hover if no item is currently active
    }
  };

  return (
    <>
      <div className={styles.menuButton}>
        <MenuIcon onClick={handleDrawerOpen} className={styles.icon} />
      </div>
      <Drawer 
        sx={{height: "100%", width: "100%"}}
        open={open} 
        anchor="left" 
        size="lg" 
        onClose={handleDrawerClose}
      >
        <div className={styles.contentContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.topContainer}>
              <a href="/">
                <img className={styles.logo} src="/engenious.png" alt="engenious logo" />
              </a>
              <a href="/" className={styles.link}>
                <div className={styles.companyNameContainer}>
                  <div className={styles.companyName1} >ENGENIOUS</div>
                  <div className={styles.companyName2}>RECRUITMENT</div>
                </div>
              </a>
            </div>
            <div className={styles.list}>
              <div 
                className={`${styles.listItem} ${activeItem === 'Employers' ? styles.active : ''}`}
                onClick={() => handleItemListClick('Employers')}
                onMouseEnter={() => handleItemListHover('Employers')}
              >
                Employers
              </div>
              <div 
                className={`${styles.listItem} ${activeItem === 'Jobs' ? styles.active : ''}`}
                onClick={() => handleItemListClick('Jobs')}
                onMouseEnter={() => handleItemListHover('Jobs')}
              >
                Jobs
              </div>
              <div 
                className={`${styles.listItem} ${activeItem === 'About' ? styles.active : ''}`}
                onClick={() => handleItemListClick('About')}
                onMouseEnter={() => handleItemListHover('About')}
              >
                About
              </div>
            </div>
          </div>
            
          <div className={styles.rightContainer}>
            {activeItem && (
              <div className={`${styles.additionalContent} ${activeItem ? styles.active : ''}`}>
                {activeItem === 'Employers' && (
                  <div>
                    <Overview text={"Learn more about our full talent services"}/>
                    <div>Our services</div>
                    <div>Our expertise</div>
                    <div>Submit a vacancy</div>
                  </div>
                )}
                {activeItem === 'Jobs' && (
                  <div>
                    <Overview text={"Learn more about our full talent services"}/>
                    <div>Search all jobs</div>
                    <div>Send your cv</div>
                  </div>
                )}
                {activeItem === 'About' && (
                  <div>
                    <Overview text={"Learn more about us"}/>
                    <div>Our work</div>
                    <div>Our story</div>
                    <div>Our purpose</div>
                    <div>Our commitments</div>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </Drawer>
    </>
  );
};

export default Menu;