import React from 'react';
import { List, ListItem, ListItemText, Divider, Avatar } from '../utils/materialUI';
//import styles from './User.css';

const User = () => {
  return (

    <ListItem button>
      <Avatar /*src=*/ />
      <ListItemText primary="Work" secondary="Jan 28, 2014" />
    </ListItem>
  
  )
};
  
User.propTypes = {
  
};
export default User;
