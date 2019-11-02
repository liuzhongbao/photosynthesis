/*
 * @Author: liuzhongbao
 * @Date: 2019-10-20 12:59:52
 * @Last Modified by: liuzhongbao
 * @Last Modified time: 2019-11-02 15:47:39
 */

// 按需加载

import React, { Component } from 'react';
// 封装按需加载的组件

export function Photosynthesis(Asyncomponent) {
  return class Photosynthesis extends Component {
    // 内部状态
    constructor(props) {
      super(props);
      this.state = { name: 'liuzhongbao' };
    }

    render() {
      return <Asyncomponent {...this.props} props={{ ...this.state }} />;
    }
  };
}
