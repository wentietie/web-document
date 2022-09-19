# CentOs7安装jenkins

# 1.检查jdk是否安装

```shell
java -version
```

[//]: # (![]&#40;.\image\sever-install-jenkins-1.png&#41;)

![]()

未安装的话，需要安装jdk。

# 2.下载安装包

```shell
# 下载安装包
wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo

# 更新密钥签名
rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
```

# 3.安装

```shell
yum install jenkins
```

# 4.修改jenkins配置文件

jenkins相关配置都在文件`/etc/sysconfig/jenkins`中

## 4.1修改jenkins端口

进入`/etc/sysconfig/jenkins`文件中，将`JENKINS_PORT`改为自己想要的即可。

```shell
vim /etc/sysconfig/jenkins
```

[//]: # (![]&#40;..\image\sever-install-jenkins-2.png&#41;)

## 4.2修改jenkins默认的操作用户

linux下jenkins默认使用`jenkins`用户进行脚本和文件的操作，如果不修改，在部署项目时需要调整涉及到的文件和目录的操作权限，可以调整jenkins配置文件，将用户修改为root用户。即将`JENKINS_USER="jenkins"`调整为`JENKINS_USER=“root”`：

[//]: # (![1614678360779]&#40;..\image\sever-install-jenkins-3.png&#41;)

# 5.检查jenkins是否匹配jdk

```shell
vim /etc/rc.d/init.d/jenkins
```

[//]: # (![1614678664242]&#40;..\image\sever-install-jenkins-4.png&#41;)

# 6.运行

```shell
# 重新加载jenkins配置
systemctl daemon-reload

# 启动
systemctl start jenkins

# 停止
systemctl stop jenkins

# 重启
systemctl restart jenkins
```

[//]: # (![]&#40;..\image\sever-install-jenkins-5.png&#41;)

# 7.打开

在浏览器中输入`ip+端口号`，即可打开jenkins界面。首次登录需要按照页面提示获取登录密码。

[//]: # ( ![1]&#40;..\image\sever-install-jenkins-6.png&#41; )

# 8.jenkin设置

## 8.1选择安装插件

第一个为默认安装，第二个为手动安装。选择第一个即可。

[//]: # (![]&#40;..\image\sever-install-jenkins-7.png&#41;)

## 8.1设置管理员账号

[//]: # (![1614567062540]&#40;..\image\sever-install-jenkins-8.png&#41;)