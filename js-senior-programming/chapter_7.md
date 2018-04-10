### 函数表达式
> 创建函数有两种方式 1.函数声明 2.函数表达式

函数声明特征之- 函数声明提升： 函数调用语句可以在声明之前，因为解释器在执行的时候，会首先检查所有的函数声明，并先执行函数声明的操作。
函数表达式： 即把一个匿名函数赋值给一个变量

#### 函数表达式在递归中的应用 - 递归函数，是一个函数通过名字调用自身的实现
    function factorial(num){
      if (num <= 1){
         return 1;
      } else {
         return num * factorial(num-1);
      }
    } 
以上代码的递归调用依赖于```factorial```这个变量名

    var anotherFactorial = factorial;
    factorial = null;
    alert(anotherFactorial(4)); //出错！
    
以上情况将会出现问题， 问题在于在内部调用```factorial(num-1)```的时候，factorial已经不再是一个函数了，
那么这里需要替换掉这个，最好有一个东西可以永远指向当前正在执行的的函数，这样的东西确实存在-```arguments.callee```就是一个指针，指向当前执行的函数

    function factorial(num){
        if (num <= 1){
            return 1;
        } else {
            return num * arguments.callee(num-1);
        }
    } 
这样就不会有问题了， 但是又出现一个问题： 在严格模式下，```arguments.callee```是不允许使用的。
命名函数表达式的应用：

    var factorial = (function f(num){
        if (num <= 1){
            return 1;
        } else {
            return num * f(num-1);
        }
    }); 
疑问：我的理解好像只是多了一个```f```变量，如果f被重新赋值，那么也是会出现问题的, 但是我发现这里的f好像并不处于作用域中，好像就是函数的指针

#### 匿名函数的应用-闭包-实现块级作用域
    var arr = []
    for(var i = 0; i < 10; i++) {
        (function(i){
            arr[i] = function(){
                console.log(i)
            }
        })(i)
    }
    arr[1]()

#### 私有变量的实现 - 闭包的应用
    function Person() {
        var name = 'hanmeimei';
        return {
            getName: function() {
                return name;
            },
            setName: function(value){
                name = value
            }
        }
    }
以上实例中name属性是一个比较私人的信息，不允许随便访问，所以讲它设置成私有的，提供了通道（特殊，安全）来使用它。

#### 注意： 闭包会占用很多内存，尽量少用，用的同时记得及时释放，这一章与其说是函数表达式，不如说是匿名函数在javascript的特性和应用
















