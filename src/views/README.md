# views文件夹说明

- views目录用于存放页面组件，公共组件禁止存放在此（公共组件存于components）
- views目录下文件夹和文件统一使用驼峰命名（文件命名影响路由路径）
- views目录下所有modal文件夹内存放弹窗组件，会自动过滤路由注册
- `views/login.vue`会自动注册路由为`'/login'`
- `views/error/403.vue`会自动注册路由为`'/error/403'`
- `views/XX/modal/XX.vue`不会注册成任何路由