/*
 * @Author: liuzhongbao
 * @Date: 2019-03-26 20:57:43
 * @Last Modified by: liuzhongbao
 * @Last Modified time: 2019-11-04 21:10:07
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { Photosynthesis } from '@/HOCcomponent/Autho/Photosynthesis.js';
import Style from '@/common/global.less';

const mapState = store => ({ ...store.exam });

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
        className={Style.Liu}
        onClick={() => this.Fn()}
        role="button"
        tabIndex="0"
        onKeyPress={() => this.Fn()}
      >
        {/* {给特定的主题定制颜色}
        <div className={Style.liuzhongbao}>
          <Button type="primay"></Button>
        </div> */}
        <img
          className={Style.photosynthesis}
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
