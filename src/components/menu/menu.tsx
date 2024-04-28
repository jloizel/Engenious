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
  const [hovered, setHovered] = useState(false); // State to track hover


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

   // Function to handle auto-hover effect
   useEffect(() => {
    if (open) {
      // Timeout to ensure that the list item is focused after the drawer is opened
      const timeout = setTimeout(() => {
        setHovered(true);
      }, 100); // Adjust the delay as needed
      // Clear the timeout when the component is unmounted or the drawer is closed
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <>
      <div className={styles.button}>
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
              <div className={styles.listItem} autoFocus={hovered} >Employers</div>
              <div className={styles.listItem}>Jobs</div>
              <div className={styles.listItem}>About</div>
            </div>
          </div>
            
            <div className={styles.rightContainer}>
              
            </div>

          </div>
      


       

      </Drawer>
    </>
  );
};

export default Menu;
