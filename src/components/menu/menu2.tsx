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
  const [subMenuActive, setSubMenuActive] = useState<boolean>(false);
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
    setActiveItem('Employers');
  };

  const handleDrawerClose = () => {
    setOpen(false);
    
  };

  const handleListItemClick = (itemName: string) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };

  const handleListItemHover = (itemName: string) => {
    setHoveredItem(itemName);
    if (itemName === 'Employers') {
      setSubMenuActive(true);
      setActiveSubMenuId('1');
      // setTimeout(() => {
      //   setSubMenuActive(false);
      // }, 500);
    } else if (itemName === 'Jobs') {
      setSubMenuActive(true);
      setActiveSubMenuId('2');
    } else if (itemName === 'About') {
      setSubMenuActive(true);
      setActiveSubMenuId('subMenu3');
    } else {
      setSubMenuActive(false);
      setActiveSubMenuId(null);
    }
  };

  useEffect(() => {
    setActiveItem(hoveredItem); // Update active item based on hover state
    setSubMenuActive(true);
  }, [hoveredItem]);


  function slideIn(id: string): void {
    if (typeof document !== "undefined") {
      const subMenuId = `subMenu${id}`;
      const subMenu = document.getElementById(subMenuId);

    if (subMenu) {
      subMenu.classList.add(styles.subMenuActive)
    }
  }}

  function slideOut(id: string): void {
    if (typeof document !== "undefined") {
      const itemListId = `itemList${id}`;
      const itemList = document.getElementById(itemListId);

    if (itemList) {
      itemList.classList.add(styles.labelGuessed)
    }
  }}

  console.log(hoveredItem)
  console.log(activeSubMenuId)

  if (hoveredItem && activeSubMenuId) {
    const itemList = document.getElementById(`itemList${activeSubMenuId}`);
    const subMenu = document.getElementById(`subMenu${activeSubMenuId}`)

    console.log(itemList)

    itemList?.addEventListener('mouseenter', () => {

      console.log('Mouse entered the element');
      if (subMenu) {
        subMenu?.classList.add(styles.subMenuActive)
      }
      // slideIn(activeSubMenuId)
    });

    itemList?.addEventListener('mouseleave', () => {
      console.log('Mouse left the element');
      // subMenu?.classList.remove(styles.subMenuActive)
    });
  }


  // useEffect(() => {
  //   if ()
  // })


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
                  <div className={styles.companyName1}>ENGENIOUS</div>
                  <div className={styles.companyName2}>RECRUITMENT</div>
                </div>
              </a>
            </div>
            <div className={styles.list}>
              <div 
                className={`${styles.listItem} ${activeItem === 'Employers' ? styles.active : ''}`} 
                onClick={() => handleListItemClick('Employers')}
                onMouseEnter={() => handleListItemHover('Employers')}
                id='itemList1'
              >
                Employers
              </div>
              <div 
                className={`${styles.listItem} ${activeItem === 'Jobs' ? styles.active : ''}`} 
                onClick={() => handleListItemClick('Jobs')}
                onMouseEnter={() => handleListItemHover('Jobs')}
              >
                Jobs
              </div>
              <div 
                className={`${styles.listItem} ${activeItem === 'About' ? styles.active : ''}`} 
                onClick={() => handleListItemClick('About')}
                onMouseEnter={() => handleListItemHover('About')}
              >
                About
              </div>
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
