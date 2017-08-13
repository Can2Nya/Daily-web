import * as api from '../services/api';

export default {

  namespace: 'post',

  state: {
    source_from: ['douban', 'guoke', 'zhihu', 'all'],
    source_name: ['豆瓣', '果壳', '知乎', '全部'],
    post: [],
    maxPage: 0,
    is_next: false,
    is_select_source: 0,
    is_select_page: 1,
    is_search_select_source: 0,
    search_key: '',

  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({ pathname }) => {
        if (pathname == "/"){
          dispatch({
            type: 'init'
          })
          dispatch({
            type: 'fetch',
            payload: {
              source_from: ['douban', 'guoke', 'zhihu', 'all'],
              is_select_source: 0,
              is_select_page: 1,
            }
          })
        }
      })
    },
  },

  effects: {
    *fetch(action, { call, put }) {  // eslint-disable-line
      try{
        const { data } = yield call(api.fetchPost, action)
        // console.log(data)
        yield put({ type: 'save', payload: data });
      }catch(e){

      }
      
    },
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
    init(state, action){
      return {
        ...state,
        post: [],
        is_select_page: 1,
      }
    },
    setPage(state, action){
      return {
        ...state,
        is_select_page: action.payload['is_select_page']
      }
    },
    setSource(state, action){
      return {
        ...state,
        is_select_source: action.payload['is_select_source'],
        // post: [],
        // is_select_page: 1,
      }
    },
    setSearchKey(state, action){
      return {
        ...state,
        search_key: action.payload['search_key'],
      }
    },
    setSearchSource(state, action){
      return {
        ...state,
        is_search_select_source: action.payload['is_search_select_source'],
      }
    }
  },

};
