/*
 * @Author: liuzhongbao 
 * @Date: 2019-10-20 13:00:07 
 * @Last Modified by:   liuzhongbao 
 * @Last Modified time: 2019-10-20 13:00:07 
 */

import LoadAsync from '../HOCcomponent/Autho/Loadasync.js';

// 路由的配置数据
const routerConfig = [
  {
    path: '/',
    component: LoadAsync(() => import('../src/index/login/login.js')),
  },
];

// 开发环境与线上环境
// process.env.NODE_ENV === 'development'
export default routerConfig;
