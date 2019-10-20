/*
 * @Author: liuzhongbao 
 * @Date: 2019-10-20 12:59:52 
 * @Last Modified by:   liuzhongbao 
 * @Last Modified time: 2019-10-20 12:59:52 
 */

// 按需加载

import React, { Component } from 'react';
// 封装按需加载的组件
function LoadAsync(asyncomponent) {
  return class LoadAsynC extends Component {
    // 内部状态
    constructor(props) {
      super(props);
      this.state = {
        Com: null,
      };
    }

    render() {
      const { Com } = this.state;
     
      if (Com === null) {
        return null;
      }
      
      return <Com {...this.props} />;
    }

    async componentDidMount() {
      const Com = await asyncomponent();

      this.setState({
        Com: Com.default,
      });
    }
  };
}
export default LoadAsync;
