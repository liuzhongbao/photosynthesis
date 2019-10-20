/*
 * @Author: liuzhongbao 
 * @Date: 2019-10-20 12:59:29 
 * @Last Modified by:   liuzhongbao 
 * @Last Modified time: 2019-10-20 12:59:29 
 */

// 集成环境 Dva的核心模块

export default {
    
  namespace: 'exam',

  state: {
    userdata: {},
  },

  reducers: {
    changeState(state, action) {
      return { ...state, ...action };
    },
  },

  effects: {
    // 此处写generalter函数
  },

};
