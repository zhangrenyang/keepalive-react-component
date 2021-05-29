import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home';
import UserList from './components/UserList';
import UserAdd from './components/UserAdd';
import { KeepAliveProvider, withKeepAlive } from 'react-keepalive';
let KeepAliveHome = withKeepAlive(Home, { cacheId: 'Home'});
let KeepAliveUserList = withKeepAlive(UserList, { cacheId: 'UserList',scroll:true});
let KeepAliveUserAdd = withKeepAlive(UserAdd, { cacheId: 'UserAdd' });
const App = () => {
  return (
    <Router  >
      <KeepAliveProvider>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">用户列表</Link></li>
          <li><Link to="/add">添加用户</Link></li>
        </ul>
        <Switch>
          <Route path={'/'} component={KeepAliveHome} exact />
          <Route path={'/list'} component={KeepAliveUserList} />
          <Route path={'/add'} component={KeepAliveUserAdd} />
        </Switch>
      </KeepAliveProvider>
    </Router>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'));