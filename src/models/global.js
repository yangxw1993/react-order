
export default {

  namespace: 'global',

  state: {
    userInfo: {
      id: '123',
      username: '',
      password: ''
    }
  },

  subscriptions: {
    /* setup({ dispatch, history }) {  // eslint-disable-line
    }, */
  },

  effects: {
    // dispatch 用户信息
    *setUserInfo({ payload }, { put }) {  // eslint-disable-line
      yield put({ type: 'set_user_info', payload });
    },
  },

  reducers: {
    // 设置用户信息 userInfo的state
    set_user_info(state, {payload}){
      return { ...state, userInfo: payload };
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
