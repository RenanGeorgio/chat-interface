import React, { useState, useContext, useEffect } from "react";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { SocketContext } from "@contexts/socketcontext";

export default function ButtonNotifications() {
  const { socket } = useContext(SocketContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const [notifications, setNotifications] = useState<Array<string>>([])

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "notifications-popover" : undefined;

  useEffect(() => {
    if (socket.connected) {
      console.log("listening")
      socket.on("status_azure", function (msg) { 
        console.log("receiving")
        setNotifications((prev) => [...prev, msg])
      });
    }
  }, [socket.connected, setNotifications])

  return (
    <>
      <IconButton color="primary" onClick={handleClick}>
        <Badge badgeContent={notifications.length} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        {
          notifications.length > 0 ?
            (<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", zIndex:99999999 }} >
              {/* @ts-ignore */}
              {notifications.map((notification) => {(
                <ListItem>
                  <ListItemText primary={notification} />
                </ListItem>
                )
              })}
            </List>
            ):
            (
              <List
                sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              >
                <ListItem>
                  <ListItemText primary="Sem notificações." />
                </ListItem>
              </List>)
        }
      </Popover>
    </>
  );
}