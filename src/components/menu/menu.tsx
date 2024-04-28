"use client"


import React, { useState } from 'react';
import { Box, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./page.module.css";
import ModalClose from '@mui/joy/ModalClose';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import { extendTheme } from '@mui/joy/styles';

interface MenuProps {
    
}

const Menu: React.FC<MenuProps> = ({}) => {
  const [open, setOpen] = useState(false);

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
  const isTabletOrAbove = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box className={styles.menu}>
      <div className={styles.button}>
        <Button 
          onClick={() => setOpen(true)} 
          className={styles.button} 
          variant="plain" 
          sx={{ minHeight: 0, minWidth: 0, padding: 0, '&:hover': { backgroundColor: 'transparent', '&:focus': {outline: 'none'} }}}>
          <MenuIcon className={styles.icon}/>
        </Button>
      </div>
      <Drawer
        sx={{height: "100%"}}
        open={open} 
        onClose={() => {
          setOpen(false);
        }}
        anchor= {isMobile ? "right" : "left"}
        size={"lg"}
      >
        <ModalClose/>
      </Drawer>
    </Box>
  );
};

export default Menu;