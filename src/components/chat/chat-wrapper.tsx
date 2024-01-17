import React, { useEffect, useRef, useState } from 'react';
import styles from './chat-wrapper.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, IconButton, Typography } from '@mui/material';
import { MdSend } from 'react-icons/md';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import {ChatBubbleBottomCenterIcon} from '@heroicons/react/24/solid';
import Chat from '../../views/chat';

export default function ChatWrapper() {

  const [open, setOpen] = useState(false);
  const elRef = React.useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <Box 
      sx={{ top:'55px',position:'relative'}}
      // sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Button
          style={{ background: '#fff', height: '3rem' }}
          type="button" ref={elRef} onClick={handleClick}>
          <Typography></Typography>
          <ChatBubbleBottomCenterIcon width={30} />
        </Button>
      <Popper open={open} placement="top-end" anchorEl={elRef.current}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Chat />
          </div>
        </div>
      </Popper>
      </Box>
    </>
  )
}
