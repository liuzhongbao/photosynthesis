/*
 * @Author: liuzhongbao
 * @Date: 2019-10-20 13:00:21
 * @Last Modified by: liuzhongbao
 * @Last Modified time: 2019-10-20 13:52:52
 */

import React from 'react';
import { Switch, Route, Redirect } from 'dva/router';
import PropTypes from 'prop-types';
/**
 *
 * @param {Object} props
 * props - @param {Array} routes
 */
function renderPath(match, item) {
  return match ? match.path + '/' + item.path : item.path;
}

class RouterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      routes, // 路由配置
      match, // 路由信息
    } = this.props;
    console.log(routes, '6666');
    return (
      <Switch>
        {' '}
        {routes &&
          routes.map(item => {
            return (
              <Route
                key={item.path}
                path={renderPath(match, item)}
                render={props => {
                  const Com = item.component;
                  return <Com {...{ ...props, ...item }} />;
                }}
              />
            );
          })}
        <Redirect from="/" to="/login" exact />
      </Switch>
    );
  }
}

RouterView.propTypes = {
  routes: PropTypes.array.isRequired,
  match: PropTypes.any,
};

export default RouterView;
