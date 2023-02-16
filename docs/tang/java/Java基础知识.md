# 第一部分 Java 基础

## 1 Java语言概述

### 1.1 JDK 、JRE、JVM的关系

> JDK（Java Development Kit ）

即Java开发工具包。

JDK = JRE + Java开发工具（包括编译工具javac.exe、运行工具java.exe、文档工具javadoc.exe、打包工具jar.exe等）

> JRE（Java Runtime Environment ）

即Java运行时环境。

JRE = JVM + Java核心类库

>JDK 、JRE、JVM的关系

![image-20220907164605684](./images/Java系统学习-基础/image-20220907164605684.png)

## 2 基本语法

### 2.1 变量的分类

> 按照数据类型分

![image-20220907165317235](./images/Java系统学习-基础/image-20220907165317235.png)

- 基本数据类型

  | 类型    | 占用存储空间     | 表数范围                          | 备注                                                         |
  | ------- | ---------------- | --------------------------------- | ------------------------------------------------------------ |
  | byte    | 1字节=8bit位     | [-128, 127]                       |                                                              |
  | short   | 2字节            | [$-2^{15}$, $2^{15}-1$]           |                                                              |
  | int     | 4字节            | [$-2^{32}$, $2^{32}-1$]           |                                                              |
  | long    | 8字节            | [$-2^{64}$, $2^{64}-1$]           | 声明变量时，需要在后边加上==l==或==L==                       |
  | float   | 4字节            | [$-3.403E^{38}$, $3.403E^{38}$]   | 单精度，尾数可以精确到7位有效数字；<br />==数值范围比long还大== |
  | double  | 8字节            | [$-1.798E^{308}$, $1.798E^{308}$] | ==双精度（==默认的浮点型==）                                 |
  | char    | 2字节（1个字符） | --                                | 声明时，通常使一对==单引号==；<br />char c = '';//编译不通过 |
  | boolean | --               | --                                | 取值只能是true或false                                        |

- 引用数据类型

  - 类
  - 接口
  - 数组

> 按声明的位置的不同分

![image-20221019160618510](./images/Java系统学习-基础/image-20221019160618510.png)

==注：==二者在初始化值方面的异同：

- 同：都有声明周期
- 异：局部变量除形参外，需显示初始化

###  2.2   基本数据类型间的运算规则

==前提：==只讨论7种基本数据类型变量之前的计算，不包含boolean类型

- 自动类型提升

  **<span style="color:red">byte、char、short-->int-->long-->float-->double</span>**

  结论：

  - 容量小的数据类型的变量与容量大的做运算时，结果自动提升为容量大的数据类型的数据
  - 特别的，大概byte、char、short三种类型的变量做运算时，结果为int型

- 强制类型转换

  强制类型转换，==可能==会造成经度的损失

  `short s = 128; byte b = (byte)s`，b的值为==-128==，也是一种精度的损失

### 2.3 关于进制

| 进制     | 数值范围 | 写法                 | 备注            |
| -------- | -------- | -------------------- | --------------- |
| 二进制   | 0,1      | 以==0b==或==0B==开头 |                 |
| 十进制   | 0-9      |                      |                 |
| 八进制   | 0-7      | 以==0==开头          |                 |
| 十六进制 | 0-9及A-F | 以==0x==或==oX==开头 | A-F不区分大小写 |

> 二进制

计算机底层都是以==补码==的形式存储数据。

正数的原码、反码、补码都是一样的，负数的反码是除符号位，对原码各位取反，补码则为反码+1

### 2.4 ++与--

- 前++（前--）：先自增（减）1，再运算

  ```java
  int a = 10;
  int b = ++a;
  // 结果：a=11，b=11
  ```

- 后++（后--）：先运算，再自增（减）1

  ```java
  int a = 10;
  int b = a++;
  // 结果： a=11， b=10
  ```

==++和--不会改变数据类型==，如以下代码能正常运行：

```java
short s = 10;
s++;
// 结果： s
```

### 2.5 赋值运算符

`=`、`+=`、`-=`、`*=`、`/=`、`%=`

- ==+=、-=、*=、/=、%=不会改变数据类型==

  ```java
  short s = 10;
  s = s + 1; // 编译不通过
  s += 1; // 正确，s值为11，short类型
  
  int i = 1;
  i *= 0.1; // 正确，i值为0
  ```

- 与`++`相关的计算题

  ```java
  int n = 10;
  n += (n++) + (++n);
  // 上式可以等价写为：n = n + (n++) + (++n),==>n = 10 + 10 + 12=32
  ```

### 2.6 逻辑运算符

`&`、 `&&`、 `|`、 `||`、 `!`、 `^`

- `&`、 `&&`的对比

  `&`称==逻辑与==，`&&`称==短路与==

  - 相同点1：二者运算结果相同
  - 相同点2：当符号左边是true时，二者都会执行符号右边的运算
  - 不同点：当符号左边是false时，`&`会继续执行符号右边运算，`&&`不再执行符号右边的运算

- `|`、 `||`的对比

  `|`称==逻辑或==，`||`称==短路或==

  - 相同点1：二者运算结果相同
  - 相同点2：当符号左边是false时，二者都会执行符号右边的运算
  - 不同点：当符号左边是true时，`|`会继续执行符号右边运算，`||`不再执行符号右边的运算

==开发中推荐使用短路与、短路或==

### 2.7 位运算符

==位运算符操作的都是整型数据==

| 运算符 | 名称       | 细节                                                         | 备注                                  |
| ------ | ---------- | ------------------------------------------------------------ | ------------------------------------- |
| <<     | 左移运算符 | 空位补0，被移除的最高位丢弃                                  | 在一定范围内，每向左移1位，相当于 * 2 |
| >>     | 右移运算符 | 若最高位是0，右移后空位补0；<br />若最高位是1，右移后空位补1 | 在一定范围内，每向右移1位，相当于 / 2 |
| >>>    | 无符号右移 | 最高位无论是0或1，空位都补0                                  | 后边讲                                |
| &      | 与         | 每一位只要有0就是0                                           |                                       |
| \|     | 或         | 每一位只要有1就是1                                           |                                       |
| ^      | 异或       | 每一位只要不同就是1                                          | 公式：k = (k ^n)^n                    |
| ~      | 取反       | 包括符号位在内，每一位0变1，1变0                             |                                       |

> 面试题
>
> 最高效方式计算2 * 8？

答：`2 << 3`或 `8 << 1`

### 2.8 三元运算符

三元运算符的效率比if-else高。

### 2.9 Scanner类

> 作用

获取用户输入的变量

> 用法

```java
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    // 获取String类型变量
    String name = scanner.next();
    // 获取int类型变量
    int age = scanner.nextInt();
    // 获取double类型变量
    double weight = scanner.nextDouble();
    // 获取boolean类型变量
    boolean isMarried = scanner.nextBoolean();
    // 获取char类型变量
    String sex = scan.next();
    char sexChar = sex.charAt(0); // 获取索引值为0位置
}
```

### 2.10 switch-case

==注意事项：==

switch中的表达式，只能是一下6种数据类型之一：byte、short、char、int、枚举、String（JDK7之后）

### 2.11 break和continue

> 二者区别

==相同点：==二者后边不可以再写其他语句，编译报错

- break可以用在switch-case语句和循环语句中。continue只能用在循环语句中
- break是结束当前循环，continue是结束当次循环

> break和continue结束指定标识的循环

```java
label:for(int i = 0; i < 10; i++) {
    for(int j = 0; j < 5; j++) {
        ...
        break label;//结束指定标识的这一个循环
        //continue label;//结束指定标识的这一次循环
    }
}
```

> 其他

也可以使用==return==关键字结束循环

## 3 数组

> 数组的特点

- 有序性
- 存储空间连续
- 数组是引用类型变量
- 长度固定，不可更改，一旦初始化完成，数组长度就确定了

### 3.1 一维数组

> 声明和初始化

- 静态初始化：数组的声明赋值操作同时进行
- 动态初始化：先声明，再进行赋值操作

```java
// 静态初始化
String[] names = new String[]{"tom", "jan","steve"};
// 其他正确写法
String names2[] = new String[]{"tom", "jan","steve"};
String[] names3 = {"tom", "jan","steve"};

// 动态初始化
int[] ages = new int[3];
ages[0] = 15;
ages[1] = 16;
ages[2] = 15;
```

> 获取数组长度

```java
String[] names = new String[]{"tom", "jan","steve"};
System.out.println(names.length); // 3
```

> 数组的初始化值

- 数组元素是整型（byte、short、int、long）：0
- 数组元素是浮点型（float、double）：0.0
- ==数组元素是char型==：0或'\u0000'，而非'0'
- 数组元素是boolean型：false
- 数组元素为引用类型：null

> 关于数组的打印

- 打印char类型的数组变量：

  `char[] c = new char[]{'a', 'b', 'c'}; System.out.println(c)`，结果输出为`abc`

- 打印非char类型的数组变量：

  `int[] i = new int[]{1, 2, 3}; System.out.println(c)`，结果输出为`地址值`

==println方法有个专门针对参数是char类型数组的重载。==

![image-20221008152125720](./images/Java系统学习-基础/image-20221008152125720.png)

> 内存解析

- 内存简化结构

  ![image-20220916154544856](./images/Java系统学习-基础/image-20220916154544856.png)

- 一维数组内存举例说明

  ![image-20220916155016911](./images/Java系统学习-基础/image-20220916155016911.png)

### 3.2 多维数组

以二维数组为例

> 理解

可以看成是一维数组array1又作为另外一个一维数组array2的元素而存在。==其实，从数组底层的运行机制来看，没有多维数组。==

> 初始化

- 静态初始化
- 动态初始化

```java
// 静态初始化
int[][] arr1 = new int[][]{{1,2,3},{4,5},{8,9,10}};
// 其他正确写法
int arr2[][] = new int[][]{{1,2,3},{4,5},{8,9,10}};
int[] arr3[] = new int[][]{{1,2,3},{4,5},{8,9,10}};
int[][] arr4 = {{1,2,3},{4,5},{8,9,10}};

// 动态初始化
String[][] arr5 = new String[3][2];//3行2列
String[][] arr6 = new String[3][];
```

> 获取指定位置的元素

```java
int[][] arr1 = new int[][]{{1,2,3},{4,5},{8,9,10}};
System.out.println(arr1[0][1]); //输出2
```

> 获取数组的长度

```java
int[][] arr1 = new int[][]{{1,2,3},{4,5},{8,9,10}};
System.out.println(arr1.length); //输出3
```

> 初始化值

```java
int[][] arr1 = new int[4][5];
System.out.println(arr1[0]);//地址值
System.out.println(arr1[1][1]);//0

int[][] arr2 = new int[4][];
System.out.println(arr2[0]);//null
System.out.println(arr2[1][1]);//空指针异常

```

>内存解析

![image-20220916175452969](./images/Java系统学习-基础/image-20220916175452969.png)

### 3.3 数组的常见算法

#### 3.3.1 复制

```java
int[] arr1 = {2,3,5,7,11};
int[] arr2 = arr1; //这里只是地址值的赋值，arr2和arr1指向同一个地址
// 数组的复制
int[] arr3 = new int[arr1.length];
for(int i = 0; i < arr3.length; i++) {
    arr3[i] = arr1[i];
}
```

#### 3.3.2 反转

```java
/**
* 数组反转 方法一
*/
private void reverse1() {
    int[] arr1 = {2,3,5,7,11,13,17,19};
    for (int i = 0; i < arr1.length / 2; i++) {
        int temp = arr1[i];
        arr1[i] = arr1[arr1.length - 1 - i];
        arr1[arr1.length - 1 - i] = temp;
    }
    for (int i = 0; i < arr1.length; i++) {
        System.out.print(arr1[i] + "\t");
    }
}

/**
 * 数组反转 方法二
 */
private void reverse2() {
    int[] arr1 = {2,3,5,7,11,13,17,19};
    for (int i = 0, j = arr1.length - 1; i < j; i++, j--) {
        int temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
    }
    for (int i = 0; i < arr1.length; i++) {
        System.out.print(arr1[i] + "\t");
    }
}
```

#### 3.3.3 线性查找

> 理解

从前往后依次查找。

#### 3.3.4 二分法查找

> 前提

数组是按照由小到大或者由大到小的顺序存储的。

> 代码

```java
/**
* 二分查找
* 本题中数组按由小到大的顺序进行存储
*/
private static void findWithBinary() {
    int[] arr1 = {2,3,5,7,11,13,17,19};
    int dest = 13;
    boolean flag = false;
    int head = 0, end = arr1.length - 1;

    while (head <= end) {
        int middle = (end + head) / 2;
        if(arr1[middle] == dest) {
            System.out.println("找到了指定元素，下标为："+middle);
            flag =  true;
            break;
        } else if (arr1[middle] > dest) {
            end = middle - 1;
        } else {
            head = middle + 1;
        }
    }

    if (!flag) {
        System.out.println("很遗憾，指定元素不存在哦");
    }
}
```

#### 3.3.5 排序算法概述

> 衡量排序算法的优劣

- ==时间复杂度==：分析关键字的比较次数和记录的移动次数
- ==空间复杂度==：分析算法中需要多少辅助内存
- ==稳定性==：若两个记录A和B的关键字值相等，但排序后A、B的先后次序保持不变，则称这种算法是稳定的

> 排序算法分类

- ==内部排序==：整个排序过程不需要借助外部存储器（如磁盘等），所有排序操作都在内存中完成。
- ==外部排序==：参与排序的数据非常多，数据量非常大，计算机无法把整个排序过程放在内存中完成，必须借助外部存储器（如磁盘）等。外部排序最常见的算法有<span style="color:red">多路归并排序</span>。可以认为外部排序是由多次内部排序组成的。

> 十大排序算法

- ==选择排序==

  将待排序的元素分为已排序（初始为空）和未排序两组，依次将未排序的元素中值最小的元素放入已排序的组中。

  - ==简单选择排序==
  - ==堆排序==

- 交换排序

  - 冒泡排序
  - 快速排序

- 插入排序

  - 直接插入排序
  - 折半插入排序
  - 希尔排序

- 归并排序

- 桶式排序

- 基数排序

> 算法5大特性

- ==输入==：有0个或多个输入数据，这些输入必须有清楚的描述和定义
- ==输出==：至少有1个或多个输出结果，不可以没有输出
- ==有穷性（有限性）==：算法可以在有限的步骤之后会自动结束而不是无线循环，并且每一个步骤可以在可接受的时间内完成
- ==确定性（明确性）==：算法中的每一步都有确定的含义，不会出现二义性
- ==可行性（有效性）==：算法的每一步骤都是清楚且可行的，能让用户用纸笔计算而求出答案

#### 3.3.6 简单选择排序

> 基本过程

- 在一组元素R[i]到R[n]中选择最小的元素
- 如果他不是这组元素中的第一个元素，则将其与该组元素中的第一个元素交换
- 除去具有最小关键字的元素，在剩下的元素中重复以上两步骤，直到元素只有一个为止

> 效率分析

- <span style="color:red">比较次数</span>：$(n-1)+(n-2)+...+2+1=n(n-1)/2$

  无论初始状况如何，在第i趟排序中选择最小元素的时候，都需要做$(n-i)$次比较

- <span style="color:red">交换次数</span>：

  - 最好情况：0次

    序列恰好为正序时，需要交换0次

  - 最差情况：${(n-1)}$次

    如将数组[${5,1,2,3,4}$]按照有小到大的顺序排列，需要移动4次

综上，简单选择排序的==时间复杂度为$O(n^{2})$==

>稳定性

==不稳定==

由于在直接选择排序中存在不相邻元素的交换，因此它是一个不稳定的排序方法。

比如给定数组[$3,7,3',2,1$]，按照有小到大的顺序排列后的结果为[$1,2,3',3,7$]

>示例代码

```java
int[] arr = {49,38,65,97,76,13,24,49};
// 开始排序
// 说明1：循环条件是 i < arr.length - 1，而不是i < arr.length的原因：最后一个数无需和自身进行比较、交换
for (int i = 0; i < arr.length - 1; i++) {
    int index = i; // 记录最小值的下标
    // 循环找到数组中的最小值对应的下标
    for (int j = i + 1; j < arr.length; j++) {
        if (arr[index] > arr[j]) {
            index = j;
        }
    }
    // 将最小值和无序数组中的第一个元素进行交换（当最小值下标和当前下标不相等的时候再交换）
    if (i != index) {
        int temp = arr[i];
    	arr[i] = arr[index];
    	arr[index] = temp;
    }
}
// 排序完成
// 打印
for (int i = 0; i < arr.length; i++) {
    System.out.print(arr[i]+"\t");
}
```

#### 3.3.7 堆排序

#### 3.3.8 冒泡排序

> 基本思想

对待排序序列从前往后，依次比较相邻元素排序码，如果逆序则交换，使排序码较大的元素逐渐从前往后移动。

>效率分析

- <span style="color:red">比较次数</span>：

  - 最好情况：$n-1$次

    此时待排序序列恰好是按照要求的顺序进行排序

  - 最坏情况：$(n-1)+(n-2)+...+2+1=n(n-1)/2$次

    此时待排序序列恰好是按照要求的顺序的逆序进行排序

- <span style="color:red">交换次数</span>：

  - 最好情况：0次

    此时待排序序列恰好是按照要求的顺序进行排序

  - 最坏情况：$(n-1)+(n-2)+...+2+1=n(n-1)/2$

> 稳定性

> 示例代码

```java
int[] arr = {49,38,65,97,76,13,27,49};
// 开始排序
// 说明1：循环条件是 i < arr.length - 1，而不是i < arr.length的原因：最后一个数无需和自身进行比较、交换
for (int i = 0; i < arr.length - 1; i++) {
    // 说明2：循环条件是arr.length - 1 - i的原因：每完成一次排序，最后（i+1）个数都已完成排序，不需要再进行比较、交换
    for (int j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j+1]) {
            int temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
// 排序完成
// 打印
for (int i = 0; i < arr.length; i++) {
    System.out.print(arr[i]+"\t");
}
```



#### 3.3.9 快速排序

#### 3.3.10 插入排序

##### 3.3.10.1 直接插入排序

##### 3.3.10.2 折半插入排序

#### 3.3.12 希尔排序

#### 3.3.13 归并排序

#### 3.3.14 桶式排序

#### 3.3.15 基数排序

### 3.4 Arrays工具类的使用

| 方法                                             | 作用                                     | 备注                                               |
| ------------------------------------------------ | ---------------------------------------- | -------------------------------------------------- |
| Arrays.equals(Object[] a, Object[] a2)           | 判读两个数组中的元素是否全相等           | 全相等，返回true                                   |
| Arrays.toString(Object[] a)                      | 获取数组中的元素信息                     | 数组元素之间用","分隔，用"[]"包裹                  |
| Arrays.fill(Object[] a, Object val)              | 将指定数值（val）填充到数组中            | 无返回值                                           |
| Arrays.sort(Object[] a)                          | 对数组进行正序排序                       | 排序完成后，原数组发生改变                         |
| Arrays.sort(Object[] a, Comparator<? super T> c) | 对数组排序，顺序由Comparator构造函数决定 | 基本数据类型不可使用该方法，但对应的封装类型可使用 |
| Arrays.binarySearch(int[] a, int key)            | 对排序后的数组进行二分法查找             | 数组必须是已排序好的；返回值小于0表示未找到        |

### 3.5 数组中的常见异常

| 异常                           | 描述             | 备注                                                         |
| ------------------------------ | ---------------- | ------------------------------------------------------------ |
| ArrayIndexOutOfBoundsException | 数组下标越界异常 | 下标小于0也叫数组下标越界                                    |
| NullPointerException           | 空指针异常       | // 情况一：<br />int[] arr4 = {49,38,65,97,76,13,27,49};<br /> arr4 = null;<br /> System.out.println(arr4[1]); // 空指针异常<br />// 情况二：<br />int[][] arr = new int[4][]; <br />System.out.println(arr[0][0]);// 空指针异常 |

## 4 面向对象编程（上）

### 4.1 面向过程与面向对象

> 面向过程POP与面向对象OOP

- 面向过程：强调的是功能行为，以函数为最小单位，考虑怎么做。
- 面向对象：将功能封装进对象，强调具备了功能的对象，以类/对象为最小单位，考虑谁来做。

> 面向对象三大特征

- 继承
- 封装
- 多态

### 4.2 内存解析

![image-20220922104714735](./images/Java系统学习-基础/image-20220922104714735.png)

- ==堆==：存放<span style="color: red">对象实例</span>

  所有的对象实例和数组都要在堆上分配（Java虚拟机规范中如此描述）

- ==栈==：存放<span style="color: red">局部变量</span>等。

  局部变量表存放了编译期可知长度的各种基本数据类型、对象引用类型（reference类型，值为对象在堆内的首地址）。方法执行完，自动释放。

  通常所说的栈，是指虚拟机栈。

- ==方法区==：存放<span style="color: red">已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码</span>等数据

### 4.3 属性和局部变量的对比

> 相同点

- 定义变量的格式相同：数据类型 变量名 = 变量值
- 都是先声明，后使用
- 变量都有其对应的作用域

> 不同点

- 在类中声明的位置不同
  - 属性：直接定义在类的一对{}中
  - 局部变量：声明在方法内、方法形参、代码块内、构造器形参、构造器内部的变量
- 关于权限修饰符的不同
  - 属性：可以在声明属性时，指明其权限
  - 局部变量：不可以使用权限修饰符
- 默认初始化值的问题
  - 属性：类的属性，根据其类型，都有默认初始化值
    - 整型（byte、short、int、long）：0
    - 浮点型（float、double）：0.0
    - 字符型（char）：0 或 '\u0000'
    - 布尔型（boolean）：false
    - 引用数据类型：null
  - 局部变量：没有初始化值
- 非static的变量/属性在内存中加载的位置不同
  - 属性：存放在堆中
  - 变量：存放在栈空间中

### 4.4 匿名对象

> 理解

new出来的对象没有显示的赋值给一个变量。如：

```java
new Phone().sendEmail("我是通过匿名对象调用的");
```

> 特点

匿名对象只能使用一次。

### 4.5 方法

#### 4.5.1 方法的重载

> 定义

同一个类中，允许有一个以上的同名方法，只要它们的参数类型或者参数个数不同即可。

```java
class Test {
    private void getSum(int i, int j){...}
    private void getSum(int i, String s) {...}
    private void getSum(String s, int i) {...}
}
```

#### 4.5.2 可变个数的形参

==jdk5.0新特性==

> 具体使用

- 可变个数形参的格式： `数据类型 ... 变量名`

- 当调用可变个数形参的方法时，传入的参数个数可以是0个，1个，2个，...

  ```java
  public class Partise {
  
      public static void main(String[] args) {
          Partise partise = new Partise();
          partise.show("hello"); // 输出show(String)。如果注释了show(String)方法，也不会报错，会去调用show(String ... strs)方法
          partise.show("hello", "world"); // 输出show(String ... strs)
          partise.show(); // 输出show(String ... strs)
      }
  
      public void show(String s) {
          System.out.println("show(String)");
      }
  
      public void show(String ... strs) {
          System.out.println("show(String ... strs)");
      }
  }
  ```

> 说明

- 可变个数形参的方法与本类中方法名相同、形参不同的方法之间构成重载。

- 可变个数形参的方法与本类中方法名相同、形参类型也相同的数组之间不构成重载，二者不能共存。

  ![image-20220922152403926](./images/Java系统学习-基础/image-20220922152403926.png)

- 可变个数形参的方法中，==可变形参必须声明在末尾，且最多只能声明一个可变形参==

#### 4.5.3 方法形参的传递机制

==值传递机制==（不是引用类型传递机制）

- 如果参数是<span style="color: red">基本数据类型</span>，实参传递给形参的是实参的真实存储的<span style="color: red">数据值</span>。
- 如果参数是<span style="color: red">引用数据类型</span>，实参传递给形参的是实参存储数据的<span style="color: red">地址值</span>（包含变量的数据类型）。

==练习题：==

```java
public class Practise {

    public static void main(String[] args) {
        Practise p = new Practise();
        p.first();
    }

    public void first() {
        int i = 5;
        Value v  = new Value();
        v.i = 25;
        second(v, i);
        System.out.println(v.i + " " +i); // 输出 20 5
    }

    public void second(Value v, int i) {
        i = 0;
        v.i = 20;
        Value val = new Value();
        v = val;
        System.out.println(v.i + " " +i); // 输出 15 0
    }

    class Value {
        int i = 15;
    }
    
}
```

#### 4.5.4 递归方法

### 4.6 OOP特征一：封装

#### 4.6.1 封装性的体现

- 属性私有化，同时提供公共的方法来获取和设置属性
- 不对外暴露私有方法
- 单例模式

#### 4.6.2 权限修饰符

==封装性的体现，需要权限修饰符来配合。==

> 权限修饰符及其访问权限

| 修饰符    | 类内部 | 同一个包 | 不同包的子类 | 同一个工程 |
| --------- | ------ | -------- | ------------ | ---------- |
| private   | ✔      |          |              |            |
| （缺省）  | ✔      | ✔        |              |            |
| protected | ✔      | ✔        | ✔            |            |
| public    | ✔      | ✔        | ✔            | ✔          |

> 特别说明

- class（外部类）的权限修饰符只可以用public和缺省
  - public类可以在任意地方被访问
  - 缺省类只可以被同一个包内部的类访问

### 4.7 构造器

> 特点

- 名称和类相同
- 不声明返回值
- 不能被static、final、synchronized、abstract、native修饰
- 不能有return语句

> 说明

- 如果没有显示的定义，系统默认提供一个无参构造器（默认构造器的权限和类保持一致）
- 语法：`权限修饰符 类名(形参列表){}`
- 一个类中定义的多个构造器，彼此构成重载
- 一旦显示的定义了类的构造器没系统就不会再提供默认的构造器

> 作用

- 创建对象
- 给对象进行初始化

> 属性赋值的顺序

默认初始化 -> 显示初始化 -> 构造器中赋值 -> 通过“对象.方法”或“对象.属性”的方式赋值

> 通过this调用构造器

- 使用`this(形参列表)`方式，调用本类中指定的其他构造器
- 构造器中不能通过`this(形参列表)`方式调用自己
- 如果一个类中有n个构造器，则最多有n-1个构造器使用了`this(形参列表)`
- `this(形参列表)`必须<span style="color: red">声明在构造器的首行</span>
- 构造器内部，最多只能声明一个`this(形参列表)`，来调用其他构造器

> 通过super调用构造器

- 在子类的构造器中通过`super(形参列表)`显示调用父类的构造器
- `super(形参列表)`的使用必须在子类构造器的首行
- `super(形参列表)`与`this(形参列表)`只能二选一，不可同时出现
- 在构造器首行，没有`super(形参列表)`或`this(形参列表)`，则默认调用的是**父类中的空参构造器**
- 在类的多个构造器中，至少有一个类的构造器中使用了`super(形参列表)`，调用父类构造器

### 4.8 JavaBean

> 定义

JavaBean是Java语言编写的可重用组件

> JavaBean的特点

- 类是公共的
- 有一个无参的公共的构造器
- 有属性，且有对应的get、set方法

### 4.9 UML类图

![image-20221012165346937](./images/Java系统学习-基础/image-20221012165346937.png)

### 4.10 package和import关键字

> 一些知识的补充

- 如果使用的类或接口是`java.lang`包下定义的，或者是`本包`下定义的，则可省略`import`结构

- import `xxx.*`时，只能导入本包下的全部结构。当使用`xxx子包`下的结构时，仍需要import

- `import static`导入指定类或接口中的静态结构（属性或方法）

  - 举例：

    ```java
    ...
    import static java.lang.System.*;
    ...
    public static void main(String[] args) {
        out.println("Hello World！")
    }
    ```

    

## 5 面向对象编程（中）

### 5.1 OOP特征二：继承

> 使用继承的好处

- 减少了代码的冗余，提高了代码的复用性
- 便于功能的扩展
- 为之后多态的使用，提供了前提

> 说明

一旦子类继承了父类，子类就获取到了父类所有的属性和方法。

特别的，父类中声明为private的属性或方法，子类继承父类之后，仍然认为获取了父类中私有的结构。只是因为封装性的影响，使得子类不能直接调用父类的结构而已。

> java.lang.Object类

- 所有的java类都直接或间接的继承于java.lang.Object类

### 5.2 方法的重写

> 定义

在子类中可以根据需要，对从父类继承来的方法进行改造，也称为方法的<span style="color: red">覆盖、重置</span>。在程序执行时，子类的方法将覆盖父类的方法。

> 规则

- 子类重写的方法必须和父类被重写的方法具有<span style="color: red">相同的方法名、参数列表</span>
- 子类重写的方法的**返回值类型**<span style="color: red">不能大于</span>父类被重写方法的返回值类型
  - 父类被重写的方法的返回值是<span style="color: red">void</span>，则子类重写时返回值也只能是<span style="color: red">void</span>
  - 父类被重写的方法的返回值是<span style="color: red">A类</span>，则子类重写时返回值可以是<span style="color: red">A类或者A类的子类</span>
  - 父类被重写的方法的返回值是<span style="color: red">基本数据类型</span>，则子类重写时返回值必须是<span style="color: red">相同的基本数据类型</span>
- 子类重写的方法使用的**访问权限**<span style="color: red">不能小于</span>父类被重写的访问权限
  - 子类不能重写父类的private方法
- 子类方法抛出的**异常**<span style="color: red">不能大于</span>父类被重写方法的异常

> 注意

方法的重写针对的是<span style="color: red">非static方法</span>。因为<span style="color: red">static方法是属于类的</span>，子类无法覆盖父类方法。

### 5.3 子类对象实例化过程

> 从结果来看（继承性）

子类继承父类以后，就获取了父类中声明的属性和方法。

创建子类的对象，在堆空间中，就会加载所有父类中声明的属性。

> 从过程看

当我们通过子类的构造器创建子类对象时，我们一定会直接或间接的调用父类的构造器，进而调用父类的父类的构造器，直到调用了java.lang.Object类中空参构造器为止。正因为加载过所有父类的结构，所以才可以看到内存中有父类的结构，子类对象才可调用。

说明：虽然创建子类对象时，调用了父类构造器，但是自始至终就创建一个对象，即为new的子类对象。

### 5.4 OOP特征三： 多态

> 理解多态性

多态性可以理解为一个事物的多种形态

> 什么是多态性

对象的多态性：父类的引用指向子类的对象（或子类的对象赋给父类的引用）

```java
class Person {
    private String name;
    
    public void eat() {
        System.out.print("Person Eat")
    }
}

class Man extends Person {
    private boolean isSmoking;
    
    @Override
     public void eat() {
        System.out.print("Man Eat")
    }
    
    public void earn() {
        System.out.print("Man Earn");
    }
}

class Test {
    public static void main(String[] args) {
        Person p = new Man();// 此为多态
    }
}
```

> 多态的使用（即虚拟方法的使用）

有了对象的多态性后，我们在**编译期**，只能调用父类中声明的方法。在**运行时**，实际执行的是子类重写的方法。

总结：编译，看左边；运行，看右边

```java
class Test {
    public static void main(String[] args) {
        Person p = new Man();// 此为多态
        p.eat(); // 此为多态的使用（控制台输出的是【Man Eat】）
        // p.earn(); // 编译报错，找不到方法（p只能调用Person中声明的方法）
    }
}
```

> 多态使用的前提

- 有类的继承关系
- 有方法的重写

> 说明 

- 对象的多态性，只适用于方法，不适用于属性

### 5.5 Object类的使用

> 属性

无

> 方法

- equals()：对象比较
  - 重写原则
    - ==对称性==：如果x.equlas(y)返回true，那么y.equlas(x)返回的也应该是true
    - ==自反性==：x.equlas(x)必须是true
    - ==传递性==：x.equlas(y)返回true，y.equlas(z)返回是true，那么x.equlas(x)也应该是true
    - ==一致性==：如果x.equlas(y)返回true，只要x，y值不变，不管重复比较多少次，结果永远是true
    - x.equlas(null)永远返回false
    - x.equlas(和x不同类型的对象)永远返回false
- toString()：将对象转为字符串
  - 当输出一个对象的引用时，实际就是调用当前对象的toString()
  - Object类中toString()返回的是`实体类名（getClass().getName()) + "@" + 对象的hashCode(Integer.toHexString(hashCode()))`
  - String、Date、File、包装类都重写了Object的toString()方法，返回的是各自的“实体内容”
- getClass()
- hashCode()：获取Hash码
- clone()
- finalize()
- wait()
- notify()
- notifyAll()

> 构造器

只有一个空参构造器

### 5.6 包装类的使用

> 包装类有哪些

`Byte`、`Short`、`Integer`、`Long`、`Float`、`Double`、`Boolean`、`Character`

> 装箱

==基本数据类型 ---> 包装类==

- 数值型的（Byte、Short、Integer、Long、Float、Double）举例：

  ```java
  int num = 10;
  Integer iNum = new Integer(num);
  Float fNum = new Float(12.3);
  Double dNum = new Double("12.3");
  // 以下代码运行会报错
  Integer iNum2 = new Integer("123abc");
  ```

- Boolean额外说明：

  ```java
  Boolean b1 = new Boolean(true);//b1为true
  Boolean b2 = new Boolean("true");//b2为true
  Boolean b3 = new Boolean("TruE");//b3为true。转换时忽略大小写了
  Boolean b4 = new Boolean("true123");//不会抛异常，b4为false
  Boolean b5;
  System.out.println(b5);//输出null
  ```

> 拆箱

==包装类 ---> 基本数据类型==

调用包装类Xxx的xxxValue()方法，如：

```java
Float fNum = new Float(12.3);
float f = fNum.floatValue();
```

>自动装箱与自动拆箱

==JDK 5.0新特性==

```java
// 自动装箱
int num = 2;
Integer iNum = num;

// 自动拆箱
int num2 = iNum;
```

> 基本数据类型、包装类 ---> String

因基本数据类型可以自动装箱，包装类可以自动拆箱，所以二者在转为String时，所用到的方法都是一样的。

- 连接运算

  ```java
  int num = 1;
  String str = num + "";
  ```

- 调用String重载的`valueOf(Xxx xxx)`

  ```java
  float f = 12.3f;
  String str = String.valueOf(f1);
  ```

> String ---> 基本数据类型、包装类

==不能强转==，原因是能够强转的必须是子父类关系的。基本数据类型和包装类都与String不存在子父类关系。

- 调用`parserXxx(String s)`方法

  ```java
  String str = "123";
  // 可能会报NumberFormatException
  int i = Integer.parseInteger(str);
  
  String str2 = "true1";
  // 不会报NumberFormatException
  Boolean b = Boolean.parseBoolean(str2);// b值为false
  ```

- 特别的，包装类可以调用自己的`toString()`方法

  ```java
  Integer i = 10;
  String str = i.toString();
  ```

  

### 5.7 单元测试

> 使用步骤

- 引入JUnit 4

- 创建Java类，进行单元测试

  Java类的要求：此类是public的；此类须提供公共的无参构造器

