### linux安装之后无法进入root用户
1. 使用安装时设置的账户登录进去
2. 执行 `sudo passwd` , 然后按提示输入密码
3. `logout`退出之前账户，用root账户登录，密码为之前设置的
### linux系统的图形化界面
linux系统本质上是没有图形化界面的，基于一些原因，还是有了这个东西。简单来说其实就是linux系统上运行了一个`xorg`的服务，这个服务是基于`X协议`，存在服务端，自然存在客户端（KDE，GNOME），
客户端接收信息，绘制图形化界面，提供用户操作图形界面的方法；不同的客户端是不一样的。
### X客户端KDE绘制图形界面是使用C++图形程序库Qt
KDE不仅仅是一个桌面环境，更是泛指一类这一类基于Qt的软件；
GNOME是GNU计划的一个部分，目的是为类Unix系统编写一套开源的图形化桌面环境，基于GIMP ToolKit
### 常用命令
1. `du [选项][文件或目录]` 查看文件目录大小
2. `df [选项][文件或目录]` 查看磁盘占用情况
3. `ps [选项]` 查看进程情况
4. `bg|fg [进程序号，不是PID]` 