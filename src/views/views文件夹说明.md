# views文件夹说明

- views目录用于存放页面组件，公共组件禁止存放在此（公共组件存于components）
- views目录下文件夹和文件统一使用驼峰命名（文件命名影响路由路径）
- `views/login.vue`会自动注册路由为`'/login'`
- `views/error/403.vue`会自动注册路由为`'/error/403'`