# A07-HotelSystem
A07——酒店视觉AI解决方案

------

#### 2021.1.9追加

由于本项目涉及到的服务器已过期，且诸如虹软人脸SDK、阿里云短信验证码和翻译的功能等均因过期或其他原因而不可用，**复现本项目需要申请并手动修改各类资源的参数。**

#### 项目涉及到的技术栈

前端：VueJs (uniapp)

后端：Python3 Django, Java

数据库：MySQL

-----

#### 推荐安装软件

前端（Vue）：HBuilder X

后端（Python）：JetBrains PyCharm, IntelliJ IDEA

数据库（MySQL）：MySQL workbench

---

#### 更新日志

1. （2.22后端更新注册功能），目前可以测试注册功能：
   - 用HBuilder X打开uniapp下的`login_test`项目
   - 选择【运行】→【运行到内置浏览器】
   - 切换到注册页面，打开内置浏览器的开发者工具
   - 按流程注册，输入11位手机号码，6位以上的密码
   - 验证码随便输（还没写完功能）
   - 在开发者工具里的console里查看返回数据，如果是*{code: 0, message: "success"}*则注册成功，可以在数据库里的`auth_user`表和`user_face_info`表中看到相关信息
   - 注册（成功后）会自行跳转到登录页面
   - 其他报错请百度或者找我吧XD
   
2. （2.27后端更新restful api），启动项目后可以更方便地增删改测试用户信息：
   - 启动项目后访问<http://127.0.0.1:8000/>
   - <http://127.0.0.1:8000/register/>是用户注册信息，用于登录注册
   - <http://127.0.0.1:8000/userinfo/>是用户的其他信息
   - 填写完post即可
   
3. （2.27后端更新登录功能），目前可以测试登录功能：
   - 用HBuilder X打开uniapp下的`login_test`项目
   - 选择【运行】→【运行到内置浏览器】
   - 切换到登录页面，打开内置浏览器的开发者工具
   - 按流程登录，输入注册的手机号以及对应的密码
   - 如果成功跳转到success页面则成功，其他常见报错基本都会有弹窗提示（没有就看开发者工具）
   - 还没研究清楚如何保持用户的登录状态
   
4. （3.7更新用餐码），目前前端可以支持二维码的显示，后端支持生成二维码的text

   *需要先新建一张表，根据之前写的环境配置步骤选择`hotel_system`数据库，然后输入：

   ```mysql
   CREATE TABLE `hotel_system`.`dining_qrcode` (
     `id` INT NOT NULL,
     `phonenumber` VARCHAR(45) NOT NULL,
     `qrcode` VARCHAR(45) NOT NULL,
     PRIMARY KEY (`id`));
   ```

   ```mysql
   ALTER TABLE `hotel_system`.`dining_qrcode` 
   CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ;
   ```

   * 前端和后端的信息对接不是问题（3.8已基本实现），可以访问<http://127.0.0.1:8000/qrcode/>添加用户手机号和自定义的二维码text
   * 先启动后端项目，然后打开HBuilderX刷新页面，可以扫码看到你生成的二维码text
   * 后端生成text的方法是将用户手机号，居住时间（暂时用生成1~14随机数模仿）和注册日期（这个以后会调整）三个字符串进行拼接，然后base64加密（这个方法以后会调整）
   * 更进一步的问题是，**如何模拟并开发扫码设备，从而登记用户用餐信息？**
   
5. 增加了个人信息、个人中心、支付页面，在个人中心页面完成跳转到个人信息页面查看信息，完成个人中心支付界面、餐卷界面、地图界面跳转
   目前完成了软件的主体框架将注册登入界面与个人中心界面以及功能的地图、支付、餐卷等界面进行联系，基本跳转逻辑完成
   编辑修改个人信息还未完成，**支付界面具体细节还未完成修改**
   
6. （3.12更新人脸信息上传demo），目前根据前端显示提交上传信息即可

   * 请不要提交过大的照片
   * 请不要多次尝试提交照片
   * 请不要暴露服务器地址（
   
7. （3.13更新服务器部署）django项目已经部署在服务器上了，人脸照片注册上传功能也已完成

   * 目前调通了登录和注册的功能，暂时没有写保留用户登录信息的功能
   * **faceLoginDemo**里有两段js的功能，一段是【上传图片文件到django后端】，一段是【将图片信息压缩提取，并上传到Java后端，进行人脸认证之后返回对比信息】
   
8. （3.14更新服务器端人脸功能，以及与uniapp的交互）人脸端已经可以进行真机调试

   * 目前可以额外返回三类识别信息：**年龄age**，**性别gender**和**活体判定is_alive**
   * 可以直接在自己的手机上进行测试，人脸照片信息会发送到我的服务器上，并返回相关的信息；
   * **需要注意的问题**：人脸端样式比较简陋，处理大图片的时候比较慢，识别的年龄都相对较大；
   * Django端的图片上传功能基本OK，**为了避免服务器不必要的图片上传，uniapp上传照片的那一段js我已经注释掉了，不必要的时候不需使用它**。
   
