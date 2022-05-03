:::tip 声明 本笔记学习自阮一峰老师的es6入门教程，只用于学习交流。
:::

# let 和 const 命令

## let

基本用法 ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。不存在变量提升的弊端。

```js
{
    let a = 10;
    var b = 1;
}
a // ReferenceError: a is not defined.
b // 1
// 关于var的使用弊端, 请参考你不知道的js中的提升部分

```

在for循环中的差异

```js
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10

var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6
```

### 暂时性死区

在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

```js
if (true) {
    // TDZ开始
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError
    let tmp; // TDZ结束
    console.log(tmp); // undefined
    tmp = 123;
    console.log(tmp); // 123
}
```

### 不允许重复声明

let不允许在相同作用域内，重复声明同一个变量。

## 块级作用域

请参考[你不知道的JS的作用域](https://wentietie.github.io/JavaScript/youdontknowjs/part1.html#%E7%BC%96%E8%AF%91%E5%8E%9F%E7%90%86)

## const 命令

const声明一个只读的常量。一旦声明，常量的值就不能改变。

```js
const PI = 3.1415;
PI // 3.1415
PI = 3;
// TypeError: Assignment to constant variable.
```
