### 在HTML中使用javascript
#### <script> 标签
> 在Html文档中引入javascript是基于<script>标签的

#### 外部文件和内部嵌入
> javascript脚本程序单独一个文件，在html中通过script标签的src属性设置js文件路径

    <!DOCTYPE html>
    <html>
        <head>
            <title>HTML</title>
            <script type="text/javascript" src="index.js"></script>
        </head>
    <body>

    </body>
    </html>
    
> 在html的script标签中的javascript的脚本程序

    <!DOCTYPE html>
    <html>
        <head>
            <title>HTML</title>
        </head>
    <body>

    </body>
    <script type="text/javascript">
        var text = "hello world";
        document.write(text)
    </script>
    </html>
    
#### script标签的位置
> 位于<head>中， 此时在html dom元素被浏览器渲染之前，首先加载执行javascript程序

> 位于body 标签之后, 此时会首先渲染body，遇到script，则停止渲染dom，进行js的加载执行，完成之后继续DOM渲染

这就是浏览器加载网页的时候对js文件加载的特性--阻塞加载
