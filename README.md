# A07-HotelSystem
A07——酒店视觉AI解决方案



### 项目环境配置

------

#### 项目涉及到的技术栈

前端：VueJs (uniapp)

后端：Python3 Django

数据库：MySQL

-----

#### 推荐安装软件

前端（Vue）：HBuilder X

后端（Python）：JetBrains PyCharm 

数据库（MySQL）：MySQL workbench

------

#### 环境配置流程

1. 下载**HBuilderX**并预配置好**uniapp**的环境，这个自己看官方文档吧；

2. 如果未安装**Django**，在cmd中输入：

   ```
   pip install Django
   ```

   即可安装（可能会对网络环境有一定的要求，如果未能安装成功就上百度搜一搜解决方案吧）；

3. 安装**MySQL**（建议顺带安装MySQL workbench），记号root账户的密码；

4. 打开安装好的**MySQL command Line Client**，输入root账户的密码，然后输入命令：

   **创建数据库（以下的命令都要以分号结束！）：**

   ```mysql
   CREATE DATABASE hotel_system;
   ```

   **选中数据库：**

   ```mysql
   USE hotel_system;
   ```

   **创建表（这里引入sql脚本文件就可以）：**

   ```MYSQL
   SOURCE <你存放sql脚本文件的路径>/hotel_system.sql;
   ```

   **比如我的是：**

   ```mysql
   SOURCE C:/Users/DELL/Desktop/hotel_system.sql;
   ```

   **新建用户：**

   ```mysql
   CREATE USER 'hotel_manage'@'localhost' IDENTIFIED BY 'lab501';
   ```

   **为该用户赋权：**

   ```mysql
   GRANT ALL PRIVILEGES ON *.* TO 'hotel_manage'@'localhost';
   ```

   **刷新权限：**

   ```mysql
   FLUSH PRIVILEGES;
   ```

5. 在**backend**目录下启动cmd，输入

   ```shell
   python manage.py migrate
   ```

   至此，环境配置基本完成

------

#### 启动项目

1. 在**backend**根目录下运行cmd，输入：

   ```shell
   python manage.py runserver
   ```

   项目即可正常启动
   
2. （2.22后端更新注册功能），目前可以测试注册功能：

   * 用HBuilder X打开uniapp下的login_test项目
   * 选择【运行】→【运行到内置浏览器】
   * 切换到注册页面，打开内置浏览器的开发者工具
   * 按流程注册，输入11位手机号码，6位以上的密码，验证码随便输（还没写完功能）
   * 在开发者工具里的console里查看返回数据，如果是*{code: 0, message: "success"}*则注册成功，可以在数据库里的auth_user表和user_face_info表中看到相关信息
   * 其他报错请百度或者找我吧XD
   
3. （2.27后端更新restful api），启动项目后可以更方便地增删改测试用户信息：

   * 启动项目后访问<http://127.0.0.1:8000/>
   * <http://127.0.0.1:8000/register/>是用户注册信息，用于登录注册
   * <http://127.0.0.1:8000/userinfo/>是用户的其他信息
   * 填写完post即可

---

#### 可能遇到的问题

1. 在启动时可能会遇到

   ```python
   ModuleNotFoundError: No module named 'xxxxx'
   ```

   之类的报错，一般来说都是'xxxx'这个包没有安装，解决方法通常是在cmd里输入：

   ```shell
   pip install xxxxx
   ```

   如果还不能安装就再百度一下吧

   项目里涉及到的东西有点多，我也没有一一记下来

----

#### 其他相关链接

1. Git的基本使用：<https://blog.csdn.net/u010802169/article/details/80490886>
2. 待补充。。。