- 在上述类中声明单元测试方法

  此单元测试方法的要求：方法的权限是public；没有返回值；没有形参

- 单元测试方法上需要使用注解@Test，并导入org.junit.Test

- 运行：双击方法名->右键，选择Run...或者Debug...

- 执行结果：

  - 绿条：执行结果没有异常
  - 红条：执行结果出现异常

## 6 面向对象编程（下）

### 6.1 关键字static

==static可以用来修饰：属性、方法、代码块、内部类==

> static修饰属性：静态变量

- 属性，按是否使用static修饰，又分为：	

  - 静态属性 （类变量）：我们创建了类的多个对象，多个对象共享同一个静态变量。当对某一个对象修改静态变量时，会导致当其他对象调用该属性时，获得的是被修改过之后的值。
  - 非静态属性（实例变量）：我们创建了类的多个对象，每一个对象都独立的拥有一套类中的非静态属性。当修改其中一个对象中的非静态属性时，不会对其他对象的同一个属性值修改。

- static修饰属性的其他说明：

  - 静态变量随着类的加载而加载，可以通过`类.静态变量`的方式使用。

  - 静态变量的加载==早于==对象的创建。

  - 由于类只会加载一次，所以静态变量在内存中野只会存在一份，存在于==方法区的静态域==中。

  - 调用方法

    |      | 类变量（静态属性） | 实例变量（非静态属性） |
    | ---- | ------------------ | ---------------------- |
    | 类   | ✔                  | ✘                      |
    | 对象 | ✔                  | ✔                      |

> static修饰方法（静态方法）

- 随着类的加载而加载，可以通过`类.静态方法(形参列表)`的方式调用

- 调用方法

  |      | 静态方法 | 非静态方法 |
  | ---- | -------- | ---------- |
  | 类   | ✔        | ✘          |
  | 对象 | ✔        | ✔          |

- 静态方法==不可以==调用非静态方法或属性；非静态方法中，既可以调用静态方法或属性又可以调用非静态方法或属性

> static注意点

- 静态方法中，不能使用this和super关键字
- 关于静态属性和静态方法的使用，可以从声明周期的角度去理解

> static使用场景

- static属性：当属性可以被多个对象所共享，不会随着对象的不同而不同
- static方法：
  - 操作静态属性的方法，通常被设置为static的
  - 工具类的方法，习惯上声明为static的。如Math、Arrays、Collections等工具类中的方法

### 6.2 static应用之单例设计模式

>设计模型

- 定义：在大量的实践中总结和理论化之后优选的代码结构、编程风格，以及解决问题的思考方式。

> 设计模式分类（共23个）

- 创造型：工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式
- 结构型：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式
- 行为型：策略模式、模板方法模式、观察者模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式

> 单例模式

- 定义：采取一定的方法，保证在整个软件系统中，某个类只能存在一个对象实例，并且该类只提供一个取得其对象实例的方法。

- 实现思路：

  - ==将类的构造器的访问权限设置为private==
  - ==在该类中声明一个静态方法，用以返回类内部创建的对象==（原因：构造器私有，外部无法获取对象实例，但类内部可以产生对象实例，所以只能声明一个公有的静态方法以返回类内部创建的对象）
  - ==该类的变量也必须是静态的==（原因：静态方法只能访问类的静态成员变量）

- 实现方式

  - 饿汉式

    ```java
    package com.tth.learn.basic.grammer.Singleton;
    
    /**
     * 单例模式的饿汉式实现
     * @Author tth
     * @Date 2022/10/20 10:25
     */
    public class Singleton1 {
    
        public static void main(String[] args) {
            Bank bank1 = Bank.getInstance();
            Bank bank2 = Bank.getInstance();
            System.out.println(bank1 == bank2); // 返回true
        }
    }
    
    class Bank {
        // 1.私有化构造器
        private Bank() {}
    
        // 2.内部创建类对象，并声明为静态的
        private static Bank instance = new Bank();
    
        // 3.创建静态公共方法，返回对象实例
        public static Bank getInstance() {
            return instance;
        }
    }
    ```

  - 懒汉式

    ```java
    package com.tth.learn.basic.grammer.Singleton;
    
    /**
     * 单例模式的懒汉式实现
     * @Author tth
     * @Date 2022/10/20 10:30
     */
    public class Singleton2 {
        public static void main(String[] args) {
            Order order1 = Order.getInstance();
            Order order2 = Order.getInstance();
            System.out.println(order1 == order2); //返回true
        }
    }
    
    class Order {
    
        // 1.私有化构造器
        private Order() {}
    
        // 2.声明静态的当前类的对象，没有初始化
        private static Order instance = null;
    
        // 3.创建静态公共方法，返回对象实例
        public static Order getInstance() {
            if (null == instance) {
                instance = new Order();
            }
            return instance;
        }
    }
    ```

- 区分饿汉式和懒汉式

  - 饿汉式：
    - 好处：天生线程安全
    - 坏处：对象加载时间过长
  - 懒汉式：
    - 好处：延迟对象的创建
    - 坏处：以上写法是线程不安全的（到多线程内容的时候，再修改）

>单例模式的优点

减少内存的开销

> 单例模式举例

- java.lang.Runtime（饿汉式）

> 单例模式应用场景

- 网站的计数器
- 应用程序的日志应用
- 数据库连接池
- 读取配置文件的类
- Application
- Windows的Task Manager（任务管理器）
- Windows的Recycle Bin（回收站）

### 6.3 理解main方法的语法

- main()方法是程序的入口

- main()也是一个普通的静态方法

  可以通过`类名.main(参数)`的方式被调用

- main()可以作为和控制台交互的方式（之前使用的是Scanner）

  - 使用idea给main()方法传参

    - 编写代码，打印main()方法接收的参数：

      ```java
      public class Practise {
          public static void main(String[] args) {
              for (int i = 0; i < args.length; i++) {
                  System.out.println(args[i]);
              }
          }
      }
      ```

    - 设置参数：

      ![image-20221020150736069](./images/Java系统学习-基础/image-20221020150736069.png)

    - 右键运行，控制台即可输出参数：

      ![image-20221020150901044](./images/Java系统学习-基础/image-20221020150901044.png)

  - 使用cmd给main()方法传参：

    - 代码如上

    - 运行

      ![image-20221020152327428](./images/Java系统学习-基础/image-20221020152327428.png)

### 6.4 类的成员之四：代码块

> 作用

用来初始化类、对象

> 修饰符

代码块只能使用static来修饰

> 分类

- 静态代码块
  - 随着类的加载而执行，且只执行一次
  - 作用：初始化类的信息
  - 静态代码块的执行时间先与非静态代码块的执行时间
  - 静态代码块之间的执行顺序是按照代码编写的先后顺序执行
  - 不可以调用非静态结构（属性和方法）
- 非静态代码块
  - 随着对象的创建而执行，且没创建一个对象，就会执行一次
  - 作用：可以在创建对象时，对对象的属性等进行初始化
  - 非静态代码块之间的执行顺序是按照代码编写的先后顺序执行

> 属性赋值的顺序

默认初始化 -> 显示初始化/代码块-> 构造器中赋值 -> 通过“对象.方法”或“对象.属性”的方式赋值

```java
// 此时创建的Order对象的orderId为2
class Order {
    int orderId = 1;
    {
        orderId = 2;
    }
}

// 此时代码不报错，创建的Order2对象的orderId为1
class Order2 {
    {
        orderId = 2;
    }
    int orderId = 1;
}
```

### 6.4 关键字final

> 作用

可以用来修饰：

- 类：==final修饰的类不能被其他类所继承。==举例：String类、System类、StringBuffer类

- 方法：==final修饰的方法不能被子类重写。==举例：Object.getClass()

- 变量：==final修饰的变量不能被修改，此时的变量成为“常量”。==

  - 修饰属性：可以赋值的位置有：显示初始化、代码块中初始化、构造器中初始化

  - 修饰局部变量：

    尤其是修饰形参时，表明此形参时一个常量，只能在方法体内使用，不能修改 

> static final修饰属性

被称为全局常量

### 6.5 抽象类与抽象方法

> 关键字abstract的使用

可以用来修饰的结构：==类==、==方法==

不能修饰：属性、构造器、私有方法、静态方法、final方法、final类

> 抽象类

被abstract修饰的类叫做抽象类。

- ==抽象类不能实例化==
- 抽象类中一定有构造器，便于子类实例化的时候调用
- 开发中，都会提供抽象类的子类，让子类对象实例化，完成相关操作
- ==包含抽象方法的类，一定是抽象类；反之，抽象类中可以没有抽象方法==

> 抽象方法

被abstract修饰的方法叫抽象方法。

```java
public abstract void fun();
```

- 抽象方法只有方法的声明，没有方法体
- 若子类重写了父类中的所有抽象方法后，此子类方可实例化；若子类没有重写父类中的所有抽象方法，则子类也必须声明为一个抽象类

> abstract使用注意事项

- abstract不能用来修饰属性、构造器等结构
- abstract不能用来修饰private方法、static方法、final方法、final类

> 抽象类的匿名子类

```java
/**
* 定义抽象类Person
*/
public abstract Person {
    private String name;
    private int age;
    
    public Person() {}
    
    public abstract void fun1();
    
    public abstract void fun2();
    
    public void fun3() {
        System.out.println("hello, fun3");
    }
}

/**
* 测试类
*/
public PersonTest {
    public static void main(String[] args) {
        
        // 定义匿名子类
        Person p = new Person() {
            @Override
            public void fun1(){
                 System.out.println("hello, fun1");
            }
    
            @Override
    		public void fun2() {
                 System.out.println("hello, fun2");
            }
        };
        
        // 创建匿名子类的匿名对象
        method(new Person() {
            @Override
            public void fun1(){
                 System.out.println("hello, fun1");
            }
    
            @Override
    		public void fun2() {
                 System.out.println("hello, fun2");
            }
        })
    }
    
    public static void method(Person p) {
        System.out.println("hello, method")
    }
}
```

### 6.6 abstract应用之模板方法设计模式

抽象类体现的就是一种模板模式的设计，抽象类作为多个子类的通用模板，子类在抽象类的基础上进行扩展、改造，但子类总体上会保留抽象类的行为方式。

> 解决的问题

- 当功能内部一部分实现是确定的，一部分实现是不确定的。此时可以吧不确定的部分暴露出去，让子类去实现。
- 即==在软件开发中实现一个<span style="color: red">算法</span>时，整体步骤很固定、通用，这些步骤已经在父类中写好了。但是某些部分易变，易变部分可以抽象出来，供不同的子类实现。这就是一种模板模式。==

> 应用举例

- 数据库访问的链接
- Junit单元测试
- JavaWeb的Servlet中doGet、doPost方法
- Hibernate中模板程序
- Spring中JDBCTemplate、HibernateTemplate等

### 6.7 接口

> 定义接口中的成员

- JDK7及以前：只能定义全局常量和抽象方法
  - 全局常量：public static final修饰的变量。但是public static final可以省略不写
  - 全局方法：public abstract修饰的方法。但是public static可以省略不写
- JDK8及以后：可以定义全局常量、抽象方法、静态方法、默认方法

> 接口使用注意事项

- ==接口中<span style="color: red">**不能**</span>定义构造器。==这意味着接口是不可以实例化的。
- 接口通过让类去实现(implements)的方式来使用。
  - 如果实现类实现了接口中所有的抽象方法，则此类可以实例化
  - 否则，实现类需要声明为abstract的
- Java类可以实现多个接口（多个接口之间用“,”隔开）--->弥补了Java单继承的局限性
- 当一个Java类既继承类，又实现接口的时候，应该==先写继承后写实现==
- ==接口与接口之间可以继承（extends），且可以多继承==
- ==接口的具体使用，提现了多态性==
- 接口，实际上可以看做是一种规范
- 接口的主要用途就是被实现类实现，这称为==面向接口编程==
- 从本质上讲，接口是一种特殊的抽象类。

> JDK8中接口新特性

JDK8以后，接口既可以定义全局常量、抽象方法，也可以定义静态方法、默认方法。

- 定义静态方法（public static）：接口中定义的静态方法，只能通过接口来调用
- 定义默认方法（public default）：
  - 可以通过实现类的对象，调用接口中的默认方法
  - 实现类可以重写接口的默认方法
  - 如果子类（或实现类）继承的父类和实现的接口中，声明了同名、同参的默认方法，那么子类在没有重写此方法的情况下，默认调用的是父类中的方法 ---> ==类优先原则==
  - 如果实现类实现了多个接口，且这多个接口中定义了同名、同参的默认方法，在实现类没有重写此方法的情况下，编译报错 ---> ==接口冲突==
    - 如果想解决以上冲突，必须在实现类中重写此方法。 
  - 如何在子类（或实现类）的方法中调用父类、接口中被重写的方法？
    - 调用父类中声明的方法：`super.方法`
    - 调用接口中默认的方法：`接口名.super.方法`

### 6.8 接口应用之代理模式（Proxy）

> 概述

代理设计就是为其他对象提供一种代理以控制对这个对象的方法。

> 代码示例

以明星和他的小助理为例。明星参加面谈会、签合同、订票、唱歌，都需要通过他的小助理来完成。小助理就是明星的一个代理。

```java
public class ProxyTest {
    public static void main(String[] args) {
        // 定义代理类对象，实现明星的面谈会、签合同、订票、唱歌功能
        Assistant proxy = new Assistant(new RealStar());
        proxy.confer();
        proxy.signContract();
        proxy.bookTicker();
        proxy.sing();
    }
}

/**
 * 明星接口
 */
interface Star {
    // 面谈会
    void confer();

    // 签合同
    void signContract();

    // 订票
    void bookTicker();

    // 唱歌
    void sing();
}

/**
 * 明星（被代理类）
 */
class RealStar implements Star {
    @Override
    public void confer() {
        System.out.println("RealStar confer");
    }

    @Override
    public void signContract() {
        System.out.println("RealStar signContract");
    }

    @Override
    public void bookTicker() {
        System.out.println("RealStar bookTicker");
    }

    @Override
    public void sing() {
        System.out.println("RealStar sing");
    }
}

/**
 * 明星的助理（代理类）
 */
class Assistant implements Star {
    private RealStar realStar;

    public Assistant(RealStar realStar) {
        this.realStar = realStar;
    }

    @Override
    public void confer() {
        System.out.println("小助理组织面谈会");
        // 明星参加面谈会
        this.realStar.confer();
        System.out.println("面谈会结束后，小助理其他工作...");
    }

    @Override
    public void signContract() {
        System.out.println("小助理检查合同");
        // 明星在合同上签字
        this.realStar.confer();
    }

    @Override
    public void bookTicker() {
        System.out.println("小助理给明星订票");
    }

    @Override
    public void sing() {
        // 明星唱歌
        this.realStar.sing();
    }
}
```

> 应用场景

- 安全代理：屏蔽对真是角色的直接访问
- 远程代理：通过代理类处理远程方法调用（RMI）
- 延迟加载：先加载轻量级的代理对象，真正需要再加载真是对象

> 分类

- 静态代理（静态定义代理对象）

- 动态代理（动态生成代理类）

  JDK自带的动态代理，需要反射等知识

### 6.9 接口应用之工厂模式

> 概述

工厂模式实现了创建者与调用者的分离，即将创建对象的具体过程屏蔽隔离起来，达到高灵活性的目的。

==本质==：实例化对象时，用工厂方法代理new操作。

​			 将选择实现类、创建对象统一管理和控制，从而将调用者和实现类解耦。

> 体现的原则

- 开闭原则（OCP）：软件实体对扩展开放，对修改关闭
- 依赖倒转原则（DIP）：如果A中关联B，那么尽量使得B实现某个接口，然后A与接口发生关系，不与B实现类发生关联关系
- 迪米特法则（LOD）：不和陌生人说话，有事去中介

>分类

- ==简单工厂模式（静态工厂模式）==：用来生产同一等级结构中的任意产品

  一个工厂类，根据方法名或者参数，返回不同的产品。

  - 优点：把调用者和创建者分离，实现了解耦
  - 缺点：对于新增产品，需要修改代码。违反了开闭原则

- ==工厂方法模式==：用来生产同一等级结构中的固定产品（支持新增任意产品）

  一个工厂接口，多个不同工厂接口的实现类，根据不同工厂接口的实现类，返回不同的产品。

  - 缺点：并没有真正的避免代码的改动。当添加新产品时，要么将判断逻辑留在抽象工厂的角色里，要么在客户端将具体工厂类写死。

- ==抽象工厂模式==：用来生产不同品族的全部产品（对于增加新的产品，无能为力；支持增加产品族）

  - 和工厂方法模式的区别：在于需要创建对象的复杂程度上。

### 6.10 类的成员之五：内部类

> 概述

Java中允许将一个类A生命在另一个类B中，则类A就是内部类，类B称为外部类

> 分类

- 成员内部类：分为静态、非静态
- 局部内部类：可以定义在方法内、代码块内、构造器内

> 成员内部类

- 作用：

  - 一方面，作为外部类的成员：
    - 可以调用外部类的属性、方法：`外部类名.this.属性/方法`
    - 可以被static修饰
    - 可以被4种不同的权限修饰（外部类的权限修饰符只可以用public和缺省2种）
  - 另一方面，作为一个类：
    - 类内可以定义属性、方法、构造器等
    - 可以被final修饰，表示不能被继承（言外之意，不使用final，可以被继承）
    - 可以被abstract修饰，表示不能被实例化

- 注意点：

  在局部内部类（AA）的方法（show）中，如果调用局部内部类所声明的方法（method）中的局部变量（num），要求此局部变量声明为final(此final在JDK8及之后可省)

  ```java
  class Person {
      public void method() {
          // 局部变量
          // JDK7及之前，必须显示声明为final。JDK8之后，final可省
          int num = 10;
          
          class AA {
              public void show() {
                  System.out.println(num);
              }
          }
      }
  }
  ```

  

> 实例化成员内部类对象

- 实例化静态成员内部类对象：`外部类.静态内部类 变量名 = new 外部类.静态内部类();`
- 实例化非静态成员内部类对象：先创建外部类对象，再通过`外部类对象实例.new 静态内部类()`
- 例子：

````java
public class InnerClassTest {
    public static void main(String[] args) {
        // 创建静态成员内部类
        Person.Dog dog = new Person.Dog();
        
        // 创建非静态成员内部类
        Person p = new Person();
        Person.Bird bird = p.new Bird();
        bird.sing();
    }
}

class Person {
    String name;
    int age;
    
    // 静态成员内部类
    static class Dog {
        String name;
        int age;
        
        public void show() {
            System.out.println("卡拉是条狗");
        }
    }
    
    // 非静态成员内部类
    class Bird {
        String name;
        
        public void sing() {
            System.out.println("我是一只小小鸟");
        }
    }
}
````

>在成员内部类中区分调用外部类的结构

见Bird类的display()方法。

```java
class Person {
    String name;
    int age;
    
    // 静态成员内部类
    static class Dog {
        String name;
        int age;
        
        public void show() {
            System.out.println("卡拉是条狗");
        }
    }
    
    // 非静态成员内部类
    class Bird {
        String name;
        
        public void sing() {
            System.out.println("我是一只小小鸟");
        }
        
        public void display(String name) {
            // 调用方法的形参
            System.out.println(name);
            // 调用内部类的属性
            System.out.println(this.name);
            // 调用外部类的属性（如果外部类属性是static的，this可省）
            System.out.println(Person.this.name);
        }
    }
}
```

> 开发中局部内部类的使用

```java
class Person {
    static String name = "张三";
    int age;

    // 局部内部类
    public Comparable getComparable() {
        // 创建了一个实现Comparable接口的局部内部类
        // 方式1：
//        class MyComparable implements Comparable {
//            @Override
//            public int compareTo(Object o) {
//                return 0;
//            }
//        }
//        return new MyComparable();

        // 方式2：创建了实现Comparable接口的匿名实现类的匿名对象
        return new Comparable() {
            @Override
            public int compareTo(Object o) {
                return 0;
            }
        };
    }
}
```

## 7 异常处理

### 7.1 概述

> 异常分类

- ==Error==：Java虚拟机无法解决的严重问题。如JVM系统内部错误、资源耗尽（如StackOverflowError栈溢出、OOM堆溢出）等严重情况。一般不编写针对性的代码进行处理。
- ==Exception==：其它因编程错误或偶然意外的外在因素导致的一般性问题，可以使用针对性的代码进行处理，如：空指针访问、试图读取不存在的文件、网络连接中断、数组下标越界
  - 分类
    - 编译时异常
    - 运行时异常

![image-20221026093310042](./images/Java系统学习-基础/image-20221026093310042.png)

> 异常的体系结构

java.lang.Throwable

​		|------ java.lang.Error：一般不编写针对性的代码处理

​		|------ java.lang.Exception：可以进行异常的处理

​				|------ 编译时异常（checked）

​							|------ IOException

​									|------ FileNotFoundException

​							|------ ClassNotFoundException

​				|------ 运行时异常（unchecked，RuntimeException）

​							|------ NullPointerException

​							|------ ArrayIndexOutOfBoundsException

​							|------ ClassCastException

​							|------ NumberFormatException

​							|------ InputMismatchException

​							...

### 7.2 异常处理

> 异常处理方式

- try-catch-finally
- throws + 异常类型

> try-catch-finally使用注意事项

- 当catch捕获多个异常时，如果这些异常之间没有子父类关系，谁在上谁在下都可以。但是如果有子父类关系，子类在前父类在后
- try-catch-finally处理编译时异常，使得程序在编译时不再报错，但是运行时仍可能报错
- finally中声明的是一定会被执行的语句。即使catch中又出现异常了，或者是try和catch中有return语句等情况
- 如果try、catch、finally中都有return，最终返回的是finally中的内容

> 开发中如何选择使用try-catch-finally还是使用throws？

- 如果父类中被重写的方法中没有使用throws的方式处理异常，那么子类重写的方法也不能使用throws，也就是说，如果子类重写的方法有异常，只能使用try-catch-finally的方式处理
- 执行的方法a中，先后又调用了另外几个方法，这几个方法是递进关系执行的。建议使用throws的方式进行处理a中调用的方法，执行的a方法则可以考虑使用try-catch-finally方式进行处理

------

# 第二部分 Java进阶

## 8 多线程

### 8.1 基本概念

- ==程序（program）==：是为了完成特定的任务、用某种语言编写的一组指令的集合。即一段静态的代码，静态对象

- ==进程（process）==：是程序的一次执行过程，或者是正在运行的一个程序。是一个动态的过程，有他自身的产生、存在和消亡的过程

  - 程序是静态的，进程是动态的
  - 进程作为<span style="color:red">资源分配的单位</span>，系统在运行时会为每个进程分配不同的内存区域

- ==线程（thread）==：进程可以进一步细化为线程，是一个程序内部的一条执行路径

  - 若一个进程同一时间可以并行执行多个线程，那么这个进程就是支持多线程的
  - 线程作为<span style="color:red">调度和执行的单位</span>，<span style="color: blue">**每个线程拥有独立的运行栈和程序计数器（pc）**</span>，线程切换的开销小
  - <span style="color: blue">**一个进程中的多个线程共享相同的方法区、堆**</span>，他们从同一堆中分配对象，可以访问相同的变量和对象。这使得线程间通信更简便、高效。但多个线程操作共享的系统资源就会带来安全隐患

- ==单核CPU==：其实是一种假的多线程，因为他在一个时间单元内，也只能执行一个线程的任务

- ==多核CPU==：多核CPU才能更好的发挥多线程的效率

  一个Java应用程序java.exe，其实至少有3个线程：main()主线程，gc()垃圾回收线程，异常处理线程。当然如果发生异常，会影响主线程

- ==并行==：多个CPU同事执行多个任务。如：多个人同时做不同的事情

- ==并发==：一个CPU（采用时间片）同时执行多个任务。如：秒杀，多个人同时做一件事

- ==多线程的优点==：

  - 提高应用程序的相应。对图形化界面更有意义，可增强用户体验
  - 提高计算机系统CPU的利用率
  - 改善程序结构。将既长又复杂的进程分为多个线程，独立运行，利于理解和修改

- ==何时需要多线程==：

  - 程序需要同时执行两个或多个任务

  - 程序需要实现一些需要等待的任务时，如用户输入、文件读写操作、网络操作、搜索。

    比如点外卖时，手指上划，获取数据和图片加载就是两个线程

  - 需要一些后台运行的程序时

### 8.2 线程的创建和使用

更深的课程：[45_Callable接口_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV18b411M7xz?p=45&vd_source=555f33f5f6791940abce98aa27017451)

> 线程创建的方法

- 方法一：继承Thread类
- 方法二：实现Runnable接口
- 方法三：实现Callable接口（JDK5.0新增）
- 方法四：使用线程池（JDK5.0新增）

> 方式一：继承Thread类

- ==**步骤**==

  - 创建一个继承Thread类的子类

  - 在子类中重写Thread的run()方法

    将线程需要执行的操作，声明在run()方法中

  - 创建子类的实例对象

  - 调用子类实例对象的start()方法

    - start()方法的作用
      - 启动当前线程
      - 调用**当前线程**的run()方法
    - ==不可以让已经start()的线程重新start()。==否则会报IllegalThreadStateException

> 方式二：实现Runnable接口

- ==**步骤**==
  - 创建一个实现Runnable接口的类
  - 实现类中去重写Runnable接口的抽象方法run()
  - 创建实现类的对象
  - 将次对象作为参数传递到Thread类的构造器中，创建Thread类对象
  - 通过Thread类的对象调用run()

- ==**比较以上创建线程的两种方式**==
  - 开发中优先选择实现Runnable接口的方式。原因如下：
    - 实现的方式没有类的单继承性的局限性
    - 实现的方式更适合来处理多个线程有共享数据的情况

  - 二者的联系如下：
    - Thread本身也实现了Runnable接口
  - 相同点：
    - 两种方式都要重写run()，将线程要执行的逻辑写在run()中

> 方式三：实现Callable接口

- ==**步骤**==

  - 创建一个实现Callable的实现类
  - 实现call()方法：将此线程需要执行的操作声明在此方法中。call()是可以有返回值的
  - 创建Callable实现类的对象
  - 创建FutureTask对象：将上述Callable实现类对象，作为参数传递到FutureTask构造器中
  - 创建Thread对象并运行：需要将FutureTask对象作为参数传递到Thread构造器中
  - （可选）获取Callable实现类中call()的返回值：借助FutureTask对象的get()方法获取

- ==**Future接口简介**==

  - 可以对具体Runnable、Callable任务的执行结果进行取消、查询是否完成、获取结果等
  - FutureTask是Future接口的唯一实现类
  - FutureTask同时实现了Runnable、Future接口。既可以作为Runnable被线程执行，又可以作为Future得到Callable中call()的返回值

- ==**实现Callable接口方法与实现Runnable接口的对比**：==

  - 与实现Runnable相比，Callable功能更强大
    - 相比run()方法，Callable接口中的call()可以有返回值
    - call()方法可以抛出异常
    - Callable支持泛型
    - 需要借助FutureTask类，来获取返回结果

- ==**示例代码**==

  ```java
  package com.tth.learn.java;
  
  import java.util.concurrent.Callable;
  import java.util.concurrent.ExecutionException;
  import java.util.concurrent.FutureTask;
  
  /**
   * 创建线程的方式三：实现Callable接口（JDK5.0新增）
   * @Author tth
   * @Date 2022/11/3 17:37
   */
  public class CreateThreadTest3 {
      public static void main(String[] args) {
          // 3.创建Callable实现类对象
          MyThreadByCallable mtc = new MyThreadByCallable();
  
          // 4.创建FutureTask对象
          FutureTask futureTask = new FutureTask(mtc);
  
          // 5.创建Thread对象，并启动线程
          new Thread(futureTask).start();
  
          try {
              // 6.获取call()中返回值
              Object o = futureTask.get();
              System.out.println(o);
          } catch (InterruptedException e) {
              e.printStackTrace();
          } catch (ExecutionException e) {
              e.printStackTrace();
          }
      }
  }
  
  // 1.创建Callable的实现类
  class MyThreadByCallable implements Callable {
      // 2.重写call()
      @Override
      public Object call() throws Exception {
          int sum = 0;
          for (int i = 1; i <= 100; i++) {
              if (i % 2 == 0) {
                  System.out.println(i);
                  sum += i;
              }
          }
          return sum;
      }
  }
  ```

> 方式四：使用线程池

- ==适用场景==

  经常创建和销毁、使用量特别大的资源。如并发情况下的线程，对性能影响很大

- ==好处==

  - 提高响应速度（减少了创建新线程的时间）
  - 降低资源消耗（重复利用线程池中的线程，不需要每次都创建）
  - 便于线程管理：
    - corePoolSize：核心池的大小
    - maximumPoolSize：最大线程数
    - KeepAliveTime：线程没有任务时最多保持多长时间会终止

- ==线程池相关API==

  - <span style="color: red; font-weight: bold;">ExecutorService</span>：
  - <span style="color: red; font-weight: bold;">Executors</span>：

### 8.3 Thread类中的方法

- ==start()==：启动当前线程；调用当前线程的run()
- ==run()==：通常都需要重写该方法，将创建的线程要执行的操作声明在此方法中
- ==currentThread()==：静态方法，返回执行当前代码的线程
- ==getName()==：获取当前线程的名字
- ==setName()==：设置当前线程的名字
- ==yield()==：释放当前CPU的执行权（当然下一个CPU的执行权也有可能被争取到）
- ==join()==：在线程a中调用线程b的join()，此时线程a就会进入阻塞状态，直到线程b执行完成后，线程a才会结束阻塞状态
- ==stop()==：已过时。强制结束当前线程，不推荐使用
- ==sleep(long millis)==：静态方法，让当前线程“睡眠”指定的millis毫秒。在指定的millis毫秒时间内，当前线程是阻塞的装填
- ==isAlive()==：判断当前线程是否存活

### 8.4 线程的调度

> CPU调度策略

- 时间片：执行一段时间的A，再去执行一定时间的B，再去执行一定时间的C......
- 抢占式：高优先级的线程抢占CPU

> Java的调度方法

- 同优先级线程组成先进先出队列，使用时间片策略
- 对于高优先级的，使用优先调度的抢占式策略

> 线程的优先级

- 线程优先级的等级

  共10档，有三个常量，如下：

  - ==MAX_PRIORITY==：10。最大的优先级
  - ==MIN_PRIORITY==：1。最小的优先级
  - ==NORM_PRIORITY==：5。默认的优先级

- 涉及的方法

  - ==getPriority()==：返回线程的优先级
  - ==setPriority(int newPriority)==：改变线程的优先级

- 说明

  - 线程创建时，继承父线程的优先级
  - 低优先级只是获得调度的概率低，并非一定是在高优先级线程之后才被调用

### 8.5 线程的分类

Java中的线程分类两类，一种是==守护线程==，一种是==用户线程==。

- 它们几乎在每个方面都是相同的，唯一的区别就是判断JVM何时离开
- 守护线程是用来服务用户线程的，通过在start()前调用`线程实例对象.setDaemon(true)`可以把一个用户线程变成一个守护线程
- Java垃圾回收就是一个典型的守护线程
- 若JVM中都是守护线程，当前JVM将退出

### 8.6 线程的生命周期

![image-20221031151729014](./images/Java系统学习-基础/image-20221031151729014.png)

### 8.7 线程的同步

> 线程同步的方法

- 方法一：同步代码块
- 方法二：同步方法
- 方法三：使用Lock锁

> 方式一：同步代码块

- 语法：

  ```java
  synchronized(同步监视器) {
      // 需要被同步的代码，即操作共享数据的代码
  }
  ```

- 说明

  - 同步监视器：即锁，任何一个类的对象，都可以充当锁。

    - 要求：多个线程共用同一把锁

    - 补充：

      - 在实现Runnable接口创建多线程的方式中，可以考虑使用this、或者声明一个实现类的属性（该属性是一个类的实例）作为同步监视器

        ```java
        class Window2 implements Runnable {
            // 此处可以不使用static。因为虽然开了3个窗口，但是实际上共用的是一个Window对象
            private int ticket = 100;
        
            // 声明一个对象属性同步锁
            private Object obj = new Object();
        
            @Override
            public void run() {
                while (true) {
                    // 使用实现类的对象属性作为同步锁
                    synchronized (obj) {
                     // 使用this作为同步锁
        //            synchronized (this) {
                        if (ticket > 0) {
                            System.out.println(Thread.currentThread().getName() + ": 卖票，票号为：" + ticket);
                            ticket --;
                        } else {
                            break;
                        }
                    }
                }
            }
        }
        ```

      - 在继承Thread类创建多线程的方式中，可以考虑使用`类名.class`、或者声明一个实现类的静态属性（该属性是一个实例）作为同步监视器，不可使用this

        ```java
        class Window extends Thread {
            // 票声明为static，所有线程共用同一个static变量
            private static int ticket = 100;
            // obj声明为static，作为一个锁，所有线程共用同一把锁
            private static Object obj = new Object();
            @Override
            public void run() {
                while (true) {
                    // 正确。使用实现类的对象静态属性作为同步锁
                    // synchronized (obj) {
                    // 正确。使用“实现类.class”为同步锁
                    synchronized (Window.class) {
                    // 错误。不可以用this
                    // synchronized (this) {
                        if (ticket > 0) {
                            System.out.println(getName() + ": 卖票，票号为：" + ticket);
                            ticket --;
                        } else {
                            break;
                        }
                    }
                }
            }
        }
        ```

        

    - 举例：

      - 在类中声明一个对象，用来作为同步锁
      - 使用`类名.class`

  - 需要被同步的代码：即操作共享数据的代码

> 方式二：同步方法

- 同步方法仍然涉及到同步监视器，只是不需要显示声明

- 非静态的同步方法，同步监视器是this

  ```java
  class Window4 implements Runnable {
      // 此处可以不使用static。因为虽然开了3个窗口，但是实际上共用的是一个Window对象
      private int ticket = 100;
  
      @Override
      public void run() {
          while (true) {
              show();
          }
      }
  
  
      private synchronized void show() { // 同步监视器：this
          if (ticket > 0) {
              System.out.println(Thread.currentThread().getName() + ": 卖票，票号为：" + ticket);
              ticket--;
          }
      }
  }
  ```

- 静态的同步方法，同步监视器是类本身

  ```java
  class Window3 extends Thread {
      // 票声明为static，所有线程共用同一个static变量
      private static int ticket = 100;
  
      @Override
      public void run() {
          while (true) {
              show();
          }
      }
  
      private synchronized static void show() { // 同步监视器：Window3.class
          if (ticket > 0) {
              System.out.println(Thread.currentThread().getName() + ": 卖票，票号为：" + ticket);
              ticket --;
          }
      }
  }
  ```

> 方法三：Lock

==jdk5.0新特性==



### 8.8 单例设计模式之线程安全的懒汉式

