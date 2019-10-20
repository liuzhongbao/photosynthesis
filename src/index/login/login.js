/*
 * @Author: liuzhongbao
 * @Date: 2019-03-26 20:57:43
 * @Last Modified by: liuzhongbao
 * @Last Modified time: 2019-10-20 21:19:10
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
