#### 基本类型和引用类型的区别
> 第三章中的基本类型（string，number， boolean等）和复杂类型（object）

1.通过变量可以拿到基本类型的值，按值访问；通过变量只能拿到引用类型的地址（引用）,按地址访问。

2.用变量赋值，引用类型相当于复制了一个值给变量；引用类型复制了一个地址给变量；

> 基本类型

    var a = 1;
    b = a;
    console.log(a); // 1
    console.log(b); // 1
    a = 2;
    console.log(a); // 2
    console.log(b); // 1
> 引用类型

    var a = new Object();
    a.name = 'aaa';
    var b = a;
    console.log(a.name); //aaa
    console.log(b.name); //aaa
    b.name = 'bbb'
    console.log(a.name); //bbb
    console.log(b.name); //bbb

3.参数传递，引用类型相当于复制了一个值给变量；引用类型复制了一个地址给变量； 表现和赋值操作一样。

4.```instanceof```用来检测引用类型（Object， Array， REGEXP..）

#### 执行环境和作用域
> 执行环境包括函数和变量对象，变量对象中存在在当前的环境中定义的变量。

> 函数具有独立的执行环境也就是说函数是具备作用域的。

> 嵌套执行的函数中的变量查找，是从内而外的，一层一层往外找，所谓的一层一层其实指的就是作用域（每一个函数都有自己的作用域）；这就形成了一个叫做“作用域链”的东西

> javascript 中不存在块级作用域， 注意：在ES6 中，在代码块中使用```let```定义的变量只在当前代码块有效，也就是说ES6通过let实现了块级作用域

#### 垃圾收集
标记清除和引用计数





