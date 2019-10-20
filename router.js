/*
 * @Author: liuzhongbao 
 * @Date: 2019-10-20 21:20:08 
 * @Last Modified by:   liuzhongbao 
 * @Last Modified time: 2019-10-20 21:20:08 
 */

import React from 'react';
import { BrowserRouter } from 'dva/router';

import RouterView from './components/router-view/index.js';
import routerConfig from './config/router.config.js';

export default function RootRouter() {
  return (
    <BrowserRouter>
      <RouterView routes={routerConfig} />
    </BrowserRouter>
  );
}
