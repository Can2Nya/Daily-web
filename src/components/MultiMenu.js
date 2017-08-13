import React from 'react';
import { List, ListItem, ListItemText, Divider } from '../utils/materialUI'
import styles from './MultiMenu.css'

const MultiMenu = ({ ListName, activeKey, onClick }) => {
//ListName -> post.source_name
//activeKey => post.is_select_source
  const renderList = () => {
    return ListName.map((list, index)=>{
      const style = activeKey == index ? styles.listitemActive: styles.listitem;
      return(
        <ListItem button key={index}>
          <ListItemText inset className={style} primary={list} onClick={onClick.bind(this, index)} />
        </ListItem>
      )
    })
  };

  return(
    <List style={{ width: 250 }} disablePadding>
      <ListItem>
          <ListItemText className={styles.title} primary='分类' />
      </ListItem>
      <Divider />
      { renderList() }
    </List>
  )
};

MultiMenu.propTypes ={

};
export default MultiMenu;