```java
class Bank {
    private static Bank instance = null;
    // 私有化构造器
    private Bank() {}

    public static Bank getInstance() {
        // 方式一：效率稍差
//        synchronized (Bank.class) {
//            if (null == instance) {
//                instance = new Bank();
//            }
//        }
        
        // 方式二：效率较高
        if (null == instance) {
            synchronized (Bank.class) {
                if (null == instance) {
                    instance = new Bank();
                }
            }
        }

        return instance;
    }
}
```

### 8.9 线程的死锁

> 死锁

- 不同的线程分别占用对方需要的同步资源不放弃，都在等待对方放弃自己需要的同步资源，这就造成了线程的死锁
- 出现死锁后，不会出现异常，不会出现提示，只是所有的线程都处于阻塞状态，无法继续

> 死锁产生的必要条件

- 互斥条件：任意一个时刻一个资源只能给一个进程使用
- 不可剥夺条件：进程所获得的资源在未使用完毕之前，不能被其他进程强行剥夺
- 请求和保持条件：进程在申请新资源的同时，继续占用已经分配到的资源
- 循环等待条件：前一个进程占有后一个进程锁申请的资源，最后一个进程占用第一个进程所申请的资源

> 处理死锁的方法

- 预防死锁

  - “互斥”条件是无法破坏的
  - 破坏“不可剥夺”条件：
    - 方法一：如果占有某些资源的一个进程申请新的资源被拒绝，则该进程必须释放它最初占有的资源。如有必要，只可以再次请求这些资源和其他资源
    - 方法二：如果一个进程请求当前被另一个进程占有的资源，则操作系统可以抢占另一个进程，要求它释放资源。只有在两个进程优先级不同的条件下，方法二才能预防死锁	
  - 破坏“请求与保持”条件：
    - 方法一：创建进程时，系统要么满足它申请的所有资源，要么什么都不给。这就会所谓的“一次性分配”
    - 方法二：要求每个进程申请新的资源时，释放他所占有的资源。
  - 破坏“循环等待”条件：将系统中所有的资源编号，进程可以在任意时间提出资源申请，但所有申请必须按照资源的编号书序提出。

- 避免死锁

  - 有序资源分配法：将系统中的资源统一编号，申请时必须按从小到大的顺序
  - 专门的算法：如银行家算法

- 检测死锁：当死锁发生时，相关机构能够监测到死锁发生的位置和原因，并能通过外力破坏死锁发生的必要条件，从而使得并发进程从死锁状态中恢复出来

- 解除死锁：

  死锁解除的主要方法有：

  - 资源剥夺法：挂起某些死锁进程，并抢占他们的资源，将这些资源分配给其他的死锁进程。

    但是，应该防止被挂起的进程长时间得不到资源而处于资源匮乏的状态。

  - 撤销进程法：强制撤销部分甚至全部死锁进程，并剥夺他们的资源。

    撤销的原则可以按照进程的优先级和撤销进程代价的高低进行。

  - 进程回退法：让一个或者多个进程回退到足以避免死锁的地步，进程回退时资源释放资源。

    要求系统保持进程的历史信息，设置还原点。

### 8.10 线程的通信

> 常用方法

以下方法是定义在Object类中的，不是Thread中

- ==wait()==：使线程进入阻塞状态，并释放同步监视器
- ==notify()==：唤醒被wait的一个线程（优先唤醒有优先级高的）
- ==notifyAll()==：唤醒所有被wait的线程

> 说明

- wait()、notify()、notifyAll()必须用在同步代码块或者同步方法中

- wait()、notify()、notifyAll()的调用者必须是同步代码块或同步方法中的同步监视器。

  否则会出现IllegalMonitorStateException异常

- wait()、notify()、notifyAll()是定义在java.lang.Object中的

> 例子

```java
package com.tth.learn.java;

/**
 * 线程通信的例子：使用两个线程打印1-100.线程1和线程2交替打印
 * @Author tth
 * @Date 2022/11/1 17:52
 */
public class CommunicationTest {
    public static void main(String[] args) {
        Number number = new Number();

        Thread t1 = new Thread(number);
        t1.setName("线程1");

        Thread t2 = new Thread(number);
        t2.setName("线程2");

        t1.start();
        t2.start();

    }
}

class Number implements Runnable {

    private int num = 1;
    private Object obj = new Object();

    @Override
    public void run() {
        while (true) {
            synchronized (obj) {
                // 假如第一次进来的线程1。第一次notify()并没有唤醒任何线程。
                // 待线程1执行完wait()后,待线程1进入阻塞状态
                // 随后线程2进来。执行notify()，唤醒线程1
                obj.notify();
                if (num <= 100) {
                    System.out.println(Thread.currentThread().getName()+"_"+num);
                    num ++;
                    try {
                        // 阻塞当前线程
                        obj.wait();
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                } else {
                    break;
                }
            }
        }
    }
}
```

## 9 Java常用类

### 9.1 String

#### 9.1.1 特性

- String类声明为final的，不可被继承

- 实现了Serializable接口，表示支持序列化

- 实现了Comparable接口，表示可以比较大小

- 内部定义了final char[] value，用来存储字符串数据

- String代表了==不可变的字符串序列==，简称不可变性，体现如下：

  - 当对字符串重新赋值时，需要重新指定内存区域进行赋值，不能对内存中原有的字符串内容进行修改
  - 当对字符串进行连接操作时，也需要重新指定内存区域进行赋值
  - 当对字符串调用replace()修改字符串时，也需要重新指定内存区域进行赋值

- 通过字面量的方式（区别与new，使用String a="abc";）给一个字符串赋值，此时的字符串的值存在方法区中的字符串常量池中

  字符串常量池不会存相同内容的字符串

#### 9.1.2 String的初始化方式

- 通过字面量的方式：String s = "abc";

  初始化过程：

  - 在字符串常量池中创建abc常量
  - s指向abc常量的地址

- 通过new+构造器的方式：String s = new String("abc");

  初始化过程：

  - 在字符串常量池中创建abc常量
  - 在堆空间中创建String对象，其value属性值为abc常量的地址
  - s指向堆中创建的String对象

  ==面试题==：String s = new String("abc")创建了几个对象？

  答：两个。一个是在堆空间中new了一个String类型的对象，另一个是在常量池中创建了一个char[]

> 引申

- 常量与常量的拼接结果在常量池中（如String s = "abc"+"def";s指向常量池中的"abcdef"），且常量池中不会存在相同内容的常量。

- 常量与变量的拼接、变量与变量的拼接结果在堆空间中（如String s = "abc"; String s2 = s1+"def";s2指向堆空间，相当于new了一个变量）

- 特别的，如果拼接结果调用了==intern()==，返回结果在常量池中。

- 例子如下：

  ```java
  public static void main(String[] args) {
          String s1 = "javaEE";
          String s2 = "hadoop";
  
          String s3 = "javaEEhadoop";
          String s4 = "javaEE" + "hadoop";
          String s5 = s1 + "hadoop";
          String s6 = "javaEE" + s2;
          String s7 = s1 + s2;
          String s8 = s5.intern();
  
          System.out.println(s3 == s4); //true
          System.out.println(s3 == s5); // false
          System.out.println(s3 == s6); // false
          System.out.println(s3 == s7); // false
          System.out.println(s5 == s6); // false
          System.out.println(s5 == s7); // false
          System.out.println(s6 == s7); // false
          System.out.println(s3 == s8); // true
      }
  ```

#### 9.1.3 String常用方法 

==凡是涉及到对字符串进行修改的方法，原字符都没有变化，需要用新的变量去接收返回值==，这提现了字符串的不可变性，

- `int length()`：返回字符串长度
- `char charAt(int index)`：返回索引处的字符
- `boolean isEmpty()`：判断是否是空字符串
- `String toLowerCase()`： 将字符转为小写（）
- `String toUpperCase()`： 将字符转为大写
- `String trim()`：忽略字符串收尾空格
- `boolean equals(Object obj)`：比较字符串的内容是否相等
- `boolean equalsIgnoreCase(Object obj)`：忽略大小写，比较字符串的内容是否相等
- `String concat(String str)`：将指定字符串连接到此字符串的结尾，等价于“+”
- `int compareTo(String anotherString)`：比较两个字符串的大小。返回负数表示当前字符串比指定字符串小。
- `String substring(int beginIndex)`：从beginIndex开始截取并返回
- `String substring(int beginIndex, int endIndex)`：截取[beginIndex, endIndex)范围内的字符串并返回
- `boolean endsWith(String suffix)`：判断字符串是否以指定的字符串结尾
- `boolean startsWith(String suffix)`：判断字符串是否以指定的字符串开始
- `boolean startsWith(String suffix, int toffset)`：判断字符串从指定的索引位置开始的子字符串是否以指定的字符串开始
- `boolean contains(CharSequence s)`：判断是否包含指定字符串
- `int indexOf(String str)`：返回指定字符串在当前字符串中第一次出现的索引位置
- `int indexOf(String str, int fromIndex)`： 返回指定字符串在当前字符串中第一次出现的索引位置，从指定的下标开始 
- `int lastIndexOf(String str)`：返回指定字符串在当前字符串中最后一次出现的索引位置
- `int lastI ndexOf(String str, int fromIndex)`：返回指定字符串在当前字符串中第一次出现的索引位置，从指定的索引反向搜索
- `String replace(char oldChar, char newChar)`：用newChar替换oldChar
- `String replace(CharSequence target, CharSequence replacement)`：用replacement替换target
- `String replaceAll(String regex, String replance)`：用replacement替换符合正则表达式regex的字符串
- `String replaceFirst(String regex, String replance)`：用replacement替换第一个符合正则表达式regex的字符串
- `boolean match(String regex)`：判断字符串是否匹配给定的正则表达式
- `String[] split(String regex)`：根据给定的正则表达式拆分此字符串
- `String[] split(String regex, int limit)`：根据给定的正则表达式拆分此字符串，最多不超过limit个。如果超出，剩下的全都放在最后一个元素中

#### 9.1.4 String与部分数据结构之间的转换

- String与char[]之间的转换
  - String --> char[]：调用String的toCharArray()
  - char[] --> String ：调用String的构造器
- String与byte[]之间的转换
  - String --> byte[]：调用String的getBytes()    --------->相当于==编码==
  - byte[] --> String ：调用String的构造器            --------->相当于==解码==

#### 9.1.5 StringBuffer和StringBuilder

> String、StringBuffer、StringBuilder三者的区别与联系

- String：
  - 不可变的字符序列；
- StringBuffer：
  - 可变的字符序列；
  - 线程安全的，效率低
- StringBuilder：（==jdk5.0新增==）
  - 可变的字符序列；
  - 线程不安全的，效率高
- 三者的联系：
  - 三者底层都是char[]，但是String是用final修饰的

> 源码分析

以StringBuffer为例

- 构造器

  - StringBuffer sb = new StringBuffer()：底层创建了一个长度是16的字符数组，即char[] value = new char[16]
  - StringBuffer sb = new StringBuffer("abc")：底层创建了一个长度是"abc".length+16的字符数组，即char[] value = new char["abc".length+16]

- 问题1：sb.length()是多少？

  答：是字符的真实长度。如StringBuffer sb = new StringBuffer()，sb.length()=0；StringBuffer sb = new StringBuffer("abc")，sb.length()=3

- 问题2：当sb.append(str)长度不够时，是如何扩容的？

  答：默认情况下是将原来的容量变为原来的2倍+2；如果默认扩容完毕后，长度仍不够，则容量扩容为sd.length()+str.length()；...

  同时将原有数组中的元素复制到新的数组中。

  ==开发中建议使用StringBuffer(int capacity)==，给定一个长度，避免在append过程中进行扩容（这样就可以避免在扩容时复制数组）

  ![image-20221130171254959](./images/Java系统学习-基础/image-20221130171254959.png)

> StringBuffer常用方法

- `StringBuffer append(String var1)`：字符串拼接

- `StringBuffer delete(int start, int end)`：删除[start, end)位置的字符

- `StringBuffer replace(int start, int end, String str)`：把[start, end)位置的字符替换成str

- `StringBuffer insrt(int offset, xxx)`：在指定位置插入xxx

- `StringBuffer reverse()`：字符串反转

  以上方法都会将原有字符串进行修改。此外StringBuffer还可以调用String的一些方法，如`String substring(int beginIndex, int endIndex)`，当调用String的方法时，对原有字符串不会修改

>String、StringBuffer、StringBuilder效率对比

String < StringBuffer < StringBuilder

#### 9.1.6 JVM中字符串常量池存放位置

- jdk 1.6：字符串常量池存储在方法区（永久区）
- jdk 1.7：字符串常量池存储在堆空间
- jdk 1.8：字符串常量池存储在方法区（元空间）

### 9.2 日期时间的API

#### 9.2.1 JDK8之前的日期时间API

- java.util.Date及其子类java.sql.Date

- System.currentTimeMillis()：获取当前时间的时间戳

- java.text.SimpleDateFormat：时间格式化

- Calendar：日历类。Calender是Date的升级版

  说明：获取月份时，一月是0，二月是1，以此类推，十二月是11；获取星期时，周日是1，周一是2，以此类推，周六是7

  ```java
  // 实例化1: 创建子类对象
  GregorianCalendar gregorianCalendar = new GregorianCalendar();
  // 实例化2（常用）：调用其静态方法getInstance()
  Calendar calendar = Calendar.getInstance();
  
  // 常用方法
  // get(int field)：获取指定参数对应的Calender对象的时间
  int month = calendar.get(Calendar.MONTH); //获取月份
  System.out.println(month);
  int days = calendar.get(Calendar.DAY_OF_YEAR); //获取当前是一年中的第几天
  System.out.println(days);
  
  // set(int field, int value)：对Calender对象的时间进行set操作
  calendar.set(Calendar.DAY_OF_MONTH, 10);
  System.out.println(calendar.get(Calendar.DAY_OF_YEAR));
  
  // add(int field, int amount)：对Calender对象的时间进行“+”操作
  calendar.add(Calendar.DAY_OF_YEAR, 3);
  System.out.println(calendar.get(Calendar.DAY_OF_YEAR));
  
  // getTime()：日历类 --> java.util.Date
  Date date = calendar.getTime();
  System.out.println(date);
  
  // setTime()：java.util.Date --> Calender
  Date date1 = new Date();
  calendar.setTime(date1);
  System.out.println(calendar.get(Calendar.DAY_OF_YEAR));
  ```

#### 9.2.2 JDK8中新的日期时间API

> 旧日期时间API存在的问题

- 可变性：日期和时间这样的类应该是不可变的
- 偏移性：Date中的年份是从1900开始的，月份是从0开始的
- 格式化：格式化只对Date有用，对Calender不行
- 线程安全性：Date和Calender都不是线程安全的
- 不能处理闰秒等

> JDK8新增的日期时间API

==JDK8新特性==

- java.time.LocalDate：获取日期
- java.time.LocalTime：获取时间
- java.time.LocalDateTime：获取日期+时间
- java.time.Instant：瞬时，等同于Date中的getTime()
- java.time.format.DateTimeFormatter：时间格式化
- 其他API：
  - java.time.ZoneId：时区相关操作
  - java.time.ZonedDateTime：带时区的日期时间
  - java.time.Clock：使用时区提供对当前即时、日期、和时间的访问的时钟
  - java.time.Duration：用来计算两个**时间**的间隔，可以获取秒级间隔，也可以获取纳秒级间隔
  - java.time.Period：用来计算两个**日期**的间隔
  - java.time.temporal.TemporalAdjuster：时间校正器。如获取当前日期的下一个工作日等
  - java.time.temporal.TemporalAdjusters：该类通过静态方法提供了大量的TemporalAdjuster实现

> LocalDate、LocalTime、LocalDateTime的使用

- 实例化

  - 方法一：使用now()实例化当前时间

    ```java
    // 实例化1：使用静态方法now()，获取当前日期/时间/时间+日期
    LocalDate localDate = LocalDate.now();
    LocalTime localTime = LocalTime.now();
    LocalDateTime localDateTime = LocalDateTime.now();
    System.out.println(localDate);
    System.out.println(localTime);
    System.out.println(localDateTime);
    ```

  - 方法二：使用of()实例化指定时间

    ```java
    // 实例化2：使用静态方法of()，设置指定的时间。没有偏移量
    LocalDate localDate1 = LocalDate.of(2022, 12, 7);
    LocalTime localTime1 = LocalTime.of(14, 44, 12);
    LocalDateTime localDateTime1 = LocalDateTime.of(2022, 12, 7, 14, 42, 33);
    System.out.println(localDate1);
    System.out.println(localTime1);
    System.out.println(localDateTime1);
    ```

- 获取属性：getXxx

  ```java
  LocalDateTime localDateTime = LocalDateTime.now(); // 2022-12-7 14:47:28
  // getXXX()：获取相关属性
  System.out.println(localDateTime.getDayOfMonth()); // 7
  System.out.println(localDateTime.getDayOfWeek()); // WEDNESDAY
  System.out.println(localDateTime.getMonth()); // DECEMBER
  System.out.println(localDateTime.getMonthValue()); // 12
  System.out.println(localDateTime.getMinute()); // 47
  ```

- 设置属性：withXxx  ==体现了不可变性==

  ```java
  LocalDateTime localDateTime = LocalDateTime.now();
  // withXxx()：设置相关属性 ---> 体现了不可变性，原时间不变，时间修改方法中有返回值，返回的新日期是被修改过的
  LocalDateTime localDateTime2 = localDateTime.withDayOfMonth(22);
  System.out.println(localDateTime); // 2022-12-07T14:54:38.985
  System.out.println(localDateTime2); // 2022-12-22T14:54:38.985
  ```

- 对相关属性执行“+”操作：plusXxx()  ==体现了不可变性==

  ```java
  LocalDateTime localDateTime = LocalDateTime.now();
  // plusXxx()：对相关属性执行“+”操作
  LocalDateTime localDateTime3 = localDateTime.plusMonths(3);
  System.out.println(localDateTime); // 2022-12-07T14:54:38.985
  System.out.println(localDateTime3); // 2023-03-07T14:54:38.985
  ```

- 对相关属性执行“-”操作：minusXxx()  ==体现了不可变性==

  ```java
  LocalDateTime localDateTime = LocalDateTime.now();
   // minusXxx()：对相关属性执行“-”操作
  LocalDateTime localDateTime4 = localDateTime.minusDays(6);
  System.out.println(localDateTime); // 2022-12-07T14:54:38.985
  System.out.println(localDateTime4); // 2022-12-01T14:54:38.985
  ```

> Instant说明

时间线上的一个瞬时点。这可能被用来记录应用程序中的事件时间戳。

从概念上来讲，它知识简单的表示自1970年1月1日0时0分0秒开始的事件数，精确度可达纳秒级。

> Instant的使用

- 实例化

  - 方法一：使用now()获取当前时间 ==注：获取到的是本初子午线的时间，与东八区相差8小时==

    ```java
    // 实例化1：now() 获取当前时间
    Instant instant = Instant.now();// 获取到的是本初子午线时间，与东八区时间相差8小时
    System.out.println(instant); // 2022-12-07T07:31:15.348Z（当前时间为2022-12-07T15:31:15.348Z）
    ```

  - 方法二：使用of(long l)获取指定时间戳对应的时间 

    ```java
    //实例化2：ofEpochMilli()，按照给定的毫秒数获取指定时间
    Instant instant1 = Instant.ofEpochMilli(1670398455189L);
    System.out.println(instant1);
    ```

- 设置偏移量，获取当前时间 atOffset()

  ```java
  // 设置偏移量，获取当前时间
  OffsetDateTime offsetDateTime = instant.atOffset(ZoneOffset.ofHours(8));
  System.out.println(offsetDateTime); // 2022-12-07T15:31:15.348+08:00
  ```

- 获取自1970-01-01 00:00:00开始的毫秒数

  ```java
  // 获取自1970-01-01 00:00:00开始的毫秒数
  long milli = instant.toEpochMilli();
  System.out.println(milli);
  ```

> DateTimeFormatter的使用

- 实例化方法一：通过预定义的标准格式，如ISO_LOCAL_TIME、ISO_LOCAL_DATE、ISO_LOCAL_DATE_TIME

  ```java
  DateTimeFormatter dtf = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
  // 格式化：日期 --> 字符串
  LocalDateTime localDateTime = LocalDateTime.now();
  String s = dtf.format(localDateTime);
  System.out.println(localDateTime + " --> " +s);
  // 解析： 字符串 --> 日期
  TemporalAccessor parse = dtf.parse("2022-12-07T16:04:03.594");
  System.out.println(parse); // {},ISO resolved to 2022-12-07T16:04:03.594
  ```

- 实例化方法二：通过本地化相关的格式，如DateTimeFormatter.ofLocalizedDateTime()、DateTimeFormatter.ofLocalizedDate()

  - DateTimeFormatter.ofLocalizedDateTime()适用的参数：
    - FormatStyle.SHORT
    - FormatStyle.MEDIUM
    - FormatStyle.LONG

  - DateTimeFormatter.ofLocalizedDate()适用的参数：
    - FormatStyle.SHORT
    - FormatStyle.MEDIUM
    - FormatStyle.LONG
    - FormatStyle.FULL

  ```java
  // FormatStyle.SHORT
  DateTimeFormatter dtf1 = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT);
  String s1 = dtf1.format(localDateTime);
  System.out.println(localDateTime + " --> " +s1); // 2022-12-07T16:09:18.095 --> 22-12-7 下午4:09
  // FormatStyle.MEDIUM
  DateTimeFormatter dtf2 = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM);
  String s2 = dtf2.format(localDateTime);
  System.out.println(localDateTime + " --> " +s2); // 2022-12-07T16:09:18.095 --> 2022-12-7 16:09:18
  // FormatStyle.LONG
  DateTimeFormatter dtf3 = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG);
  String s3 = dtf3.format(localDateTime);
  System.out.println(localDateTime + " --> " +s3); // 2022-12-07T16:09:18.095 --> 2022年12月7日 下午04时09分18秒
  // FormatStyle.FULL
  DateTimeFormatter dtf4 = DateTimeFormatter.ofLocalizedDate(FormatStyle.FULL);
  LocalDate localDate = LocalDate.now();
  String s4 = dtf4.format(localDate);
  System.out.println(localDate + " --> " +s4); // 2022-12-07 --> 2022年12月7日 星期三
  ```

- 实例化方法三：通过自定义的格式，如DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss") ==最常用==

  ```java
  DateTimeFormatter dtf5 = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
  // 格式化
  String s5 = dtf5.format(localDateTime);
  System.out.println(localDateTime + " --> " +s5); // 2022-12-07T16:19:37.665 --> 2022-12-07 16:19:37
  // 解析
  TemporalAccessor parse1 = dtf5.parse("2022-11-11 08:08:08");
  System.out.println(parse1); // {},ISO resolved to 2022-12-07T16:04:03.594
  ```

### 9.3 Java比较器

#### 9.3.1 Comparable自然排序 

==自定义类实现自然排序，需要实现`Comparable`接口，并重写``compareTo(Object o)``==

> 重写compareTo(Object o)方法的规则

- 当前对象this > 形参对象obj，返回正数

- 当前对象this < 形参对象obj，返回负数

- 当前对象this = 形参对象obj，返回0

  tips：如果形参对象不是当前对象对应的类，可以考虑抛出异常！

> 例子

- 自定义类实现`Comparable`接口，并重写`compareTo(Object o)`

  ```java
  public class Goods implements Comparable{
      private String name;
      private double price;
  
      // getter、setter、toString
  
      // 重写compareTo，首先按照价格由低到高排序；价格相同时按照商品名由低到高排序
      @Override
      public int compareTo(Object o) {
          if (o instanceof Goods) {
              Goods goods = (Goods) o;
              if (this.getPrice() - goods.getPrice() > 0) {
                  return 1;
              } else if (this.getPrice() - goods.getPrice() < 0) {
                  return -1;
              } else {
                  return this.getName().compareTo(goods.getName());
              }
          }
  
          throw new RuntimeException("数据格式不一致！");
      }
  }
  
  ```

- 排序测试

  ```java
   @Test
  public void comparableTest() {
      Goods[] goods = new Goods[4];
      goods[0] = new Goods("apple", 5.13);
      goods[1] = new Goods("basketball", 130.99);
      goods[2] = new Goods("bag", 999);
      goods[3] = new Goods("banana", 5.13);
      Arrays.sort(goods);
  
      System.out.println(Arrays.toString(goods)); // [Goods{name='apple', price=5.13}, Goods{name='banana', price=5.13}, Goods{name='basketball', price=130.99}, Goods{name='bag', price=999.0}]
  }
  ```

#### 9.3.2 Comparator定制排序

> 使用场景

- 元素类型没有实现Comparable接口，且又不方便修改代码
- 虽实现了Comparable接口，但是compareTo(Object o)方法中的排序规则不适用于当前排序

> 使用方法

实现`Comparator`接口，并重写`compare(Goods o1, Goods o2)`方法

重写compare(Goods o1, Goods o2)方法的规则与Comparable接口的compareTo(Object o)规则一致。

> 例子

```java
@Test
public void comparatorTest() {
    Goods[] goods = new Goods[4];
    goods[0] = new Goods("apple", 5.13);
    goods[1] = new Goods("basketball", 130.99);
    goods[2] = new Goods("bag", 999);
    goods[3] = new Goods("banana", 5.13);

    // 按照价格倒序排序。如果价格相等，按照商品名称倒序排序
    Arrays.sort(goods, new Comparator<Goods>() {
        @Override
        public int compare(Goods o1, Goods o2) {
            if (o1.getPrice() > o2.getPrice()) {
                return -1;
            } else if (o1.getPrice() < o2.getPrice()) {
                return 1;
            } else {
                return -o1.getName().compareTo(o2.getName());
            }
        }
    });
    System.out.println(Arrays.toString(goods)); // [Goods{name='bag', price=999.0}, Goods{name='basketball', price=130.99}, Goods{name='banana', price=5.13}, Goods{name='apple', price=5.13}]
}
```

### 9.4  BigInteger与BigDecimal

- BigInteger可以表示不可变的任意精度的整数。

- BigDecimal支持不可变的、任意精度的有符号十进制定点数。

## 10 枚举类&注解

==JDK5.0新特性==

### 10.1 枚举类

> 使用场景

- 类的对象只有有限个且确定

  如周一到周日、支付方式、季节、订单状态等

- 当需要定义一组常量时，强烈建议使用枚举类

==如果枚举类中只有一个对象，则可以作为单例模式的实现方式==

#### 10.1.1 JDK5.0之前枚举类的使用

==jdk5.0之前，需要自定义枚举类==，例子如下：

```java
/**
 * 枚举类的使用
 * 方式一：jdk5.0之前，自定义枚举类
 * @Author tth
 * @Date 2022/12/8 10:24
 */
public class SeasonTest {

    /**
    * 测试方法
    */
    @Test
    public void test1() {
        Season summer = Season.SUMMER;
        System.out.println(summer.toString());
    }
}

/**
 * 自定义季节枚举类
 */
class Season {
    // 1.声明季节的属性
    private final Integer seasonCode;
    private final String seasonName;
    private final String seasonDesc;

    // 2.私有化构造器
    private Season(Integer seasonCode, String seasonName, String seasonDesc) {
        this.seasonCode = seasonCode;
        this.seasonName = seasonName;
        this.seasonDesc = seasonDesc;
    }

    // 3.提供当前枚举类的对象，修饰符为public static final
    public static final Season SPRING = new Season(1001, "春天", "春暖花开");
    public static final Season SUMMER = new Season(1002, "夏天", "烈日炎炎");
    public static final Season AUTUMN = new Season(1003, "秋天", "瓜果飘香");
    public static final Season WINTER = new Season(1004, "冬天", "白雪皑皑");

    // 4.其他诉求1：生成季节属性的getter，以获取Season对象实例的属性
    public Integer getSeasonCode() {
        return seasonCode;
    }

    public String getSeasonName() {
        return seasonName;
    }

    public String getSeasonDesc() {
        return seasonDesc;
    }

    // 4.其他诉求2：生成toString()方法
    @Override
    public String toString() {
        return "Season{" +
                "seasonCode=" + seasonCode +
                ", seasonName='" + seasonName + '\'' +
                ", seasonDesc='" + seasonDesc + '\'' +
                '}';
    }
}

```

#### 10.1.2 JDK5.0之后枚举类的使用

==可以使用enum关键字定义枚举类，此时定义的枚举类默认继承于java.lang.Enum==，例子如下：

```java
public class SeasonTest1 {
    /**
     * 测试方法
     */
    @Test
    public void test1() {
        Season1 summer = Season1.SUMMER;
        // Season1中没有重写toString()，此处会调用其父类java.lang.Enum的toString()，返回常量名
        System.out.println(summer.toString());
    }
}

/**
 * 使用enum关键字定义枚举类
 */
enum Season1 {
    // 1.提供当前枚举类的对象，多个对象之间用“,”隔开，末尾对象用“;”结束
    SPRING(1001, "春天", "春暖花开"),
    SUMMER(1002, "夏天", "烈日炎炎"),
    AUTUMN(1003, "秋天", "瓜果飘香"),
    WINTER(1004, "冬天", "白雪皑皑");

    // 2.声明季节的属性
    private final Integer seasonCode;
    private final String seasonName;
    private final String seasonDesc;

    // 3.私有化构造器
    Season1(Integer seasonCode, String seasonName, String seasonDesc) {
        this.seasonCode = seasonCode;
        this.seasonName = seasonName;
        this.seasonDesc = seasonDesc;
    }

    // 4.其他诉求1：生成季节属性的getter，以获取Season对象实例的属性
    public Integer getSeasonCode() {
        return seasonCode;
    }

    public String getSeasonName() {
        return seasonName;
    }

    public String getSeasonDesc() {
        return seasonDesc;
    }

}
```

#### 10.1.3 java.lang.Enum中常用方法

- toString()：返回当前对象常量的名称

  ```java
   @Test
  public void test1() {
      Season1 summer = Season1.SUMMER;
      // Season1中没有重写toString()，此处会调用其父类java.lang.Enum的toString()，返回常量名
      System.out.println(summer.toString()); // SUMMER
  }
  ```

- values()：返回枚举类型的对象数组。可以借助该方法遍历所有的枚举值

  ```java
  @Test
  public void test2() {
      Season1[] season1s = Season1.values();
      for (int i = 0; i < season1s.length; i++) {
          System.out.println(season1s[i]); // SPRING SUMMER AUTUMN WINTER 
      }
  }
  ```

- valueOf(String str)：将字符串转为对应的枚举类的对象。要求字符串必须是枚举类对象的名字，否则报IllegalArgumentException异常

  ```java
  @Test
  public void test3() {
      Season1 spring = Season1.valueOf("SPRING");
      System.out.println(spring); // SPRING
  }
  ```

#### 10.1.4 使用enum关键字定义的枚举类实现接口

- 情况一：实现接口，在enum类中实现抽象方法

  和普通类一样

  ```java
  // 定义接口
  interface Info {
      void show();
  }
  /**
   * 使用enum关键字定义枚举类
   */
  enum Season1 implements Info{
      // 1.提供当前枚举类的对象，多个对象之间用“,”隔开，末尾对象用“;”结束
      SPRING(1001, "春天", "春暖花开"),
      SUMMER(1002, "夏天", "烈日炎炎"),
      AUTUMN(1003, "秋天", "瓜果飘香"),
      WINTER(1004, "冬天", "白雪皑皑");
      
  	...
      
      // 重写接口中的方法
      @Override
      public void show() {
          System.out.println("这是季节的枚举类");
      }
  }
  
  ```

- 情况二：实现接口，让枚举类的对象分别实现抽象方法

  ```java
  interface Info {
      void show();
  }
  /**
   * 使用enum关键字定义枚举类
   */
  enum Season1 implements Info{
      // 1.提供当前枚举类的对象，多个对象之间用“,”隔开，末尾对象用“;”结束
      SPRING(1001, "春天", "春暖花开"){
          @Override
          public void show() {
              System.out.println("春眠不觉晓");   
          }
      },
      SUMMER(1002, "夏天", "烈日炎炎"){
          @Override
          public void show() {
              System.out.println("接天莲叶无穷碧");
          }
      },
      AUTUMN(1003, "秋天", "瓜果飘香"){
          @Override
          public void show() {
              System.out.println("千里共婵娟");
          }
      },
      WINTER(1004, "冬天", "白雪皑皑"){
          @Override
          public void show() {
              System.out.println("墙角数枝梅");
          }
      };
  
      ...
  }
  ```

### 10.2 注解

#### 10.2.1 注解（Annotation）概述

==JDK5.0新特性==

- 注解可以像修饰符一样被使用，可以用于**修饰包、类、构造器、方法、成员变量、参数、局部变量**的。这些信息被保存在Annotation的“name=value”对中

#### 10.2.2 常见的Annotation示例

> 文档注解

- @Author
- @Date
- ...

> JDK内置注解

- @Override：只能用于方法。要求方法是重写的父类方法，或者是实现的接口的方法

- @Deprecated：可以修改类、方法、属性、构造器。表示被修饰的内容已过时，但是仍然可以用

- @SuppressWarning：抑制编译器警告

  ```java
  // 在eclipse中，如下定义list，在没有使用之前，会有“未使用”、“未指明泛型”警告。如下添加@SuppressWarning注解，可以消除警告
  @SuppressWarnings({"unused", "rawtypes"})
  ArrayList list = new ArrayList();
  ```

#### 10.2.3 自定义Annotation

> 步骤

- 注解声明为@interface
- 内部定义成员，如果只有一个，通常使用value表示
- 可以指定成员的默认值，用default定义
- 如果自定义的注解没有成员，表明是一个标识作用

如果注解有成员，在使用注解时，需要指明成员的值。

==自定义注解必须配上注解的信息处理流程（使用反射）才有意义==，会在后边讲

> 示例

```java
public @interface MyAnnotation {
    String value() default "Hello Annotation";
}
```

#### 10.2.4 JDK中的元注解

> 定义：元注解

JDK的元注解是对现有注解进行解释说明的注解

> 引申：元数据

对现有数据修饰的数据。如`String name = "hello"`，“hello”是核心数据，“String”、“name”都是元数据。

> JDK中的元注解

- （关注）@Retention：指明被修饰注解的生命周期。

  @Retention的value值是RetentionPolicy类型的成员变量。RetentionPolicy枚举类中各个值的含义如下：

  - RetentionPolicy.SOURCE：源文件中有效，编译器直接丢掉
  - RetentionPolicy.CLASS（默认）：在class文件中有效，运行时JVM不会保留
  - RetentionPolicy.RUNTIME：运行时有效。**当运行时，JVM会保留注释，程序可以通过反射获取注解**

- （关注）@Target：指明被修饰的注解可以修饰哪些元素

  @Target的value值是ElementType[]。ElementType枚举类常用值如下：

  - TYPE：可以修饰类、接口、注解、枚举类
  - FIELD：修饰属性
  - METHOD：修饰方法
  - PARAMETER：修饰参数
  - CONSTRUCTOR：修饰构造器
  - LOCAL_VARIABLE：修饰局部变量
  - ANNOTATION_TYPE：修饰注解
  - PACKAGE：修饰包
  - TYPE_PARAMETER：==JDK8新特性==。类型注解
  - TYPE_USE：==JDK8新特性==。类型注解。

