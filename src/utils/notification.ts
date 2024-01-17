import {NotificationManager} from 'react-notifications';

export default function Notifications(message: string, type: string) {
  switch (type) {
    case 'info':
      return NotificationManager.info(message);
      break;
    case 'success':
      return NotificationManager.success(message, 'Title here');
      break;
    case 'warning':
      return NotificationManager.warning(message, 'Close after 3000ms', 3000);
      break;
    case 'error':
      return NotificationManager.error(message, 'Click me!', 5000, () => {
        alert('callback');
      });
      break;
  }

  return 
}