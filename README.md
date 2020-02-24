# A07-HotelSystem
A07——酒店视觉AI解决方案



### 项目环境配置

------

#### 项目涉及到的技术栈

前端：VueJs (uniapp)

后端：Python3 Django

数据库：MySQL

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
   python manage.py inspectdb	
   ```

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