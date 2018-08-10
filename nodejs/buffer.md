### Buffer

> node 提供的用来处理二进制数据的Api

#### Buffer 构造

1. Buffer.from(array)
2. Buffer.from(string, encoding)
3. Buffer.from(buffer), 返回一个buffer副本
4. Buffer.alloc(size, fill, encoding)
5. Buffer.allocUnsafe(size), 未初始化，注意需要填充数据

#### Buffer 字符编码

> Buffer 可将二进制数据转成任何一种编码数据

    const buf = Buffer.from('hello world', 'ascii');

    // 输出 68656c6c6f20776f726c64
    console.log(buf.toString('hex'));

    // 输出 aGVsbG8gd29ybGQ=
    console.log(buf.toString('base64'));


#### Buffer 遍历
 > 支持····for of····遍历，支持buf.keys, buf.values, buf.entries 创建遍历器

    const buf = Buffer.from([1, 2, 3]);

    // Prints:
    //   1
    //   2
    //   3
    for (const b of buf) {
      console.log(b);
    }

#### Buffer 常用类方法
1. Buffer.byteLength(string) 检查字符创字节长度
2. Buffer.isBuffer(obj) 判断是否是Buffer 实例
3. Buffer.isEncoding(encoding) 如果 encoding 是一个支持的字符编码则返回 true
4. 