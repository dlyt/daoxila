import Koa from 'koa';
import mount from 'koa-mount';
import serve from 'koa-static';
import convert from 'koa-convert';

const app = new Koa();

app.use(convert(mount('/', serve(`${process.cwd()}/src/client`))));

app.listen(3000, () => {
    console.log(`Server started on 3000`);
})

export default app;