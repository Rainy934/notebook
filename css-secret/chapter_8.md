### 过渡与动画

#### 动态输入提示框
html

    <div class="input-block">
        <input type="text" name="username">
        <span class="callout">仅限输入文本..必填</span>
    </div>
css

    .input-block {
        position: relative;
    }

    .input-block input:focus + .callout {
        transform: translateY(1.4em);
        opacity: 1;
    }

    .callout {
        display: block;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(0);
        transition: .5s all;
        transition-timing-function: ease;
        z-index: -1;
    }
    
#### 打字效果
    @keyframes typing {
        from {
            width: 0;
        }
    }

    @keyframes caret {
        50% {
            border-color: transparent;
        }
    }

    h1 {
        display: inline-block;
        width: 8ch;
        border-right: 0.25em solid;
        animation: typing 5s steps(8), caret 1s infinite steps(1);
        overflow: hidden;
    }
    
#### 预览长图
    @keyframes show_img {
        to {
            background-position: 100% 0;
        }
    }

    .img {
        width: 150px;
        height: 150px;
        background: url(./long.jpg) no-repeat 0 0;
        animation: show_img 5s linear infinite;
        animation-play-state: paused;
    }

    .img:hover {
        animation-play-state: running;
    }