9. （3.15更新图床，腾讯身份证OCR）现在上传的图片可以生成URL进行保存，进行身份证识别并返回相关信息

   * *加了张表，使用前需要先migrate一下：
   
     ```shell
     python manage.py makemigrations
     python manage.py migrate --fake-initial
     ```
   
     （其实这里是我写的时候没注意，直接从py文件里建的，应该像之前从MySQL里建好一点。。）
   
     （如果这里报了错可以百度一下之类的，或者找我）
   
     （实在不行，反正线上功能已经实现了，这段代码我就删掉= =有功夫再重建一下表）
   
   * **由于这两个功能涉及隐私安全，目前已经关闭，需要测试的时候和我联系就好:D**
   
   * 测试的时候不要上传太大的图片文件，以免给服务器造成不必要的负担
   
   * 由于腾讯ocr的限制，身份证照片基本都需要压缩，前端的压缩功能还没写，建议测试的时候采用其他方法先压缩一下（我测试的时候用PS压缩的，大概压到了100kb以内，理论上6MB以内都可以，但我有张900KB的他都嫌大。。。）
   
   * 本地的django文件是不能进行ocr处理的，必须要从线上的URL获取图片才可以，有需要可以找我:D
   
   * 两个功能均已部署在服务器上了
   
10. （4.2更新验证码）本地已经运行成功，通过验证码测试，推上了服务器

    * 新建了张表，先去MySQL里操作一下：

      ```mysql
      CREATE TABLE `hotel_system`.`captcha` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `phonenumber` VARCHAR(45) NOT NULL,
        `captcha` VARCHAR(6) NOT NULL,
        PRIMARY KEY (`id`))
      ENGINE = InnoDB;
      ```

    * 然后是喜闻乐见的合并数据库，在`backend`目录下启动cmd，输入：

      ```shell
      python manage.py makemigrations
      python manage.py migrate
      ```

    * ~~用的是网易云的网易易盾api~~
    
    * ~~目前白嫖的功能，时间次数有限，14天内100次，到时候要用再换人认证吧，不是很麻烦~~
    
    * 现在采用阿里云的短信验证码api，不要反复尝试就行
    
    * （3.20更新服务器端），已经通过验证码测试
    
    * **注册的时候不要随便输手机号！验证码是真的发过去的！**
    
11. （3.22更新人脸比对）已经搬到服务器上了，可以直接使用

    * 建议测试的时候真机调试，内置浏览器可能会因为性能不够而报错

    * 比对前先在`faceLogin`里注册一下自己的人脸，然后再上传自己的身份证照片试一试
    * 如果遇到报错，可能是因为图片过大导致的，可以尝试裁剪一下
    * **经过测试，将身份证人脸和用户人脸进行比对，很可能会遇到比对不出来的情况，现在暂时先使用这个方法进行认证核验吧**

#### 环境配置流程

1. 下载**HBuilderX**并预配置好**uniapp**的环境，这个自己看官方文档吧；

2. 如果未安装**Django**，在cmd中输入：

   ```
   pip install Django
   ```

   即可安装（可能会对网络环境有一定的要求，如果未能安装成功就上百度搜一搜解决方案吧）；

3. 安装**MySQL**（建议顺带安装MySQL workbench），记号root账户的密码；

4. 打开安装好的**MySQL command Line Client**，输入root账户的密码，然后输入命令：

   数据库，表的信息和用户信息就按这个写，不要自己定义，因为后端和数据库的配置已经写死了！

   数据库，表的信息和用户信息就按这个写，不要自己定义，因为后端和数据库的配置已经写死了！

   数据库，表的信息和用户信息就按这个写，不要自己定义，因为后端和数据库的配置已经写死了！

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
   python manage.py makemigrations
   python manage.py migrate
   ```
   
   至此，环境配置基本完成

------

#### 启动后台 / 简单的git指令

1. 在`backend`根目录下运行cmd，输入：

   ```shell
   python manage.py runserver
   python manage.py makemigrations
   ```

   项目即可正常启动

2. 我个人会用到的git指令，每次准备提交也是这个步骤（在本地的git bash里）：

   **（下载文件做一次ok）右键选择【Git Bash Here】，然后输入：**

   ```shell
   git clone https://github.com/Alienboyplus/A07-HotelSystem
   ```

   **进入【A07-HotelSystem】的目录下，之后的命令都需要在该目录下进行**

   **查看提交日志（看完按q退出）：**

   ```shell
   git log
   ```

   **从远程更新项目文件（这里建议每次需要push前先pull，不然合并很麻烦）：**

   ```shell
   git pull
   ```

   **查看本地项目文件修改的情况：**

   ```shell
   git status
   ```

   **添加所有修改的文件（如果你想添加指定的文件也可以，将*换成文件名应该就ok的）：**

   ```shell
   git add *
   ```

   **对这次提交备注：**

   ```shell
   git commit -m "需要备注的内容"
   ```

   **从本地推送修改到远程端：**

   ```shell
   git push
   ```

   以上这些基本够用了，详情可以参考README最后面关于Git链接

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
2. uniapp的官方文档：<https://uniapp.dcloud.io/README>
3. 待补充。。
