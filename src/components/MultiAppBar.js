import React from 'react';
// import { Link } from 'dva/router';
import { AppBar, Toolbar, Typography, IconButton, MenuIcon, Search, Input, Clear, Menu, MenuItem, ArrowDropDown } from '../utils/materialUI';
import classNames from 'classnames';
import styles from './MultiAppBar.css';

const MultiAppBar = ({ 
  title,              // 标题
  menus,              // 搜索分类
  anchor,             // 弹出菜单框锚点
  isSelectSourceName, // 来源名字
  isSelectSource,     // 来源序号
  isSearchFieldOpen,  // 是否展开搜索栏
  isSearchMenuOpen,   // 弹出菜单开关
  onMenuClick,        // 弹出菜单点击事件
  onSearchClick,      // 搜索按钮点击事件
  onChangeInputValue, // 输入框更变事件
  onSearchMenuClick,  // 弹出菜单中列表的点击事件
  onSearch            // 回车搜索事件
   }) => {

  
  const titleClass = classNames({
    [styles.title]: true,
    [styles.hidden]: isSearchFieldOpen,
    [styles['hidden-title-offset']]: isSearchFieldOpen,
  });

  const inputClass = classNames({
    [styles.input]: true,
    [styles.hidden]: !isSearchFieldOpen,
    [styles['hidden-0px']]: !isSearchFieldOpen,
  });

  const menuClass = classNames({
    [styles.menu]: true,
    [styles.hidden]: !isSearchFieldOpen,
  });

  return(
    <AppBar position="fixed">
          <Toolbar>
            <IconButton className={titleClass} color="contrast" aria-label="Menu" onClick={onMenuClick}>
              <MenuIcon />
            </IconButton>
            <Typography className={titleClass} type="title" color="inherit">
              { title }
            </Typography>
            <div className={styles.right} >
            <IconButton color="contrast" className={styles.search} aria-label="Menu" onClick={onSearchClick}>
              { !isSearchFieldOpen ? <Search /> : <Clear />}
            </IconButton>
            <Input
              placeholder="按回车搜索..."
              className={inputClass}
              inputProps={{
                'aria-label': 'Description',
              }}
              onChange={onChangeInputValue}
              onKeyDown={onSearch}
            />
            <IconButton className={menuClass} color="contrast" onClick={onSearchMenuClick.bind(this, null)} >
              <ArrowDropDown />
            </IconButton>
            <Typography className={menuClass} type="button" color="inherit" onClick={onSearchMenuClick.bind(this, null)} >
              { isSelectSourceName }
            </Typography>
            <Menu 
              open={isSearchMenuOpen}
              onRequestClose={onSearchMenuClick.bind(this, null)}
              anchorEl={anchor}
              MenuListProps={{
                style: {
                  width: 200,
                },
              }}
            >
              { menus.map((menu, index) =>
                  <MenuItem key={index} selected={isSelectSource == index? true : false} onClick={onSearchMenuClick.bind(this, index)}>
                    { menu }
                  </MenuItem>,
              ) }
            </Menu>
            </div>
          </Toolbar>
    </AppBar>
  )
};

MultiAppBar.propType = {

};

export default MultiAppBar;