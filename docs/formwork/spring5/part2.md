# IOC容器

1. 控制反转，把对象的创建和对象间的调用过程交给spring管理
2. 目的：降低代码耦合

## IOC 底层原理

### 过程

1. xml配置文件，配置已经创建的对象

2. 创建工厂类

   ```java
   class Factory {
       public static Test getTest(){
           String classPath = bean.class; // xml 解析
           Class wantClass = Class.forName(classPath); // 通过反射获取创建的对象  
           return (Test)wantClass.newInstance();
       }
   }
   ```

   



## IOC 接口（BeanFactory）

 spring 提供IOC容器实现的两种方式：

#### BeanFactory

+ IOC容器的基本实现，是Spring的内部接口，不提供开发人员进行使用
+ 在加载配置文件时不会创建对象，在获取对象时才会创建



#### ApplicationContext

+ BeanFactory的子接口，提供更多更强大的功能，提供给开发人员使用。
+ 加载配置文件时就会把配置文件中的对象创建。



## IOC操作Bean管理

Bean管理

1. spring 创建对象，利用xml及反射获取普通对象
2. spring 注入属性，利用spring注入JavaBean

### 基于xml

#### 创建对象

过程同概述中的创建过程。

##### bean标签中的常用属性

+ id: 获取对象的唯一标识。
+ class: 类的全路径
+ name: 类似id，用的较少

:::tip spring 创建对象时，默认执行无参数构造方法进行对象的创建

:::

#### 注入属性

##### DI：依赖注入

1. 使用set方法

   1. 正常创建属性和set方法

   2. 在配置文件中的bean标签中写property标签

      ```xml
      <bean id="user" class="com.spring5.study.User">
              <!--
              name: 属性名称
              value: 属性值
              -->
              <property name="userName" value=""></property>
          </bean>
      ```

      

2. 使用有参构造

   1. 创建类，定义属性及构造方法

      ```java
      public class Order {
        private String orderName;
      
        public Order(String name) {
          this.orderName = name;
        }
      }
      ```

   2. 在配置文件中进行配置

      ```xml
      <bean id="order" class="com.spring5.study.Order">
          <constructor-arg name="name" value="电脑"></constructor-arg>
      </bean>
      ```



#### 注入其他属性

1. 字面量

   ##### 注入空值

   ```xml
   <property name="orderCreateDate">
       <null />
   </property>
   ```

   ##### 注入特殊符号

   ```xml
   <property name="orderAddress">
       <value><![CDATA[<<南京>>]]></value>
   </property>
   ```

   

2. 外部bean

   1. 创建普通类和对象

   2. 在调用类中声明被调用类的变量和set方法

   3. 在配置文件中进行配置

      ```xml
      <bean id="userService" class="com.spring5.study.service.UserService">
          <!--        注入userDao -->
          <property name="userDao" ref="userDao"></property>
      </bean>
      <bean id="userDao" class="com.spring5.study.dao.UserDao"></bean>
      ```

   

3. 内部bean和级联赋值

   



### 基于注解
