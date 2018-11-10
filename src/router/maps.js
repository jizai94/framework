import Login from '@/Login'
import Main from '@/Main'
import Redirect from '@/Redirect'

import Home from '@/Home/Async'
import Asset from '@/Asset/Async'
import Channel from '@/Channel/Async'
import Center from '@/Center/Async'

export default [{
  path: '/login',
  component: Login
}, {
  path: '/main',
  component: Main,
  children: [{
    path: '',
    component: Home
  }, {
    path: 'home',
    component: Home
  }, {
    path: 'asset',
    component: Asset
  }, {
    path: 'channel',
    component: Channel
  }, {
    path: 'center',
    component: Center
  }]
}, {
  path: '/redirect',
  component: Redirect
}, {
  path: '*',
  redirect: '/redirect'
}]
