### 结构与布局

#### width自适应
1. ```width: fit-available``` 效果类似默认的块级元素，width占据全部父元素的width, 可用于给不具备此效果的元素设置此效果 
2. ```width: fit-content``` 效果类似inline-block，float,absolute,但是属于正常Dom流，可以使用margin：0 auto
3. ```width: min-content``` width为子元素中```最小宽度值```最大的元素的width
4. ```width: max-content``` width，假设容器的宽度足够大，其中子元素width最大的width，比如文字可以一直不换行。
 
#### 控制表格的width
默认的table是无法让完全开发者控制列的width的，所以很多时候，当内容不可控制的时候，使用table展现数据就有点不方便了。
1. ```table-layout: auto;``` 这是table默认的```自动表格布局算法```列的宽度依赖于内容来计算
2. ```table-layout: fixed;``` 使得table中的width属性生效，列宽不指定的时候，列宽平均分配；指定列宽，则直接显示，不会比例缩小.
#### 根据元素兄弟节点的数量来控制样式
难点在使用css选择器选中这些节点，计算兄弟节点数量，可以走迂回路线，其中first-child 和 nth-last-child(n) 这两个条件如果同时满足，则可以说明当前兄弟节点数为n，其中n可以是任何正整数；

first-child:nth-last-child(n)

所以： 当兄弟节点总数为n的时候，可以选中第一个节点

加上 ~ 选择符， ```li:first-child:nth-last-child(5), li:first-child:nth-last-child(5) ~ li {}``` 当节点数为n，可以选中所有的节点

```li:first-child:nth-last-child(n+4), li:first-child:nth-last-child(n+4) ~ li {}``` 当节点数大于4的时候，可以选中所有的节点

```li:first-child:nth-last-child(-n+6), li:first-child:nth-last-child(-n+6) ~ li {}``` 当节点数小于6的时候，可以选中所有的节点

```li:first-child:nth-last-child(n+2):nth-last-child(-n+6), li:first-child:nth-last-child(n+2):nth-last-child(-n+6) ~ li {}``` 当节点数为2-6的时候，可以选中所有的节点

#### 背景填充视口， 内容定宽（Calc 函数中 操作符 - 左右必须有空格）

    footer {
        max-width: 900px;
        height: 300px;
        padding: 1em calc(50% - 450px);
    } 
 
#### 垂直居中
1.绝对定位解决方案

当元素固定的时候：

    .content {
        width: 10rem;
        height: 4rem;
        position: absolute;
        top: calc(50% - 2rem);
        left: calc(50% - 5rem);
    }

当元素宽高不定的时候：

    .content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


2. 基于视口大长度单位vw和vh，用来替代以上的top和left

当元素固定的时候：

    .content {
        width: 10rem;
        height: 4rem;
        margin-top: calc(50vh - 2rem);
        margin-left: calc(50vw - 5rem);
    }

当元素宽高不定的时候：

    .content {
        position: absolute;
        margin-left: 50vw;
        margin-top: 50vh;
        transform: translate(-50%, -50%);
    }

3. 基于flex布局

    body {
        display: flex;
        min-height: 100vh;
    }

    .content {
        margin: auto;
    }
    
#### 紧贴底部的页脚
因为主体部分的内容不定，当内容很少的时候，页脚就会显示在上面
这里使用flex布局，主体部分flex为1， 页脚部分flex为0， 设置固定高度
 
    
    
    
