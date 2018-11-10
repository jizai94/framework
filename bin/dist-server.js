const ip = require('ip')
const opn = require('opn')
const path = require('path')
const chalk = require('chalk')
const express = require('express')
const tools = require('./analyze-tools')
const settings = require('../settings/core')
const routes = require('../settings/routes')
const devices = require('../settings/devices')
const proxyMiddleware = require('http-proxy-middleware')
const proxyTable = settings.dev.proxyTable

const app = express()
const port = settings.build.distServerPort
const publicPath = settings.build.assetsPublicPath
const distServerPath = settings.build.distServerPath
const uri = `http://${ip.address()}:${port}${publicPath}`

app.use(publicPath, express.static(path.join(__dirname, '..', distServerPath)))
app.use('/mock', express.static('./mock'))

app.listen(port, error => {
  if (error) {
    throw error
  }
  console.log(chalk.green(`Server is running at ${uri}`))
  process.env.npm_config_opn && opn(uri)
  const genShot = async () => {
    for (let route of routes) {
      const fullPath = uri + route.path
      await tools.screenshot(fullPath, devices, route.name, route.delay)
    }
  }
  process.env.npm_config_shot && genShot()
})

Object.keys(proxyTable).forEach(context => {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

app.use(require('connect-livereload')())
