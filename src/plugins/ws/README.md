<https://www.npmjs.com/package/protobufjs#pbts-for-typescript>

> 修改 ws.proto 只需需要执行命令生成对应 js，否则增加的字段是不会生效
> npx pbjs -t static-module -w es6 -o compiled.js --keep-case ws.proto
> npx pbts -o compiled.d.ts compiled.js
