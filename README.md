
### Webpack + React

## 使用
```js
//--content-base：指定了serve的文件目录
//--inline：自动刷新使用inline模式
//--hot:自动添加热替换plugin
webpack-dev-server --content-base build --inline --hot
```
或者

```js
npm run dev
```

## loaders
使用了如下一些loader
* babel-loader<br/>
	babel-loader需要babel-core,babel-preset-es2015使用react还需要babel-react
* css-loader<br/>
	可以require("*.css")
* style-loader<br/>
	添加style标签到html
* url-loader<br/>
	可以require(文件路径)
* file-loader