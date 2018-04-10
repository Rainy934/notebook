### 文本排版
#### 插入换行
    dd::after {
        content: '\A';
        white-space: pre;
    }
> ```\A``` 换行符， ```white-space: pre```定义当前元素内的空白字符保留格式，不合并

#### 文本行的斑马条纹
    .zebra {
        padding: 2em;
        line-height: 2em;
        background: linear-gradient(white 50%, #ccc 0);
        background-size: 100% 4em;
        overflow: auto;
        background-origin: content-box;
    }
> 这里利用渐变生成斑马条纹背景，条纹高度，严格限制为line-height的高度

#### 代码viewr
    .pre-code {
        margin: 1em 0;
        display: block;
        white-space: pre;
    }

html

    <!DOCTYPE html>
    <html>
    <head>
        <title>Test</title>
        <link rel="stylesheet" type="text/css" href="index.css">
    </head>
        <body>
            <div class="pre-code">
                &lt;!DOCTYPE html&gt;
                &lt;html&gt;
                &lt;head&gt;
                    &lt;title&gt;Test&lt;/title&gt;
                    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;index.css&quot;&gt;
                &lt;/head&gt;
                    &lt;body&gt;
                        &lt;div class=&quot;pre-code&quot;&gt;
                            
                        &lt;/div&gt;
                    &lt;/body&gt;
                &lt;/html&gt;
            </div>
        </body>
    </html>