- （了解）@Documented：表示被修饰的注解将被javadoc工具提取生成文档。默认情况下，javadoc是不包括注解的

  ==定义为Documented的注解必须设置Retention值为RUNTIME==

- （了解）@Inherited：表示被修饰的注解具有继承性

  如果一个父类使用了被Inherited修饰的注解，则子类就默认使用了该注解。

#### 10.2.5 利用反射获取注解信息

在反射部分提及

#### 10.2.6 JDK8中注解新特性

##### 10.2.6.1 可重复注解

在一个类或者属性或其他结构上使用多次相同注解

- JDK8之前实现可重复注解

  ```java
  // 可重复注解的使用
  @MyAnnotations({@MyAnnotation("hello"), @MyAnnotation("hi")})
  class Person {
      private String name;
      private Integer age;
  
      public Person() {
      }
  
      public String getName() {
          return name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  
      public Integer getAge() {
          return age;
      }
  
      public void setAge(Integer age) {
          this.age = age;
      }
  }
  
  // 定义MyAnnotation注解
  @Target({TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE})
  @Retention(RetentionPolicy.RUNTIME)
  public @interface MyAnnotation {
      String value() default "Hello Annotation";
  }
  
  // 定义MyAnnotations注解
  public @interface MyAnnotations {
      MyAnnotation[] value();
  }
  ```

- JDK8新特性实现可重复注解

  ```java
  // 可重复注解的使用
  @MyAnnotation("hello")
  @MyAnnotation("hi")
  class Person {
      private String name;
      private Integer age;
  
      public Person() {
      }
  
      public String getName() {
          return name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  
      public Integer getAge() {
          return age;
      }
  
      public void setAge(Integer age) {
          this.age = age;
      }
  }
  
  // 定义MyAnnotation。重点是使用@Repeatable修饰
  @Target({TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE})
  @Retention(RetentionPolicy.RUNTIME)
  @Repeatable(MyAnnotations.class)
  public @interface MyAnnotation {
      String value() default "Hello Annotation";
  }
  
  // 定义MyAnnotations。注意MyAnnotations注解的@Target = MyAnnotation注解的@Target， 注意MyAnnotations注解的@Inherited = MyAnnotation注解的 @Inherited
  @Target({TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE})
  @Retention(RetentionPolicy.RUNTIME)
  public @interface MyAnnotations {
      MyAnnotation[] value();
  }
  ```

##### 10.2.6.2 类型注解

JDK8之前，注解只能是在声明的地方使用；JDK8之后，注解可以应用在任何地方。

JDK8之后，元注解@Target的参数类型ElementType枚举值多了两个：

- ElementType.TYPE_PARAMETER：表示该注解能写在类型变量的声明语句中（如泛型声明）

  ```java
  // 声明注解
  @Target({TYPE_PARAMETER})
  @Retention(RetentionPolicy.CLASS)
  public @interface MyAnnotation {
      String value() default "Hello Annotation";
  }
  
  // 使用注解：使用注解修饰泛型变量
  class Generic <@MyAnnotation T> {
  
  }
  ```

- ElementType.TYPE_USE：表示该注解能写在使用类型的任何语句中

  ```java
  // 声明注解
  @Target({TYPE_USE})
  @Retention(RetentionPolicy.CLASS)
  public @interface MyAnnotation {
      String value() default "Hello Annotation";
  }
  
  // 使用注解
  class Generic <T> {
      // 修饰异常
      public void show() throws @MyAnnotation RuntimeException{
          // 修饰变量
          ArrayList<@MyAnnotation String> list = new ArrayList<>();
          int num = (@MyAnnotation int) 10L;
      }
  }
  ```

## 11 Java集合

### 11.1 概述

> 数组在存储多个数据方面的特点

- 数组一旦初始化，长度就确定了
- 数组一旦定义好，其元素的类型也就确定了

> 数组在存储多个数据方面的缺点

- 数组一旦初始化，长度就不可修改了，无法实现扩容
- 数组中提供的方法非常有限，对于添加、删除、插入数据等操作，非常不便
- 获取数组中实际元素的个数的需求，数组中没有线程的属性或方法可用
- 数组存储数据的特点：有序、可重复。对于无序、不可重复的需求，不能满足

### 11.2 Java集合框架

> Java集合可以分为Collection和Map两种体系：

- Collection接口：单列集合，用来存储一个一个的对象
  - List接口：存储的是元素有序、可重复的集合
    - 实现类：ArrayList、LinkedList、Vector
  - Set接口：存储的是元素无序、不可重复的集合
    - 实现类：HashSet、LinkedHashSet、TreeSet
- Map接口：双列集合，保存具有映射关系“key-value对”的集合
  - 实现类：HashMap、LinkedHashMap、TreeMap、HashTable、Properties

> 注意事项

- 集合Collection中存储的如果是自定义类的对象，需要自定义类重写的方法：
  - 如果Collection的实现类是List的子类，需要重写equals()
  - 如果Collection的实现类是Set的子类HashSet、LinkedHashSet，需要重写equals()和hashCode()
  - 如果Collection的实现类是Set的子类TreeSet，需要提供排序方法。排序方法的提供有如下两种方法
    - 放入TreeSet的元素的所在类实现Comparable接口，并重写compareTo()
    - 创建Comparator实现类，在初始化TreeSet时作为参数传入

### 11.3 Collection接口中的方法

- add(Object o)： 将元素o添加到集合中

- size()：获取集合中元素的个数

- addAll(Collection c)：将集合c中的元素添加到当前集合中

- isEmpty()：判断当前集合是否为空，即判断当前集合中的size()是否等于0

- clear()：清空集合中的元素

- contains(Object o)：判断当前集合是否包含元素o

  比较时，调用的是元素o所对应的类的equals()方法

  ```java
  public class CollectionTest {
      @Test
      public  void test1() {
          Collection coll = new ArrayList();
          coll.add(123);
          coll.add(new String("hello"));
          coll.add(new Person("Jerry", 18));
          coll.add(new Student("XiaoMing", 10, 80));
  
          System.out.println(coll.contains(123)); // true
          System.out.println(coll.contains("hello")); // true.String重写了equals()方法，比较的是内容
          System.out.println(coll.contains(new Person("Jerry", 18))); // false，未重写equals()，比较的是地址值
          System.out.println(coll.contains(new Student("XiaoMing", 10, 80))); // true。重写了equals()，比较的是内容
      }
  }
  
  class Person {
      private String name;
      private int age;
  	...
  }
  class Student extends Person {
      private int score;
  	...
  
      @Override
      public boolean equals(Object o) {
          if (this == o) return true;
          if (o == null || getClass() != o.getClass()) return false;
          Student student = (Student) o;
          return score == student.score && getName().equals(student.getName()) && getAge() == student.getAge();
      }
  }
  
  ```

- containsAll(Collection c)：判断c中的元素是否都在当前结合中

- remove(Object o)：在当前集合中删除元素o，返回是否移除成功

  需要调用元素o所对应的类的equals()

- removeAll(Collection c)：在当前集合中删除集合c中所有元素

  需要调用c中所有元素对应的类的equals()方法

- retainAll(Collection c)：计算当前集合和集合c的交集（结果赋值给当前集合），返回值为boolean类型，即当前集合和集合c是否有交集

  如果二者没有交集，当前集合被修改为[]，返回值为false

- equals(Object o)：判断当前集合和o是否相等。

  调用的是元素o锁对应的类中的equals()

- hashCode()：返回当前对象的hash值

- toArray()：集合 ---> 数组

  Arrays.asList(Object[] o)：数组 ---> 集合

  ```java
  List list = Arrays.asList(new String[]{"AA", "BB", "CC"});
  System.out.println(list); // 输出[AA, BB, CC]
  
  List list1 = Arrays.asList(new int[]{1, 2, 3}); // 此处会把new int[]当做一个元素放到list1中
  System.out.println(list1); // 输出[[I@66cd51c3]
  
  List list2 = Arrays.asList({1, 2, 3});
  System.out.println(list2); // 输出[1, 2, 3]
  ```

- iterator()：返回Iterator接口的实例，用于遍历集合元素

### 11.4 Iterator迭代器接口

> 概述

- Iterator对象称为迭代器（设计模式的一种），主要用于遍历Collection集合中的元素
- ==GOF给迭代器模式的定义为==：提供一种方法访问一个容器对象中各个元素，而又不暴露该对象的内部细节。**迭代器模式，就是为容器而生**
- Collection接口继承了java.lang.Iterator接口，该接口有一个iterator()，所有实现了Collection接口的集合类都有一个iterator()， 用以返回一个实现了Iterator接口的对象
- Iterator仅用于遍历集合
- 集合对象每次调用iterator()都得到一个==全新的==迭代对象，==默认游标都在集合的第一个元素**之前**==

> 常用方法

- hasNext()：判断是否还有下一个元素

- next()：获取下一个元素

  ==调用next()执行的操作==：

  - 指针下移
  - 将下移后的集合位置上的元素返回

- remove()：在遍历的时候，删除集合中的元素。

  如果还未调用next()或者在上一次调用next()之后已经调用了remove()，再调用remove()，即连续两次调用remove()，会报IllegalStateException。

> 举例

```java
// 遍历 
@Test
public void test() {
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(new String("hello"));
    coll.add(new Person("Jerry", 18));
    coll.add(new Student("XiaoMing", 10, 80));

    Iterator iterator = coll.iterator();
    while (iterator.hasNext()) {
        System.out.println(iterator.next());
    }
}
// 移除元素
@Test
public void test2() {
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(new String("hello"));
    coll.add(new Person("Jerry", 18));
    coll.add(new Student("XiaoMing", 10, 80));

    Iterator iterator = coll.iterator();
    while (iterator.hasNext()) {
        Object o = iterator.next();
        // 移除元素
        if ("hello".equals(o)) {
            iterator.remove();
        }
    }

    // 重新遍历
    Iterator iterator1 = coll.iterator();
    while (iterator1.hasNext()) {
        System.out.println(iterator1.next());
    }
}
```

### 11.5 List接口

#### 11.5.1 ArrayList源码分析

> JDK7中的ArrayList

```java
ArrayList list = new ArrayList(); // 底层创建了长度是10的Object[]数组elementData

list.add(123); // elementData[0] = new Integer(123)

...

list.add(11); // 如果此次的添加导致底层elementData数组容量不够，则扩容。默认情况下，扩容为原来的容量的**1.5倍**，同时需要将原有数组中的数据复制到新的数组中。
```

==结论==：JDK7中，如果能确定list的长度，建议使用带参构造器ArrayList list = new ArrayList(int capacity);

> JDK8中的ArrayList

```java
ArrayList list = new ArrayList(); // 底层Object[] elementData初始化为{}，并没有创建长度为10的数组

list.add(123); // 第一次调用add()时，底层会创建长度为10的数组，并执行如下操作elementData[0] = new Integer(123)

...

 // 后续操作与JDK7中无异
```

> 小结

JDK7中的ArrayList的对象创建类似于单例的饿汉式，JDK8中的ArrayList对象的创建类似于单例的懒汉式，**延迟了数组的创建，节省内存**。

#### 11.5.2 LinkedList源码分析

```java
LinkedList list = new LinkedList(); // 内部声明了Node类型的first和last属性

list.add(123); // 将123封装到Node中，创建Node对象
```

其中Node的定义，体现了双向链表的说法。

```java
private static class Node<E> {
    E item; // 当前元素的值
    Node<E> next; // 指前指针
    Node<E> prev; // 指后指针

    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}
```

#### 11.5.3 Vector的源码分析

```java
Vector vector = new Vector<>(); // JDK7和JDK8中通过Vector()创建对象时，都创建了长度为10的数组

// 在扩容方面，默认扩容为原来的**2倍**。
```

#### 11.5.4 List接口中的方法

- Collection接口中的API仍可用
- void add(int index, Object ele)：在index位置插入ele元素
- boolean addAll(int index, Collection eles)：在index位置开始将eles中的元素全部加进来
- Object get(int index)：获取index位置的元素
- int indexOf(Object ele)：获取元素ele在集合中首次出现的位置。如果不存在，返回-1
- int lastindexOf(Object ele)：获取元素ele在集合中最后一次出现的位置。如果不存在，返回-1
- Object remove(int index)：移除index位置的元素，并返回此元素
- Object set(int index, Object ele)：将index位置的元素设置为ele
- List subList(int fromIndex, int toIndex)：返回**[fromIndex, toIndex)**位置处的子集合，原集合没有变化

### 11.6 Set接口

#### 11.6.1 概述

==Set接口：存储无序的、不可重复的数据==

Set中没有额外定义方法，使用的都是Collection接口中的方法

> 分类

- HashSet：作为Set接口的主要实现类；线程不安全的，可以存储null；底层是数组+链表的结构
  - LinkedHashSet：作为HashSet的子类，在遍历内部数据时，可以按照添加的顺序遍历
- TreeSet：底层使用的是二叉树（红黑树）存储，放入TreeSet的元素，必须是同一个类的对象，可以按照添加对象的指定属性进行排序

> Set存储的无序性

以HashSet为例

- 无序性 $\neq$ 随机性
- 存储的数据在底层数组中并非按照数组索引的顺序添加，而是根据数据的哈希值决定的

> Set存储的不可重复性

以HashSet为例

保证添加的元素按照equals()判断时，不能返回true，确保相同的元素只能添加一个。

**Set中存储元素要想实现不可重复性，需要重新该元素对应类的equals()和hashCode()方法。**

#### 11.6.2 HashSet

> HashSet添加元素的过程

当向HashSet中添加元素a时，首先调用元素 a所在类的hashCode()，计算元素a的哈希值，接下来用此哈希值通过某种算法计算出在HashSet底层数组中的存放位置（即索引位置），然后判断此位置上是否应有元素：

- 如果此位置上没有其他元素，则**元素a添加成功**；---情况1
- 如果此位置上有其他元素b（或者以链表形式存在的多个元素），则比较元素a与元素b的哈希值：
  - 如果hash值不相同，**元素a添加成功**；---情况2
  - 如果hash值相同，进而需要调用元素a所在类的equals()：
    - equals()返回true，**元素a添加失败**；
    - equals()返回false，**元素a添加成功**；---情况3

对于添加成功的情况2和情况3而言，元素a与已经存在指定索引位置上的数据以链表的方式存储。

JDK7：元素a放到数组中，指向原来的元素

JDK8：原来的元素放在数组中，指向a元素

总结：7上8下

>HashSet的特点

- 不能保证元素的顺序排列
- HashSet不是线程安全的
- 集合元素可以是null

> HashSet判断两个元素相等的标准

两个对象通过hashCode()比较相等，且两个对象的equals()返回值也相等

> 使用HashSet的主意事项

对于存放在Set容器中的对象，对应的类一定要重写equals()和hashCode()，以实现对象相等规则。即“==相等的对象必须有相等的散列码（哈希值）==”

> 重写hashCode()的基本原则 

- 在程序运行时，同一个对象多次调用hashCode()，应该返回相同的值
- 当两个对象的equals()返回true时，这两个对象的hasCode()的返回值也相等
- 对象中用作equals()方法比较的属性，都应该用来计算hash值

==建议使用快捷键自动生成！！！==

==两个对象相同，hash值一定相等；hash值相等，两个对象不一定相同==

#### 11.6.3 LinkedHashSet

- LinkedHashSet作为HashSet的子类，在添加数据的同时，每个数据还维护了两个变量，用以记录当前数据的前一个数据和后一个数据。
- 在遍历内部数据时，可以按照添加的顺序遍历。

- ==优点==：对于频繁的遍历操作，LinkedHashSet效率高于HashSet。

#### 11.6.4 TreeSet

> 特点

- 底层是二叉树（红黑树）
- 可以按照添加对象的指定属性进行排序
- 有序，查询比list快

> 注意事项

- 向TreeSet中添加的数据，要求是相同类的对象

- 向TreeSet中添加的数据前，需要定义TreeSet中元素的排序方式：自然排序或者定制排序

  - 使用自然排序（实现Comparable接口）

    ```java
    public class TreeSetTest {
        @Test
        public void test1() {
            TreeSet treeSet = new TreeSet();
            treeSet.add(new User("Jack", 12));
            treeSet.add(new User("Janny", 22));
            treeSet.add(new User("Jery", 23));
            treeSet.add(new User("Jey", 34));
            treeSet.add(new User("Jane", 10));
    
            Iterator iterator = treeSet.iterator();
            while (iterator.hasNext()) {
                System.out.println(iterator.next());
            }
        }
    }
    
    class User implements Comparable{
        private String name;
        private int age;
    
        ...
    
        /**
         * 按照名称有小到大排序。名称相同，按照年龄有小到大排
         * @param o
         * @return
         */
        @Override
        public int compareTo(Object o) {
            if (o instanceof User) {
                User user = (User) o;
                int compared = this.name.compareTo(user.getName());
                if (compared == 0) {
                    compared = Integer.compare(this.age, user.age);
                }
                return compared;
            }
    
            throw new RuntimeException("输入的数据不匹配");
        }
    
        ...
    }
    ```

  - 使用定制排序（实现Comparator接口）

    ```java
    public class TreeSetTest {
        @Test
        public void test2() {
            Comparator comparator = new Comparator() {
                // 按照年龄由大到小排序
                @Override
                public int compare(Object o1, Object o2) {
                    if (o1 instanceof User && o2 instanceof User) {
                        User user1 = (User) o1;
                        User user2 = (User) o2;
                        return -Integer.compare(user1.getAge(), user2.getAge());
                    }
    
                    throw new RuntimeException("输入的数据不匹配");
                }
            };
    
            TreeSet treeSet = new TreeSet(comparator);
            treeSet.add(new User("Jack", 12));
            treeSet.add(new User("Janny", 22));
            treeSet.add(new User("Jery", 23));
            treeSet.add(new User("Jey", 34));
            treeSet.add(new User("Jane", 10));
    
            Iterator iterator = treeSet.iterator();
            while (iterator.hasNext()) {
                System.out.println(iterator.next());
            }
        }
    }
    
    class User {
        private String name;
        private int age;
    	...
    }
    ```

> TreeSet中比较两个对象是否相同的标准

- 使用自然排序：比较两个对象是否相同，即为元素所在类的compareTo()返回值是否为0
- 使用定制排序：比较两个对象是否相同，即为创建的 Comparator实现类中compare()返回值是否是0

==比较的不再是hashCode()和equals()==

### 11.7 Map接口

#### 11.7.1 概述

> Map接口简介

- Map接口：存储双列数据，存储的是key-value键值对

  - HashMap类：主要实现类；线程不安全，效率比Hashtable高；可以存储值为null的key和value；底层：数组+链表（JDK7及之前）、数组+链表+红黑树（JDK8）

    - LinkedHashMap类：比HashMap多了一对“指针”，用来指向前一个和后一个元素，保证在遍历map元素时，可以按照添加的顺序实现遍历；对于频繁的遍历操作，LinkedHashMap效率比HashMap高

  - TreeMap类：保证按照添加的key-value对进行排序，实现排序遍历。此时考虑key的自然排序或者定制排序，要求key是同一个类创建的对象

    ​							底层使用的是红黑树

  - Hashtable类：古老实现类；线程安全，效率比HashMap低；不可以存储值为null的key和value

    - Properties类：常用来处理配置文件。key和value都是String类型

> Map中结构的理解

以HashMap为例

- Map中的key：无序的、不可重复的，使用Set存储所有的key；key所在的类要重写equals()和hashCode()；
- Map中的value：无序的、可重复的，使用Collection存储所有的value；value所在的类需要重写equals()；
- 一个键值对构成一个Entry对象；
- Map中的entry：无序的、不可重复的，使用Set存储所有的entry 。

#### 11.7.2 HashMap底层实现原理

> JDK7中HashMap实现原理

- `HashMap map = new HashMap();`：实例化之后，底层创建了一个长度是16的一维数组Entry[] table
- `map.add(key1, value1) `：
  - 首先，调用key1所在类的hashCode()计算key1的哈希值，此哈希值经过某种算法计算后，得到Entry数组中的存放位置
  - 如果此位置上的数据是空，此时key1-value1存放成功  --->情况1
  - 如果此位置上的数据不为空，意味着此位置上存在一个或多个数据（以链表形式存在），比较key1和已存在数据的哈希值：
    - 如果key1的哈希值与此位置上的数据的哈希值都不一样，此时key1-value1存放成功  --->情况2
    - 如果key1的哈希值与此位置上的某一个数据(key2,value2)的哈希值相同，则调用key1所在类的equals()方法进行比较：
      - 如果equals()返回false，此时key1-value1存放成功  --->情况3
      - 如果equals()返回true，使用value1替换value2
- 补充：关于情况2和情况3，此时key1-value1和原来的数据以链表的形式存在，由key1-value1指向原数据
- 关于扩容：在不断添加的过程中，会涉及到扩容问题。
  - 扩容时间：当超出临界值（注意不是数组的长度），且要存放数据的位置非空时，进行扩容 
  - 默认扩容为原来的2倍，并将原有的数据复制过来

> JDK8相较于JDK7在底层实现方面的不同

- `HashMap map = new HashMap();`：底层没有创建长度为16的数组。且底层数组是Node[]，而非Entry

- `map.add(key1, value1) `：如果是首次调用，会先创建长度为16的数组

- JDK7底层结构只有**数组+链表**，JDK8中底层结构是**数组+链表+红黑树**。

  当数组的**某一个索引位置上的元素以链表形式存在的数据个数 > 8 且当前数组的长度 > 64**时，此时**此索引位置上**的所有数据改为使用红黑树

> HashMap中常用常量

- `DEFAULT_INITIAL_CAPACITY`：HashMap默认容量，16
- `DEFAULT_LOAD_FACTOR`：默认加载因子，0.75
- `threshold`：扩容的临界值。threshold = DEFAULT_INITIAL_CAPACITY * DEFAULT_LOAD_FACTOR
- `TREEIFY_THRESHOLD`：Bucket中链表长度大于该默认值时，转为红黑树，8
- `MIN_TREEIFY_CAPACITY`：Bucket中Node被树化时最小的hash表容量，64

#### 11.7.3 LinkedHashMap底层实现原理

LinkedHashMap底层使用的结构与HashMap相同，唯一的区别是LinkedHashMap内部提供了Entry用来替换HashMap中的Node。

LinkedHashMap.Entry类中比HashMap.Node多了两个变量，用来记录当前元素的前一个和后一个元素，确保能够记录元素的添加顺序

```java
static class Entry<K,V> extends HashMap.Node<K,V> {
    Entry<K,V> before, after;
    Entry(int hash, K key, V value, Node<K,V> next) {
        super(hash, key, value, next);
    }
}
```

#### 11.7.4 Map接口中的方法

> 增删改

- Object put(Object key, Object value)：将key-value添加到（修改）当前map中
- Object putAll(Map m)：将m中的key-value添加到当前map中
- Object remove(Object key)：移除指定的key的key-value对，并返回对应的value
- void clear()：清空当前map

> 查询

- Object get(Object key)：获取key对应的value
- boolean containsKey(Object key)：判断是否包含指定的key
- boolean containsValue(Object value)：判断是否包含指定的value
- int size()：返回map中key-value对的个数
- boolean isEmpty()：判断当前map是否为空
- boolean equals(Object obj)：判断当前map和obj是否相等

> 遍历

- Set keySet()：返回所有key构成的Set集合

- Collection values()：返回所有的value集合

- Set entrySet()：返回所有的key-value对

  entrySet()获得的集合中的元素都是Map.Entry，可以强转

#### 11.7.5 TreeMap的使用

- 向TreeMap中添加key-value，需要保证key是由同一个类创建的对象
- 因需要对key进行排序，因此要么key所在的类需要实现Comparable接口，要么在在创建TreeMap时将Comparator实现类作为参数传入

使用和TreeSet类似。

#### 11.7.6 Properties

- Properties是Hashtable的子类，该对象用于处理属性文件

- Properties的key和value都是String类型

- 例子

  - jdbc.properties

    ```properties
    name=唐天华
    password=123456
    ```

  - PropertiesTest.java

    ```java
    public class PropertiesTest {
        public static void main(String[] args) {
            FileInputStream fis = null;
            try {
                Properties prop = new Properties();
                fis = new FileInputStream("jdbc.properties");
                // 加载流对应的文件
                prop.load(fis);
    
                // 获取配置文件中指定key对应的value值
                String name = prop.getProperty("name");
                String password = prop.getProperty("password");
                System.out.println("name="+name+", password="+password);
    
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                if (fis != null) {
                    try {
                        fis.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
    
        }
    }
    
    ```

### 11.8 Collections工具类

==Collections是用来操作Collection和Map的工具类==

> 排序相关

- `void reverse(List<?> list)`：反转list中元素的顺序

- `void shuffle(List<?> list)`：对list中的元素进行随机排序

- `void sort(List<T> list)`：按照list中元素的自然顺序进行排序

- `void sort(List<T> list, Comparator<? super T> c)`：根据指定的Comparator对list中的元素进行排序

- `void swap(List<?> list, int i, int j) `：交换list中第i个和第j个元素的位置

- `T max(Collection<? extends T> coll)`：根据元素的自然顺序，返回集合中的最大元素

- `T max(Collection<? extends T> coll, Comparator<? super T> comp)`：根据指定的Comparator的指定顺序，返回集合中的最大元素

- `T min(Collection<? extends T> coll)`：根据元素的自然顺序，返回集合中的最小元素

- `T min(Collection<? extends T> coll, Comparator<? super T> comp)`：根据指定的Comparator的指定顺序，返回集合中的最小元素

- `int frequency(Collection<?> c, Object o)`：返回指定集合中指定元素出现的次数

- `void copy(List<? super T> dest, List<? extends T> src)`：将src中的内容赋值到的dest中

  使用此方法时，需要保证dest.size() >= src.size()

  ```java
  @Test
      public void test1() {
          List list = new ArrayList();
          list.add(11);
          list.add(989);
          list.add(454);
          list.add(89);
          list.add(23);
  
          // 错误写法，会报java.lang.IndexOutOfBoundsException: Source does not fit in dest 异常
  //        List dest = new ArrayList();
  //        Collections.copy(dest, list);
  
          // 正确写法
          List dest = Arrays.asList(new Object[list.size()]);
          Collections.copy(dest, list);
          System.out.println(dest);
      }
  ```

- `boolean replaceAll(List<T> list, T oldVal, T newVal)`：用newVal替换list中的oldVal

> 同步控制

Collections中提供了多个synchronizedXxx()，用来将指定集合包装成线程同步的集合，从而解决多线程并发访问集合时的线程安全问题。synchronizedXxx()的返回结果即为线程安全的。

## 12 泛型

==JDK5.0新增特性==

### 12.1 概述

> 定义

所谓泛型，就是允许在定义类、接口时通过一个标识表明类中某个属性的类型、某个方法的返回值、参数类型。这个类型参数将在使用时（如：继承或者实现这个接口，用这个类型声明变量、创建对象时）确定（即传入实际的类型参数，也称为类型实参）。

### 12.2 自定义泛型结构

> 自定义泛型类、泛型接口

- 泛型类、泛型接口可能有多个参数，此时应该将多个参数放到一对尖括号中，并用逗号隔开。如<E1, E2, E3>

- 泛型如果不指定，将被擦除，单行对应的类型均按照Object处理，但不等价于Object

- JDK7中，实例化泛型类时可以简化为：`ArrayList<String> list = new ArrayList<>()`

- 泛型不能是基本数据类型，可以使用包装类替换

- 泛型类或者泛型接口中，不能在静态方法中使用类的泛型

  泛型的具体类型需要在类实例化的时候指定，静态方法在类实例化之前就可以被调用

- 异常类不能有泛型

- 创建泛型数组：`T[] arr = (T[]) new Object[10]`

  不可以使用 T[] arr = new T[10]

- 父类有泛型，子类可以选择保留泛型，也可以选择指定泛型类型

  ```java
  class Father<T1, T2>{}
  ```

  - 子类不保留父类的泛型：按需实现

    - 没有类型（泛型会被擦除）

      ```java
      class Son1 extends Father{}
      // 等价于 class Son1 extends Father<Object, Object>
      ```

    - 具体类型

      ```java
      class Son2 extends Father<Integer, String> {}
      ```

  - 子类保留父类泛型：泛型子类

    - 全部保留

      ```java
      class Son3<T1, T2> extends Father<T1, T2>{}
      ```

    - 部分保留

      ```java
      class Son4<T2> extends Father<Integer, T2>{}
      ```

> 自定义泛型方法

- 泛型方法，是在方法中出现了泛型的结构。该泛型结构与所在类的泛型参数没有任何关系

  换句话说，泛型方法所在的类是不是泛型类都没有关系

- 泛型方法可以声明为静态的。

  因为泛型参数是在调用方法的时候确定的，并非实例化类的时候才确定

```java
class GenericTest<T> {
    /**
    * 定义泛型方法
    * 第一个<E> 表明泛型的类类型。如果不写，后边的E会被识别为某一个类
    */
    public <E> List<E> copyFromArray(E[] arr) {
        ArrayList<E> list = new ArrayList<>();
        for(E e: arr) {
            list.add(e)
        }
        return list;
    }
}
```

### 12.3 泛型在继承方面的体现

- 类A是类B的父类，`G<A>`和`G<B>`不具备子父类关系，二者是并列关系。即：

  ```java
  public void test() {
      Object o = null;
      String s = null;
      o = s; // 代码正确
      
      List<Object> oList = null;
      List<String> sList = null;
      oList = sList; // 编译不通过
  }
  ```

  ==补充==：类A是类B的父类(接口)，那么`A<G>`是`B<G>`的父类

  ```java
  public void test() {
      List<Object> list = null;
      ArrayList<Object> aList = null;
      list = aList; // 代码正确
  }
  ```

- 类A是类B的父类，`G<A>`和`G<B>`二者共同的父类是`G<?>`

### 12.4 通配符的使用

==通配符：?==

> 类A是类B的父类，`G<A>`和`G<B>`二者共同的父类是`G<?>`

```java
public void test() {
    List<Object> oList = null;
    List<String> sList = null;
    
    List<?> list = null;
    list = oList; // 代码正确
    list = sList; // 代码正确
    
    print(oList); // 代码正确
    print(sList); // 代码正确
}

private void print(List<?> list) {
    Iterator<?> iterator = list.iterator();
    while (iterator.hasNext()) {
        System.out.println(iterator.next());
    }
}
```

> 通配符的写入与读取

```java
public void test() {
    List<String> sList = new ArrayList<>();
    sList.add("AA");
    sList.add("BB");
    sList.add("CC");
    
    List<?> list = null;
    list = sList; // 代码正确
    // 写入（添加）元素：对于List<?>除了null不能add其他数据
    list.add("DD");//编译不通过
    // 读取元素：允许读取数据，读取到的数据是Object类型
    Object o = list.get(0);
}
```

> 有限制条件的通配符

- 通配符指定上限

  上限extends：使用时指定的类型必须是继承某个类，或者实现某个接口。即<=

- 通配符指定下线

  下限super：使用时指定的类型不能小于操作的类，即>=

- 举例

  - `? extends A`

    ?可以是类A，也可以是类A的子类

  - `? super A`

    `?`可以是类A，也可以是类A的父类

  ```java
  public class Test {
      public void test() {
          List<Student> sList = null;
          List<Person> pList = null;
          List<Object> oList = null;
          
          List<? extends Person> list1 = null;
          list1 = sList;
          list1 = pList;
          list1 = oList;//编译不通过
          // 添加数据：除了null，别的不允许
          list1.add(new Student());//编译不通过
          
          List<? super Person> list2 = null;
          list2 = sList;//编译不通过
          list2 = pList;
          list2 = oList;
          // 添加数据：允许添加
          list2.add(new Person());
          list2.add(new Student());
          
      }
  }
  class Person{}
  class Student extends Person{}
  ```

## 13 IO流

### 13.1 File类的使用

> 创建File实例

- `new File(String filePath)`
- `new File(String parentPath, String childPath)`
- `new File(File filePath, String childPath)`

==File实例化之后并没有在磁盘上创建文件或者文件夹，此时只是内存层面的几个对象而已。==

> File常用方法

- `String getAgetAbsolutePath()`：获取绝对路径

- `String getPath()`：获取路径

  ```java
  File file = new File("hello.txt");
  File file1 = new File("D:\\project\\JavaSenior\\hi.txt");
  
  System.out.println(file.getPath()); // hello.txt
  System.out.println(file1.getPath()); // D:\project\JavaSenior\hi.txt
  ```

- `String getName()`：获取文件名

- `String getParent()`：获取上层文件目录路径。若无，返回null

  如果创建文件的时候，使用的是相对路径，返回的是null；如果使用的是绝对路径，则返回该文件的上级路径

  ```java
  File file = new File("hello.txt");
  File file1 = new File("D:\\project\\JavaSenior\\hi.txt");
  
  System.out.println(file.getParent()); // null
  System.out.println(file1.getParent()); // D:\project\JavaSenior
  ```

- `long length()`：获取文件长度（单位：字节）

- `long lastModified()`：获取最后一次的修改时间（单位：毫秒）

- `String[] list()`：获取**指定目录**下的所有文件或者文件夹的名称数组

- `File[] listFiles()`：获取**指定目录**下的所有文件或者文件夹的File数组

- `boolean renameTo(File dest)`：把文件重命名为指定的文件路径

  以`file1.renameTo(file2)`为例，若想返回true，要保证：

  - file1在硬盘中真实存在
  - file2在硬盘中不存在

- `boolean isDirectory()`：是否是个路径

- `boolean isFile()`：是否是个文件

- `boolean exists()`：是否存在

- `boolean canRead()`：是否可读

- `boolean canWrite()`：是否可写

- `boolean isHidden()`：是否隐藏

- `boolean createNewFile()`：创建文件。如果文件存在，则不创建，返回false

- `boolean mkdir()`：创建文件目录。如果此目录存在，或者此文件目录的上层目录不存在，就不创建

- `boolean mkdirs()`：创建文件目录。如果上层文件目录不存在，一并创建

  如果创建文件或者文件目录没有写盘符，默认在项目路径下

- `boolean delete()`：删除文件或文件夹

  - java中的删除不走回收站
  - 要删除一个文件目录，请注意该文件目录下不能包含文件或者文件目录

### 13.2 IO流原理及流的分类

> 流的分类

- 按操作的数据单位分：字节流、字符流
- 按流的流向分：输入流、输出流
- 按流的角色分：节点流、处理流

| （抽象基类） | 节点流（文件流） | 处理流               |
| ------------ | ---------------- | -------------------- |
| InputStream  | FileInputStream  | BufferedInputStream  |
| OutputStream | FileOutputStream | BufferedOutputStream |
| Reader       | FileReader       | BufferedReader       |
| Writer       | FileWriter       | BufferedWriter       |

### 13.3 FileReader与FileWriter的使用

> 使用场景

适用于处理==文本文件（.txt，.java，.c，.cpp）==的场景。不能用来处理图片等字节数据

> 步骤

