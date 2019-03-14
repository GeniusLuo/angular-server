# angular-server
angular项目，用nodejs写服务端，用http和websocket来与与客户端通信
## Server 服务
> Server服务是来由nodejs的express搭建的一个服务器平台。用以收发数据，供前端调试接口。

## 文件目录结构
> 项目使用typescript语言编辑。
```typescript
server
  --build  // server下ts构建后自动生成到此目录
      -- a.js // 编译生成的服务js代码
  --server // 服务代码目录
  	  -- a.ts // 服务代码
  --package.json // 依赖包
  --tsconfig.json // 构建配置
```
## 服务运行步骤

1.  npm  install 				//  安装依赖
2. npm install nodemon -g     //   全局安装nodemon，支持node服务热加载
3. vscode编辑器点击a.ts，同时按下Ctrl+Shift+B，点击监视a.ts文件，用tsconfig.json配置来实时编译生成a.js。
4. 打开cmd，切换目录到server/build下，运行nodemon a.js。 
5. 运行完以上步骤，控制台显示： '服务器已启动， 地址：http:// localhost:8000' 。至此，node后台服务已启动。
