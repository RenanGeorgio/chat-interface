import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, IconButton, Typography } from '@mui/material';
import Popper from '@mui/material/Popper';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid';
import  {ChatInterface}  from 'ignai-chat-interface';

import styles from './chat-wrapper.module.css';

const ChatWrapper: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const elRef = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div>
      <Box sx={{ top:'55px', position:'relative' }}>
        <IconButton
          style={{   position:'relative', top:-65,}}
          type="button" 
          ref={elRef} 
          onClick={handleClick}
          >
          <Typography></Typography>
          <ChatBubbleBottomCenterIcon  className='text-blue-500 size-11 rounded-xl mt-1'  />
        </IconButton>
        <Popper open={open} placement="top-end" anchorEl={elRef.current}>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <ChatInterface />
            </div>
          </div>
        </Popper>
      </Box>
    </div>
  );
}

export default ChatWrapper