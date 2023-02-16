# 前端设计模式简介

设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。
## 原则

- 单一职责原则: 一个程序只做好一件事,如果功能过于复杂就拆分开，每个部分保持独立
- 开放/封闭原则: 对扩展开放，对修改封闭  增加需求时，扩展新代码，而非修改已有代码
- 里氏替换原则: 子类能覆盖父类  父类能出现的地方子类就能出现
- 接口隔离原则: 保持接口的单一独立 类似单一职责原则，这里更关注接口
- 依赖倒转原则: 面向接口编程，依赖于抽象而不依赖于具体 使用方只关注接口而不关注具体类的实现
- 迪米特法则（最少知识原则）： 对外接口简单，当前类对其他类的知识越少越好。