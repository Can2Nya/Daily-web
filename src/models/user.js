import * as api from '../services/api';

export default {

  namespace: 'user',

  state: {
    user: {}, // 用户基本信息
    // register: {}, // 注册表单暂存
    // login: {}, // 登陆表单暂存
    form: {}, // 表单内容暂存
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *validationEmail({ payload }, { call, put }) {
      try{
        const data = yield call(api.validationEmail, payload);
      }catch(e) {

      }
    },
    *register({ payload }, { call, put }) {  // eslint-disable-line
      try{
        const data = yield call(api.register, payload);
        // yield put({ type: 'save' });
      }catch(e){

      }
    },
    *auth({ payload }, { call, put }) {
      try{
        const data = yield call(api.login, payload);
      }catch(e){

      }
    },
  },

  reducers: {
    setToken(state, action) {
      return { ...state };
    },
    // setRegister(state, action) {
    //   return { ...state, register: action.payload };
    // },
    // setLogin(state, action) {
    //   return { ...state, login: action.payload };
    // },
    initForm(state, action) {
      return { ...state, form: {} }; // 未使用
    },
    setForm(state, action) {
      return { ...state, form: action.payload };
    },
  },
};
