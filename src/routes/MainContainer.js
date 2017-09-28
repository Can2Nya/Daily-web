import React from 'react';
import { connect } from 'dva';
import { MuiThemeProvider, theme, Drawer } from '../utils/materialUI';

import MultiMenu from '../components/MultiMenu';
import MultiAppBar from '../components/MultiAppBar';
import styles from './IndexPage.css';

const MainContainer = ({ uistate, post, dispatch, pageTitle, children }) => {

  const { drawer, appbar } = uistate;
  // action
/**
 * 控制侧栏菜单展开
 */
  const toggleDrawerOpen = () => {
    dispatch({
      type: 'uistate/setDrewerState',
      payload: {
        isOpen: !drawer.isOpen,
      },
    });
  };
/**
 * 控制搜索条展开
 */
  const toggleSearchOpen = () => {
    //console.log(!appbar.isSearchFieldOpen)
    dispatch({
      type: 'uistate/setAppBarState',
      payload: {
        isSearchFieldOpen: !appbar.isSearchFieldOpen,
      },
    });
    if (!appbar.isSearchFieldOpen === false && post.is_searched === true) { //
      dispatch({
        type: 'post/init',
      });
      dispatch({
        type: 'post/setSearchState',
        payload: {
          is_searched: false,
        },
      });
      dispatch({
        type: 'post/setMode',
        payload: {
          mode: '',
        },
      });
      dispatch({
        type: 'post/fetch',
        // payload: {
        //   ...post,
        // },
      });
    }
  };
/**
 * 控制搜索分类目录开关以及更改搜索源
 */
  const toggleSearchMenuOpen = (key, e) => {
    dispatch({
      type: 'uistate/setAppBarState',
      payload: {
        isSearchMenuOpen: !appbar.isSearchMenuOpen,
        MenuAnchor: e.currentTarget,
      },
    });
    if (key != null) {
      dispatch({
        type: 'post/setSearchSource',
        payload: {
          is_search_select_source: key,
        },
      });
    }
  };
/**
 * 设置文章来源
 * @param  {key} int
 * @param  {proxy} event代理
 */
  const setPostSource = (key, proxy) => {
    dispatch({
      type: 'post/init',
    });
    dispatch({
      type: 'post/setSource',
      payload: {
        is_select_source: key,
      },
    });
    dispatch({
      type: 'post/fetch',
      // ...post,
      // source_from: post.source_from[key],
      payload: {
        ...post,
        is_select_source: key,
        is_select_page: 1,
      },
    });
  };

/**
 * 设置搜索关键字
 * @param  {e} event事件,event.target.value存放input组件更变的值
 * @return {无}
 */
  const setSearchKey = (e) => {
    dispatch({
      type: 'post/setSearchKey',
      payload: {
        search_key: e.target.value,
      },
    });
  };

/**
 * 搜索事件
 * @param  {e} event代理
 * @return {[type]}
 */
  const onSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch({
        type: 'post/init',
      });
      dispatch({
        type: 'post/setMode',
        payload: {
          mode: 'search',
        },
      });
      dispatch({
        type: 'post/setSearchState',
        payload: {
          is_searched: true,
        },
      });
      dispatch({
        type: 'post/fetch',
        // mode: 'search',
        // payload: {
        //   ...post,
        //   is_select_page: 1,
        // },
      });
     
    }
  };
  return (
    <MuiThemeProvider theme={ theme }>
      <div className={styles.root}>
        
        <MultiAppBar 
        title={pageTitle} 
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

function mapStateToProp({ uistate, post }) {
  return {
    uistate: uistate,
    post: post,
  };
}

export default connect(mapStateToProp)(MainContainer);
