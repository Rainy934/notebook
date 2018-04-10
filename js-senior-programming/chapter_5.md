### 引用类型
> 以下介绍几种ECMAScript 原生的几种引用类型

##### 引用类型创建的都是对象，创建方式有两种：1.构造函数方式 2.字面量方式

    var a = new Object(), arrayA = new Array() //构造函数方式
    var b = {
        name: 'bname'
    },
    var arrayB = ['1', '2'] // 字面量方式

一般来说，字面量方式更为直观，代码量较少, 但具体使用看具体场景。

##### 访问对象属性，方式同样有两种：1.通过```.```号访问 2.通过中括号和字符创或变量访问
    var a = {
        name: 'aname',
        age: 10,
        gender: 'female'
    }

    var name = a.name //通过点号访问

    var age = a['age'] //中括号加上字面量字符串

    var key = 'female'

    var gender = a[key] //中括号加上变量
其中中括号加上变量访问对象属性很有用
#### Object
作用： 用于创建一个空对象。
说明： 最普通的，也是最实用的引用类型。

#### Array
作用： 定义有序数组类型

特点：
1. 数组是有序的
2. 数组存放的数据是无类型的，类似```['1',0, false]```
3. 数组对象的```length```属性是可以编辑的，通过修改length的值可以增长数组长度，也可以删除从尾部开始的数组值（剪短）

##### 数组类型的检测
1. instanceof 操作符; e.g. ```[] instanceof Array```
2. Array.isArray(); e.g. ```Array.isArray([])```

##### 几个需要熟悉的数组实例方法
> split, join, push, pop, unshift, concat, splice, sort, filter

#### Date
作用：ECMAScript 时间日期对象的描述

特点：
1. 使用从1970/01/01（国际协调时间）到该日期的毫秒值保存日期

##### 几个需要熟悉的方法和注意的点
1. ```new Date()``` 生成一个到此时此刻的时间对象
2. 实例方法可以获取到很多具体的时间数据，e.g. 月份，小时etc.
3. 月份（0-11），星期（0-6）
4. 构造函数传入标准格式字符串('2017-02-03 12:01:01'或'2017/01/01 12:45:56'）作为参数实例化一个时间对象，苹果safari浏览器仅仅支持以```/```分隔的时间字符串

#### RegExp（正则表达式）
作用：用来匹配字符串， 具体用法请自行脑补

#### Function
作用: 实例化一个function

特点:
1. javascript 中的function 其实也是一个对象， 它的构造函数是Function
2. 函数名是一个变量(指针指向function实例)
3. javascript 中一般创建一个function（函数）都是通过函数声明语法来定义的， 不推荐使用Function生成一个function

##### 每个函数都有的两个方法```apply, call```， ES5新增的```bind```
这些方法都是在特定的作用域内调用方法， 实际上等于设置函数体内```this```的值

##### 基本包装类型```Boolean, String, Number```
按道理说，基本数据类型是不应该有方法和属性的，但是在javascript中```'hello'.split('')'```这样的方法是哪里来的呢？
以上的实际执行步骤：

    hello = new String('hello')
    hello.split('')
    hello = null
以上步骤对Boolean和Number也同样适用

##### 内置对象
> Global Math JSON etc.








