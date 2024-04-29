import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, ListItemText, AccordionSummary, AccordionDetails, Typography, createTheme, useMediaQuery } from '@mui/material';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./page.module.css";
import Fade from '@mui/material/Fade';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

interface MenuProps {}

const Menu: React.FC<MenuProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | false>(false);
  const [hovered1, setHovered1] = useState(false); // State to track hover
  const [hovered2, setHovered2] = useState(false); // State to track hover
  const [hovered3, setHovered3] = useState(false); // State to track hover


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
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAccordionChange = (panel: string) => (
    event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

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
              <CloseIcon onClick={handleDrawerClose} className={styles.closeIcon}/>
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
                className={styles.listItem}
                autoFocus={hovered1}
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)} 
              >Employers</div>
              <div 
                className={styles.listItem}
                autoFocus={hovered2}
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)} 
              >Jobs</div>
              <div 
                className={styles.listItem}
                autoFocus={hovered3}
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)} 
              >About</div>
            </div>
            <div className={styles.buttonContainer}>
              <a href="/jobseekers" className={styles.button}>Find Talent</a>
              <a href="/employers" className={styles.button}>Find a Job</a>
            </div>
          </div>
            
            <div className={styles.rightContainer}>
            {hovered1 && (
              <div className={styles.extendedContainer1}>
                {/* Divs to be shown when hovered */}
                <div>Our services</div>
                <div>Our expertise</div>
                <div>Submit a vacancy</div>
              </div>
            )}
            {hovered2 && (
              <div className={styles.extendedContainer2}>
                {/* Divs to be shown when hovered */}
                <div>Search all jobs</div>
                <div>Send your cv</div>
              </div>
            )}
            {hovered3 && (
              <div className={styles.extendedContainer3}>
                {/* Divs to be shown when hovered */}
                <div>Our work</div>
                <div>Our story</div>
                <div>Our purpose</div>
                <div>Our commitments</div>
              </div>
            )}
            </div>

          </div>
      </Drawer>
    </>
  );
};

export default Menu;
