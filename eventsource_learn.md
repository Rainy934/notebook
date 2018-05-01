## HTML5 EventSource 调研
### 应用场景
1. 监控系统： 监控温度，湿度， 后台硬件拔插等
2. 即时通信系统： 其他用户登录， 发送信息
3. 即时报价系统：后台数据内容发生变化
web 基于Http，可惜Http并不是一个持久连接的协议（信息传递完毕之后就会关闭连接），无法做到服务端主动向指定的客户端发送消息。那么我们可不可以不关闭连接呢？正常的一个http请求回复，必然是要关闭。但是这里有一种特殊情况，比较典型的就是``下载``了, 下载是一个http请求，和回复的过程，其中的数据传送是基于数据流（Stream）的，并不是数据包，当客户端发现是数据流的时候，它不会关闭连接。下面说的EventSource方式就是基于这种机制。

### EventSource是什么
>EventSource 接口用于接收服务器发送的事件。它通过HTTP连接到一个服务器，以text/event-stream 格式接收事件, 不关闭连接。

### EventSource兼容性
所有主流浏览器均支持服务器发送事件，除了 Internet Explorer。

### HTML5 api demo
index.html

    <!DOCTYPE html>
    <html>
    <head>
        <title>EventSource</title>
    </head>
    <body>
    <h1>测试EventSource</h1>

    <script type="text/javascript">

        var evtSource = new EventSource("/sendMessage");
        evtSource.onmessage = function (e) {
            console.log(e.data);
        }
        //成功与服务器发生连接时触发
        evtSource.onopen = function () {
            console.log("Server open")
        } 
        //出现错误时触发
        evtSource.onerror = function () {
            console.log("Error")
        } 

        //自定义事件
        evtSource.addEventListener("myEvent", function (e) {
            console.log(e.data);
        }, false)
    </script>

    </body>
    </html>


server.js


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



