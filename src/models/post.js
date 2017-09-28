import * as api from '../services/api';

export default {

  namespace: 'post',
  state: {
    source_from: ['hot', 'douban', 'guoke', 'zhihu'],  // 来源列表，hot在搜索中自动改为all
    source_name: ['热门', '豆瓣', '果壳', '知乎'],        // 来源列表名称，在搜索中热门指全部
    post: [],
    maxPage: 0,
    mode: '',                                           // fetch模式 ('','search')
    is_next: false,
    is_select_source: 0,                                // 浏览文章来源
    is_select_page: 1,
    is_search_select_source: 0,                         // 搜索选择来源
    is_searched: false,                                 // 是否已经触发搜索
    search_key: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({ pathname }) => {
        if (pathname == "/"){
          dispatch({
            type: 'init',
          })
          dispatch({
            type: 'post/fetch',
            // payload: {
            //   source_from: ['hot', 'douban', 'guoke', 'zhihu'],
            //   is_select_source: 0,
            //   is_select_page: 1,
            // }
          })
        }
      })
    },
  },

  effects: {
    /**
     * 获取帖子
     * @param {*} action
     */
    fetch: [function*(action, { call, put, select, takeLatest }) {  // eslint-disable-line
      try {
        const payload = yield select(state => state.post);
        const { data } = yield call(api.fetchPost, payload);
        yield put({ type: 'save', payload: data });
        // if (payload.mode === 'search') {
        //   yield put({
        //     type: 'post/setSearchState',
        //     payload: {
        //       is_searched: true,
        //     },
        //   });
        // }
      } catch (e) {
      }
    }, { type: 'takeLatest' }],
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        post: state.post.concat(action.payload['article_resource']),
        maxPage: action.payload['page'],
        is_next: action.payload['has_next']
      };
    },
    init(state, action) {
      return {
        ...state,
        post: [],
        is_select_page: 1,
      }
    },
    setPage(state, action) {
      return {
        ...state,
        is_select_page: action.payload['is_select_page']
      }
    },
    setSource(state, action) {
      return {
        ...state,
        is_select_source: action.payload['is_select_source'],
        // post: [],
        // is_select_page: 1,
      }
    },
    setMode(state, action) {
      return {
        ...state,
        mode: action.payload['mode'],
      }
    },
    setSearchKey(state, action) {
      return {
        ...state,
        search_key: action.payload['search_key'],
      }
    },
    setSearchState(state, action) {
      return {
        ...state,
        is_searched: action.payload['is_searched'],
      }
    },
    setSearchSource(state, action) {
      return {
        ...state,
        is_search_select_source: action.payload['is_search_select_source'],
      }
    },
  },

};
