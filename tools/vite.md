# vite

Vite 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。

```
npm init vite <project-name> --template vue
cd <project-name>
npm install
npm run dev
```

或：
```
yarn create vite <project-name> --template vue
cd <project-name>
yarn
yarn dev
```

注意，如果报错```Error: Cannot find module 'worker_threads'```，请升级自己的nodejs版本。
















