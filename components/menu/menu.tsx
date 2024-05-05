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
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSubMenuId, setActiveSubMenuId] = useState<string | null>(null);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 767,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => {
    setOpen(true);
    if (!isMobile) {
      setActiveItem('Employers');
    };
  }

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (itemName: string) => {
    if (!isMobile) {
      setActiveItem(itemName === activeItem ? null : itemName);
    }
  };

  const handleListItemHover = (itemName: string) => {
    setHoveredItem(itemName);
    if (itemName === 'Employers') {
      setActiveSubMenuId('1');
    } else if (itemName === 'Jobs') {
      setActiveSubMenuId('2');
    } else if (itemName === 'About') {
      setActiveSubMenuId('3');
    } else {
      setActiveSubMenuId(null);
    }
  };

  useEffect(() => {
    setActiveItem(hoveredItem); 
  }, [hoveredItem]);

  return (
    <>
      <div className={styles.menuButton}>
        <MenuIcon onClick={handleDrawerOpen} className={styles.icon} />
      </div>
      <Drawer 
        sx={{height: "100%", width: "100%"}}
        open={open} 
        anchor={!isMobile ? "left" : "right"} 
        size={isMobile ? "sm" : "lg"} 
        onClose={handleDrawerClose}
      >
        <div className={styles.contentContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.topContainer}>
              {!isMobile && (
                <CloseIcon onClick={handleDrawerClose} className={styles.closeIcon}/>
              )}
              <a href="/">
                <img className={styles.logo} src="/engenious.png" alt="engenious logo" />
              </a>
              <a href="/" className={styles.link}>
                <div className={styles.companyNameContainer}>
                  <div className={styles.companyName1}>ENGENIOUS</div>
                  <div className={styles.companyName2}>RECRUITMENT</div>
                </div>
              </a>
              {isMobile && (
                <CloseIcon onClick={handleDrawerClose} className={styles.closeIcon}/>
              )}
            </div>
            <div className={styles.list}>
              <div 
                // className={`${isMobile ? styles.listItemMobile : styles.listItem} ${activeItem === 'Employers' ? styles.active : ''}`}
                className={`${styles.listItem} ${activeItem === 'Employers' ? styles.active : ''}`} 
                onClick={() => handleListItemClick('Employers')}
                onMouseEnter={() => handleListItemHover('Employers')}
                id='itemList1'
              >
                Employers
              </div>
              {isMobile && activeItem === 'Employers' && (
                <div className={styles.subTopicContainer}>
                  <div className={styles.subTopicMobile}>Our services</div>
                  <div className={styles.subTopicMobile}>Our expertise</div>
                  <div className={styles.subTopicMobile}>Submit a vacancy</div>
                </div>
              )}
              <div 
                className={`${styles.listItem} ${activeItem === 'Jobs' ? styles.active : ''}`} 
                onClick={() => handleListItemClick('Jobs')}
                onMouseEnter={() => handleListItemHover('Jobs')}
              >
                Jobs
              </div>
              {isMobile && activeItem === 'Jobs' && (
                <div className={styles.subTopicContainer}>
                  <div className={styles.subTopicMobile}>Search all jobs</div>
                  <div className={styles.subTopicMobile}>Send your cv</div>
                </div>
              )}
              <div 
                className={`${styles.listItem} ${activeItem === 'About' ? styles.active : ''}`} 
                onClick={() => handleListItemClick('About')}
                onMouseEnter={() => handleListItemHover('About')}
              >
                About
              </div>
              {isMobile && activeItem === 'About' && (
                <div className={styles.subTopicContainer}>
                  <div className={styles.subTopicMobile}>Our work</div>
                  <div className={styles.subTopicMobile}>Our story</div>
                  <div className={styles.subTopicMobile}>Our purpose</div>
                  <div className={styles.subTopicMobile}>Our commitments</div>
                </div>
              )}
            </div>
            <div className={styles.buttonContainer}>
              <a href="/jobseekers" className={styles.button}>Find Talent</a>
              <a href="/employers" className={styles.button}>Find a Job</a>
            </div>
          </div>
          {!isMobile && (
          <div className={styles.rightContainer}>
            <div className={styles.extendedContainer}>
              {activeItem && (
                <div>
                  {activeItem === 'Employers' && (
                    <div className={styles.subMenu} id="subMenu1">
                      <Overview text={"Learn more about our full talent services"}/>
                      <div className={styles.subTopic}>Our services</div>
                      <div className={styles.subTopic}>Our expertise</div>
                      <div className={styles.subTopic}>Submit a vacancy</div>
                    </div>
                  )}
                  {activeItem === 'Jobs' && (
                    <div className={styles.subMenu} id="subMenu2">
                      <Overview text={"Find your dream job"}/>
                      <div className={styles.subTopic}>Search all jobs</div>
                      <div className={styles.subTopic}>Send your cv</div>
                    </div>
                  )}
                  {activeItem === 'About' && (
                    <div className={styles.subMenu} id="subMenu3">
                      <Overview text={"Learn more about us"}/>
                      <div className={styles.subTopic}>Our work</div>
                      <div className={styles.subTopic}>Our story</div>
                      <div className={styles.subTopic}>Our purpose</div>
                      <div className={styles.subTopic}>Our commitments</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Menu;
