/*
 * @Author: liuzhongbao
 * @Date: 2019-03-26 20:57:43
 * @Last Modified by: liuzhongbao
 * @Last Modified time: 2019-10-26 10:08:39
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Com: null,
    };
  }

  render() {
    const { Com } = this.state;
    return (
      <div
        className="Liu"
        onClick={() => this.Fn()}
        role="button"
        tabIndex="0"
        onKeyPress={() => this.Fn()}
      >
        <img className="photosynthesis" src="https://acar-images.oss-cn-hangzhou.aliyuncs.com/3.jpg" alt="My Awesome Image" />
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

  componentDidMount() {
    console.log(this.props);
  }
}

const mapState = store => {
  return { ...store.exam };
};

export default connect(mapState)(Login);