- 创建File对象，指明写入、写出的文件
- 创建输入流FileReader、输出流FileWriter对象
- 执行写入、写出操作
- 关闭流(关闭时，先判断流是否为空。不为空的流才执行关闭操作)

> 重点

- FileReader.reader()：每次读取一个字符，返回值为当前字符的ASCII码。如果读到文件末尾，返回-1
- FileReader.reader.read(char [] cbuf)：每次最多读取cbuf.length个字符放到cbuf[]中，返回值是本次读取到的字符的个数。如果读到文件末尾，返回-1
- new FileWriter(file, false) / new FileWriter(file)：写出时会对原有文件进行覆盖
- new FileWriter(file, true)：在原有文件基础上追加内容

> 示例

```java
@Test
public void testFileReader1() {
    FileReader reader = null;
    try {
        // 1.File实例化
        File file = new File("hello.txt");

        // 2.FileReader实例化
        reader = new FileReader(file);

        // 3.读取数据
        // reader.read()：每次读取一个字符，返回值为当前字符的ASCII码。如果读到文件末尾，返回-1
        int data;
        while ((data = reader.read()) != -1) {
            System.out.println((char)data);
        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        try {
            if (null != reader) {
                reader.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

/**
     * 对read()操作升级：使用read()的重载方法 read(char cbuf[])
     */
@Test
public void testFileReader2() {
    FileReader reader = null;
    try {
        // 1.File实例化
        File file = new File("hello.txt");

        // 2.FileReader实例化
        reader = new FileReader(file);

        // 3.读入
        // reader.read(cbuf)：每次最多读取cbuf.length个字符放到cbuf[]中，该方法的返回值是本次读取到的字符的个数。
        // 	如果达到文件末尾，返回-1
        char cbuf[] = new char[5];
        int len;
        while ((len = reader.read(cbuf)) != -1) {
            // 方式一：注意循环次数是len次，不是cbuf.length次
            //                for (int i = 0; i < len; i++) {
            //                    System.out.print(cbuf[i]);
            //                }

            // 方式二
            String str = new String(cbuf, 0, len);
            System.out.print(str);


        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        if (null != reader) {
            // 4.关闭流
            try {
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}

/**
* 从内存中写出数据到硬盘文件
*
* 说明：
*  1. 输出操作，对应的File可以不存在。
*  2. File中对应的文件如果不存在，在输出的过程中会自动创建此文件
*  3. File中对应的文件如果存在：
*      加入使用的是new FileWriter(file, false) / new FileWriter(file)构造器，写出时会对原有文件进行覆盖
*      如果使用的是new FileWriter(file, true)构造器，不会对原有文件覆盖，而是在原有文件基础上追加内容
*/
@Test
public void testFileWriter() {
    FileWriter fw = null;
    try {
        // 1.File实例化，指明写出到的文件
        File file = new File("hello1.txt");

        // 2.FileWriter实例化，用于数据的写出
        fw = new FileWriter(file);

        // 3.写出
        fw.write("I have a dream!\n");
        fw.write("I want to eat all the food of the world!");
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        if (null != fw){
            // 4.关闭流
            try {
                fw.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 13.4 FileInputStream与FileOutputStream的使用

> 使用场景

适用于处理==非文本文件（.jpg，.png，.mp3，.mp4，.avi，.doc，.ppt）==。如果执行复制操作，也可以处理文本文件。

如果用来输出文本文件，有可能出现乱码

> 步骤

- 创建File对象，指明写入、写出的文件
- 创建输入流FileInputStream、输出流FileOutputStream对象
- 执行写入、写出操作
- 关闭流(关闭时，先判断流是否为空。不为空的流才执行关闭操作)

> 示例

```java
/**
 * 实现图片的复制
 */
