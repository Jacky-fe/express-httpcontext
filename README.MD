# express-httpcontext
## 描述
这是一个在express里实现的类似java的HttpContext的封装，主要是为了随时随地的取到当前的HttpRequest和HttpResponse

这在同构的app里面经常会用到，例如cookie的同构实现

## 安装
npm install express-httpcontext

## 使用
``` js
// 首先添加中间件
import express  from 'express';
import  {  middleware }  from 'express-httpcontext';
const app = express();
app.use(middleware);

// 在其他场景使用，例如获取真实cookie
import { getContext } from 'express-httpcontext';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import cookie from 'cookie';

function getRealCookie() {
  if (canUseDOM) {
    return cookie.parse(document.cookie);
  }
  const req = getContext().req;
  if (req.cookies) {
    return req.cookies;
  }
  return {};
}
