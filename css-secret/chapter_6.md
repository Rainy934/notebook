### 用户体验
#### 不借助js模拟复选框

    input[type="checkbox"] {
        position: absolute;
        clip: rect(0, 0, 0, 0);
    }

    input[type="checkbox"] + label::before {
        content: '\a0';
        display: inline-block;
        width: 0.8em;
        height: 0.8em;
        border-radius: 0.2em;
        background: #ccc;
        line-height: 0.6;
        padding-left: 0.1em;
        box-sizing: border-box;
        color: #fff;
    }

    input[type="checkbox"]:checked + label::before {
        content: '\2713';
        background: yellowgreen;
    }

其中状态的选择基于label的for属性，HTML如下：

    <input type="checkbox" id="upload" name="upload">
    <label for="upload">是否上传</label>

> 这里对于两种状态定义了复选框的样式，也可以定义其他的的样式，比如按钮的按下和弹起的样式

#### 列表滚动提示
    ul {
        border: solid red 1px;
        display: block;
        width: 100px;
        height: 100px;
        overflow: auto;
        background: radial-gradient(at top, #ccc, transparent 70%) no-repeat, radial-gradient(at bottom, #ccc, transparent 70%) center bottom no-repeat;
        background-size: 100% 15px;
        background-attachment: local;
    }
> ```background-attachment: local```让背景随内容滚动
