/*
 * @Author: liuzhongbao
 * @Date: 2019-10-20 14:00:47
 * @Last Modified by: liuzhongbao
 * @Last Modified time: 2019-11-09 21:27:29
 */

/**
 * @param {dva} 是全局的状态管理，集成了redux。
 * @param {init} 是一个dev环境的函数，建议在build环境自行注释调
 * @param {RootRouter} 是路由库，初始化引入，进行挂载
 */

import dva from 'dva';
import RootRouter from '@/router.js';
import '@/common/css/index.css';
import init from '@/config/webDom.js';

init();

const createHistory = require('history').createHashHistory;

const app = dva({
  history: createHistory(),
}); // 创建一个应用

require('@/models/modelSet.js').default.forEach(key => app.model(key.default));

app.router(RootRouter); // 挂载路由
app.start('#root'); // 启动
