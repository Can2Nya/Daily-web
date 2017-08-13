import React from 'react';
import { connect } from 'dva';
import { MuiThemeProvider, theme, Drawer } from '../utils/materialUI';

import MultiMenu from '../components/MultiMenu';
import MultiAppBar from '../components/MultiAppBar';
import styles from './IndexPage.css';



const MainContainer= ({ uistate, post, dispatch, children }) => {

  const { drawer, appbar } = uistate
  // action

  const toggleDrawerOpen = () => {
    dispatch({
      type: 'uistate/setDrewerState',
      payload: {
        isOpen: !drawer.isOpen
      }
    })
  };

  const toggleSearchOpen = () => {
    dispatch({
      type: 'uistate/setAppBarState',
      payload: {
        isSearchFieldOpen: !appbar.isSearchFieldOpen
      }
    })
  };
/**
 * 控制搜索分类目录开关同时更变分类
 * @param  {key} null为空，int类型为分类目录序号
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
  const toggleSearchMenuOpen = (key, e) => {
    
    dispatch({
      type: 'uistate/setAppBarState',
      payload: {
        isSearchMenuOpen: !appbar.isSearchMenuOpen,

        MenuAnchor: e.currentTarget,
        
      }
    })
    if (key != null){
      dispatch({
        type: 'post/setSearchSource',
        payload: {
          is_search_select_source: key
        }
      })
    }
    
  };

  const setPostSource = (key, proxy) => {
    
    dispatch({
      type: 'post/init',
    })
    dispatch({
      type: 'post/setSource',
      payload: {
        is_select_source: key
      }
    })
    dispatch({
      type: 'post/fetch',
      // ...post,
      // source_from: post.source_from[key],
      payload: {
        ...post,
        is_select_source: key,
        is_select_page: 1
      }
    })
  };
/**
 * @param  {e} event事件,event.target.value存放input组件更变的值
 * @return {无}
 */
  const setSearchKey = (e) => {
    dispatch({
      type: 'post/setSearchKey',
      payload: {
        search_key: e.target.value
      }
    })
  };

  const onSearch = (e) => {
    if(e.key == 'Enter'){
      dispatch({
        type: 'post/init',
      })
      dispatch({
        type: 'post/fetch',
        mode: 'search',
        payload: {
          ...post,
          is_select_page: 1,
        }
      })
    }
    
  }

// render
  // const setTitle = ()=>{
  //   // const list = ['豆瓣精选','果壳精选','知乎精选']
  //   return post.source_name[post.is_select_source]
  // }
  return (
    <MuiThemeProvider theme={ theme }>
      <div className={styles.root}>
        
        <MultiAppBar 
        title={post.source_name[post.is_select_source]} 
        menus={post.source_name}
        anchor={appbar.MenuAnchor}
        isSelectSourceName={post.source_name[post.is_search_select_source]}
        isSelectSource={post.is_search_select_source}
        isSearchFieldOpen={appbar.isSearchFieldOpen} 
        isSearchMenuOpen={appbar.isSearchMenuOpen}
        onMenuClick={toggleDrawerOpen} 
        onChangeInputValue={setSearchKey}
        onSearchClick={toggleSearchOpen} 
        onSearchMenuClick={toggleSearchMenuOpen}
        onSearch={onSearch}
        />

        <Drawer
            open={drawer.isOpen}
            onRequestClose={toggleDrawerOpen}
            onClick={toggleDrawerOpen}
          >
          <MultiMenu ListName={post.source_name} activeKey={post.is_select_source} onClick={setPostSource} />
        </Drawer>

      {children}
      
        
      </div>
    </MuiThemeProvider>
  );
};

MainContainer.propTypes = {
};

function mapStateToProp({ uistate, post }){
  return{
    uistate: uistate,
    post: post
  }
};

export default connect(mapStateToProp)(MainContainer);
