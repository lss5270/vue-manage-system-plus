# vue-manage-system-plus

  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3.0.0-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.8.2-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/lss5270/vue-manage-system-plus/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>

基于Vue3 + Element Plus 的后台管理系统解决方案。基于vue-manage-system开源系统升级改造，企业级定制，开箱即用。[线上地址](https://lin-xin.gitee.io/example/work/)

# 前言

由于之前企业改用其他技术方案，所以已经好长一段时间没接触vue了，近段时间公司准备重新用回vue，然后个人发现vue已经更新到3.0了，想找个基于vue3.0的开源项目练手。在github上搜了一下，只有[vue-manage-system](https://github.com/lin-xin/vue-manage-system)比较符合拿来练手，工程简洁不像其他开源项目那么臃肿，但是还有以下几个方面不太符合企业级应用需求：

- [x] 1.没有发送数据获取的接口请求（计划先使用mock拦截）
- [ ] 2.路由全部写死在代码中，没有获取接口返回的动态路由（计划先用mock代替接口，根据不同角色返回不同的动态路由数据）
- [ ] 3.左侧菜单sidebar.vue文件没有渲染动态数据菜单（使用登录后的动态路由进行渲染）
- [x] 4.业务中的语法大多数都还是vue2.0语法（登录等业务启用3.0语法，尝鲜并踩坑）
- [x] 5.vuex未进行模块拆分（需拆分管理）
- [x] 6.未加入eslint进行代码强制校验（待加）
- [ ] 7.未加入常用混入、全局方法封装（待加）
- [x] 8.缺少api请求的公共入参封装、以及回参统一过滤处理等（企业级应用必带公共入参）
- [ ] 9.增加组织机构模块（角色、用户、菜单分配等）

出于以上考虑，本人决定基于该项目进行升级改造，并且免费开源出来，供广大开发者开箱即用。

## 项目截图

### 登录

![Image text](https://github.com/lin-xin/manage-system/raw/master/screenshots/wms3.png)

### 首页

![Image text](https://github.com/lin-xin/manage-system/raw/master/screenshots/wms1.png)

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

## 组件使用说明与演示

### vue-schart

vue.js 封装 sChart.js 的图表组件。访问地址：[vue-schart](https://github.com/linxin/vue-schart)

<p><a href="https://www.npmjs.com/package/vue-schart"><img src="https://img.shields.io/npm/dm/vue-schart.svg" alt="Downloads"></a></p>

```html
<template>
    <div>
        <schart class="wrapper" canvasId="myCanvas" :options="options"></schart>
    </div>
</template>

<script>
    import Schart from "vue-schart"; // 导入Schart组件
    export default {
        data() {
            return {
                options: {
                    type: "bar",
                    title: {
                        text: "最近一周各品类销售图",
                    },
                    labels: ["周一", "周二", "周三", "周四", "周五"],
                    datasets: [
                        {
                            label: "家电",
                            data: [234, 278, 270, 190, 230],
                        },
                        {
                            label: "百货",
                            data: [164, 178, 190, 135, 160],
                        },
                        {
                            label: "食品",
                            data: [144, 198, 150, 235, 120],
                        },
                    ],
                },
            };
        },
        components: {
            Schart,
        },
    };
</script>
<style>
    .wrapper {
        width: 7rem;
        height: 5rem;
    }
</style>
```

## License

[MIT](https://github.com/lss5270/vue-manage-system-plus/blob/master/LICENSE)