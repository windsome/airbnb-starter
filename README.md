# What's This?
This is a (React + Redux + Router + isomorphic + SASS/SCSS + webpack + nodejs + express) starter kit.
It saves you life in construct a base runnable suit. I need your help to improve it.

# how to use
firt install as:
```
git clone https://github.com/windsome/airbnb-starter.git
cd airbnb-starter
npm install  (in china, when install scss-node, may face a timeout problem, you can use taobao mirror. see bellow 问题一)
npm run dev
```
then, you can open browser, and visit http://localhost:3000

# make as dist.


# directory structure.
```
## react-redux-router-scss-node directories
▾ app/
  ▸ actions/
  ▸ constants/
  ▸ head/
  ▸ images/
  ▾ reducers/
      baidu.js
      index.js
      todos.js
  ▾ routes/
    ▸ admin/
    ▸ common/
    ▸ house/
    ▸ root/
      index.js
  ▾ scss/
    ▸ bootstrap/
    ▸ components/
    ▸ font/
    ▸ images/
      common.scss
      main.scss
      mixins.scss
      settings.scss
  ▸ stub/
  ▸ test/
  ▸ utils/
    client.jsx
    configureStore.js
    index.html
    server.jsx
▾ bpi/
    index.js
▸ dist/
▸ node_modules/
▾ webpack/
    server.dev.js
    server.js.es6
    server.prod.js
    webpack.config.dev.js
    webpack.config.prod.js
  package.json
```

## webpack contains webpack.config.js and server.js.

## app contains all browser side code.

## bpi contains all server side code.

## dist is app compiled files.


# 问题一：使用npm安装一些包失败了的看过来（npm国内镜像介绍）
镜像使用方法（三种办法任意一种都能解决问题，建议使用第三种，将配置写死，下次用的时候配置还在）:
## 1.通过config命令
```
npm config set registry https://registry.npm.taobao.org 
npm info underscore  （如果上面配置正确这个命令会有字符串response）
```
## 2.命令行指定
```
npm --registry https://registry.npm.taobao.org info underscore 
```
## 3.编辑 ~/.npmrc 加入下面内容
```
registry = https://registry.npm.taobao.org
```
搜索镜像: https://npm.taobao.org
建立或使用镜像,参考: https://github.com/cnpm/cnpmjs.org


