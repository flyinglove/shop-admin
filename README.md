1. node模块类型声明：
    @types/node


2. css支持：
    内置了postcss等各类与处理器， 使用时安装相关的插件，添加相关配置文件即可

    css modules:
        .module.css结尾的css文件会返回相关的模块对象， 可以在js中直接加载
    给vue组件的style内注入通用的css：
        css.preprocessorOptions

