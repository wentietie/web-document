# IOC容器

1. 控制反转，把对象的创建和对象间的调用过程交给spring管理
2. 目的：降低代码耦合

# IOC 底层原理

## 过程

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

IOC 接口（BeanFactory）

spring 提供IOC容器实现的两种方式：

### BeanFactory

+ IOC容器的基本实现，是Spring的内部接口，不提供开发人员进行使用
+ 在加载配置文件时不会创建对象，在获取对象时才会创建

### ApplicationContext

+ BeanFactory的子接口，提供更多更强大的功能，提供给开发人员使用。
+ 加载配置文件时就会把配置文件中的对象创建。

# IOC操作Bean管理

Bean管理

1. spring 创建对象，利用xml及反射获取普通对象
2. spring 注入属性，利用spring注入JavaBean

## 基于xml

### 创建对象

过程同概述中的创建过程。

#### bean标签中的常用属性

+ id: 获取对象的唯一标识。
+ class: 类的全路径
+ name: 类似id，用的较少

:::tip spring 创建对象时，默认执行无参数构造方法进行对象的创建

:::

### 注入属性

#### DI：依赖注入

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

### 注入其他属性

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

       ```java
       package com.spring5.study.dao;
       public interface UserDaoInterface {
         public void update();
       }
       
       package com.spring5.study.dao;
       public class UserDao implements UserDaoInterface {
       
         @Override
         public void update(){
       
         }
       }
       
       ```

    2. 在调用类中声明被调用类的变量和set方法

       ```java
       package com.spring5.study.service;
       
       import com.spring5.study.dao.UserDao;
       
       public class UserService {
         private UserDao userDao;
         public void setUserDao(UserDao dao){
           this.userDao = dao;
         }
       
         public void add() {
           System.out.println("add...");
         }
       }
       ```


3. 在配置文件中进行配置

   ```xml
   <bean id="userService" class="com.spring5.study.service.UserService">
       <!--        注入userDao -->
       <property name="userDao" ref="userDao"></property>
   </bean>
   <bean id="userDao" class="com.spring5.study.dao.UserDao"></bean>
   ```

3. 内部bean

    1.
        1. 一对多关系

        2. 在实体类之间表示
        
        3. 配置
        
           ```xml
           <bean id="emp" class="com.spring5.study.innerBean.Emp">
               <property name="employeeName" value="文阿铁"></property>
               <property name="gender" value="男"></property>
               <property name="dept">
                   <bean id="dept" class="com.spring5.study.innerBean.Dept"></bean>
               </property>
           </bean>
           ```

:::tip 内部和外部bean区别

1. 配置文件中是使用bean给属性赋值还是用ref给属性赋值
2. 内部bean只能被当前bean使用，外部bean可以被多个bean使用

:::

4. 级联赋值

   ##### 第一种写法：外部bean

   ##### 第二种写法：

    1. 创建get方法

    2. 写配置文件

       ```xml
       <!--级联赋值写法-->
       <bean id="emp" class="com.spring5.study.innerBean.Emp">
           <property name="employeeName" value="文阿铁"></property>
           <property name="gender" value="男"></property>
           <!--        <property name="dept" ref="dept"></property>-->
           <property name="dept.deptName" value="技术部"></property>
       </bean>
       <bean id="dept" class="com.spring5.study.innerBean.Dept">
           <property name="deptName" value="财务部"></property>
       </bean>
       ```

### 注入集合属性

1. 创建类及array，list等集合属性，并创建set方法

2. 配置文件

   ```xml
   <bean id="student" class="com.spring5.study.collectionType.student">
       <property name="courses">
           <array>
               <value>java</value>
               <value>javaScript</value>
           </array>
       </property>
       <property name="list">
           <list>
               <value>张三</value>
               <value>小三</value>
           </list>
       </property>
       <property name="maps">
           <map>
               <entry key="course1" value="java"/>
               <entry key="course2" value="js"/>
           </map>
       </property>
   
         <!--对象集合属性注入-->
        <property name="courseList">
            <list>
                <ref bean="course1"/>
                <ref bean="course2"/>
            </list>
        </property>
   </bean>
   
   <bean id="course1" class="com.spring5.study.collectionType.Course">
        <property name="cname" value="课程1"/>
    </bean>
    <bean id="course2" class="com.spring5.study.collectionType.Course">
        <property name="cname" value="课程2"/>
    </bean>
   ```

#### 提取集合属性注入

util使用步骤
1. xmlns:util="http://www.springframework.org/schema/util"
2. xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
   http://www.springframework.org/schema/util  http://www.springframework.org/schema/util/spring-util.xsd"
3. `<util:list></util:list>`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:util="http://www.springframework.org/schema/util"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/util  http://www.springframework.org/schema/util/spring-util.xsd">
    <util:list id="courses">
        <ref bean="course1"></ref>
        <ref bean="course2"></ref>
    </util:list>

    <bean id="course1" class="com.spring5.study.collectionType.Course">
        <property name="cname" value="课程1"/>
    </bean>
    <bean id="course2" class="com.spring5.study.collectionType.Course">
        <property name="cname" value="课程2"/>
    </bean>

    <bean id="course" class="com.spring5.study.collectionType.student">
        <property name="courseList" ref="courses"/>
    </bean>
</beans>
```

#### FactoryBean
1. 普通bean： 在配置文件中定义的bean类型就是返回类型
2. 工厂bean：在配置文件中定义的bean和返回的额类型可能不一样



### bean的作用域

1. 设置创建的bean实例是单例还是多个实例
2. 默认是单例
3. 设置方式  bean标签的scope属性 singleton | prototype | request | session

## 基于注解

