import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import Popper from '@mui/material/Popper';
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/solid';
import { ChatInterface } from 'ignai-chat-interface';

import styles from './chat-wrapper.module.css';

const ChatWrapper: React.FC = (): any => {
  const [open, setOpen] = useState<boolean>(false);
  const elRef = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <Box sx={{ top:'55px', position:'relative' }}>
        <Button
          style={{ background: '#fff', height: '3rem' }}
          type="button" 
          ref={elRef} 
          onClick={handleClick}
          >
          <Typography></Typography>
          <ChatBubbleBottomCenterIcon width={30} />
        </Button>
        <Popper open={open} placement="top-end" anchorEl={elRef.current}>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <ChatInterface />
            </div>
          </div>
        </Popper>
      </Box>
    </>
  );
}

export default ChatWrapper