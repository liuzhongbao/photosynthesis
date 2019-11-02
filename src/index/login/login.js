/*
 * @Author: liuzhongbao
 * @Date: 2019-03-26 20:57:43
 * @Last Modified by: liuzhongbao
 * @Last Modified time: 2019-11-02 17:49:18
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { Photosynthesis } from '@/HOCcomponent/Autho/Photosynthesis.js';
import './login.css';
// import Style from '@/index/global.less';

const mapState = store => {
  return { ...store.exam };
};

@connect(mapState)
@Photosynthesis
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Com: null,
    };
  }

  render() {
    const { Com } = this.state;
    console.log(this.props);
    return (
      <div
        className="Liu"
        onClick={() => this.Fn()}
        role="button"
        tabIndex="0"
        onKeyPress={() => this.Fn()}
      >
        <img
          className="photosynthesis"
          src="https://acar-images.oss-cn-hangzhou.aliyuncs.com/3.jpg"
          alt="My Awesome Image"
        />
        {Com ? <Com /> : null}
      </div>
    );
  }

  Fn() {
    import('./index').then(Text => {
      this.setState({
        Com: Text.default,
      });
    });
  }
}

export default Login;
