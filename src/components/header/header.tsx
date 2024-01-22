import { AppBar, Toolbar, Box, Badge, Button } from "@mui/material";
import { AccountCircle, Notifications } from "@mui/icons-material";
import Profile from './profile';
//import ButtonNotifications from './notifications';
import { ArrowRightIcon, DocumentIcon } from '@heroicons/react/24/solid';
// import Sidebar from '../sidebar/sidebar';
import Navbar from '../navbar/navbar';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import styles from './header.module.css';

// import { ProSidebarProvider } from 'react-pro-sidebar/dist/components/ProSidebarProvider';
import {ProSidebarProvider}  from 'react-pro-sidebar';
import { useState } from "react";

export const Header = ({ title }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setIsOpen(prevState => (!prevState));
  }

  return (
  <>
    <AppBar position="static" sx={{ bgcolor: "black" }}>

      <Toolbar>
      <div className={styles.wrapper}>
      <nav className={styles.nav}>

        <div style={{ position: 'absolute' }}>
          <Image
            src='/semfundo-branca.svg'
            width={180}
            height={50}
            />
        </div>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ right: 150, display: "flex", alignItems: "center" }}>
          {/*<IconButton
            size="large"
            aria-label="show notifications"
            color="inherit"
          >
            <Badge badgeContent={2} color="error">
              <Button variant="outlined" startIcon={<NotificationsIcon />} onClick={handleClickOpen}>
                Notifications
              </Button>
              <Snackbar
                open={open}
                onClose={handleClose}
                message="Esta é uma notificação em pop-up!"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              />
            </Badge>
          </IconButton>*/}
        </Box>
        <Profile />
        {/*<ButtonNotifications />*/}
      </nav>
    </div>
  </Toolbar>
  </AppBar >
</>
)
}