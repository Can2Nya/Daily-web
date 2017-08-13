
export default {

  namespace: 'uistate',

  state: {
    drawer: {
      isOpen: false
    },
    appbar: {
      isSearchFieldOpen: false, //是否展开搜索栏以及是否正在展开搜索结果
      isSearchMenuOpen: false, //是否展开搜索栏的菜单
      MenuAnchor: undefined, //搜索分类菜单坐标
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    setDrewerState(state, action) {
      return { 
        ...state, 
        drawer: {
          ...state.drawer,
          ...action.payload
        } 
      };
    },
    setAppBarState(state, action) {
      return { 
        ...state, 
        appbar: {
          ...state.appbar,
          ...action.payload
        } 
      };
    },
  },

};
