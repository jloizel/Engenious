import React, { useEffect, useState } from 'react';
import { Box, createTheme, useMediaQuery } from '@mui/material';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./page.module.css";
import Overview from '../overview/overview';
import Image from 'next/image';

interface MenuProps {
  color: string
}


const Menu: React.FC<MenuProps> = ({color}) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSubMenuId, setActiveSubMenuId] = useState<string | null>(null);

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('md'));


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
    } else if (itemName === 'Contact') {
        setActiveSubMenuId('4');
    } else {
      setActiveSubMenuId(null);
    }
  };

  useEffect(() => {
    setActiveItem(hoveredItem); 
  }, [hoveredItem]);

  const handleImageWidth = () => {
    if (isTabletOrBelow) {
      return 60
    } else {
      return 70
   }
  }
  

  return (
    <>
      <div className={styles.menuButton}>
        <MenuIcon onClick={handleDrawerOpen} className={styles.icon} style={{color: color}}/>
      </div>
      <Drawer 
        sx={{height: "100%", width: "100%"}}
        open={open} 
        anchor={!isMobile ? "left" : "right"} 
        size={isMobile ? "sm" : "lg"} 
        onClose={handleDrawerClose}
        hideBackdrop={false}
      >
        <div className={styles.contentContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.topContainer}>
              {!isMobile && (
                <CloseIcon onClick={handleDrawerClose} className={styles.closeIcon}/>
              )}
              <div className={styles.logoContainer}>
                <a href="/">
                  <Image className={styles.logo} src="/engenious.png" alt="engenious logo" width={handleImageWidth()} height={handleImageWidth()}/>
                </a>
                <a href="/" className={styles.link}>
                  <div className={styles.companyNameContainer}>
                    <div className={styles.companyName1}>ENGENIOUS</div>
                    <div className={styles.companyName2}>RECRUITMENT</div>
                  </div>
                </a>
              </div>
              {isMobile && (
                <CloseIcon onClick={handleDrawerClose} className={styles.closeIcon}/>
              )}
            </div>
            <div className={styles.list}>
              <div 
                className={`${styles.listItem} ${activeItem === 'About' ? styles.active : ''}`} 
                onClick={() => handleListItemClick('About')}
                onMouseEnter={() => handleListItemHover('About')}
              >
                About
              </div>
              {isMobile && activeItem === 'About' && (
                <div className={styles.subTopicContainer}>
                  <a href="/about" className={styles.subTopicMobile}>Overview</a>
                  <a href="/about/our-work" className={styles.subTopicMobile}>Our work</a>
                  <a href="/about/our-story" className={styles.subTopicMobile}>Our story</a>
                  <a href="/about/our-purpose" className={styles.subTopicMobile}>Our purpose</a>
                  <a href="/about/our-team" className={styles.subTopicMobile}>Our team</a>
                </div>
              )}
              <div 
                className={`${styles.listItem} ${activeItem === 'Sectors' ? styles.active : ''}`} 
                onClick={() => handleListItemClick('Sectors')}
                onMouseEnter={() => handleListItemHover('Sectors')}
              >
                Sectors
              </div>
              {isMobile && activeItem === 'Sectors' && (
                <div className={styles.subTopicContainer}>
                  <a href="/sectors" className={styles.subTopicMobile}>Overview</a>
                  <a href="/sectors/construction" className={styles.subTopicMobile}>Construction</a>
                  <a href="/sectors/housebuilding" className={styles.subTopicMobile}>House Building</a>
                  <a href="/sectors/maintenance" className={styles.subTopicMobile}>Maintenance</a>
                  <a href="/sectors/civilengineering" className={styles.subTopicMobile}>Civil Engineering</a>
                  <a href="/sectors/trades-labour" className={styles.subTopicMobile}>Trades & Labour</a>
                  <a href="/sectors/search-select" className={styles.subTopicMobile}>Search & Select</a>
                </div>
              )}
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
                  <a href="/employers" style={{textDecoration: "none"}} className={styles.subTopicMobile}>Overview</a>
                  <a href="/employers/candidate-assessments" style={{textDecoration: "none"}} className={styles.subTopicMobile}>Candidate assessments</a>
                  {/* <a href="/employers/our-expertise" style={{textDecoration: "none"}} className={styles.subTopicMobile}>Our expertise</a> */}
                  <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.subTopicMobile}>Submit a vacancy</a>
                </div>
              )}
              <div 
                className={`${styles.listItem} ${activeItem === 'Candidates' ? styles.active : ''}`} 
                onClick={() => handleListItemClick('Candidates')}
                onMouseEnter={() => handleListItemHover('Candidates')}
              >
                Candidates
              </div>
              {isMobile && activeItem === 'Candidates' && (
                <div className={styles.subTopicContainer}>
                  <a href="/candidates" style={{textDecoration: "none"}} className={styles.subTopicMobile}>Overview</a>
                  <a href="/candidates/cv-upload" className={styles.subTopicMobile}>Upload your CV</a>
                </div>
              )}
              
              <div 
                // className={`${isMobile ? styles.listItemMobile : styles.listItem} ${activeItem === 'Employers' ? styles.active : ''}`}
                className={`${styles.listItem} ${activeItem === 'Contact' ? styles.active : ''}`} 
                onClick={() => handleListItemClick('Contact')}
                onMouseEnter={() => handleListItemHover('Contact')}
              >
                Contact
              </div>
              {isMobile && activeItem === 'Contact' && (
                <div className={styles.subTopicContainer}>
                  <a href="/contact" className={styles.subTopicMobile}>Get in touch</a>
                </div>
              )}
            </div>
            <div className={styles.buttonContainer}>
              <a href="/employers/submit-vacancy" className={styles.button}>Find Talent</a>
              <a href="/candidates" className={styles.button}>Find a Job</a>
            </div>
          </div>
          {!isMobile && (
          <div className={styles.rightContainer}>
            <div className={styles.extendedContainer}>
              {activeItem && (
                <div>
                  {activeItem === 'About' && (
                    <div className={styles.subMenu} id="subMenu1">
                      <Overview text={"Learn more about us"} href="/about"/>
                      <a href="/about/our-work" className={styles.subTopic}>Our work</a>
                      {/* <a href="/about/our-story" className={styles.subTopic}>Our story</a>
                      <a href="/about/our-purpose" className={styles.subTopic}>Our purpose</a> */}
                      <a href="/about/our-team" className={styles.subTopic}>Our team</a>
                    </div>
                  )}
                  {activeItem === 'Sectors' && (
                    <div className={styles.subMenu} id="subMenu2">
                      <Overview text={"Learn more about our sectors"} href="/sectors"/>
                      <a href="/sectors/construction" className={styles.subTopic}>Construction</a>
                      <a href="/sectors/housebuilding" className={styles.subTopic}>House Building</a>
                      <a href="/sectors/maintenance" className={styles.subTopic}>Maintenance</a>
                      <a href="/sectors/civilengineering" className={styles.subTopic}>Civil Engineering</a>
                      <a href="/sectors/trades-labour" className={styles.subTopic}>Trades & Labour</a>
                      <a href="/sectors/search-select" className={styles.subTopic}>Search & Select</a>
                    </div>
                  )}
                  {activeItem === 'Employers' && (
                    <div className={styles.subMenu} id="subMenu3">
                      <Overview text={"Learn more about our services"} href="/employers"/>
                      <a href="/employers/candidate-assessments" style={{textDecoration: "none"}} className={styles.subTopic}>Candidate assessments</a>
                      {/* <a href="/employers/our-expertise" style={{textDecoration: "none"}} className={styles.subTopic}>Our expertise</a> */}
                      <a href="/employers/submit-vacancy" style={{textDecoration: "none"}} className={styles.subTopic}>Submit a vacancy</a>
                    </div>
                  )}
                  {activeItem === 'Candidates' && (
                    <div className={styles.subMenu} id="subMenu4">
                      <Overview text={"Get help finding your dream job"} href="/candidates"/>
                      {/* <div className={styles.subTopic}>Search all jobs</div> */}
                      <a href="/candidates/cv-upload" style={{textDecoration: "none"}} className={styles.subTopic}>Upload your CV</a>
                    </div>
                  )}
                  {activeItem === 'Contact' && (
                    <div className={styles.subMenu} id="subMenu5">
                      <Overview text={"Get in touch"} href="/contact"/>
                      {/* <a href="/contact" className={styles.subTopic}>Get in touch</a> */}
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
