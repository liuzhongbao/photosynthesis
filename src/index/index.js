/*
 * @Author: liuzhongbao
 * @Date: 2019-10-20 14:00:47
 * @Last Modified by: liuzhongbao
 * @Last Modified time: 2019-10-26 09:53:33
 */

import dva from 'dva';
import 'antd/dist/antd.css';
import RootRouter from '@/router.js';
import '@/common/css/index.css';
import userinfo from '@/model/userinfo';

const createHistory = require('history').createHashHistory;

const app = dva({
  history: createHistory(),
}); // 创建一个应用

app.model(userinfo);
app.router(RootRouter); // 挂载路由
app.start('#root'); // 启动
