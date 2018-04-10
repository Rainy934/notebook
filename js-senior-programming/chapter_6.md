### 面向对象的程序设计
#### 理解对象
##### 属性类型
> 属性类型描述了一个对象的属性的行为和表现
1. configurable 描述属性是否可配置，是否能使用```Object.defineProperty()```
2. writable 描述了属性是否可改变，重新赋值
3. value 描述了属性被访问时返回的值
4. enumerable 描述了属性是否可以被遍历(枚举)到

示例如下：

    var a = {name: 'aname'}
    Object.defineProperty(a, 'nmae', {
        writable: false
    })
    a.name = 'bname'
    alert(a.name) // 'aname'

##### 访问器属性
> 访问其属性不包含数据值，包含setter和getter方法， 其实把它看做方法更好，一个set(), 一个get(), 只是使用方式和属性一样，是个特殊的属性，访问器属性只能通过Object.defineProperty()来定义

    var a = {name: 'aname'}
    Object.defineProperty(a, 'fullname', {
        get: function(){
            return 'AAAA ' + this.name
        },
        set: function(newValue) {
            this.name = newValue.slice(0, 4)
        }
    })
    a.name // 'aname'
    a.fullname // 'AAAA anmae'
    a.fullname = 'BBBB bbbb'
    a.name // 'BBBB'
    
##### 定义多个属性
> ```Object.defineProperties()```

    var a = {name: 'aname', fullname: 'AAAA aname'}
    Object.defineProperties(a, {
        name: {
            writable: false
        },
        fullname: {
            value: 'hahaha'
        }
    })
    
#### 创建对象的几种设计模式


#### 继承
> javascript的继承一般是基于原型链的继承，还有其他的几种变种的继承方式


