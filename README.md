# vue-manage-system-plus

  <a href="https://v3.cn.vuejs.org/">
    <img src="https://img.shields.io/badge/vue-3.0.0-brightgreen.svg" alt="vue">
  </a>
  <a href="https://element-plus.org/">
    <img src="https://img.shields.io/badge/element--plus-1.0.2beta.33-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/lss5270/vue-manage-system-plus/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>

采用Vue3 + Element Plus 搭建的后台管理系统解决方案，基于vue-manage-system升级定制而成，企业级定制，注释清晰，快速上手，开箱即用。[线上地址](https://lss5270.github.io/vue-manage-system-plus-demo/)

# 前言

vue发布3.0已经有一段时间了，一直想练练手。github上搜了一下，只有vue-manage-system比较符合拿来练手，工程简洁不像其他开源项目那么臃肿，但是还有以下几个方面不太符合企业级应用需求：

- [x] vuex未进行模块拆分（需拆分管理，已拆分）
- [x] 登录、登出未使用vuex状态管理模式（已加）
- [x] 缺少eslint自定义规则校验（已加）
- [x] 没有发送api接口请求（已加，但采用mock模拟接口返回数据，实际开发时去掉main.js中的mock模块即可）
- [x] 缺少api请求的公共入参封装、以及回参统一拦截和过滤处理等（企业级应用必带公共入参，已加）
- [x] 路由全部写死在代码中，没有注册动态路由（1.可通过接口获取，然后注册动态路由。2.可自动注册views文件夹，然后通过导航守卫beforeEach判断to页面是否在已分配的菜单权限中。为了方便调试和多人开发，此版本采用方案2）
- [x] 左侧菜单sidebar.vue组件没有渲染动态数据菜单（已改造，通过api请求菜单接口，根据不同角色返回不同的动态菜单进行动态渲染）
- [x] 业务中的语法大多数都还是vue2.0语法（登录等业务启用3.0语法，尝鲜并踩坑）
- [x] 未加入常用混入、过滤器、全局方法封装等（已加）
- [x] 缺少全局的403、404路由重定向，防止用户随意、恶意敲链接（已加）
- [x] 缺少白名单页面配置、以及系统配置（已加）
- [x] 缺少基建组织机构模块（机构部门、角色、用户、菜单分配等）（因为每个公司都会有机构、权限分配）
- [x] 缺少侧边栏自适应浏览器窗口大小（已加）
- [x] 缺少动态角色演示（已加，admin账号返回8个菜单，user账号返回4个菜单）
- [ ] 兼容桌面端（待加）

以上打勾的代表个人已经改造完成，使其更贴切企业应用，免费开源，可以为广大开发爱好者减少框架底层搭建成本、节省时间，即使是后端开发人员也能轻易上手，开箱即用。

## 项目截图

### 登录（小屏不清晰可以下载图片预览）

（admin账号返回8个菜单，user账号返回4个菜单）

![Image text](https://github.com/lss5270/vue-manage-system-plus/blob/main/screenshots/loginDemo.gif)

账号错误提示

![Image text](https://github.com/lss5270/vue-manage-system-plus/blob/main/screenshots/admin11.png)

admin账号登录返回8个菜单

![Image text](https://github.com/lss5270/vue-manage-system-plus/blob/main/screenshots/admin.png)

user账号登录返回4个菜单

![Image text](https://github.com/lss5270/vue-manage-system-plus/blob/main/screenshots/user.png)

### 403和404重定向（小屏不清晰可以下载图片预览）

演示三种链接敲击情况：

1. 敲击已存在并且已授权的路由（直接进入路由）
2. 敲击已存在但是未授权的路由（重定向到403）
3. 敲击不存在的路由（重定向到404）

![Image text](https://github.com/lss5270/vue-manage-system-plus/blob/main/screenshots/403and404.gif)

## 赞赏

请作者喝杯咖啡吧！(微信号：)



## 系统介绍

该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于 Vue3，使用 vue-cli3 脚手架，引用 Element Plus 组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。

## 功能

-   [x] Element Plus
-   [x] 登录/注销
-   [x] Dashboard
-   [x] 表格
-   [x] Tab 选项卡
-   [x] 表单
-   [x] 图表 :bar_chart:
-   [ ] 富文本编辑器
-   [ ] markdown 编辑器
-   [x] 图片拖拽/裁剪上传
-   [ ] 支持切换主题色 :sparkles:
-   [ ] 列表拖拽排序
-   [x] 权限测试
-   [x] 404 / 403
-   [x] 三级菜单
-   [x] 自定义图标
-   [ ] 可拖拽弹窗
-   [x] 国际化

## 安装步骤

```
git clone https://github.com/lss5270/vue-manage-system-plus.git      // 把模板下载到本地
cd vue-manage-system-plus    // 进入模板目录
npm install         // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn

// 开启服务器，浏览器访问 http://localhost:8080
npm run serve

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build
```


## License

[MIT](https://github.com/lss5270/vue-manage-system-plus/blob/main/LICENSE)
