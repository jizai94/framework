import { Axios } from '~/plugins/requester'

// 测试代理服务接口
const rq = name => `/WechatBank/fee/${name}`

export const API = {
  queryCode: rq('queryAreaCode'),
  login: '/mock/login.json',
  channel: '/mock/channel.json'
}

export const getCode = () => Axios({
  method: 'post',
  url: API.queryCode,
  data: {
    actionFlag: '0',
    areaCode: '00'
  }
})

export const getLogin = data => {
  return Axios({
    method: 'get',
    url: API.login
  })
}

export const getLessons = data => {
  return Axios({
    method: 'get',
    url: API.channel
  })
}
