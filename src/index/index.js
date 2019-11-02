/*
 * @Author: liuzhongbao
 * @Date: 2019-10-20 14:00:47
 * @Last Modified by: liuzhongbao
 * @Last Modified time: 2019-11-02 17:47:16
 */

import dva from 'dva';
import RootRouter from '@/router.js';
import '@/common/css/index.css';

const createHistory = require('history').createHashHistory;

const app = dva({
  history: createHistory(),
}); // 创建一个应用

require('@/models/modelSet.js').default.forEach(key => app.model(key.default));

app.router(RootRouter); // 挂载路由
app.start('#root'); // 启动
