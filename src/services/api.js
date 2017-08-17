import request from '../utils/request';

export async function fetchPost(action) {
  const { payload } = action;

  if(action.mode == 'search') return request(`http://115.159.120.134/api/${payload.source_from[payload.is_search_select_source] == 'hot'? 'all' : payload.source_from[payload.is_search_select_source]}/search?query=${payload.search_key}&page=${payload.is_select_page}`);
  return request(`http://115.159.120.134/api/${payload.source_from[payload.is_select_source]}/article?page=${payload.is_select_page}`);
}

// export async function searchPost(action){
//   const { payload } = action 
//   return request(`http://115.159.120.134/api/${payload.source_from[payload.is_search_select_source]}/search?query=${payload.search_key}&page=${payload.is_select_page}`)
// }
