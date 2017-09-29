import Koa from 'koa';
import webpack from 'webpack';
import mount from 'koa-mount';
import serve from 'koa-static';
import convert from 'koa-convert';
import webpackMiddleware from 'koa-webpack-middleware';

const app = new Koa();

//配置webpack
const devMiddleware = webpackMiddleware.devMiddleware;
// const hotMiddleware = webpackMiddleware.hotMiddleware;
const webpackConf = require('../webpack.config');
const compiler = webpack(webpackConf);
app.use(devMiddleware(compiler, {
	noInfo: true,		//是否打印 Hash Version等信息
	publicPath: webpackConf.output.publicPath
}));
// app.use(hotMiddleware(compiler));
app.use(convert(mount('/', serve(`${process.cwd()}/src/client`))));

app.listen(3000, () => {
    console.log(`Server started on 3000`);
})

export default app;