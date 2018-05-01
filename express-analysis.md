## Express本质
#### app是什么
    var app = express();
    app.listen(3000)
以上是express的创建一个server的代码，接下来看看```app.listen```的实现：

    app.listen = function listen() {
      var server = http.createServer(this);
      return server.listen.apply(server, arguments);
    };

结合下面这段代码来看：

    var http = require('http');  
    var fs = require('fs');

    http.createServer(function (req, res) {  
        if(req.url === '/sendMessage') {
            res.writeHead(200, {
                "Content-Type": "text/event-stream"
            });

            setInterval(function () {
                res.write(
                    "data:" + new Date().toLocaleTimeString() + "\n\n" +
                    ": '这是注释！'" + "\n" +
                    "event: myEvent" + "\n" + 
                    "data:" + new Date().toLocaleString() + "\n\n"
                );
            }, 1000);
        }
        if(req.url === '/index') {
            fs.readFile('./index.html', function (err, content) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content, 'utf-8');
            });
        }
    }).listen(3000);

可以得出结论： <span style="color:green">app是一个回调函数，用于处理http请求</span>
#### app做了什么
app从之前的对比来看，可以很明确，它是用来匹配url,对请求（request）进行处理，然后进行响应（response）

#### 对请求的处理是怎么实现的？app的路由匹配是怎么实现的？
express采用了中间件的业务逻辑处理架构，意思是建议所有的业务逻辑处理都使用中间件来处理，当然，除了业务逻辑之外还有一些辅助性需求也可以通过中间件来做，比如日志记录。

顺便说一句：express 的路由也是基于中间件

#### express的中间件，路由机制
先说说express中server接收到requst到response的过程：

```当客户端发送一个http请求后，会先进入express实例对象对应的router.handle函数中，router.handle函数会通过next()遍历stack中的每一个layer进行match，如果match返回true，则获取layer.route，执行route.dispatch函数，route.dispatch同样是通过next()遍历stack中的每一个layer，然后执行layer.handle_request，也就是调用中间件函数。直到所有的中间件函数被执行完毕，整个路由处理结束。```

