@Test
public void test() {
    FileInputStream fis = null;
    FileOutputStream fos = null;
    try {
        // 1.File实例化，指明写出到的文件
        File srcFile = new File("image.png");
        File destFile = new File("image1.png");

        // 2.FileInputStream、FileOutputStream实例化，用于数据的读取与写出
        fis = new FileInputStream(srcFile);
        fos = new FileOutputStream(destFile);

        // 3.复制
        byte[] buff = new byte[5];
        int len;
        while ((len = fis.read(buff)) != -1) {
            fos.write(buff, 0, len);
        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 4.关闭流
        if (null != fos) {
            try {
                fos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != fis) {
            try {
                fis.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 13.5 处理流之缓冲流的使用

> 缓冲流

- BufferedInputStream和BufferedOutputStream
- BufferedReader和BufferedWriter

> 概述

- 作用：提高流的读取、写入速度
- 原理：内部提供了一个缓冲区
- 实现：处理流，就是“套接”在已有的流的基础上

> 步骤

- 实例化File，指明读取、写出的文件
- 造流
  - 造节点流
  - 造处理流
- 读取文件、写入文件
- 关闭流

> 重点

- `BufferedReader`中多了个`readLine()`，该方法一次返回一行数据，不包括换行符。读取到文件末尾，返回null
- `BufferedWriter`中可以使用`newLine()`实现换行
- `FileInputStream`、`FileOutputStream`实例化时参数也可以传文件路径`new FileInputStream(String filePath)`、`new FileOutputStream(String filePath)`
- `BufferedReader`、`BufferedWriter`实例化时参数也可以传文件路径`new BufferedReader(String filePath)`、`new BufferedWriter(String filePath)`

> 示例

```java
/**
* 使用BufferedInputStream和BufferedOutputStream实现图片的复制
*/
@Test
public void bufferedStreamTest() {
    BufferedInputStream bis = null;
    BufferedOutputStream bos = null;
    try {
        // 1.实例化File，指明读取、写出的文件
        File srcFile = new File("image.png");
        File destFile = new File("image3.png");

        // 2.造流
        // 2.1 造节点流
        FileInputStream fis = new FileInputStream(srcFile); // new FileInputStream("image.png");
        FileOutputStream fos = new FileOutputStream(destFile);
        // 2.2 造缓冲流
        bis = new BufferedInputStream(fis);
        bos = new BufferedOutputStream(fos);

        // 3.复制
        byte[] buff = new byte[10];
        int len;
        while ((len = bis.read(buff)) != -1) {
            bos.write(buff, 0, len);
        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 4.资源关闭
        // 关闭原则：先关外层的流，再关内层的流。
        // 说明：在关闭外层流的同时，内层的流也会自动关闭。因此内层流的关闭操作，可以省略
        if (null != bos) {
            try {
                bos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != bis) {
            try {
                bis.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        //            fos.close();
        //            fis.close();

    }

}

/**
* 使用BufferedReader和BufferedWriter实现文本文件的复制
*/
@Test
public void bufferedReaderWriterTest() {
    BufferedReader br = null;
    BufferedWriter bw = null;

    try {
        // 1.造流
        br = new BufferedReader(new FileReader(new File("error.log")));
        bw = new BufferedWriter(new FileWriter(new File("error1.log")));

        // 2.复制
        //            方法一：使用read
        //            char[] cbuff = new char[1024];
        //            int len;
        //            while ((len = br.read(cbuff)) != -1) {
        //                bw.write(cbuff, 0, len);
        //            }

        // 方法二：使用readLine()：一次读取一行，不包括换行符。读到文件末尾，返回null
        String data;
        while (null != (data = br.readLine())) {
            bw.write(data);
            bw.newLine();//换行
        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 3.关闭流
        if (null != bw) {
            try {
                bw.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != br) {
            try {
                br.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 13.6 处理流之转换流的使用

> 转换流

==属于字符流==

- InputStreamReader：将一个字节的输入流转换为字符的输入流。体现为解码
- OutputStreamReader：将一个字符的输出流转换为字节的输出流。体现为编码

> 概述

- 作用：提供字节流与字符流之间的转换

> 示例

```java
/**
* 借助InputStreamReader和OutputStreamWriter，将utf-8格式的文本文件复制为gbk格式的文件
*/
@Test
public void test() {
    InputStreamReader isr = null;
    OutputStreamWriter osw = null;
    try {
        // 1.造流
        FileInputStream fis = new FileInputStream("hello.txt");
        FileOutputStream fos = new FileOutputStream("hello_gbk.txt");

        isr = new InputStreamReader(fis, "utf-8");
        osw = new OutputStreamWriter(fos, "gbk");

        // 2.复制
        char[] cbuf = new char[10];
        int len;
        while ((len = isr.read(cbuf)) != -1) {
            osw.write(cbuf);
        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 3.关闭流
        if (null != isr) {
            try {
                isr.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != osw) {
            try {
                osw.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 13.7 字符集

- ASCII：美国标准信息交换码。用一个字节的7位可以表示
- ISO8895-1：拉丁码表，欧洲码表。用一个字节的8位表示
- GB2312：中国的中文编码表。最多两个字节编码所有字符
- GBK：中国的中文编码表升级，融合了更多的中文文字符号（如繁体字）。最多两个字节编码所有字符
- Unicode：国际标准码，融合了目前人类使用的所有字符，为每一个字符分配唯一的字符。所有文字都用两个字节来表示
- UTF-8：变长的编码方式。可用1-4的字节来表示一个字符

==Unicode和UTF-8的关系：==

Unicode字符集只是定义了字符的集合和唯一编号。Unicode编码，是对UTF-8、UTF-16、UTF-32等具体编码的统称，并不是具体的编码方案

### 13.8 处理流之标准的输入、输出流

> 概述

- System.in: 标准的输入流，默认从键盘输入。类型是InputStream
- System.out: 标准的输出流，默认从显示器输出。类型是PrintStream
- 可以通过`System.setIn(InputStream in)`和`System.setOut(PrintStream out)`对默认设备进行修改

> 实例

要求：从键盘输入字符串。要求将读取到的整行字符串转成大写并输出，然后继续进行输入操作。直到当输入“e”或者“exit”时，退出程序。

```java
@Test
public void test1() {
    BufferedReader br = null;
    try {
        // 1.造流。
        // 因为需要用到读取整行的功能，而只有BufferedReader有读取整行的函数，因此需要BufferedReader流。
        // 又因System.in的类型是InputStream，所以需要用到转换流InputStreamReader将InputStream转为BufferedReader
        // 1.1 先创建了转换流InputStreamReader流，将字节输入流转换为字符输入流
        InputStreamReader isr = new InputStreamReader(System.in);
        // 1.2 再创建了BufferedReader字符读取流。
        br = new BufferedReader(isr);

        // 2.读取整行字符串，将其转为大写
        while (true) {
            System.out.println("请输入字符串");
            String data = br.readLine();
            if (null == data || "e".equalsIgnoreCase(data) || "exit".equalsIgnoreCase(data)) {
                System.out.println("程序结束");
                break;
            }

            String dataUpperCase = data.toUpperCase();
            System.out.println(dataUpperCase);

        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 3.关闭流
        if (null != br) {
            try {
                br.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 13.9 处理流之打印流

> 作用

- 实现将==基本数据类型==的数据格式转化为==字符串==输出
- 提供了一系列重载的`print()`和`println()`

> 打印流

- PrintStream：字节输出流
- PrintWriter：字符输出流

> 示例

要求：使用System.out将内容输出到文件中，而非控制台中

```java
@Test
public void test2() {
    PrintStream ps = null;
    try {
        // 1.创建流
        FileOutputStream fos = new FileOutputStream("info.txt");
        ps = new PrintStream(fos);

        // 2.把标准输出流（控制台输出）改成文件
        if (null != ps) {
            System.setOut(ps);
        }

        // 3.输出
        for (int i = 0; i < 255; i++) {
            System.out.print((char) i);
            // 每50个字符一行
            if (i % 50 == 0) {
                System.out.println();
            }
        }
    } catch (FileNotFoundException e) {
        e.printStackTrace();
    } finally {
        // 4.关闭流
        if (null != ps) {
            ps.close();
        }
    }
}
```

### 13.10 处理流之数据流

> 数据流

- DataInputStream
- DataOutputStream

> 作用

用于读取或者写出基本数据类型的变量或字符串。（如将内存中的数据持久化到文件中（写出），在文件中读取数据到内存中（读取））

> 重点

- 文件的读取和写入顺序要一致，否则会报EOFException异常
- 每当执行`DataOutputStream`的`flush()`就会将内存中的数据写入到文件中

> 示例

要求：将内存中的变量写入到文件中，并将文件中的内容读取到变量中，并输出

```java
@Test
public void test3() {
    // 将内存中的字符串、基本数据类型的变量写出到文件中
    DataOutputStream dos = null;
    try {
        dos = new DataOutputStream(new FileOutputStream("data.txt"));
        dos.writeUTF("唐天华");
        dos.flush();
        dos.writeInt(18);
        dos.flush();
        dos.writeBoolean(false);
        dos.flush();
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        if (null != dos) {
            try {
                dos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


    // 读取文件中的存储的基本类型变量和字符串到内存，保存在变量中
    DataInputStream dis = null;
    try {
        dis = new DataInputStream(new FileInputStream("data.txt"));

        // 注意：数据的读取顺序要和写入顺序保持一致，否则会报EOFException
        String name = dis.readUTF();
        int age = dis.readInt();
        boolean isMale = dis.readBoolean();
        System.out.println("name = " + name);
        System.out.println("age = " + age);
        System.out.println("isMale = " + isMale);
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 关闭流
        if (null != dis) {
            try {
                dis.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 13.11 处理流之对象流

> 对象流

- ObjectInputStream
- ObjectOutputStream

> 作用

用于存储和读取==基本数据类型==数据或==对象==的处理流

用到了==序列化==和==反序列化==技术

> 示例

要求：

① 序列化过程：将内存中的java对象以二进制流的方式保存到磁盘中或通过网络传输出去

② 反序列化过程：将磁盘或者网络中的二进制流转化为内存中的Java对象

```java
/**
* 序列化过程：将内存中的java对象以二进制流的方式保存到磁盘中或通过网络传输出去
* 使用ObjectOutputStream实现
*/
@Test
public void testObjectOutputStream() {
    ObjectOutputStream oos = null;
    try {
        // 1.造流
        oos = new ObjectOutputStream(new FileOutputStream("object.dat"));
        // 2.将对象持久化到文件
        oos.writeObject("我爱北京天安门");
        oos.flush();//刷新写入
        oos.writeObject(new Person("张小凡", 18));
        oos.flush();
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 3.关闭流
        if (null != oos) {
            try {
                oos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}

/**
* 反序列化过程：将磁盘或者网络中的二进制流转化为内存中的Java对象
* 使用ObjectInputStream实现
*/
@Test
public void testObjectInputStream() {
    ObjectInputStream ois = null;
    try {
        // 1.造流
        ois = new ObjectInputStream(new FileInputStream("object.dat"));

        // 2.反序列化并打印
        Object object = ois.readObject();
        String str = (String) object;
        System.out.println(str);
        Object object1 = ois.readObject();
        Person person = (Person) object1;
        System.out.println(person);
    } catch (IOException e) {
        e.printStackTrace();
    } catch (ClassNotFoundException e) {
        e.printStackTrace();
    } finally {
        // 3.关闭流
        if (null != ois) {
            try {
                ois.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 13.12 序列化与反序列化

> 定义

- 序列化：用ObjectOutputStream类==保存==基本类型数据或对象的机制
- 反序列化：用ObjectInputStream类==读取==基本类型数据或对象的机制

==ObjectOutputStream和ObjectInputStream不能序列化static和transient修饰的成员变量==

>  对象的序列化机制

对象序列化机制允许把内存中的Java对象转换为平台无关的二进制流，从而允许把这种二进制流持久的保存在磁盘上，或通过网络将这种二进制流传输到另外一个网络节点。当其它程序获取了这种二进制流，就可以回复称原来的Java对象。

> Java对象序列化的要求

- 需要实现接口：Serializable

- 当前类需要提供一个全局常量serialVersionUID

  serialVersionUID用来表明类的不同版本之间的兼容性。如果类没有显示定义该静态常量，它的值是Java运行时环境根据类的内部细节自动生成。如果类的属性进行了修改（添加属性或者删除属性），serialVersionUID有可能发生变化。

- 除了当前类需要实现Serializable接口外，还必须保证该类的所有属性也必须是可序列化的

> 注意

==static和transient修饰的成员变量不能被序列化==

### 13.13 随机存取文件流

> 随机存取文件流-RandomAccessFile

- RandomAccessFile类直接继承Object类，实现了DataInput和DataOutput接口，因此该类既可以读也可以写

- RandomAccessFile支持“随机访问”的方式，程序可以直接跳到文件的任意地方来读、写文件

  - 支持只访问文件的部分内容
  - 可以向已存在的文件后追加内容

- RandomAccessFile对象包含一个记录指针，用以标示当前读写处的位置。RandomAccessFile类对象可以自由移动记录指针：

  - `long getFilePointer()`：获取文件记录指针的当前位置
  - `void seek(long pos)`：将文件记录指针定位到pos位置

- RandomAccessFile类写文件时：

  - 如果文件不存在，会自动创建文件；
  - 如果文件存在，会在文件开头进行覆盖写入

- RandomAccessFile构造器：

  - `public RandomAccessFile(String name, String mode)`
  - `public RandomAccessFile(File file, String mode)`

  在创建RandomAccessFile实例时，需要指定`mode`参数，该参数指定RandomAccessFile的访问模式：

  - r：以只读的方式打开。不会创建文件，如果读取不存在的文件，会抛出异常
  - rw：打开以便读取和写入。文件不存在时，会创建文件
  - rwd：打开以便读取和写入；同步文件内容的更新
  - rws：打开以便读取和写入；同步文件内容和元数据的更新

> 应用举例

可以使用RandomAccessFile实现==多线程断点下载==任务。

下载前，先创建两个临时文件。一个是与被下载文件大小相同的空文件，一个是记录文件指针的位置文件。每次暂停时，都会保存上一次的指针，再次下载时，会继续从上一次的地方下载。以此实现断点下载或者上传的功能。

> 示例：使用RandomAccessFile实现图片的复制

```java
@Test
public void test1() {
    RandomAccessFile raf1 = null;
    RandomAccessFile raf2 = null;
    try {
        // 1.造流
        raf1 = new RandomAccessFile(new File("img.png"), "r");
        raf2 = new RandomAccessFile(new File("image1.png"), "rw");

        // 2.复制
        byte[] buffer = new byte[1024];
        int len;
        while ((len = raf1.read(buffer)) != -1) {
            raf2.write(buffer, 0, len);
        }
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 3.关闭流
        if (null != raf2) {
            try {
                raf2.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != raf1) {
            try {
                raf1.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

> 示例：使用RandomAccessFile实现在文件中间插入

==重点==：通过`void seek(long pos)`函数指定文件指针的位置，进行读取和写入

```java
@Test
public void test2() {
    RandomAccessFile raf = null;
    try {
        // 1.造流
        raf = new RandomAccessFile("hello.txt", "rw");

        // 2.插入
        // 2.1保存指针3后边的数据到StringBuilder中
        raf.seek(3);
        StringBuilder sb = new StringBuilder((int)new File("hello.txt").length());
        byte[] buff = new byte[10];
        int len;
        while ((len = raf.read(buff)) != -1) {
            sb.append(new String(buff, 0, len));
        }
        // 2.2调回指针，在3的位置后进行插入
        raf.seek(3);
        raf.write("xyz".getBytes());
        // 2.3将StringBuilder中的数据写入到文件
        raf.write(sb.toString().getBytes());
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 3.关闭流
        if (null != raf) {
            try {
                raf.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 13.14 NIO.2中Path、Paths、Files类的使用

> 概述

- NIO：New IO，Non-Blocking IO。是从Java 1.4版本开始引入的一套新的IO API，可以替代标准的Java IO API。NIO与原来的IO有着同样的作用和目的，但是使用的方式完全不同。**NIO支持面向缓冲区的（IO是面向流的）、基于通道的IO操作**。==NIO将以更加高效的方式进行文件的读写操作==

  - Java API中提供了两套NIO，一套是**针对标准输入输出的NIO**， 一套是**网络编程NIO**
    - java.nio.channels.Channel
      - FileChannel：处理本地文件
      - SocketChannel：TCP网络编程的客户端的Channel
      - ServerSocketChannel：TCP网络编程的服务端的Channel
      - DatagramChannel：UDP网络编程中发送端和接收端的Channel

- NIO.2：JDK7中，Java对NIO进行了极大的扩展，增强了对文件处理和文件系统特性的支持，因此被称为NIO.2

  - JDK7中引入了如下类：

    - Path接口：代表一个平台无关的平台路径，描述了目录结构中文件的位置。Path可以视为File的升级版（如File中的大多数方法在失败的时候只能返回false，并不能提供异常。Path接口弥补了这种不足）

    - Paths类：Path的工具类

      ==Paths提供了静态get()方法来获取Path对象==：

      - `static Path get(String first, String ...more)`：用于将多个字符串串连成路径
      - `static Path get(URI uri)`：返回指定uri队形的Path路径

    - Files类：工具类

> Path常用方法

- `String toString()`：返回调用Path对象的字符串表示形式
- `boolean startsWith(String path)`：判断是否以path路径开始
- `boolean endsWith(String path)`：判断是否以path路径结束
- `boolean isAbsolute()`：判断是否是绝对路径
- `Path getParent()`：返回path的父级文件（夹）
- `Path getRoot()`：获取path的根路径
- `Path getFileName()`：返回与调用Path对象关联的文件名
- `int getNameCount()`：返回path根路径后元素的数量
- `Path getName(int index)`：返回指定索引index出的路径名
- `Path toAbsolutePath()`：返回以当前path的绝对路径的Path对象
- `Path resolve(Path other)`：合并两个路径，并返回合并后的Path对象
- `File toFile()`：将Path类对象转为File类对象

> Files常用方法

- `boolean exists(Path path, LinkOption... options)`：判断文件是否存在

  ```java
  Path path = Paths.get("D:\\project\\JavaSenior\\day10\\image.png");
  System.out.println("exists: " + Files.exists(path, LinkOption.NOFOLLOW_LINKS));
  ```

- `boolean notExists(Path path, LinkOption... options)`：判断文件是否不存在

- `boolean isDirectory(Path path, LinkOption... options)`：判断是否是目录

- `boolean isRegularFile(Path path, LinkOption... options)`：判断是否是文件

- `boolean isHidden(Path path)`：判断是否是隐藏文件

- `boolean isReadable(Path path)`：判断文件是否可读

- `boolean isWritable(Path path)`：判断文件是否可写

- `SeekableByteChannel newByteChannel(Path path, OpenOption... options)`：获取与指定文件的连接，options指定打开方式

- `DirectoryStream<Path> newDirectoryStream(Path dir)`：打开dir指定的路径

- `InputStream newInputStream(Path path, OpenOption... options)`：获取InputStream对象

- `OutputStream newOutputStream(Path path, OpenOption... options)`：获取Output对象

==LinkOption options可选项：==

- `LinkOption.NOFOLLOW_LINKS`：不遵循符号链接

==OpenOption options可选项：==

- `StandardOpenOption.READ`：以读的方式连接文件
- `StandardOpenOption.WRITE`：以写的方式连接文件
- `StandardOpenOption.APPEND`：以追加的方式连接文件，不会覆盖文件原本内容，在后面追加
- `StandardOpenOption.TRUNCATE_EXISTING`：
  - 如果文件存在并且以WRITE的方式连接时就会把文件内容清空，文件设置为0字节大小
  - 如果文件只以READ连接 时，该选项会被忽略
- `StandardOpenOption.CREATE`：创建一个文件，如果文件已存在，就打开文件连接。与CREATE_NEW同时存在时该选项会被忽略
- `StandardOpenOption.CREATE_NEW`：创建一个文件，如果文件已存在，如果已经存在会抛异常
- `StandardOpenOption.DELETE_ON_CLOSE`：通道关闭时删除文件
- `StandardOpenOption.SPARSE`：创建稀疏文件，与CREATE_NEW选项配合使用
- `StandardOpenOption.SYNC`：要求每次写入要把内容和元数据刷到存储设备上
- `StandardOpenOption.DSYNC`：要求每次写入要把内容刷到存储设备上

## 14 网络编程  

### 14.1  通信要素1：IP和端口号

> IP地址：InetAddress

- 作用：用来唯一标识Internet上的计算机
- 在Java中使用InetAddress类代表IP

- IP地址分类1

  - IPV4：
  - IPV6：

- IP地址分类2

  - 公网地址（万维网使用）
  - 私有地址（局域网使用）

- 本地回路地址：127.0.0.1  对应着localhost

- ==InetAddress类的使用==

  - 实例化

    - `InetAddress getByName(String host)`：根据指定host获取InetAddress对象。host可以是ip地址，也可以是域名
    - `InetAddress getLocalHost()`：获取本机InetAddress对象

  - 两个常用方法

    - `String getHostName()`：获取InetAddress对象的主机名
    - `String getHostAddress()`：获取InetAddress对象的ip地址

  - 示例

    ```java
    @Test
    public void test1() {
        try {
            InetAddress inte1 = InetAddress.getByName("192.168.23.37");
            System.out.println(inte1);// /192.168.23.37
    
            InetAddress inte2 = InetAddress.getByName("www.baidu.com");
            System.out.println(inte2);// www.baidu.com/180.101.49.13
    
            InetAddress inet3 = InetAddress.getLocalHost();
            System.out.println(inet3); // tangtianhua00/192.168.23.37
    
            String hostName = inet3.getHostName();
            System.out.println(hostName);// tangtianhua00
    
            String hostAddress = inet3.getHostAddress();
            System.out.println(hostAddress);// 192.168.23.37
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
    ```

> 端口号

- 作用：标识正在计算机上正在运行的程序
- 不同的进程对应不同的端口号
- 端口号的范围：0~65535
- 端口分类：
  - 公认端口：0~1023，被预先定义的服务通信占用
  - 注册端口：1024，分配给用户进程或应用程序
  - 动态/私有端口：49152~65535
- ==端口号和IP地址的组合得出一个网络套接字：Socket==

### 14.2 通信要素2：网络协议

> 通信协议分层的思想

同层间可以通信，上一层可以调用下一层，隔层不可以通信

> TCP/IP协议簇

- 传输层协议中有两个非常重要的协议

  - 传输控制协议TCP

    - 实用TCP协议前，须先建立TCP连接，行程传输数据通道

    - 传输前，采用“**三次握手**”方式，**点对点通信**，**是可靠的**

      - 第一次握手：客户端发送syn报文，并置发送序号为X
      - 第二次握手：服务端发送syn+ACK报文，并置发送序号为Y，在确认序号为X+1
      - 第三次握手：客户端发送ACK报文，并置发送序号为Z，在确认序号为Y+1

      ![image-20221228111927646](./images\Java系统学习-基础/image-20221228111927646.png)

    - TCP协议进行通信的两个应用进程：客户端、服务端

    - 在连接中可以**进行大数据量的传输**

    - 传输完毕，需**释放已建立的连接，效率低**。释放连接需要经历“**四次挥手**”

      挥手时，客户端和服务端都可以开始挥手，但是一般都是客户端主动挥手，断开连接

      - 第一次挥手：主动方发送Fin+ACK报文，并置发送序号为X
      - 第二次挥手：被动方发送ACK报文，并置发送序号为Z，在确认序号为X+1
      - 第三次挥手：被动方发送Fin+ACK报文，并置发送序号为Y，在确认序号为X（此时已经断开连接）
      - 第四次挥手：主动方发送ACK报文，并置发送序号为X，在确认序号为Y（此步骤就是为了去验证是否真的断开连接）

      ![image-20221228112023770](./images/Java系统学习-基础/image-20221228112023770.png)

  - 用户数据报协议UDP

    - 将数据、源、目的封装成数据包，**不需要建立连接**
    - 每个数据报的大小限制在64K内
    - 发送不管对方是否准备好，接收方收到也不需要确认，故**是不可靠的**
    - **可以广播发送**
    - 发送数据结束时**无需释放资源，开销小，速度快**
    - 应用场景：可以接受一部分数据的丢失，比如看网络视频，可以接受一部分帧的丢失，但是不能接受卡顿。

- TCP/IP以其两个主要协议传输控制协议（TCP）和网络互联协议（IP）而得名。实际上是一组协议，包括多个具有不同功能且互为关联的协议

- IP协议是网络层的主要协议，支持网络间互连的数据通信

- TCP/IP协议模型从更实用的角度出发，形成了高效的四层体系结构，即==物理链路层、IP层、传输层、应用层==

### 14.3 TCP网络编程

> 例1. 客户端发送信息给服务端，服务端将接收到的数据显示在控制台

【重点难点】：熟悉客户端、服务端Socket的使用

```java
/**
     * 客户端
     */
@Test
public void client() {
    Socket socket = null;
    OutputStream os = null;
    try {
        // 1.创建Socket对象，指明服务器端的IP和端口号
        String serverIp = "127.0.0.1";
        int serverPort = 8899;
        InetAddress serverInet = InetAddress.getByName(serverIp);
        socket = new Socket(serverInet, serverPort);

        // 2.获取一个输出流，用于输出数据
        os = socket.getOutputStream();
        // 3.输出数据
        os.write("你好，我是客户端".getBytes());
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 4.关闭资源
        if (null != os) {
            try {
                os.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != socket) {
            try {
                socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


}

/**
     * 服务端
     */
@Test
public void server() {
    ServerSocket ss = null;
    Socket socket = null;
    InputStream is = null;
    ByteArrayOutputStream baos = null;
    try {
        // 1.创建服务端Socket-ServerSocket，指明自己的端口号
        ss = new ServerSocket(8899);
        // 2.调用accept()，接收来自于客户端的Socket
        socket = ss.accept();
        // 3.获取输入流，用于接收数据
        is = socket.getInputStream();

        // 4.读取输入流中的数据
        // 方式一：不建议使用，可能会有乱码
        //        byte[] buff = new byte[1024];
        //        int len;
        //        while ((len = is.read(buff)) != -1) {
        //            String str = new String(buff, 0, len);
        //            System.out.println(str);
        //        }

        // 方式二：推荐
        baos = new ByteArrayOutputStream();
        byte[] buffer = new byte[5];
        int len;
        while ((len = is.read(buffer)) != -1) {
            baos.write(buffer, 0, len);
        }

        System.out.println(baos.toString());
        System.out.println("收到了来自于"+socket.getInetAddress().getHostAddress()+"的数据");
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 5.关闭资源
        if (null != baos) {
            try {
                baos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != is) {
            try {
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != socket) {
            try {
                socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != ss) {
            try {
                ss.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

> 例2. 从客户端发送文件给服务端，服务端保存到本地，并返回“发送成功”给客户端

【重点难点】

- 使用Socket发送、接收图片

- 服务端给用户端发送反馈，客户端接收

  ==InputStream的read()是个阻塞式的方法。如果客户端没有明确终止数据的发送，服务端的read()就会一直等待。因此当客户端需要接收服务端反馈信息时，客户端在发送完数据时，需要显示调用Socket的shutdownOutput()，用以关闭数据的输出==

```java
/**
 * 客户端
 */
@Test
public void client() {
    Socket socket = null;
    OutputStream os = null;
    BufferedInputStream bis = null;
    InputStream is = null;
    ByteArrayOutputStream baos = null;
    try {
        // 给服务端发送图片
        String serverIp = "127.0.0.1";
        int serverPort = 9900;
        socket = new Socket(InetAddress.getByName(serverIp), serverPort);
        os = socket.getOutputStream();
        bis = new BufferedInputStream(new FileInputStream("big.png"));
        byte[] buff = new byte[1024];
        int len;
        while ((len = bis.read(buff)) != -1) {
            os.write(buff, 0, len);
        }

        // 关闭socket数据的输出，目的是通知客户端数据发送终止
        socket.shutdownOutput();
        // 接收服务端的反馈，并打印到控制台
        is = socket.getInputStream();
        baos = new ByteArrayOutputStream();
        byte[] buff2 = new byte[10];
        int len2;
        while ((len2 = is.read(buff2)) != -1) {
            System.out.println(buff2.length + "-" + len2);
            baos.write(buff2, 0, len2);
        }
        System.out.println(baos.toString());
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        if (null != baos) {
            try {
                baos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        if (null != is) {
            try {
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        if (null != bis) {
            try {
                bis.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != os) {
            try {
                os.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != socket) {
            try {
                socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}

/**
 * 服务端
 */
@Test
public void server() {
    ServerSocket ss = null;
    Socket socket = null;
    InputStream is = null;
    BufferedOutputStream bos = null;
    OutputStream os = null;
    try {
        // 接收客户端发送来的图片，并保存到本地
        ss = new ServerSocket(9900);
        socket = ss.accept();
        is = socket.getInputStream();
        Date date = new Date();
        bos = new BufferedOutputStream(new FileOutputStream(date.getTime()+".png"));
        byte[] buff = new byte[1024];
        int len;
        // read()是一个阻塞式的方法。如果客户端socket不停止发送数据，服务端就会一直等待
        while ((len = is.read(buff)) != -1) {
            bos.write(buff, 0, len);
        }

        // 服务端给客户端反馈
        os = socket.getOutputStream();
        os.write("图片保存成功！".getBytes());

    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        if (null != os) {
            try {
                os.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        if (null != bos) {
            try {
                bos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != is) {
            try {
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != socket) {
            try {
                socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != ss) {
            try {
                ss.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

### 14.4 UDP网络编程

> 例1. 接收端接收发送端发送的消息，并打印

```java
/**
     * 发送端
     */
@Test
public void sender() {
    DatagramSocket socket = null;
    try {
        socket = new DatagramSocket();

        InetAddress inet = InetAddress.getByName("127.0.0.1");

        String str = "我是UDP方式发送的导弹";
        byte[] data = str.getBytes();
        DatagramPacket packet = new DatagramPacket(data, 0, data.length, inet, 9090);

        socket.send(packet);
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        if (null != socket) {
            socket.close();
        }
    }
}

/**
     * 接收端
     */
@Test
public void receiver(){
    DatagramSocket socket = null;
    try {
        socket = new DatagramSocket(9090);

        byte[] buffer = new byte[100];
        DatagramPacket packet = new DatagramPacket(buffer, 0, buffer.length);
        socket.receive(packet);

        System.out.println(new String(packet.getData(), 0, packet.getLength()));
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        if (null != socket) {
            socket.close();
        }
    }

}
```

### 14.5 URL编程

> URL

- URL：统一资源定位符，它表示Internet上某一资源的地址

- 是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源

- URL的基本结构由5部分组成：

  ==<传输协议>://<主机名>:<端口号>/<资源地址>?参数列表==

> URL构造器与常用方法

- `URL(String spec)`：构造器
- `String getProtocol()`：获取URL的协议名
- `String getHost()`：获取URL的主机名
- `int getPort()`：获取URL的端口号
- `String getPath()`：获取URL的文件路径
- `String getFile()`：获取URL的文件名
- `String getQuery()`：获取URL中的参数

```java
@Test
public void test() throws MalformedURLException {
    URL url = new URL("http://localhost:8080/examples/beauty.jpg?username=tth&password=123456");
    // 获取URL的协议名
    System.out.println(url.getProtocol()); // http
    // 获取URL的主机名
    System.out.println(url.getHost()); // localhost
    // 获取URL的端口号
    System.out.println(url.getPort()); // 8080
    // 获取URL的文件路径
    System.out.println(url.getPath()); // /examples/beauty.jpg
    // 获取URL的文件名
    System.out.println(url.getFile()); // /examples/beauty.jpg?username=tth&password=123456
    // 获取URL的参数
    System.out.println(url.getQuery()); // username=tth&password=123456
}
```

> 例1. 从url中下载图片并保存到本地

```java
@Test
public void test2() {
    HttpURLConnection urlConnection = null;
    InputStream is = null;
    FileOutputStream fos = null;
    try {
        // 1.实例化url
        URL url = new URL("http://localhost:8080/examples/lbxx.jpg?username=tth&password=123456");

        // 2.获取HTTP连接
        urlConnection = (HttpURLConnection) url.openConnection();

        // 3.连接
        urlConnection.connect();

        // 4.获取流，下载url中的文件，保存到本地
        is = urlConnection.getInputStream();
        fos = new FileOutputStream("lbxx.jpg");
        byte[] buff = new byte[1024];
        int len;
        while ((len = is.read(buff)) != -1) {
            fos.write(buff, 0, len);
        }

        System.out.println("图片保存成功！");
    } catch (IOException e) {
        e.printStackTrace();
    } finally {
        // 5.关闭资源
        if (null != fos) {
            try {
                fos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != is) {
            try {
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        if (null != urlConnection) {
            urlConnection.disconnect();
        }
    }
}
```

## 15 Java反射机制

### 15.1 Java反射机制概述

> Reflection--反射

- Reflection（反射）是被视为==动态语言==的关键，反射机制允许程序在执行期间借助于Reflection API获取任何类的内部信息，并能直接操作任意对象的内部属性及方法
- 加载完类之后，在堆内存的方法区就产生了一个Class类型的对象（一个类只能有一个Class对象），这个对象就包含了完整的类的结构信息。我们可以通过这个对象看到类的结构。==这个对象就像一面镜子，透过这个镜子看到类的结构，所以，我们形象的称之为：反射==
- 类加载的方式

  - 正常方式：`引入需要的“包类”名称` ---> `通过new实例化` ---> `取得实例化对象`
  - 反射方式：`实例化对象` ---> `getClass()方法` ---> `得到完整的“包类”名称`

> 反射的特征

动态性

> 静态语言 VS 动态语言

- $\textcolor{red}{动态语言}$：
  - 定义：是一类在运行时可以改变其结构的语言，例如新的函数、对象、甚至代码可以被引进，已有的函数可以被删除或者是其他结构上的变化。通俗来说就是==在运行时代码可以根据某些条件改变自身结构==。
  - 举例：Object-C、C#、JavaScript、PHP、Python、Erlang
- $\textcolor{red}{静态语言}$：
  - 定义：==运行时结构不可变的语言==
  - 举例：Java、C、C++

$\textcolor{red}{Java不是动态语言，但是Java可以称为准动态语}$。即Java有一定的动态性，我们**可以利用反射机制、字节码操作获得类似动态语言的特性**。

> Java反射机制提供的功能

- 在运行时判断任意一个对象所属的类
- 在运行时构造任意一个类的对象
- 在运行时判断任意一个类所具有的成员变量和方法
- 在运行时获取泛型信息
- 在运行时调用任意一个对象的成员变量和方法
- 在运行时处理注解
- 生成动态代理

> 反射相关的主要API

- `java.lang.Class`：代表一个类。用来表示一个通用的类，是一个用来描述类的类
- `java.lang.reflect.Method`：代表类的方法
- `java.lang.reflect.Field`：代表类的成员变量
- `java.lang.reflect.Constructor`：代表类的构造器
- ...

> 疑问1：通过直接new的方式或反射的方式都可以调用公共结构，开发中到底使用哪个？

- 建议使用new的方式，但是不排除使用反射的方式
- 反射方式使用场景：当编译时不确定new哪个类的对象时

> 疑问2：反射机制与面向对象中的封装性是不是矛盾？如何看待这两个技术？

（封装性是私有的外部不能访问，反射是可以访问私有的属性和方法）

$\textcolor{red}{不矛盾}$。

封装性中私有的属性和方法等，外部不能访问，是指的没必要去访问，但是如果一定要访问的话，也是可以访问的。如果非要访问的话，就得使用反射技术了。

### 15.2 java.lang.Class

>java.lang.Class类的理解与获取

- 类的加载过程：

  程序经过javac.exe命令后，会生成一个或多个字节码文件（.class结尾），接着我们使用java.exe命令对某个字节码文件进行解释运行。相当于将某个字节码文件加载到内存中。将字节码文件加载到内存中（或者说使用java.exe命令对字节码文件进行解释运行）的过程就称为$\textcolor{red}{类的加载}$。**加载到内存中的类，就称为==运行时类==，此运行时类，就作为Class的一个实例。**

- 换句话说：

  Class的实例就对应着一个运行时类

- 加载到内存中的运行时类，会缓存一定的时间。在此时间内，可以通过不同的方式来获取此运行时类

- 获取Class实例的方式

  - 通过运行时类的属性：类.class
  - 通过运行时类的对象，调用getClass()
  - 调用Class的静态方法：forName(String className)。其中className是类的完整的“包类”名
  - 使用类的加载器：ClassLoader

- 获取Class实例方式的例子

  ```java
  /**
   * 获取Class的实例的方式
   */
  @Test
  public void test() throws ClassNotFoundException {
      // 方式1：通过运行时类的属性：类.class
      Class<Person> clazz1 = Person.class;
      System.out.println(clazz1);
  
      // 方式2：通过运行时类的对象，调用getClass()
      Person p1 = new Person();
      Class clazz2 = p1.getClass();
      System.out.println(clazz2);
  
      // 方式3：调用Class的静态方法：forName(String className)。其中className是类的完整的“包类”名
      Class<?> clazz3 = Class.forName("com.tth.learn.java.Person");
      System.out.println(clazz3);
  
      // 方式4：使用类的加载器：ClassLoader
      ClassLoader classLoader = ReflectTest.class.getClassLoader();
      Class<?> clazz4 = classLoader.loadClass("com.tth.learn.java.Person");
      System.out.println(clazz4);
  
      // 验证在一定时间内，获取的同一个类的运行时类，是同一个Class实例
      System.out.println(clazz1 == clazz2); // true
      System.out.println(clazz1 == clazz3); // true
      System.out.println(clazz1 == clazz4); // true
  }
  ```

> 哪些类型可以有Class对象？

- class：外部类、成员（成员内部类。静态内部类），局部内部类，匿名内部类

- interface：接口

- []：数组

  $\textcolor{red}{只要数组的类型和维度一样，就是同一个Class实例。}$

  ```java
  @Test
  public void test2() {
      int[] arr1 = new int[10];
      int[] arr2 = new int[100];
      System.out.println(arr1.getClass() == arr2.getClass()); // true
  }
  ```

- enum：枚举

- annotation：注解@interface

- primitive type：基本数据类型

- void

> 类的加载过程

当程序主动使用某个类时，如果该类还未被加载到内存中，系统会经过如下三个步骤对该类进行初始化：

- $\textcolor{red}{类的加载}$：将class文件字节码内容加载到内存中，并将这些静态数据转成方法区的运行时数据结构，然后生成一个代表这个类的java.lang.Class对象，作为方法区中类数据的访问入口（即引用地址）。所有需要访问和使用类数据只能通过这个Class对象。这个加载的过程需要类加载器的参与。
- $\textcolor{red}{类的链接}$：将java类的二进制字节码合并到JVM的运行过程中的过程。
  - 验证：确保加载的类信息符合JVM规范。如：以cafe开头，没有安全方面的内容
  - 准备：正式为类的static变量分配内存并$\textcolor{Magenta}{设置类变量默认初始值}$，这些内存都将在方法区中进行分配
  - 解析：虚拟机常量池内的符号引用（常量名）替换为直接引用（地址）
- $\textcolor{red}{类的初始化}$
  - 执行$\textcolor{Magenta}{类构造器<clinit>()}$方法的过程。$\textcolor{Magenta}{类构造器<clinit>()是由编译期自动收集类中所有类变量的复制动作和静态代码块中的语句合并产生的}$。（类构造器是构造类信息的，不是构造该类对象的构造器）
  - 当初始化一个类的时候，如果返现其父类还没初始化，则需要先触发其父类的初始化
  - 虚拟机会保证一个类的`<clinit>()`在多线程环境中被正确加锁和同步

> 类加载器的作用

- 类加载器的作用：将class文件字节码内容加载到内存中，并将这些静态数据$\textcolor{Magenta}{转换成方法区的运行时数据结构}$，然后在堆中生成一个代表这个类的java.lang.Class对象，作为方法区中类数据的访问入口

- 类缓存：标准的JavaSE类加载器可以按要求查找类，但一旦某个类被加载到类加载器中，它将维持加载（缓存）一段时间。不过JVM垃圾回收机制可以回收这些Class对象

- JVM规范中定义了如下类型的类的加载器：

  以下几个类加载器的加载原则：$\textcolor{Magenta}{自底向上检查是否已装载，自顶向下尝试加载类}$。

  - `Bootstrap Classloader`：$\textcolor{Magenta}{引导类加载器}$。C++编写的，是JVM自带的类加载器，$\textcolor{red}{负责Java平台的核心库}$，用来装载核心类库。该加载器无法直接获取，自然也无法让Bootstrap Classloader加载自己定义的类。
  - `Extension Classloader`：$\textcolor{Magenta}{扩展类加载器}$。负责$\textcolor{red}{jre/lib/ext目录下的jar包或者-D java.ext.dirs 指定目录下的jar包}$装入工作库
  - `System Classloader`：$\textcolor{Magenta}{系统类加载器}$。负责$\textcolor{red}{java -classpath或者-D java.class.path 指定目录下的类与jar包}$装入工作库，自定义的类也是通过System Classloader加载的
  - `自定义类加载器`

- 获取类的加载器

  ```java
  @Test
  public void test1() {
      // 获取当前类的类加载器：对于自定义类，使用系统类加载器进行加载。
      ClassLoader classLoader = ClassloaderTest.class.getClassLoader();
      System.out.println(classLoader); // sun.misc.Launcher$AppClassLoader@18b4aac2（AppClassLoader是一个系统类加载器）
  
      // 调用系统类加载器的getParent()：获取到的是扩展类加载器
      ClassLoader classLoaderParent = classLoader.getParent();
      System.out.println(classLoaderParent); // sun.misc.Launcher$ExtClassLoader@54bedef2
  
      // 调用扩展类加载器的getParent()：无法获取引导类加载器
      // 引导类加载器主要负责加载java核心类库，无法加载自定义类
      ClassLoader classLoaderParentParent = classLoaderParent.getParent();
      System.out.println(classLoaderParentParent); // null
  
      // String是java的一个核心类库，是由引导类加载器加载的
      ClassLoader classLoader1 = String.class.getClassLoader();
      System.out.println(classLoader1); // null
  }
  ```

- 使用FileInputStream和类加载器读取配置文件

  ```java
  @Test
  public void test2() throws IOException {
      Properties pros = new Properties();
      // 读取配置文件方式1：创建输入流，读取jdbc.properties。该文件是在当前module下
      //        FileInputStream fis = new FileInputStream("jdbc.properties");
      //        pros.load(fis);
  
      // 读取配置文件方式2：使用Classloader。配置文件jdbc1.properties在当前module的src下
      ClassLoader classLoader = ClassloaderTest.class.getClassLoader();
      InputStream is = classLoader.getResourceAsStream("jdbc1.properties");
      System.out.println(null == is);
      pros.load(is);
  
      String user = pros.getProperty("user");
      String password = pros.getProperty("password");
      System.out.println("user="+user+", password="+password);
  }
  ```

### 15.3 创建运行时类的对象

#### 15.3.1 Class newInstance()的使用

- 作用：创建对应的运行时类。内部调用了运行时类的空参构造器

- 使用newInstance()的要求：

  - 运行时类必须有空参构造器，否则会报InstantiationException异常
  - 空参构造器的访问权限得够。可以为缺省、protected、public，通常设置为public。

- 扩展：在JavaBean中要求提供一个public的空参构造器，原因：

  - 便于通过反射，创建运行时类的对象
  - 便于子类继承此运行时类，默认调用super()时，保证父类有此构造器

- 举例：

  ```java
  @Test
  public void test1() throws IllegalAccessException, InstantiationException {
      Class<Person> clazz = Person.class;
      Person person = clazz.newInstance();
      System.out.println(person);
  }
  ```

#### 15.3.2 体会反射的动态性

Reflection（反射）是被视为==动态语言==的关键，动态语言就是在==运行时==代码可以根据某些条件改变自身结构

如下代码中，在编译阶段是无法确定创建哪个对象的。只有在运行时获取到num的数值之后，才能确定创建的到底是哪个对象。这就提现了反射的动态性。

```java
/**
 * 体会反射的动态性
 */
@Test
public void test2() {
    for (int i = 0; i < 100; i++) {
        int num = new Random().nextInt(3);// 随机生成0、1、2
        String classpath = "";
        switch (num) {
            case 0:
                classpath = "java.util.Date";
                break;
            case 1:
                classpath = "java.lang.Object";
                break;
            case 2:
                classpath = "com.tth.learn.java.Person";
                break;
        }

        try {
            Object obj = getInstance(classpath);
            System.out.println(obj);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

/**
 * 获取类对象
 * @param classpath 类的完整类名
 * @return
 * @throws Exception
 */
private Object getInstance(String classpath) throws Exception{
    Class<?> clazz = Class.forName(classpath);
    return clazz.newInstance();
}
```

### 15.4 获取运行时类的完整结构

#### 15.4.1 获取运行时类的属性结构

> 相关方法

- `Field[] getFields()`：获取当前运行时类及其父类中public修饰的属性
- `Field[] getDeclaredFields()`：获取当前运行时类中声明的所有属性，不包含父类中声明的属性

```java
@Test
public void test1() {
    Class<Person> clazz = Person.class;

    // 获取属性结构
    // getFields()：获取当前运行时类及其父类中public修饰的属性
    Field[] fields = clazz.getFields();
    for (Field f: fields) {
        System.out.println(f);
    }

    System.out.println("*****************");
    // getDeclaredFields()：获取当前运行时类中声明的所有属性，不包含父类中声明的属性
    Field[] declaredFields = clazz.getDeclaredFields();
    for (Field f: declaredFields) {
        System.out.println(f);
    }
}
```

> 扩展：获取属性的权限修饰符、数据类型、属性名称

```java
@Test
public void test2() {
    Class<Person> clazz = Person.class;
    Field[] declaredFields = clazz.getDeclaredFields();
    for (Field f: declaredFields) {
        // 获取属性的权限修饰符
        int modifiers = f.getModifiers();
        System.out.print(Modifier.toString(modifiers) + "\t");

        // 获取属性的数据类型
        Class<?> type = f.getType();
        System.out.print(type.getName() + "\t");

        // 获取属性名
        String name = f.getName();
        System.out.println(name);
    }
}
```

#### 15.4.2 获取运行时类的方法结构

> 相关方法

- `getMethods()`：获取当前运行时类及其父类中public修饰的方法
- `getDeclaredMethods()`：获取当前运行时类中声明的所有方法，不包含父类中的方法

```java
@Test
public void test1() {
    Class<Person> clazz = Person.class;
    // getMethods()：获取当前运行时类及其父类中public修饰的方法
    Method[] methods = clazz.getMethods();
    for (Method m: methods) {
        System.out.println(m);
    }

    System.out.println("********************");

    // getDeclaredMethods()：获取当前运行时类中声明的所有方法，不包含父类中的方法
    Method[] declaredMethods = clazz.getDeclaredMethods();
    for (Method m: declaredMethods) {
        System.out.println(m);
    }
}
```

> 扩展：获取方法声明的注解、权限修饰符、返回值类型、形参列表、抛出的异常

```java
@Test
public void test2() {
    Class<Person> clazz = Person.class;
    Method[] declaredMethods = clazz.getDeclaredMethods();

    for (Method m: declaredMethods) {
        // 获取方法声明的注解
        Annotation[] annotations = m.getAnnotations();
        for (Annotation a: annotations) {
            System.out.print(a + "\t");
        }

        // 获取方法的权限修饰符
        int modifiers = m.getModifiers();
        System.out.print(Modifier.toString(modifiers)+ "\t");

        // 获取方法的返回值类型
        Class<?> returnType = m.getReturnType();
        System.out.print(returnType + "\t");

        // 获取方法名
        String name = m.getName();
        System.out.print(name);
        System.out.print("(");

        // 获取形参列表
        Class<?>[] parameterTypes = m.getParameterTypes();
        if (parameterTypes != null && parameterTypes.length != 0) {
            for (int i = 0; i < parameterTypes.length; i++) {
                if (i == parameterTypes.length - 1) {
                    System.out.print(parameterTypes[i].getName() + "args_" + i);
                }else {
                    System.out.print(parameterTypes[i].getName() + "args_" + i + ",");
                }
            }
        }
        System.out.print(")");

        // 获取方法抛出的异常
        Class<?>[] exceptionTypes = m.getExceptionTypes();
        if (exceptionTypes != null && exceptionTypes.length != 0) {
            System.out.print(" throws ");
            for (int i = 0; i < exceptionTypes.length; i++) {
                if (i == exceptionTypes.length - 1) {
                    System.out.print(exceptionTypes[i].getName());
                }else {
                    System.out.print(exceptionTypes[i].getName() + ", ");
                }
            }
        }
        System.out.println();
    }
}
```

#### 15.4.3 获取当前运行时类的构造器

> 相关方法

- `getConstructors()`：获取当前运行时类中声明为public的构造器，不包含父类构造器
- `getDeclaredConstructors()`：获取当前运行时类中的所有构造器，不包含父类构造器

```java
@Test
public void test1() {
    Class<Person> clazz = Person.class;
    // getConstructors()：获取当前运行时类中声明为public的构造器，不包含父类构造器
    Constructor<?>[] constructors = clazz.getConstructors();
    for (Constructor c: constructors) {
        System.out.println(c);
    }

    System.out.println("**************");

    // getDeclaredConstructors()：获取当前运行时类中的所有构造器，不包含父类构造器
    Constructor<?>[] declaredConstructors = clazz.getDeclaredConstructors();
    for (Constructor c: declaredConstructors) {
        System.out.println(c);
    }
}
```

#### 15.4.4 获取当前运行时类的父类

> 相关方法

- `getSuperclass()`：获取当前运行时类的父类
- `getGenericSuperclass()`：获取当前运行时类带泛型的父类

```java
@Test
public void test2() {
    Class<Person> clazz = Person.class;
    // getSuperclass()：获取当前运行时类的父类
    Class<? super Person> superclass = clazz.getSuperclass();
    System.out.println(superclass);

    // getGenericSuperclass()：获取当前运行时类带泛型的父类
    Type genericSuperclass = clazz.getGenericSuperclass();
    System.out.println(genericSuperclass);
    ParameterizedType paramType = (ParameterizedType) genericSuperclass;
    // 获取泛型类型
    Type[] actualTypeArguments = paramType.getActualTypeArguments();
    for (int i = 0; i < actualTypeArguments.length; i++) {
        if (i == actualTypeArguments.length - 1) {
            System.out.println(actualTypeArguments[i]);
        }else {
            System.out.println(actualTypeArguments[i].getTypeName() + ", ");
        }
    }
}
```

#### 15.4.5 获取当前运行时类实现的接口

==动态代理中可能会用到==

> 相关方法

- `getInterfaces()`：获取当前运行时类的接口

```java
/**
 * 获取当前运行时类实现的接口
 */
@Test
public void test3() {
    Class<Person> clazz = Person.class;
    // getInterfaces()：获取当前运行时类的接口
    Class[] interfaces = clazz.getInterfaces();
    for (Class c: interfaces) {
        System.out.println(c);
    }
}
```

#### 15.4.6 获取当前运行时类所在的包

> 相关方法

- `getPackage()`：获取当前运行时类所在的包

```java
/**
 * 获取当前运行时类所在的包
 */
@Test
public void test4() {
    Class<Person> clazz = Person.class;
    // getPackage()：获取当前运行时类所在的包
    Package pack = clazz.getPackage();
    System.out.println(pack);
}
```

#### 15.4.7 获取当前运行时类声明的注解

> 相关方法

- `getAnnotations()`：获取当前运行时类声明的注解

```java
/**
 * 获取当前运行时类声明的注解
 */
@Test
public void test5() {
    Class<Person> clazz = Person.class;
    // getAnnotations()：获取当前运行时类声明的注解
    Annotation[] annotations = clazz.getAnnotations();
    for (Annotation anno: annotations) {
        System.out.println(anno);
    }
}
```

### 15.5 调用运行时类的指定结构

#### 15.5.1 调用运行时类的指定属性

> 相关方法

- `getField(String name)`：获取指定属性。要求运行时类中属性声明为public。通常不采用此方法
- `getDeclaredField(String name)`：获取运行时类中的指定属性
- `setAccessible(boolean flag)`：保证当前属性是可访问的
- `set(Object obj, Object value)`：设置当前属性的值
  - obj：指明设置哪个对象的属性
  - value：此属性的值设置为多少
- `get(Object obj)`：获取当前属性的值
  - obj 指明获取哪个对象

```java
@Test
public void testField() throws Exception{
    Class<Person> clazz = Person.class;

    // 获取运行时类的对象
    Person person = clazz.newInstance();
	//  1.getDeclaredField(String name)：获取运行时类中的指定属性
    Field name = clazz.getDeclaredField("name");
    // 2.保证当前属性是可访问的
    name.setAccessible(true);
    // 3.设置指定对象此属性的值
    name.set(person, "小米");
    // 4.获取指定对象此属性的值
    String str = (String) name.get(person);
    System.out.println(str);
    
    System.out.println(person);
}
```

#### 15.5.2 调用运行时类中指定的方法

> 相关方法

- `getDeclaredMethod(String name, Class<?>... parameterTypes)`：获取运行时类的指定方法
  - name：方法名称
  - parameterTypes：方法的形参列表
- `setAccessible(boolean flag)`：保证方法是可以访问的
- `Object invoke(Object obj, Object... args)`：执行方法，并获取返回值
  - obj：指明是哪个对象。当方法是静态方法时，Obj可以为` null`，也可以为 `运行时类.class`
  - args ：给方法的形参赋值
  - 返回值： invoke()的返回值即为运行时类中指定方法的返回值。如果运行时类中的方法没有返回值，invoke()的返回值为null

```java
@Test
public void testMethod() throws Exception{
    Class<Person> clazz = Person.class;

    // 获取运行时类的对象
    Person person = clazz.newInstance();

    // 1.获取指定方法
    /**
     * getDeclaredMethod(String name, Class<?>... parameterTypes)：获取运行时类的指定方法
     * @param name 方法名称
     * @param parameterTypes 方法的形参列表
     */
    Method showNation = clazz.getDeclaredMethod("showNation", String.class);

    // 2.保证当前方法是可访问的
    showNation.setAccessible(true);

    // 3.调用方法，并获取方法返回值
    /**
     * Object invoke(Object obj, Object... args)：执行方法，并获取返回值
     * @param obj 指明是哪个对象。当方法是静态方法时，Obj可以为 null，也可以为 运行时类.class
     * @param args 给方法的形参赋值
     * @return invoke()的返回值即为运行时类中指定方法的返回值。如果运行时类中的方法没有返回值，invoke()的返回值为null
     */
    String nation = (String) showNation.invoke(person, "China");
    System.out.println(nation);

    System.out.println("***********************调用静态方法**********************************");
    Method showDesc = clazz.getDeclaredMethod("showDesc");
    showDesc.setAccessible(true);
    showDesc.invoke(Person.class);
    showDesc.invoke(null);
}
```

#### 15.5.3 调用运行时类指定的构造器

> 相关方法

- `getDeclaredConstructor(Class<?>... parameterTypes)`：获取指定构造器
- `setAccessible(boolean flag)`：保证构造器是可以访问的
- `newInstance(Object ... initargs)`：调用构造器，创建运行时类对象
  - initargs：构造器形参列表

```java
@Test
public void testConstructor() throws Exception{
    Class<Person> clazz = Person.class;

    // 1.获取指定构造器
    /**
     * getDeclaredConstructor(Class<?>... parameterTypes)：获取指定构造器
     * @param parameterTypes：指明构造器的形参列表
     */
    Constructor<Person> constructor = clazz.getDeclaredConstructor(String.class);

    // 2.保证构造器是可访问的
    constructor.setAccessible(true);

    // 3.调用构造器创建运行时类对象
    Person person1 = constructor.newInstance("Tom");
    System.out.println(person1);
}
```

### 15.6 反射的应用：动态代理

> 代理模式的原理

使用一个代理将对象包装起来，然后用该代理对象取代原始对象。任何对原始对象的调用都要通过代理。代理对象决定是否以及何时讲方法调用转到原始对象上。

> 静态代理的缺陷

6.8小节中的代理机制的操作，属于静态代理，==特征==是代理类和被代理类都是在编译期间确定下来的，不利于程序的扩展。同时，每一个代理类只能为一个（或者一套）接口服务，这样一来程序开发中必然产生过多的代理。$\textcolor{red}{最好是可以通过一个代理类完成全部的代理功能。}$

> 动态代理

- 定义

  动态代理是指客户通过代理类来调用其它对象的方法，并且是在程序运行时根据需要动态创建目标类的代理对象。

- 使用场景

  - 调试
  - 远程方法调用

- ==相较于静态代理的优点==

  抽象角色中（接口）声明的所有方法都被转移到调用处理器一个集中的方法中处理，这样，我们可以更加灵活和统一的处理众多的方法

> 静态代理的使用举例

```java
/**
 * 静态代理类
 * @Author tth
 * @Date 2022/12/30 14:29
 */
public class StaticProxyTest {

    @Test
    public void test() {
        // 创建被代理类对象
        NikeClothFactory nike = new NikeClothFactory();
        // 创建代理类对象
        ProxyClothFactory proxyClothFactory = new ProxyClothFactory(nike);
        // 开始生产服装
        proxyClothFactory.produceCloth();
    }
}

/**
 * 服装工厂接口：定义生产衣服的接口
 */
interface ClothFactory {

    void produceCloth();
}

/**
 * 代理类：服装代理加工厂
 */
class ProxyClothFactory implements ClothFactory {

    private ClothFactory clothFactory;

    public ProxyClothFactory(ClothFactory clothFactory) {
        this.clothFactory = clothFactory;
    }

    @Override
    public void produceCloth() {
        System.out.println("服装代理加工厂开始进行一些准备工作");
        clothFactory.produceCloth();
        System.out.println("服装代理加工厂开始进行收尾工作");
    }
}

/**
 * 被代理类
 */
class NikeClothFactory implements ClothFactory {
    @Override
    public void produceCloth() {
        System.out.println("Nike服装加工厂生产一批运动服");
    }
}
```

> 动态代理的使用举例

```java
/**
 * 动态代理举例
 * @Author tth
 * @Date 2022/12/30 14:42
 */
public class DynamicProxyTest {
    @Test
    public void test() {
        // 创建被代理类
        NikeClothFactory1 nike = new NikeClothFactory1();

        // 创建代理类
        ClothFactory1 clothFactory = (ClothFactory1) ProxyFactory.getProxyInstance(nike);

        // 调用服装生产方法
        clothFactory.produceCloth();
    }
}

/**
 * 服装工厂接口：定义生产衣服的接口
 */
interface ClothFactory1 {

    void produceCloth();
}

/**
 * 被代理类
 */
class NikeClothFactory1 implements ClothFactory1 {
    @Override
    public void produceCloth() {
        System.out.println("Nike服装加工厂生产一批运动服");
    }
}

/**
 * 要想实现动态代理，需要解决如下两个问题：
 *  1.如何根据被代理类创建一个代理类？
 *  2.如何在调用代理类a的方法时自动调用被代理类的a方法？
 */

/**
 * 代理工厂类
 *  用来解决“根据被代理类创建代理类”的问题
 */
class ProxyFactory {

    /**
     * 根据被代理类对象创建代理对象
     * @param obj 被代理类对象
     * @return 代理类对象
     */
    public static Object getProxyInstance(Object obj) {
        MyInvocationHandler handler = new MyInvocationHandler();
        handler.bind(obj);
        return Proxy.newProxyInstance(obj.getClass().getClassLoader(),
                obj.getClass().getInterfaces(),
                handler);
    }
}

/**
 * 创建MyInvocationHandler实现InvocationHandler，并实现InvocationHandler的invoke()
 * 用来解决“在调用代理类a方法时动态的去调用被代理类的a方法”问题
 */
class MyInvocationHandler implements InvocationHandler {

    // 被代理类对象
    private Object obj;

    /**
     * 被绑定代理类对象（该功能也可以使用构造方法实现）
     * @param obj
     */
    public void bind(Object obj) {
        this.obj = obj;
    }

    /**
     * 当通过代理类对象，调用方法a时，会自动的调用如下方法invoke()
     * @param proxy 代理类对象
     * @param method 代理类要调用的方法
     * @param args 代理类要调用方法的参数
     * @return
     * @throws Throwable
     */
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println(proxy.getClass().getName());
        // method：代理类要调用的方法，同时，此方法也就作为了被代理类要调用的方法
        // method.invoke()的返回值就作为当前类invoke()方法的返回值
        return method.invoke(obj, args);
    }
}
```

## 16 Java8新特性

Java8中最重要的两大改变：$\textcolor{Red}{Lambda表达式}$、$\textcolor{Red}{Stream API}$

### 16.1 接口新特性

> JDK8以后，接口既可以定义全局常量、抽象方法，也可以定义静态方法、默认方法。

- 定义静态方法（public static）：接口中定义的静态方法，只能通过接口来调用
- 定义默认方法（public default）：
  - 可以通过实现类的对象，调用接口中的默认方法
  - 实现类可以重写接口的默认方法
  - 如果子类（或实现类）继承的父类和实现的接口中，声明了同名、同参的默认方法，那么子类在没有重写此方法的情况下，默认调用的是父类中的方法 ---> ==类优先原则==
  - 如果实现类实现了多个接口，且这多个接口中定义了同名、同参的默认方法，在实现类没有重写此方法的情况下，编译报错 ---> ==接口冲突==
    - 如果想解决以上冲突，必须在实现类中重写此方法。 
  - 如何在子类（或实现类）的方法中调用父类、接口中被重写的方法？
    - 调用父类中声明的方法：`super.方法`
    - 调用接口中默认的方法：`接口名.super.方法`

### 16.2 新的日期时间API

具体使用见`9.2.2 JDK8中新的日期时间API`小节

> JDK8新增的日期时间API

- java.time.LocalDate：获取日期
- java.time.LocalTime：获取时间
- java.time.LocalDateTime：获取日期+时间
- java.time.Instant：瞬时，等同于Date中的getTime()
- java.time.format.DateTimeFormatter：时间格式化
- 其他API：
  - java.time.ZoneId：时区相关操作
  - java.time.ZonedDateTime：带时区的日期时间
  - java.time.Clock：使用时区提供对当前即时、日期、和时间的访问的时钟
  - java.time.Duration：用来计算两个**时间**的间隔，可以获取秒级间隔，也可以获取纳秒级间隔
  - java.time.Period：用来计算两个**日期**的间隔
  - java.time.temporal.TemporalAdjuster：时间校正器。如获取当前日期的下一个工作日等
  - java.time.temporal.TemporalAdjusters：该类通过静态方法提供了大量的TemporalAdjuster实现

### 16.3 注解新特性

具体使用见`10.2.6 JDK8中注解新特性`小节

- ==可重复注解==：在一个类或者属性或其他结构上使用多次相同注解
- ==类型注解==：
  - JDK8之前，注解只能是在声明的地方使用；JDK8之后，注解可以应用在任何地方。
  - JDK8之后，元注解@Target的参数类型ElementType枚举值多了两个：
    - ElementType.TYPE_PARAMETER：表示该注解能写在类型变量的声明语句中（如泛型声明）
    - ElementType.TYPE_USE：表示该注解能写在使用类型的任何语句中

### 16.4 Lambda表达式

> 格式

- `->`：lambda操作符 或 箭头操作符
- `-> 左边`：lambda形参列表，即接口中抽象方法的形参列表
- `-> 右边`：lambda体，即重写的抽象方法的方法体

> 举例

`(o1, o2) -> Interger.compare(o1,o2)`

> lambda的使用

- `-> 左边`：
  - lambda形参列表的参数类型可以省略（类型推断）
  - 如果lambda形参列表只有一个参数，其一对()可以省略
- `-> 右边`：
  - lambda体应该使用一对{}包裹
  - 如果lambda体只有一条执行语句（可能是return语句），可以省略一对{}和return关键字（如果省略{}，return必须省略）

>使用举例

```java
@Test
public void test1() {
    // 不使用lambda表达式
    Consumer<String> con1 = new Consumer<String>() {
        @Override
        public void accept(String s) {
            System.out.println(s);
        }
    };
    con1.accept("辞暮尔尔，烟火年年");

    System.out.println("****************************************");

    // 使用lambda表达式：一个参数，可以省略形参的()；抽象方法中只有一句代码，可以省略方法体的{}
    Consumer<String> con2 = s -> System.out.println(s);
    con2.accept("辞暮尔尔，烟火年年");
}

@Test
public void test2() {
    // 不使用lambda表达式
    Comparator<Integer> com1 = new Comparator<Integer>() {
        @Override
        public int compare(Integer o1, Integer o2) {
            return Integer.compare(o1, o2);
        }
    };
    System.out.println(com1.compare(12, 13));

    System.out.println("****************************************");

    // 使用lambda表达式：两个参数，形参列表的()不可省；抽象方法中只有一句代码，可以省略{}和return
    Comparator<Integer> com2 = (o1, o2) ->  Integer.compare(o1, o2);
    System.out.println(com2.compare(2, 1));
}
```

>lambda表达式的本质

==lambda表达式是接口的实例。==

- ==接口的要求==：接口必须是函数式接口
- 以前用匿名实现类表示的，现在都可以用Lambda表达式来写

### 16.5 函数式(Functional)接口

> 定义

如果一个接口中，只声明了一个(抽象)方法，那么这个接口就叫函数式接口。(接口中的方法都是抽象方法)

- 自定义函数式接口时，可以在接口上加上`@FunctionalInterface`注解。这样可以检查它是否是一个函数式接口
- 在java.util.function包下定义了Java8的丰富的函数式接口

> Java内置四大核心函数式接口

| 函数式接口                | 参数类型 | 返回类型 | 用途                                                         |
| ------------------------- | -------- | -------- | ------------------------------------------------------------ |
| Consumer<T> 消费型接口    | T        | void     | 对类型为T的对象应用操作，包含方法：void accept(T t)          |
| Supplier<T> 供给型接口    | 无       | T        | 返回类型为T的对象，包含方法：T get()                         |
| Function<T, R> 函数型接口 | T        | R        | 对类型为T的对象应用操作，并返回R类型的结果，包含方法：R apply(T) |
| Predicate<T> 判定型接口   | T        | boolean  | 确定类型为T的对象是否满足约束，并返回boolean值，包含方法：boolean test(T t) |

### 16.6 方法引用与构造器引用

#### 16.6.1 方法引用

> 概述

- 当要传递给Lambda体的操作，已经有实现的方法了，就可以使用方法引用
- 方法引用可以看做是Lambda表达式深层次的表达。换句话说，方法应用就是Lambda表达式，也就是函数式接口的一个实例，通过方法的名字来指向一个方法，可以认为是Lambda表达式的一个语法糖
- ==要求==：实现接口的抽象方法的参数列表和返回值类型，必须与方法引用的方法的参数列表和返回值类型保持一致
- ==格式==：使用操作符`::`将类（或对象）与方法名分隔开来
- ==三种主要使用情况==：(注意，::右侧都是方法名，不需要参数)
  - 对象::实例方法名
  - 类::静态方法名
  - 类::非静态方法名

> 举例

- 情况一：对象 :: 实例方法

  ```java
  /**
   * 情况一： 对象 :: 实例方法
   *
   * Consumer中的void accept(T t)
   * PrintStream中的void println(String x)
   */
  @Test
  public void test1() {
      // 原Lambda表达式写法
      Consumer<String> con1 = str -> System.out.println(str);
      con1.accept("帘外雨潺潺，春意阑珊。");
  
      System.out.println("**************************************");
  
      // 方法引用写法
      PrintStream out = System.out;
      Consumer<String> con2 = out :: println;
      con2.accept("罗衾不耐五更寒。");
  }
  ```

- 情况二：类 :: 静态方法

  ```java
  /**
   * 情况二： 类 :: 静态方法
   *
   * Comparator中的int compare(T o1, T o2)
   * Integer中的int compareTo(Integer anotherInteger)
   */
  @Test
  public void test2() {
      // 原Lambda写法
      Comparator<Integer> com1 = (o1, o2) -> Integer.compare(o1, o2);
      System.out.println(com1.compare(12, 13));
  
      System.out.println("**************************************");
  
      // 方法引用写法
      Comparator<Integer> com2 = Integer::compareTo;
      System.out.println(com2.compare(12, 13));
  }
  ```

- 情况三：类 :: 静态方法

  ==①中方法参数多于②中方法参数，且①中第一个参数作为②中方法调用者，①中第二个（及以后的）参数作为②中方法参数==

  ```java
  /**
   * 情况三： 类 :: 静态方法
   *
   * ① Comparator中的int compare(T t1, T t2)
   * ② String中的int t1.compareTo(t2)
   */
  @Test
  public void test3() {
      // 原Lambda写法
      Comparator<String> com1 = (t1, t2) -> t1.compareTo(t2);
      System.out.println(com1.compare("abc", "abd"));
  
      System.out.println("**************************************");
  
      // 方法引用写法
      Comparator<String> com2 = String :: compareTo;
      System.out.println(com2.compare("abc", "abm"));
  }
  ```

#### 16.6.2 构造器引用

> 概述

和方法引用类似。

- 使用场景：函数式接口的抽象方法的形参列表和构造器的形参列表一致`且`抽象方法的返回值即为构造器所属的类的类型

> 使用举例

```java
/**
 * 空参构造器
 * Supplier<T>中的 T get()
 */
@Test
public void test1() {
    //
    Supplier<Person> sup1 = () -> new Person();
    System.out.println(sup1.get());

    System.out.println("*******************************************");

    Supplier<Person> sup2 = Person::new;
    System.out.println(sup2.get());
}

/**
 * 含一个参数的构造器
 * Function<T, R>中的R apply(T t)
 */
@Test
public void test2() {
    Function<String, Person> fun1 = name -> new Person(name);
    System.out.println(fun1.apply("Tom"));

    System.out.println("*******************************************");

    Function<String, Person> fun2 = Person::new;
    System.out.println(fun2.apply("张三"));
}

/**
 * 含2个参数的构造器
 * BiFunction<T, U, R>中的R apply(T t, U u)
 */
@Test
public void test3() {
    BiFunction<String, Integer, Person> bi1 = (name, age) -> new Person(name, age);
    System.out.println(bi1.apply("Steven", 18));

    System.out.println("*******************************************");

    BiFunction<String, Integer, Person> bi2 = Person::new;
    System.out.println(bi2.apply("李四", 22));
}
```

#### 16.6.3 数组引用

> 概述

可以将数组引用看做是一个特殊的类，写法与构造器引用一致

> 使用举例

```java
@Test
public void test() {
    Function<Integer, String[]> fun1 = length -> new String[length];
    String[] arr1 = fun1.apply(5);
    System.out.println(Arrays.toString(arr1));

    System.out.println("************************************************");

    Function<Integer, String[]> fun2 = String[] :: new;

    String[] arr2 = fun2.apply(10);
    System.out.println(Arrays.toString(arr2));
}
```

### 16.7 Stream API

#### 16.7.1 概述

- Stream API(java.util.stream)把真正的函数式变成风格引入到Java中

- 可以使用Stream API对集合数据进行操作，如过滤、查询、排序等

- 为什么要用Stream API？

  实际开发中，项目中多数数据源都来自于MySQL、Oracle等。但是对于像MongoDB、Radis等NoSql中获取的数据需要在Java层面去处理。

- Stream和Collection的区别

  - Collection是一种静态的内存数据结构；Stream是有关计算的
  - Collection主要是面向内存，存储在内存中；Stream主要是面向CPU，通过CPU实现计算

- 注意：

  - Stream不会存储数据
  - Stream不会改变源对象，会返回一个持有结果的新的Stream ---- `Stream 的不可变性`
  - Stream操作是延迟执行的。这意味着他们会等到结果的时候才执行

#### 16.7.2 Stream的操作三个步骤

- ①创建Stream

  一个数据源（如集合、数组），获取一个流

- ②中间操作

  一个中间操作链，对数据源的数据进行处理

- ③终止操作（终端操作）

  一旦执行终止操作，就执行中间操作链，并产生结果。之后不会再被使用

![image-20230103155345648](./images/Java系统学习-基础/image-20230103155345648.png)

#### 16.7.3 Stream的实例化

- 通过集合实例化

  - `Stream<E> stream()`：返回一个顺序流
  - `Stream<E> parallelStream()`：返回一个并行流

- 通过数组实例化

  - 调用Arrays 的`static <T> Stream<T> stream(T[] array)`方法

- 通过Stream的`static<T> Stream<T> of(T... values)`方法实例化

- 创建无限流 ---- 用于造数据

  - 调用Stream的`static<T> Stream<T> iterate(final T seed, final UnaryOperator<T> f)`方法
  - 调用Stream的`static<T> Stream<T> generate(Supplier<T> s)`方法

- 举例说明

  ```java
  /**
   * 通过集合实例化
   */
  @Test
  public void test1() {
      List<Person> persons = new ArrayList<Person>(){
          { add(new Person(1001, "张1", 18, 5600)); }
          { add(new Person(1002, "张2", 17, 7200)); }
          { add(new Person(1003, "张3", 16, 3400)); }
          { add(new Person(1004, "张4", 20, 8900)); }
          { add(new Person(1005, "张5", 19, 5400)); }
          { add(new Person(1006, "张6", 18, 5600)); }
      };
  
      // 创建顺序流
      Stream<Person> stream = persons.stream();
  
      // 创建并行流
      Stream<Person> personStream = persons.parallelStream();
  }
  
  /**
   * 通过数组实例化
   */
  @Test
  public void test2() {
      Person[] arr = new Person[] {
              new Person(1001, "张1", 18, 5600),
              new Person(1002, "张2", 17, 7200),
              new Person(1003, "张3", 16, 3400),
              new Person(1004, "张4", 20, 8900),
              new Person(1005, "张5", 19, 5400),
              new Person(1006, "张6", 18, 5600)
      };
  
      Stream<Person> stream = Arrays.stream(arr);
  }
  
  /**
   * 通过Stream.of()实例化
   */
  @Test
  public void test3() {
      Stream<Person> stream = Stream.of(new Person(1001, "张1", 18, 5600),
              new Person(1002, "张2", 17, 7200),
              new Person(1003, "张3", 16, 3400),
              new Person(1004, "张4", 20, 8900),
              new Person(1005, "张5", 19, 5400),
              new Person(1006, "张6", 18, 5600));
  
  }
  
  /**
   * 创建无限流---用来造数据
   */
  @Test
  public void test4() {
      // 获取前10个偶数
      Stream<Integer> stream1 = Stream.iterate(0, t -> t + 2).limit(10);
      stream1.forEach(System.out :: println);
  
      System.out.println("********************************");
  
      // 获取10个随机数
      Stream<Double> stream2 = Stream.generate(Math::random).limit(10);
      stream2.forEach(d -> System.out.println(d));
  } 
  ```

#### 16.7.4 Stream的中间操作

多个$\textcolor{Red}{中间操作}$可以连接起来行程一个$\textcolor{Red}{流水线}$。除非流水线上触发终止操作，否则$\textcolor{Red}{中间操作不会执行任何的处理}$！而是$\textcolor{Red}{在终止操作时一次性全部处理}$。这称为“$\textcolor{Red}{惰性求值}$”。

> 筛选与切片

| 方法                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| filter(Predicate p) | 接收Lambda，从流中排除某些元素                               |
| distinct()          | 筛选，通过流元素生成的hasCode()和equals()去除重复元素        |
| limit(long maxSize) | 截断流，使其元素不超过指定数量                               |
| ship(long n)        | 跳过元素，返回一个扔掉了前n个元素的流。若流中元素不足n个，则返回一个空流。与limit(n)互补 |

> 映射

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| $\textcolor{Red}{map(Function f)}$                           | 接收一个函数作为参数，将元素转换成其他形式或提取信息，该函数会被应用到每个元素上，并将其映射成一个新的元素。 |
| $\textcolor{Red}{flatMap(Function f)}$                       | 接收一个函数作为参数，将流中的每个值都换成另一个流，然后把所有的流连接成一个流。 |
| mapToDouble(ToDoubleFunction f)与flatMapToDouble(ToDoubleFunction f) | 接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的DoubleStream |
| mapToInt(ToIntFunction f)与flatMapToInt(ToIntFunction f)     | 接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的IntStream |
| mapToLong(ToLongFunction f)与flatMapToLong(ToLongFunction f) | 接收一个函数作为参数，该函数会被应用到每个元素上，产生一个新的LongStream |

==map(Function f)和flatMap(Function f)的区别==：

`答`：map(Function f)类似于List中的add()，flatMap(Function f)类似于List中的addAll()。

> 排序

| 方法                          | 描述                                                 |
| ----------------------------- | ---------------------------------------------------- |
| sorted()                      | 产生一个新流，其中按自然顺序排序                     |
| sorted(Comparator comparator) | 产生一个新柳，其中按照自定义的Comparator实现定制排序 |

> 例子

- 测试类：

  ```java
  /**
   * @Author tth
   * @Date 2023/1/3 16:46
   */
  public class StreamAPITest2 {
  
      /**
       * Stream的筛选与切片
       */
      @Test
      public void test1() {
          List<Person> persons = Person.getPersons();
  
          // 练习：查询员工中薪资超过6000的员工，并打印
          persons.stream().filter(p -> p.getSalary() > 6000).forEach(System.out :: println);
  
          System.out.println("***********************************************************************");
  
          // 练习：截断流，使其元素不超过指定元素
          persons.stream().limit(3).forEach(System.out :: println);
  
          System.out.println("***********************************************************************");
  
          // 练习：跳过元素，返回一个扔掉了前n个元素的流。若流中元素不足n个，则返回一个空流。与limit(n)互补
          persons.stream().skip(3).forEach(System.out :: println);
  
          System.out.println("***********************************************************************");
  
          // 练习：筛选，通过流元素生成的hasCode()和equals()去除重复元素
          persons.stream().distinct().forEach(System.out :: println);
      }
  
      @Test
      public void test2() {
          List<Person> persons = Person.getPersons();
  
          // 练习：获取员工姓名长度大于3的人员的姓名
          persons.stream().filter(e -> e.getName().length()>3).map(Person::getName).forEach(System.out :: println);
      }
  
      /**
       * <R> Stream<R> map(Function f) 和
       */
      @Test
      public void test2_1() {
          List<String> list = Arrays.asList("aa", "bb", "cc", "dd");
          Stream<Stream<Character>> stream1 = list.stream().map(StreamAPITest2::fromStringToStream);
          stream1.forEach(s -> {
              s.forEach(System.out :: println);
          });
  
          System.out.println("********************************************");
  
          Stream<Character> stream2 = list.stream().flatMap(StreamAPITest2::fromStringToStream);
          stream2.forEach(System.out :: println);
  
      }
  
      /**
       * 将字符串str中的多个字符构成的集合转换为Stream实例。
       *  即将字符串str转成Stream实例
       * @param str
       * @return
       */
      public static Stream<Character> fromStringToStream(String str) {
          ArrayList<Character> list = new ArrayList<>();
          for(Character c : str.toCharArray()) {
              list.add(c);
          }
          return list.stream();
      }
  
      @Test
      public void test3() {
          // 练习：通过sorted()实现自然排序
          List<Integer> list = Arrays.asList(12, 3, 99, 10, 78, 67, 88);
          list.stream().sorted().forEach(System.out :: println);
  
          System.out.println("***********************************************************************");
          
          // 练习：通过sorted(Comparator comparator)实现定制排序
          List<Person> persons = Person.getPersons();
          persons.stream().sorted(((o1, o2) -> {
              int compare = Integer.compare(o1.getAge(), o2.getAge());
              if (compare != 0) {
                  return compare;
              } else {
                  return Double.compare(o1.getSalary(), o2.getSalary());
              }
          })).forEach(System.out :: println);
      }
  }
  ```

- 实体类：

  ```java
  /**
   * @Author tth
   * @Date 2023/1/3 15:05
   */
  public class Person {
      private String name;
      private Integer age;
      private Integer id;
      private double salary;
  
      public Person() {
      }
  
      public Person(String name) {
          this.name = name;
      }
  
      public Person(String name, Integer age) {
          this.name = name;
          this.age = age;
      }
  
      public Person(Integer id, String name, Integer age, double salary) {
          this.name = name;
          this.age = age;
          this.id = id;
          this.salary = salary;
      }
  
      public String getName() {
          return name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  
      public Integer getAge() {
          return age;
      }
  
      public void setAge(Integer age) {
          this.age = age;
      }
  
      public Integer getId() {
          return id;
      }
  
      public void setId(Integer id) {
          this.id = id;
      }
  
      public double getSalary() {
          return salary;
      }
  
      public void setSalary(double salary) {
          this.salary = salary;
      }
  
      @Override
      public String toString() {
          return "Person{" +
                  "name='" + name + '\'' +
                  ", age=" + age +
                  ", id=" + id +
                  ", salary=" + salary +
                  '}';
      }
  
      @Override
      public boolean equals(Object o) {
          if (this == o) return true;
          if (o == null || getClass() != o.getClass()) return false;
          Person person = (Person) o;
          return Double.compare(person.salary, salary) == 0 &&
                  name.equals(person.name) &&
                  age.equals(person.age) &&
                  id.equals(person.id);
      }
  
      @Override
      public int hashCode() {
          return Objects.hash(name, age, id, salary);
      }
  
      public static List<Person> getPersons() {
          return new ArrayList<Person>(){
              { add(new Person(1001, "张1", 18, 5600)); }
              { add(new Person(1002, "张2强", 17, 7200)); }
              { add(new Person(1003, "张3", 16, 3400)); }
              { add(new Person(1004, "张4凭栏", 20, 8900)); }
              { add(new Person(1005, "张5", 19, 5400)); }
              { add(new Person(1005, "张5", 19, 5400)); }
              { add(new Person(1006, "张6阑珊", 18, 7400)); }
              { add(new Person(1006, "张6", 18, 2100)); }
          };
      }
  }
  ```

#### 16.7.5 Stream的终止操作

> 匹配与查找

| 方法                  | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| allMatch(Predicate p) | 检查是否匹配所有元素                                         |
| anyMatch(Predicate p) | 检查是否至少匹配一个元素                                     |
| noneMatch()           | 检查是否没有匹配所有元素                                     |
| findFirst()           | 返回第一个元素                                               |
| findAny()             | 返回当前流中任意元素                                         |
| count()               | 返回流中元素总数                                             |
| max(Comparator c)     | 返回流中最大值                                               |
| min(Comparator c)     | 返回流中最小值                                               |
| forEach(Consumer c)   | 内部迭代（使用Collection接口需要用户去做迭代的方法，称为外部迭代。相反Stream API使用内部迭代） |

> 规约

| 方法                             | 描述                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| reduce(T iden, BinaryOperator b) | 可以将流中元素反复结合起来，得到一个值。参数iden表示初始值。返回值类型为T |
| reduce(BinaryOperator b)         | 可以将流中元素反复结合起来，得到一个值。返回值类型为Optional<T> |

==注==：

map和reduce的连接通常称为map-reduce模式，因Google用它来进行网络搜索而出名

==用途==：

如计算List<Employee>中员工工资的总和

> 收集

| 方法                 | 描述                                                         |
| -------------------- | ------------------------------------------------------------ |
| collect(Collector c) | 将流转换为其他形式。接收一个Collector接口的实现，用于给Stream中元素做汇总的方法 |

==注==：

`Collector`接口中方法的实现决定了如何对流执行收集的操作（如收集到List、Set、Map）。另外`Collectors`实用类提供了很多静态方法，可以便捷的创建常见收集器实例，常见方法如下：

| 方法                                     | 返回值类型           | 作用                                  |
| ---------------------------------------- | -------------------- | ------------------------------------- |
| toList()                                 | List<T>              | 把流中元素收集到List                  |
| toSet()                                  | Set<T>               | 把流中元素收集到Set                   |
| toCollection(Supplier collectionFactory) | Collection<T>        | 把流中元素收集到创建的集合            |
| counting()                               | Long                 | 计算流中元素的个数                    |
| summingInt(ToIntFunction mapper)         | Integer              | 对流中元素的整数属性求和              |
| averagingInt(ToIntFunction  mapper)      | Double               | 对流中元素的整数属性求平均值          |
| summarizingInt(ToIntFunction  mapper)    | IntSummaryStatistics | 收集流中Integer属性的统计值，如平均值 |

> 举例

- 测试类：

  ```java
  /**
   * 测试Stream的终止操作
   * @Author tth
   * @Date 2023/1/4 10:31
   */
  public class StreamAPITest3 {
  
      /**
       * 匹配与查找
       */
      @Test
      public void test1() {
          List<Person> persons = Person.getPersons();
  
          // 练习：判断是否所有人员的年龄都不小于16岁
          boolean allMatch = persons.stream().allMatch(p -> p.getAge() >= 16);
          System.out.println(allMatch);
  
          System.out.println("**************************************************************************");
  
          // 练习：判断是否存在人员的工资大于10000
          boolean anyMatch = persons.stream().anyMatch(p -> p.getSalary() > 10000);
          System.out.println(anyMatch);
  
          System.out.println("**************************************************************************");
  
          // 练习：判断是否存在人员姓“诸葛”
          // noneMatch：检查是否没有匹配的元素。如果有姓“诸葛”的，返回false；否则返回true
          boolean noneMatch = persons.stream().noneMatch(p -> p.getName().startsWith("诸葛"));
          System.out.println(noneMatch);
  
          System.out.println("**************************************************************************");
  
          // 练习：返回第一个人员信息
          // Optional类是用来处理空指针类型的。后边讲
          Optional<Person> first = persons.stream().findFirst();
          System.out.println(first);
  
          System.out.println("**************************************************************************");
  
          // 练习：随机返回一个人员信息
          // 注意：使用findAny()时，在获取Stream实例的时候，最好用List.parallelStream()，才会随机返回一个。使用List.stream()只能返回第一个
          Optional<Person> any2 = persons.parallelStream().findAny();
          System.out.println(any2);
  
          System.out.println("**************************************************************************");
  
          // 练习：求人员列表中年龄在18岁以下的人员的个数
          long count = persons.stream().filter(person -> person.getAge() < 18).count();
          System.out.println(count);
  
          System.out.println("**************************************************************************");
  
          // 练习：返回最高的工资
          Optional<Double> max = persons.stream().map(person -> person.getSalary()).max(Double::compareTo);
          System.out.println(max);
  
          System.out.println("**************************************************************************");
  
          // 练习：返回最低工资的员工
          Optional<Person> minSalaryPerson = persons.stream().min((p1, p2) -> Double.compare(p1.getSalary(), p2.getSalary()));
          System.out.println(minSalaryPerson);
  
          System.out.println("**************************************************************************");
  
          // 练习：内部迭代
          persons.stream().forEach(System.out :: println);
      }
  
      /**
       * 规约
       */
      @Test
      public void test2() {
          // 练习1：计算1-10的自然数的值
          List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
          Integer sum = list.stream().reduce(0, Integer::sum);
          System.out.println(sum);
  
          // 练习2：计算人员工资的总和
          List<Person> persons = Person.getPersons();
          Optional<Double> reduce = persons.stream().map(person -> person.getSalary()).reduce(Double::sum);
          // 如果不知道Double.sum(double a, double b)方法，可以使用如下方法计算总和
  //        Optional<Double> reduce2 = persons.stream().map(person -> person.getSalary()).reduce((d1, d2) -> d1 + d2);
          System.out.println(reduce);
      }
  
      /**
       * 收集
       */
      @Test
      public void test3() {
          List<Person> persons = Person.getPersons();
          // 练习： 查找工资大于6000的人员，结果返回一个List
          List<Person> collect = persons.stream().filter(person -> person.getSalary() > 6000).collect(Collectors.toList());
          System.out.println(collect);
  
          System.out.println();
  
          // 练习：查找工资大于6000的人员，结果返回一个Set
          Set<Person> collect1 = persons.stream().filter(person -> person.getSalary() > 6000).collect(Collectors.toSet());
          System.out.println(collect1);
      }
  }
  ```

- 实体类

  见`16.7.4 中间操作`

### 16.8 Optional类

> 概述

`Optional<T>`类（java.util.Optional）是一个容器类，它可以保存类型T的值，代表这个值存在。或者仅仅保存null，表示这个值不存在。原来用null表示一个值不存在，现在Optional可以更好的表达这个概念，并且==可以避免空指针异常==。Optional中提供了很多方法，这样就不用显示进行空值j检测

> Optional相关方法

- 创建Optional类对象
  - `Optional.of(T t)`：创建一个Optional实例，t必须非空
  - `Optional.empty()`：创建一个空的Optional实例
  - `Optional.ofNullable(T t)`：t可以为空
- 判断Optional容器中是否包含对象
  - `boolean isPresent()`：判断是否包含对象
  - `void ifPresent(Consumer c)`：如果有值，就执行Consumer接口的实例代码，并且该值会作为参数传给它
- 获取Optional容器的对象
  - `T get()`：如果调用对象包含值，返回该值，否则抛异常
  - `T orElse(T other)`：如果有值将其返回，否则返回指定的other对象
  - `T orElseGet(Supplier s)`：如果有值将其返回，否则抛出由Supplier接口提供的异常

> 举例：Optional是如何避免空指针的

重要方法：

- Optional<T> ofNullable(T value)：获取Optional实例
- T orElse(T other)：或uOptiona实例的对象

```java
@Test
public void test2() {
    Boy boy = null;
    String girName = getGirName(boy);
    System.out.println(girName);
}

/**
 * 返回boy中girl对象的名字
 *  Optional<T> ofNullable(T value) 与 T orElse(T other)的使用
 * @param boy
 * @return
 */
public String getGirName(Boy boy) {
    // 如果使用下面语句，当boy为空或者boy中girl的属性为空时，都会报空指针异常
    // return boy.getGirl().getName();

    // 使用Optional避免空指针异常
    Optional<Boy> boyOptional = Optional.ofNullable(boy);
    // 此时boy1一定非空，且boy1中的girl也一定非空
    Boy boy1 = boyOptional.orElse(new Boy(new Girl("迪丽热巴")));
    return boy1.getGirl().getName();
}
```

### 16.9 try语句的优化

Java8中可以实现==资源的自动关闭==，$\textcolor{Red}{要求执行后要关闭的资源必须在try的一对小括号中初始化}$，否则编译不通过。

```java
@Test
public void test2() {
    // java8之前的写法
    //        InputStreamReader reader = null;
    //        try {
    //            reader = new InputStreamReader(System.in);
    //            char[] buff = new char[1024];
    //            int len;
    //            while ((len = reader.read(buff)) != -1) {
    //                String str = new String(buff, 0, len);
    //                System.out.println(str);
    //            }
    //        } catch (IOException e) {
    //            e.printStackTrace();
    //        } finally {
    //            if (null != reader) {
    //                try {
    //                    reader.close();
    //                } catch (IOException e) {
    //                    e.printStackTrace();
    //                }
    //            }
    //        }

    // java8写法：资源的实例化必须写在try的()中
    try(InputStreamReader reader = new InputStreamReader(System.in)) {
        char[] buff = new char[1024];
        int len;
        while ((len = reader.read(buff)) != -1) {
            String str = new String(buff, 0, len);
            System.out.println(str);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}

```

### 16.10 其他新特性

- 通用目标类型推断
- JDK的更新：
  - 集合的流式操作
  - 并发
  - Arrays
  - Number和Math
  - IO/NIO的改进
  - Reflection获取形参名
  - String：join()
  - Files
- 新编译工具：
  - jjs
  - jdeps
- JVM中Metaspace取代PermGen空间

## 17 Java9&10&11新特性

> 概述

- 从java9开始，java的从==以特性驱动==的发布周期转变为==以时间驱动==的发布周期。Java的计划发布周期是==6个月==，Oracle（在Java11之后）将以==三年为周期==发布长期支持版本。
- java9、java10不是长期支持的版本，java11是长期支持的版本。因此可以不用安装java9、java10，直接安装java11就行

### 17.1 Java9新特性

Java9中最重要的两大改变：$\textcolor{Red}{模块化系统}$、$\textcolor{Red}{jshell命令}$

> 概述

Java9提供了==超过150项新功能==特性，包括备受期待的模块化系统、可交互的REPL工具（jshell、JDK编译工具）、Java公共API和私有代码，以及安全增强、扩展提升、性能管理改善等。可以说==Java9是一个庞大的系统工程，完全做了一个整体改变==。

> Java9中不得不说的新特性

- 最主要之一：==模块化系统==
- 最主要之二：==jshell命令==
- 多版本兼容jar包
- 语法改进之一：接口的私有方法
- 语法改进之二：钻石操作符(<>)的使用升级
- 语法改进之三：语法改进：try
- API改进之一：String存储结构变更
- API改进之二：便利的集合特性--of()创建只读集合
- API改进之三：增强的Stream API
- API改进之四：全新的HTTP客户端API
- API改进之五：Deprecated的相关API
- javadoc的HTML5支持
- JavaScript引擎升级--Nashorn（Java11中被干掉了）
- java的动态编译器

#### 17.1.1 模块化系统

> 模块化系统提出的背景

==谈到Java9大家往往第一个想到的就是Jigsaw项目。==Java自出生以来，Java和相关生态在不断丰富的同时，也暴露出一些问题：

- **Java运行环境的膨胀和臃肿**。每次启动JVM，至少会有30~60MB的内存加载，主要原因是**JVM需要加载rt.jar**
- **当代码库越来越大，创建复杂，盘根错节的“意大利面条式代码”的几率呈指数级的增长**。不同版本的类库交叉依赖导致让人头疼的问题，这些都阻碍了Java开发和运行效率的提升
- 很难真正的对代码进行封装，而系统并没有对不同部分（也就是JAR文件）之间的依赖有个明确的概念。**每个公共类都可以被类路径下任何其他公共类访问到，这样就导致无意中使用了并不想公开访问的API**

> 定义

本质上讲，==模块（module）的概念，其实就是package外再裹一层==。也就是说，用模块来管理各个package，通过声明某个package暴露，不声明默认就是隐藏。因此，模块化使得代码组织上$\textcolor{Red}{更安全}$，因为它可以$\textcolor{Red}{指定哪些部分可以暴露，哪些部分需要隐藏}$。

> 优点

- 减少内存的开销
- 只须必要模块，而非全部jdk模块，可简化各种类库和大型应用的开发和维护
- 改进Java SE平台，使其可以适应不同大小的计算设备
- 改进其安全性、可维护性，提高性能

> 例子：在day13模块中使用java9test模块中定义的Person类

- 注意事项：

  day13模块中使用Person类的类，所在的包不能和Person类所在包名字相同

- 步骤

  - ①在java9test模块中的$\textcolor{Red}{src}$目录下创建$\textcolor{Red}{module-info.java文件}$，写明要暴露出去的包(注意是包，不能详细到类) 
  - ②在day13模块的$\textcolor{Red}{src}$目录下中创建$\textcolor{Red}{module-info.java文件}$，写明要导入的包(注意是包，不能详细到类) 
  - ③在day13模块中使用java9test模块中的类

- 代码

  - java9test模块中Person类

    ```java
    package com.tth.learn.java.bean;
    
    /**
     * @Author tth
     * @Date 2023/1/4 17:22
     */
    public class Person {
        private String name;
        private int age;
    
        // 以下省略构造器、getter、setter、toString等方法
    }
    ```

  - java9test模块中module-info.java文件

    ```java
    module java9test {
        exports com.tth.learn.java.bean;
    }
    ```

  - day13模块中module-info.java文件

    ```java
    module day13 {
        requires java9test;
    }
    ```

  - day13模块中使用Person类

    ```java
    package com.tth.learn.java;
    
    import com.tth.learn.java.bean.Person;
    
    /**
     * 模块化测试
     *  在day13模块中调用java9test模块中的Person类
     *
     *  步骤：
     *  ①在java9test模块中的src目录下创建module-info.java文件，写明要暴露出去的包(注意是包，不能详细到类)
     *  ②在day13模块的src目录下中创建module-info.java文件，写明要导入的包(注意是包，不能详细到类)
     *  ③在day13模块中使用java9test模块中的类
     * @Author tth
     * @Date 2023/1/4 17:11
     */
    public class ModuleTest {
    
        public static void main(String[] args) {
            Person person = new Person("Tom", 11);
            System.out.println(person);
        }
    }
    ```

#### 17.1.2 Java的REPL工具：jshell命令

> REPL概念

- 定义：

  REPL（read-evaluate-print-loop），以交互的方式对语句和表达式进行求值。开发者只需要输入一些代码，就可以在编译前获得对程序的反馈。

  **之前的java版本要想执行代码，必须创建文件、声明类、提供测试方法方可实现**

- 设计理念：

  即写即得，快速运行

- 实现目标：

  - java9中开始由了REPL工具--jshell。在控制台启动jshell，在没有创建类的情况下，可以直接声明变量、计算表达式、执行语句。
  - jshell可以从文件中加载语句或者将语句保存到文件中
  - jshell中可以使用Tab键自动补全

> jshell工具的使用

- 使用控制台打开jshell工具，并尝试打印“hello world”：

  ```shell
  C:\Users\tangtianhua>D:\soft\jdk-11.0.16.1\bin\jshell.exe
  |  欢迎使用 JShell -- 版本 11.0.16.1
  |  要大致了解该版本, 请键入: /help intro
  
  jshell> System.out.println("hello world")
  hello world
  ```

- 声明变量：$\textcolor{Red}{如果变量名被重复定义，后边定义的会覆盖之前的}$

  ```shell
  jshell> int n = 10;
  n ==> 10
  
  jshell> int m = 20;
  m ==> 20
  
  jshell> System.out.println(m+n);
  30
  ```

- 声明方法：$\textcolor{Red}{如果方法名被重复定义，后边定义的会覆盖之前的}$

  ```shell
  jshell> public int add(int i1, int i2) {
     ...> return i1 + i2;
     ...> }
  |  已创建 方法 add(int,int)
  ```

- 方法调用：

  ```shell
  jshell> System.out.println(add(m,n))
  30
  ```

- 声明类：

  ```shell
  jshell> class Person {
     ...> private String name;
     ...> private int age;
     ...> }
  |  已创建 类 Person
  ```

- 引入包：

  ```shell
  jshell> import java.net.URL;
  ```

- 编译时异常的处理：

  对于编译时异常，jshell在后台会将其隐藏，不会强制程序员捕获

  ```shell
  jshell> URL url = new URL("http://www.baidu.com");
  url ==> http://www.baidu.com
  ```

- `/help`：获取jshell帮助

- `/edit`：打开编辑窗口。对之前输入的内容编辑完成后，点击`Accept`按钮编辑内容方可生效

  ![image-20230105103716733](./images/Java系统学习-基础/image-20230105103716733.png)

- `/vars`：列出当前session下定义过的变量

  ```shell
  jshell> /vars
  |    int n = 10
  |    int m = 20
  ```

- `/methods`：列出当前session下定义过的方法

  ```shell
  jshell> /methods
  |    int add(int,int)
  ```

- `/list`：列出当前session里所有有效的代码片段

  ```shell
  jshell> /list
  
     1 : System.out.println("hello world")
     2 : int n = 10;
     3 : int m = 20;
     4 : System.out.println(m+n);
     5 : public int add(int i1, int i2) {
         return i1 + i2;
         }
     6 : System.out.println(add(m,n))
     7 : class Person {
         private String name;
         private int age;
         }
  ```

- `/open`：调用外部文件中的java代码

  java文件中不需要定义类，只需按照jshell工具中的语法编写即可。

  ![image-20230105105258268](./images/Java系统学习-基础/image-20230105105258268.png)

- `/exit`：退出

  ```shell
  jshell> /exit
  |  再见
  ```

#### 17.1.3 接口的私有方法

Java8中接口除了抽象方法之外，还可以定义静态方法（静态方法只能接口自己调用，实现类不能调用）、默认方法（实现类可以选择是否重写接口中的默认方法）。

==Java9中接口的方法可以定义为private的。==私有方法只能在接口内部使用，外部不允许调用。

```java
/**
 * @author tth
 * @description 接口新特性
 * @date 2023/1/5 11:19
 */
public interface InterfaceTest {
    // 定义抽象方法，访问权限是public
    void methodAbstract();

    // 定义静态方法，访问权限是public
    static void methodStatic() {
        System.out.println("我是接口中的静态方法");
    }

    // 定义方法，访问权限是public
    default void methodDefault() {
        System.out.println("我是接口中的默认方法");
    }

    // 定义私有方法。JDK9新特性
    private void methodPrivate() {
        System.out.println("我是接口中的私有方法");
    }
}
```

#### 17.1.4 钻石操作符使用升级

==在Java9中，钻石操作符与匿名实现类可以共同存在==，在java9之前是不可以的。

此外，==该特性要与jdk7中新特性--类型推断区分开==。

```java
public void test1() {
    // Java9新特性：钻石操作符与匿名实现类可以共同使用
    Comparator<Object> com = new Comparator<>() {
        @Override
        public int compare(Object o1, Object o2) {
            return 0;
        }
    };

    // JDK7新特性：类型推断
    List<String> list = new ArrayList<>();
}
```

#### 17.1.5 try语句的改进

在java8和java9中可以实现$\textcolor{Red}{资源的自动关闭}$。

- 在java8中，需要关闭的资源的实例化需要在$\textcolor{Red}{try后边的()}$中进行。此时
- 在java9中，需要关闭的资源的实例化可以在$\textcolor{Red}{try外边}$实现，$\textcolor{Red}{try对应的()中写明要关闭的资源}$。$\textcolor{Red}{多个资源用 ; 隔开}$

```java
@Test
public void test2() {
    // java8之前的写法
    //        InputStreamReader reader = null;
    //        try {
    //            reader = new InputStreamReader(System.in);
    //            char[] buff = new char[1024];
    //            int len;
    //            while ((len = reader.read(buff)) != -1) {
    //                String str = new String(buff, 0, len);
    //                System.out.println(str);
    //            }
    //        } catch (IOException e) {
    //            e.printStackTrace();
    //        } finally {
    //            if (null != reader) {
    //                try {
    //                    reader.close();
    //                } catch (IOException e) {
    //                    e.printStackTrace();
    //                }
    //            }
    //        }

    // java8写法：需要自动关闭的资源的实例化必须写在try的()中
    //        try(InputStreamReader reader = new InputStreamReader(System.in)) {
    //            char[] buff = new char[1024];
    //            int len;
    //            while ((len = reader.read(buff)) != -1) {
    //                String str = new String(buff, 0, len);
    //                System.out.println(str);
    //            }
    //        } catch (IOException e) {
    //            e.printStackTrace();
    //        }

    // java9写法：需要自动关闭的资源的实例化可以放在try()外边，但是此时的资源对象是一个常量，无法更改。
    // 如果有多个资源需要自动关闭，在try()中用;隔开
    InputStreamReader reader = new InputStreamReader(System.in);
    OutputStreamWriter writer = new OutputStreamWriter(System.out);
    try(reader; writer) {
        char[] buff = new char[1024];
        int len;
        while ((len = reader.read(buff)) != -1) {
            String str = new String(buff, 0, len);
            System.out.println(str);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

#### 17.1.6 String存储结构的变更

String、StringBuilder、StringBuffer(线程安全)底层改用byte[]存储，不在使用char[]

#### 17.1.7 新增创建只读集合的方法

==java9中可以使用具体集合的of()方法创建只读集合==。

- java9之前创建只读集合--使用`Collections.unmodifiableXxx()`

  以List为例。List还可以使用`Arrays.asList()`创建只读集合

  ```java
  /**
       * java9之前创建只读集合。以List为例
       */
  @Test
  public void test3() {
      // java9之前的写法1
      List<String> nameList = new ArrayList<>();
      nameList.add("Bob");
      nameList.add("Jerry");
      // 将list变为只读
      nameList = Collections.unmodifiableList(nameList);
      //        nameList.add("张三"); // 抛异常 UnsupportedOperationException
      System.out.println(nameList);
  
      // java9之前的写法2
      List<String> nameList2 = Arrays.asList("Tom", "Steven");
      //        nameList2.add("张三"); // 抛异常 UnsupportedOperationException
      System.out.println(nameList2);
  }
  ```

- java9创建只读集合--使用`of()`方法

  ```java
  **
      * java9新特性：集合工厂方法，创建只读集合
      */
      @Test
      public void test4() {
      // 创建只读List
      List<Integer> list = List.of(1, 2, 3, 4, 5);
      //        list.add(6); // 抛异常 UnsupportedOperationException
      System.out.println(list);
  
      // 创建只读Set
      Set<String> set = Set.of("纳兰性德", "李清照", "辛弃疾");
      //        set.add("李白"); // 抛异常 UnsupportedOperationException
      System.out.println(set);
  
      // 创建只读Set，方法一
      Map<String, Object> map = Map.of("name", "李煜", "poem", "浪淘沙令·帘外雨潺潺");
      //        map.put("age", 41); // 抛异常 UnsupportedOperationExceptio
      System.out.println(map);
  
      // 创建只读Set，方法二
      Map<String, Object> map2 = Map.ofEntries(Map.entry("name", "李煜"), Map.entry("poem", "浪淘沙令·帘外雨潺潺"));
      //        map2.put("age", 41); // 抛异常 UnsupportedOperationExceptio
      System.out.println(map2);
  }
  ```

#### 17.1.8 InputStream加强

==java9中，`InputStream`新增方法`transferTO()`，可以将数据直接传输到`OutputStream`==

```java
/**
 * java9新特性：InputStream的新方法--transferTo()
 */
@Test
public void test5() {
    try (InputStream is = new FileInputStream("hello.txt");
         OutputStream os = new FileOutputStream("src\\hello.txt")) {
        // 将输入流中的所有数据直接自动的复制到输出流
        is.transferTo(os);
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```

#### 17.1.9 增强的Stream API

Java9中新增了4个新方法：

- `takeWhile()`：从开头开始查找满足指定规则的数据，直到找到不满足规则的第一个数据为止，并将这些数据返回

  ```java
  @Test
  public void test6() {
      List<Integer> list = Arrays.asList(11, 22, 34, 54, 90, 88, 67, 7, 102);
      //takeWhile()：从开头开始查找满足指定规则的数据，直到找到不满足规则的第一个数据为止，并将这些数据返回
      list.stream().takeWhile(i -> i < 50).forEach(i -> System.out.print(i+" ")); // 11 22 34
  }
  ```

- `dropWhile()`：与takeWhile()相反。从开头开始查找不满足指定规则的数据，直到找到满足规则的第一个数据为止，并将这些数据返回

  ```java
  @Test
  public void test6() {
      List<Integer> list = Arrays.asList(11, 22, 34, 54, 90, 88, 67, 7, 102);
      //dropWhile()：与takeWhile()相反。从开头开始查找不满足指定规则的数据，直到找到满足规则的第一个数据为止，并将这些数据返回
      list.stream().dropWhile(i -> i < 50).forEach(i -> System.out.print(i+" ")); // 54 90 88 67 7 102
  }
  ```

- `ofNullable()`：参数只有一个，且形参变量可以是单个的null

  ```java
  @Test
  public void test7() {
      // Stream.of()参数中的多个元素，可以包含null值
      Stream<Integer> stream1 = Stream.of(1, 2, 3, null);
      System.out.println(stream1.count());
  
      // Stream.of()参数不能存储单个null。否则报NullPointerException
      //        Stream<Object> stream2 = Stream.of(null);
      //        System.out.println(stream2.count());
  
      // Stream.of()可以存储多个null值
      Stream<Object> stream3 = Stream.of(null, null);
      System.out.println(stream3.count());
  
      // Stream.ofNullable()：形参变量可以是单个的null
      Stream<Integer> stream4 = Stream.ofNullable(1);
      System.out.println(stream4.count());
  
      Stream<Integer> stream5 = Stream.ofNullable(null);
      System.out.println(stream5.count());
  }
  ```

- `iterate()`：是一个重载方法。重载后的第二个参数可以表示终止条件

  ```java
  @Test
  public void test8() {
      // java8中使用Stream.terate(final T seed, final UnaryOperator<T> f) 创建无限流
      Stream.iterate(0, x -> x + 1).limit(10).forEach(System.out :: println);
  
      System.out.println("\n**************************************************");
  
      // java9中重载了Stream.iterate(T seed, Predicate<? super T> hasNext, UnaryOperator<T> next)，其中第二个参数用来表示终止条件
      Stream.iterate(0, x -> x < 8, x -> x + 1).forEach(System.out :: println);
  }
  ```

#### 17.1.10 Optional获取Stream的方法

==Optional本质是一个容器==，因此也可以调用`stream()`方法将其转换为Stream实例

```java
@Test
public void test9() {
    List<String> nameList = new ArrayList<>();
    nameList.add("Bob");
    nameList.add("Jerry");

    Optional<List<String>> optional = Optional.ofNullable(nameList);
    // 将Optional实例转换为Stream实例
    Stream<List<String>> stream = optional.stream();
    stream.flatMap(x -> x.stream()).forEach(System.out :: println);
}
```

#### 17.1.11 JavaScript引擎升级：Nashorn

- Java8之前使用Rhino解析JavaScript，Java8开始使用Nashorn，$\textcolor{Red}{在Java9中对Nashorn进行改进--Nashorn为java提供了轻量级的JavaScript运行时}$
- $\textcolor{Red}{Java9包含一个用来解析Nashorn的ECMAScript语法树的API}$。这个API使得IED和服务端框架不需要依赖Nashorn项目的内部实现类，就能分析ECMAScript代码
- 在Java11中，Nashorn被一个新的引擎所取代

附：完整的JavaScript实现包含3部分：

- ECMAScript：描述该语言的语法和基本对象
- DOM：文档对象模型。描述处理网页内容的方法和接口
- BOM：浏览器对象模型。描述与浏览器进行交互的方法和接口

### 17.2 Java10新特性

Java10中最重要的改变：$\textcolor{Red}{局部变量类型推断}$

> 概述

Java10提供了==超过109项新特性==，其中包含12个JEP(JDK特性加强协议)，$\textcolor{Red}{对于程序员来讲，真正的新特性就一个}$。

#### 17.2.1 局部变量类型推断

> 定义

局部变量类型推断是指，在声明局部变量时，可以根据`=`右侧的内容推断出变量的类型，此时`=`左侧不需要再注明变量的类型，直接使用`var`即可。

`例子`：

```java
// num的类型为int
var num = 10;
// list的类型为ArrayList<String>
var list = new ArrayList<String>();
```

> 适用场景

- 声明局部变量
- 增强for循环的遍历操作
- 普通for循环的遍历操作

```java
/**
 * 局部变量的类型推断--适用场景
 */
@Test
public void test1() {
    // 1.声明操作：声明变量时，根据所附的值，推断变量的类型
    // 类型为int
    var num = 10;
    // 类型为ArrayList<String>
    var list = new ArrayList<String>();
    list.add("hello");

    // 2.遍历操作
    for(var i : list) {
        System.out.println(i);
    }

    // 3.普通的遍历操作
    for (var i = 0; i < 10; i++) {
        System.out.println(i);
    }
}
```

> 不适用场景

- 没有初始化的局部变量

  ```java
  var num;//编译报错
  ```

- Lambda表达式中，左边的函数式接口不能声明为var

  ```java
  // Lambda表达式中，左边的函数式接口不能声明为var
  Supplier<Double> sup = () -> Math.random(); // 正确
  // var sup1 = () -> Math.random(); // 编译报错
  ```

- 方法引用中，左边函数式接口不能声明为var

  ```java
  // 3.方法引用中，左边函数式接口不能声明为var
  Consumer<String> con = System.out :: println; // 正确
  // var con1 = System.out :: println; // 编译报错
  ```

- 数组的静态初始化中，当省略右侧数组元素类型时，左侧变量类型不能生命为var

  ```java
  // 4.数组的静态初始化中，当省略右侧数组元素类型时，左侧变量类型不能生命为var
  int[] arr = {1,2,3,4}; // 正确
  // var arr1 = {1,2,3,4}; // 编译报错
  ```

- catch块中，异常类型不能声明为var

  ```java
  // 6.catch块中，异常类型不能声明为var
  //        try {
  //
  //        } catch (var e) { // 编译报错
  //
  //        }
  ```

- 方法的返回值类型，不能声明为var

  ```java
  /**
   * 方法的返回值类型，不能声明为var
   * @return
   */
  public var method1() { // 编译报错
      return 0; // 编译报错
  }
  ```

- 方法的形参，不能声明为var

- 构造器的形参，不能声明为var

- 类的属性，不能声明为var

> 工作原理

$\textcolor{Red}{在处理var时，编译器先是看表达式右边部分}$，并根据右边变量值的类型进行推断，作为左边的类型，然后$\textcolor{Red}{将该类型写入字节码文件中}$。

> 注意事项

- ==var不是关键字==。var是一个类型名，也是一个普通的标识符。作为类型名，在编译器需要知道类型的地方才会用到它。作为一个普通的标识符，除了不能用它作为类名外，声明的变量、方法等都可以使用var来命名

- ==这不是JavaScript==。JavaScript是一门边解释边运行的语言，是一门动态语言。虽然Java10中引入了var，但是==var 并不会改变Java是一门静态语言的事实==。在遇到var声明的变量时，编译器负责推断出类型，并将其写入字节码文件。var的出现只是简化了程序的编写，对字节码文件没有任何作用。也就是说源文件中用var声明的变量，在字节码中会将var转换为对应的类型，如下图：

  ![image-20230106100811452](./images/Java系统学习-基础/image-20230106100811452.png)

#### 17.2.2 再次新增创建只读集合的方法

==java10中可以新增copyOf()方法用来将一个集合转为只读集合==。

> 使用方法

```java
@Test
public void test3() {
    ArrayList<String> list = new ArrayList<>();
    list.add("木兰花令");
    List<String> list1 = List.copyOf(list); // list1为只读集合
}
```

> 注意事项

List  copyOf(Collection coll)在返回只读集合时，会==先判断coll是不是AbstractImmutableList类型的==。如果coll是AbstractImmutableList类型的，会将coll直接返回。否则会调用List.of()方法创建一个新的AbstractImmutableList集合并返回。

```java
@Test
public void test4() {
    var list1 = List.of("浪淘沙令", "木兰花令");
    var copy1 = List.copyOf(list1);
    System.out.println(list1 == copy1); // true

    var list2 = new ArrayList<>();
    list2.add("浪淘沙令");
    list2.add("木兰花令");
    var copy2 = List.copyOf(list2);
    System.out.println(list2 == copy2); // false
}
```

### 17.3 Java11新特性

==Java11是一个长期支持的版本。==

Java11中最重要的两个改变：$\textcolor{Red}{引入了两种新的GC，包括Epsilon和ZGC（也许具有跨时代的意义）}$

#### 17.3.1 String新增的方法

| 方法                     | 描述                 | 举例                                                     |
| ------------------------ | -------------------- | -------------------------------------------------------- |
| boolean isBlank()        | 判断字符串是否是空白 | " ".isBlank(); // true                                   |
| String strip()           | 去掉首尾空格         | "    JavaStack    ".strip(); // "JavaStack"              |
| String stripTrailing()   | 去掉尾部空格         | "    JavaStack    ".stripTrailing(); // "    JavaStack"  |
| String stripLeading()    | 去掉首部空格         | "    JavaStack     ".stripLeading(); // "JavaStack     " |
| String repeat(int count) | 复制count次字符串    | "Java".repeat(3); // "JavaJavaJava"                      |
| Stream<String> lines()   | 行数统计             | "A\nB\nC".lines().count(); // 3                          |

#### 17.3.2 Optional加强

Optional也新增了几个方法，可以方便的将一个Optional转换成一个Stream，或者当一个空Optional时给它一个替代的。

| 方法                                                        | 描述                                                         | 新增的版本 |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ---------- |
| boolean isEmpty()                                           | 判断value是否为空（与JDK8中的isPresent()正好相反）           | JDK11      |
| void ifPresentOrElse(Consumer action, Runnable emptyAction) | 若value非空，执行参数1；否则，执行参数2                      | JDK9       |
| Optional<T> or(Supplier  supplier)                          | 若value非空，返回对应的Optional；否则，返回形参包装的Optional | JDK9       |
| Stream<T> stream()                                          | 若value非空，返回包含此value的Stream；否则，返回空的Stream   | JDK9       |
| T orElseThrow()                                             | 若value非空，返回value；否则，抛异常NoSuchElementException   | JDK10      |

#### 17.3.3 局部变量类型推断升级

可以在==在var上添加注解==

```java
// 用注解去修饰Lambda表达中的参数
@Test
public void test3() {
    // 注：当注解去修饰变量的时候，变量的类型一定要有
    Consumer<String> con1 = (@Deprecated var t) -> System.out.println(t.toUpperCase());
}
```

### 17.4 全新的HTTP客户端API

> 概述

- HTTP/1.1和HTTP/2（2015年成为标准）两个协议的主要区别

  二者的主要区别是$\textcolor{red}{如何在客户端和服务器之间构建和传输数据}$。

  - **HTTP/1.1依赖于相应周期**
  - **HTTP/2允许服务器“push”数据：它可以发送比客户端请求更多的数据**。这使得它可以优先处理并发送对于首先加载网页至关重要的数据

- 在JDK9中引入Http Client API，该API支持同步和异步，而且在JDK11中对其进行了修改，此时成为正式可用状态。可以在java.net包中找到该API

- 它将$\textcolor{red}{替代仅适用于blocking模式的HttpURLConnection}$(HttpURLConnection是在HTTP1.0的时代创建的)，$\textcolor{red}{并提供对 WebSocket 和 HTTP/2 的支持}$。

> 使用举例

==需要在module-info.java中引入java.net.http包==

```java
// 同步方式
@Test
public void test4() {
    try {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder(URI.create("http://www.baidu.com")).build();
        HttpResponse.BodyHandler<String> responseHandler = HttpResponse.BodyHandlers.ofString();
        // send是同步发送
        HttpResponse<String> response = client.send(request, responseHandler);
        String body = response.body();
        System.out.println(body);
    } catch (IOException e) {
        e.printStackTrace();
    } catch (InterruptedException e) {
        e.printStackTrace();
    }
}

// 异步方式
@Test
public void test4_2() {
    try {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder(URI.create("http://www.baidu.com")).build();
        HttpResponse.BodyHandler<String> responseHandler = HttpResponse.BodyHandlers.ofString();
        // sendAsync是异步发送
        CompletableFuture<HttpResponse<String>> sendAsync = client.sendAsync(request, responseHandler);
        HttpResponse<String> response = sendAsync.get();
        String body = response.body();
        System.out.println(body);
    } catch (InterruptedException e) {
        e.printStackTrace();
    } catch (ExecutionException e) {
        e.printStackTrace();
    }
}
```

### 17.5 更简化的编译运行程序

在JDK11之前，运行一个Java源码，需要先编译，再运行。==在JDK11中只用一个java命令就可以直接编译运行程序==。

> 只用一个java命令就运行程序的要求

- 该方法运行java文件，是去执行源文件中的第一个类，且第一个类必须包含main方法
- 不可以使用其它源文件中的类

### 17.6 废弃Nashorn引擎

废除Nashorn JavaScript引擎，有需要可以考虑使用G让AIVM。

### 17.7 ZGC垃圾回收

==ZGC是Java11最瞩目的特性==

> 背景

现代系统中可用的内存不断增长，用户和程序员希望JVM能够以高效的方式充分利用这些内存，并且无需长时间的GC暂停时间

> 概念

ZGC是一个并发、基于region、压缩型的垃圾回收器，只有root扫描阶段会STW（stop the world），因此GC停顿时间不会随着堆的增长和存活对象的增长而变长。

但是目前还是处于试验阶段，开发环境不建议使用

> 优势

-  GC暂停时间不会超过10ms 
- 既能处理几百兆的小堆, 也能处理几个T的大堆(OMG) 
- 和G1相比, 应用吞吐能力不会下降超过15% 
-  为未来的GC功能和利用colord指针以及Load barriers优化奠定基础
-  初始只支持64位系统

### 17.8 其他新特性

- Unicode 10 
-  Deprecate the Pack200 Tools and API 
-  新的Epsilon垃圾收集器 
-  完全支持Linux容器（包括Docker） 
-  支持G1上的并行完全垃圾收集 
-  最新的HTTPS安全协议TLS 1.3 
-  Java Flight Recorder

### 17.9 JDK展望

- 缺乏一个标准化和轻量级的JSON API
- 缺乏新的货币API

------

# 第三部分 面试题

## 1.最高效方式计算2 * 8？

答：`2 << 3`或 `8 << 1`

## 2.多态是编译时行为还是运行时行为？如何证明？

答：==多态是运行时行为==。

证明代码如下：

随机生成index，获取不同的Animal实例。当调用eat()时，在编译期间是看不出来会调用哪一个，只有运行完成后才可以判断到底是调用的哪个类的eat()方法。

```java
public class Practise {
    public static void main(String[] args) {
        // 随机生成index，获取不同的Animal实例。当调用eat()时，在编译期间是看不出来会调用哪一个，只有运行完成后才可以判断到底是调用的哪个类的eat()方法
        int index = new Random().nextInt(3);
        System.out.println("index: " + index);
        Animal animal = getInstance(index);
        animal.eat();
    }
	// 根据index，返回不同的对象
    private static Animal getInstance(int index) {
        switch (index) {
            case 0:
                return new Dog();
            case 1:
                return new Cat();
            default:
                return new Sheep();
        }
    }

}

/**
* 父类
*/
class Animal {
    public void eat() {
        System.out.println("动物吃饭");
    }
}

/**
* 子类
*/
class Dog extends Animal {
    @Override
    public void eat() {
        System.out.println("狗吃骨头");
    }
}

/**
* 子类
*/
class Cat extends Animal {
    @Override
    public void eat() {
        System.out.println("猫吃鱼");
    }
}

/**
* 子类
*/
class Sheep extends Animal {
    @Override
    public void eat() {
        System.out.println("羊吃草");
    }
}
```

## 3.方法的重载与重写

答：

> 二者的定义细节

- 重载：同一个类中，允许有一个以上的同名方法，只要它们的参数类型或者参数个数不同即可。
- 重写：在子类中可以根据需要，对从父类继承来的方法进行改造，也称为方法的<span style="color: red">覆盖、重置</span>。在程序执行时，子类的方法将覆盖父类的方法。

> 从编译运行的角度看

- 重载，是指允许存在多个重名方法，而这些方法的参数列表不同。编译器根据不同的参数列表，对同名方法进行修饰。对于编译器而言，这些同名方法就成了不同的方法，<span style="color: red">他们的调用地址在编译期就确定了</span>。Java的重载是可以包含父类和子类的，即子类可以重载父类的同名不同餐的方法。

  所以，对于重载而言，在方法调用之前，编译器就已经确定了所要调用的方法，这称为“<span style="color: red">早绑定</span>”或“<span style="color: red">静态绑定</span>”。

- 多态（重写），只有等到方法调用那一刻，解释运行器才会确定所要调用的具体方法，这称为“<span style="color: red">晚绑定</span>”或“<span style="color: red">动态绑定</span>”。

## 4.==和equals()的区别

答：

- ==

  - 是一个运算符

  - 可以使用在基本数据类型和引用数据类型中

  - 如果比较的是基本类型变量：比较的是两个变量保存的数据是否相等（类型不一定相同）

    ```java
    public static void main(String[] args) {
        int i = 10;
        double d = 10.0;
        char c = 10;
        System.out.println(i == d); // true
        System.out.println(i == c); // true
    }
    ```

  - 如果比较的是引用数据类型变量：比较两个对象的地址值是否相同，即两个变量是否指向同一个实体对象。

    此外，比较引用数据类型的变量的时候，必须保证==左右变量类型一致。如`System.out.println("hello" == new java.util.Date())`，编译不通过

- equals()

  - 是一个方法，而非运算符
  - 只能适用于引用数据类型
  - Object类中的equals()方法和==的作用是相同的：比较的是两个对象的地址值是否相等
  - 像String、Date、File、包装类等都重写了Object的equals()方法。重写后，比较的是两个对象的“实体内容”是否相同
  - 通常情况下，我们自定义的类如果使用equals()的话，也通常比较的是两个对象的“实体内容”是否相同，一般来说都需要对其重写。重写的原则就是比较两个对象的“实体内容”是否相同

## 5.三元运算符与包装类

如下代码中，o1和o2的输出结果相同吗，分别是什么？

```java
Object o1 = true ? new Integer(1) : new Double(2.0);
System.out.println(o1);

Object o2;
if (true)
    o2 = new Integer(1);
else
    o2 = new Double(2.0);
System.out.println(o2);
```

答：

二者结果不相同。o1输出为1.0，o2输出为1。

分析：

==三元运算符`:`两侧的运算符需要能统一成一个类型==，这是在编译过程中就需要确定的（如果`:`两边分别是int和String，会编译不通过），所以Integer类型变量会提升为Double。因此最终o1输出为浮点型的1.0。

## 6.包装类

如下代码的输出分别是什么？

```java
Integer i = new Integer(1);
Integer j = new Integer(1);
System.out.println(i == j);

Integer m = 1;
Integer n = 1;
System.out.println(m == n);

Integer x = 128;
Integer y = 128;
System.out.println(x == y);
```

答：

以上输出分别是false、true、false。

分析：

==Integer内部定义了IntegerCache结构，IntegerCache中定义了一个Integer类型的数组，保存了从[-128,127]范围的整数。==如果使用自动装箱的方式，且给Integer赋值的范围在[-128,127]内时，可以直接使用数组中的元素，不用再去new了。`Integer x = 128;`和`Integer y = 128;`各自创建了一个对象，因此二者不相等。

## 7.接口-排错题

- 以下代码是否有问题？如无，输出的内容为多少？

  ```java
  interface A {
      int x = 0;
  }
  
  class B {
      int x = 1;
  }
  
  class C extends B implements A {
      public void pX() {
          System.out.println(x);
      }
  
      public static void main(String[] args) {
          new C().pX();
      }
  }
  ```

  ==答==：

  代码编译不通过。报错信息为“Reference to 'x' is ambiguous, both 'B.x' and 'A.x' match”，意为接口A和接口B中都有x属性，C中对x的引用不明确。可以使用`System.out.println(super.x)`输出类B中的x，可以使用`System.out.println(A.x)`输出接口A中的x。

- 以下代码是否有问题？如无，输出的内容是什么？

  ```java
  interface Playable {
      void play();
  }
  
  interface Bounceable {
      void play();
  }
  
  interface Rollable extends Playable, Bounceable {
      Ball ball = new Ball("PingPang");
  }
  
  class Ball implements Rollable {
      private String name;
  
      public String getName() {
          return name;
      }
  
      public void setName(String name) {
          this.name = name;
      }
  
      public Ball(String name) {
          this.name = name;
      }
  
      @Override
      public void play() {
          ball = new Ball("Football");
          System.out.println(ball.getName());
      }
  }
  ```

  ==答==：

  代码编译失败。接口中定义的变量是`public static final`修饰的全局常量，是不可以更改的。

## 8.抽象类和接口的共同点和区别

- 相同点：
  - 不能实例化
  - 都可以定义抽象方法
- 不同点：
  - 抽象类有构造器、属性
  - 接口在JDK7及以前只能定义全局内部类和抽象方法，JDK8之后还可以定义静态方法和默认方法（接口中的方法可以写方法体了，使得接口更像抽象类了），JDK9之后可以定义私有方法
  - 子类只能继承一个抽象类，但是可以实现多个接口，同样，接口也可以继承多个接口

## 9.throw和throws的区别

- throw：抛出异常，生成异常对象；用在方法体内
- throws：捕获异常，是处理异常的一种手段：用在方法的声明处

## 10.final、finally、finalize的区别

- final：修饰符，可以修饰类、变量、方法。修饰类表示类不能被继承，修饰变量表示变量的值不可以被修改，修饰方法表示不能被子类重写
- finally：处理异常的一个关键字，和try-catch组合使用，finally代码块中的代码一定会被执行
- finalize：垃圾回收方法。一个类的finalize()只会被系统自动调用一次，如果对象面临下一次回收，他的finalize()方法不会被再次执行

> 引申

- Collection和Collections的区别
- String、StringBuffer、StringBuilder的区别
- ArrayList和LinkedList的区别
- HashMap和LinkedHashMap的区别
- 重写和重载的区别

> 拓展

- 抽象类和接口的区别
- ==和equals()的区别
- sleep()和wait()的区别

## 11.synchronized和Lock的异同？

答：

- 相同点：二者都可以解决线程安全问题

- 不同点：

  - synchronized机制在执行完同步代码之后，自动的释放同步监视器；Lock需要手动加锁（调用lock())、手动释放锁（调用unlock())
  - synchronized有代码块锁和方法锁；Lock只有代码块锁
  - 使用Lock，JVM将花费较少的时间来调度线程，性能更好，并且具有更好的扩展性

- 二者如何选择

  Lock > 同步代码块 >同步方法


## 12.sleep()和wait()的异同？

- 相同点：都会使当前线程进入阻塞状态
- 不同点：
  - 两个方法声明的位置不同：sleep()是在Thread中声明的，wait()是在Object中声明的
  - 调用的要求不同：sleep()可以在任何需要的场景下调用；wait()必须在同步代码块或者同步方法中由同步监视器调用
  - 关于是否释放锁：如果两个方法都是用在同步代码块或者同步方法中，sleep()不会释放锁，wait()会释放锁

## 13.String拼接相关面试题

如下代码输出结果是什么？

```java
public static void main(String[] args) {
    String s1 = "javaEE";
    String s2 = "hadoop";

    String s3 = "javaEEhadoop";
    String s4 = "javaEE" + "hadoop";
    String s5 = s1 + "hadoop";
    String s6 = "javaEE" + s2;
    String s7 = s1 + s2;
    String s8 = s5.intern();
    
    final String s9 = "javaEE";
    String s10 = s9 + "hadoop";

    System.out.println(s3 == s4); 
    System.out.println(s3 == s5); 
    System.out.println(s3 == s6); 
    System.out.println(s3 == s7); 
    System.out.println(s5 == s6); 
    System.out.println(s5 == s7); 
    System.out.println(s6 == s7); 
    System.out.println(s3 == s8);
    System.out.println(s3 == s10);
}
```

> 答：

```java
System.out.println(s3 == s4); //true
System.out.println(s3 == s5); // false
System.out.println(s3 == s6); // false
System.out.println(s3 == s7); // false
System.out.println(s5 == s6); // false
System.out.println(s5 == s7); // false
System.out.println(s6 == s7); // false
System.out.println(s3 == s8); // true
System.out.println(s3 == s10); // true
```

> 分析

- 常量与常量的拼接结果在常量池中（如String s = "abc"+"def";s指向常量池中的"abcdef"），且常量池中不会存在相同内容的常量。
- 常量与变量的拼接、变量与变量的拼接结果在堆空间中（如String s = "abc"; String s2 = s1+"def";s2指向堆空间，相当于new了一个变量）
- 特别的，如果拼接结果调用了==intern()==，返回结果在常量池中。
- final 声明的变量是常量，所以s3 == s10

## 14.String值传递相关面试题

如下代码，输出结果是什么？

```java
public class StringTest {
    String str = new String("good");
    char[] ch = {'t', 'e', 's', 't'};

    private void change(String str, char ch[]) {
        str = "test ok";
        ch[0] = 'b';
    }

    public static void main(String[] args) {
        StringTest ex = new StringTest();
        ex.change(ex.str, ex.ch);
        System.out.println(ex.str);
        System.out.println(ex.ch);
    }
}
```

> 答：

```java
System.out.println(ex.str); //good
System.out.println(ex.ch); //best
```

> 分析

- **如果参数是<span style="color: red">引用数据类型</span>，实参传递给形参的是实参存储数据的<span style="color: red">地址值</span>**

  change(String str, char ch[])两个参数都是引用类型，所以传递过去的都是地址值

- 又因**String类型的变量是不可变的**，所以当对str参数执行`str="test ok"`操作时，形参str指向新的常量池地址，但是ex.str的地址并没有发生变化，因此ex.str仍为good

- 另外，change方法中是对char[]中的一个元素进行修改，该元素是char类型，是基本数据类型，修改完成后，ch的地址值并没有变化，因此ex.ch值为改动后的值best

## 15.ArrayList、LinkedList、Vector三者的异同

- 相同点
  - 三个类都是实现了List接口，存储的数据都是有序的、可重复的
- 不同点
  - ArrayList：作为List接口的主要实现类；线程不安全的，效率比Vector高；底层使用的是数组存储
  - LinkedList：底层使用的是双向链表存储；对于频繁的插入、删除操作，LinkedList的效率比ArrayList效率高
  - Vector：作为List接口的古老实现类，现在很少使用；线程安全的，效率比ArrayList低；底层使用的是数组存储

## 16.List中remove()相关面试题

如下代码，输出的分别是什么？

```java
@Test
public void test3() {
    List list = new ArrayList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    list.remove(2); 
    System.out.println(list);
    list.remove(new Integer(5)); 
    System.out.println(list);
}
```

> 答：

第一次输出：[1, 2, 4, 5]

第二次输出：[1, 2, 4]

> 解析：

`list.remove(2);`删除的是第二个元素

`list.remove(new Integer(5));`删除的是元素5

## 17.Set相关面试题

如下代码分别输出是什么？

Teacher类已重写equals()和hashCode()

```java
 @Test
public void test1() {
    HashSet set = new HashSet();
    Teacher t1 = new Teacher(1001, "AA");
    Teacher t2 = new Teacher(1002, "BB");

    set.add(t1);
    set.add(t2);
    System.out.println(set);

    t1.setName("CC");
    set.remove(t1);
    System.out.println(set);

    set.add(new Teacher(1001, "CC"));
    System.out.println(set);

    set.add(new Teacher(1001, "AA"));
    System.out.println(set);
}
```

> 答：

第1次输出：[Teacher{id=1002, name='BB'}, Teacher{id=1001, name='AA'}]
第2次输出：[Teacher{id=1002, name='BB'}, Teacher{id=1001, name='CC'}]
第3次输出：[Teacher{id=1002, name='BB'}, Teacher{id=1001, name='CC'}, Teacher{id=1001, name='CC'}]
第4次输出：[Teacher{id=1002, name='BB'}, Teacher{id=1001, name='CC'}, Teacher{id=1001, name='CC'}, Teacher{id=1001, name='AA'}]

> 解析

第1次输出：略

第2次输出：t1.name改为CC，其hash值变了，在remove的时候比较的是新的hash值处的对象。因为新的hash值处没有元素，所以删除失败。因此输出两个元素，且t1的name值是CC

第3次输出：新添加的new Teacher(1001, "CC")hash值处没有元素，所以添加成功。因此输出三个元素

第4次输出：新添加的new Teacher(1001, "AA")hash值处有元素t1，且t1和新元素不相等，所以添加成功。因此输出4个元素

## 18.HashMap的底层实现原理？

## 19.HashMap和Hashtable的异同？

- 相同点：都是作为Map的实现类，用来存储key-value对
- 不同点：
  - HashMap：
    - 是Map的主要实现类；
    - 线程不安全，效率比Hashtable高
    - 可以存储值为null的key和value
  - Hashtable：
    - 是Map的古老实现类，现在很少用；
    - 线程安全，效率比HashMap低
    - 不可以存储值为null的key和value

## 20.加载因子值的大小，对HashMap有什么影响？

- 加载因子的大小决定了HashMap的数据密度
- 加载因子越大，密度越大，发生碰撞的几率越高，数组中链表越容易长，造成查询和插入时的比较次数增多，性能会下降
- 加载因子越小，就越容易发生扩容，数据密度也越小，碰撞的几率也越小，数组中的链表就越短，查询和插入时比较的次数也越小，性能就会越高。但是会浪费一定的内存空间。且经常扩容也影响性能
- 按照其他语言的参考及研究经验，会考虑将加载因子设置为0.7-0.75，此时平均检索长度接近于常数
