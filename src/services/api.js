import base64 from 'base-64';
import jscookie from 'js-cookie';
import request from '../utils/request';

const initPost = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
};

/**
 * action中带有数据的属性
 * @param {*} payload
 */

export async function fetchPost(payload) {
  if (payload.mode === 'search') return request(`http://115.159.120.134/api/${payload.source_from[payload.is_search_select_source] == 'hot'? 'all' : payload.source_from[payload.is_search_select_source]}/search?query=${payload.search_key}&page=${payload.is_select_page}`);
  return request(`http://115.159.120.134/api/${payload.source_from[payload.is_select_source]}/article?page=${payload.is_select_page}`);
}

// export async function searchPost(action){
//   const { payload } = action
//   return request(`http://115.159.120.134/api/${payload.source_from[payload.is_search_select_source]}/search?query=${payload.search_key}&page=${payload.is_select_page}`)
// }
export async function register(payload) {
  return request('http://115.159.120.134/api/register', {
    ...initPost,
    headers: {
      cookie: jscookie.get('session'), // 获取验证码后获得的session
    },
    body: JSON.stringify(payload),
  });
}

export async function login(payload) {
  return request('http://115.159.120.134//api/token', {
    headers: {
      Authorization: base64.encode(`${payload.email}:${payload.password}`),
      
    },
  });
}

export async function validationEmail(payload) {
  return request('http://115.159.120.134/api/generate-code', {
    ...initPost,
    body: JSON.stringify(payload),
  });
}
