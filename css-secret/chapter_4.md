### 视觉效果
#### 单边投影
    .box {
        width: 100px;
        height: 100px;
        background: yellow;
        box-shadow: 0 5px 5px -3px black;
    }
> ```box-shadow```第四个参数设置阴影框的扩张offset，如果设置负值，那么四边将会同时减去这个offset

#### 对边投影
    .box {
        width: 100px;
        height: 100px;
        background: yellow;
        box-shadow: -5px 0px 5px -3px black, 5px 0px 5px -3px black;
    }
> 原理就是写两个单边投影，偏移方向不一致

#### 不规则投影
    .box {
        width: 100px;
        height: 100px;
        background: yellow;
        filter: drop-shadow(3px 3px 3px red);
    }
> ```drop-shadow```滤镜效果可实现
