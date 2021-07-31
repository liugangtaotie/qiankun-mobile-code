### 前端代码规范

规范目的：为了提高工作效率，便于后台人员添加功能及前端后期优化维护，输出高质量的文档，在网站建设中，使结构更加清晰，代码简明有序，有一个更好的前端架构。
规范基本准则：符合web标准，使用具有语义的标签，使结构、表现、行为分离，兼容性优良。页面性能优化，代码简洁、明了、有序，尽可能的减少服务器的负载，保证最快的解析速度。

#### 一、文件规范

*1.1 HTML部分
*1.1.1 建包问题
*文件均归档至约定的目录中，建包格式如下：*注意：所有的css文件放在css文件夹中，image放在images文件夹中，js放在js文件夹中
*1.1.2 HTML头部编写
*(1) 编码：所有编码均采用xhtml/html，标签必须闭合，编码统一为UTF-8，在多语言的网站建议添加<html lang="zh-CN">，说明内容是以中文显示和阅读为基础的
*(2) 语义化：正确使用标签，充分利用无兼容性问题的html自身标签
*(3) 文件头部head内容：
　　　　　　• title: 需要添加标题
　　　　　　• 编码: charset=UTF-8
　　　　　　• meta: 可以添加description、keywords内容
*1.2 CSS部分
*1.2.1 CSS种类及其命名
*可以将CSS样式表分为三类：全局样式表、模块通用样式表和独立样式表
　　　　　　• 全局样式表常用命名：public.css
　　　　　　• 模块通用样式表命名：模块名_basic.css
　　　　　　• 独立样式表：模块名_页面名.css
*1.2.2 CSS引入
　　　　CSS文件引入可通过外联或者内联方式引入
　　• 外联方式
　　• 内联方式
　　　　注意：link和style标签都应该放入head中，原则上，不允许在html上直接写样式。避免在CSS中使用@import，嵌套不要超过一层。
 
#### 二、注释规范
*2.1 顶部文档注释（推荐使用）
1 /*
2 * @description: 中文说明
3 * @author: name
4 * @update: name(xxxx-xx-xx xx:xx)
5 */
*2.2 属性注释 
1 /*Header*/
2 /*Nav*/
3 /*Container*/
4 ...
5 /*Footer*/
*2.3 功能模块注释
1 /* module: module1 by 小王 */
2 ...
3 /* module: module2 by 小李 */
*2.4 特殊注释

 1 /*Color codes
 2 --------------------------------
 3     Red: #e03d3d;
 4     Dark: #424242;
 5     Light: #c3c5c0;
 6     blue #e03d3d;
 7 */
 8 
 9 /*
10    默认宽度为1128px
11 */
12 
13 /*@group Reset Css*/
14 /*@group General Definitions*/
15 
16 /*---------------Typography-----------------*/
17 /*------------------Sprite--------------------*/


　　注意：
　　　　• 每一个文档对应一个文档注释（主要注释内容包括：文档创建人、创建时间、主要内容描述等）
　　　　• 属性注释说明：可以分CSS属性来进行命名（如：margin/padding值、CSS Hack、全局Hover等）
　　　　• 功能模块注释说明：分模块来编写CSS样式（如：头部、导航、按钮、页脚等等）
 
#### 三、命名规范
3.1 如何命名
　　• css最好用class来命名，js用id来命名，已做区分
　　• id和class的命名应反映该元素的功能或使用通用名称，而不要用抽象的晦涩的命名
3.2 命名示例
* .div1{} /* 不推荐；无意义 */
* .a_green{} /* 不推荐；无意义 */
* .menu{} /* 推荐；特殊性*/
* .header{} /* 推荐；通用性*/
3.3 命名精简
　　id和class命名越精简越好，只要足够表达意思，这样有助于理解，同时也能提高代码效率
* .navigation{} /* 不推荐 */
* .login_box_inside_con{} /* 不推荐 */
* .nav{} /* 推荐 */
3.4 命名嵌套问题
　　书写css要注意先后顺序和嵌套问题，从性能上考虑尽量减少选择器的层级
* .nav ul.list{} /* 不推荐 */
* .nav .list{} /* 推荐 */
3.5 注意事项
* 规则命名中，一律采用小写加下划线的方式
* 命名中尽量避免使用中文拼音，应该采用更简明有语义的英文单词进行组合
* 命名注意缩写，但是不能盲目缩写
* 不允许通过1、2、3等序号进行命名
* 避免class与id重名
* id注意用于标识模块或页面的某一个父容器区域，名称必须唯一，不要随意新建id
* class用于标识某一个类型的对象，命名必须言简意赅
* 尽可能提高代码模块的复用，样式尽量用组合的方式
* 规则名称中不应该包含颜色、定位等与具体显示效果相关的信息，应该用意义命名，而不是结果名称
 
#### 四、书写规范
4.1 排版规范
* 使用4tab来缩进
* 规则可以写成单行。或者多行，但是整个文件内的规则排版必须统一
　　书写风格：
* 每一个属性值必须添加分号
* 如果多个属性公用一个样式集，则多个属性必须写成多行形式
4.2 属性编写顺序（一般遵循显示属性 -> 自身属性 -> 文本属性 -> 其他属性的书写格式）
* 显示属性：display/list-style/position/float/clear...
* 自身属性（盒模型）：width/height/margin/padding/border
* 背景：background
* 行高：line-height
* 文本属性：color/font/text-decoration/text-align/text-indent/vertical-align/white-space/content...
* 其他：cursor/z-index/zoom/overflow...
* CSS3属性：transform/transition/animation/box-shadow/border-radius
* 如果使用CSS3的属性，如果有必要加入浏览器前缀，则按照-webkit-/-moz-/-ms-/-o-/std的顺序进行添加，标准属性写在最后
* 链接的样式请严格按照如下顺序添加：a:link -> a:visited -> a:hover -> a:active
　　
4.3 代码性能优化
* 合并margin、padding、border的-top/-right/-bottom/-left的设置，尽量使用短名称
* 选择器应该在满足功能的基础上尽量简短，减少选择器嵌套，查询消耗。但是一定要避免覆盖全局样式设置
* 禁止在css中使用*选择符
* 0后面不需要单独，比如0px可以省略成0，0.8px可以省略成.8px
* 如果可以颜色尽量用三位字符表示，比如#ccc
* 如果没有边框时，不要写成border:0;应该写成border:none
* 在保存代码解耦的前提下，尽量合并重复的样式
* background、font等可以缩写的属性，尽量使用缩写形式
* 能以背景形式呈现的图片，尽量都写入CSS样式中
4.4 CSS Hack的使用
　　尽量少使用浏览器检测和CSS Hacks，先试试别的解决办法。考虑到代码高效率和易管理，虽然这两种办法能快速解决浏览器解析差异，但应被视为最后的手段。在长期的项目中，允许使用hack只会带来更多的hack，所以尽量少用
* IE6: _property:value
* IE6/7: *property:value
* IE6/7/8/9: property:value\9
4.5 IE兼容性
　　IE支持通过特定的<meta>标签来确定绘制当前页面所应该采用的IE版本，除非有强烈的特殊需求，否则最好是设置edge mode，从而通知IE采用其所支持的最新的模式
　　　　<!-- IE8及以上的版本都会以最高版本IE来渲染页面 -->

　　　　<meta http-equiv="X-UA-Compatible" content="IE=edge">
　　注意：X-UA-Compatible这个是IE8的专用标记，用来指定IE8浏览器去模拟某个特定版本的IE浏览器的渲染方式
　　　　   <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">中的chrome=1效果是如果安装了GCF，则使用GCF来渲染页面，如果未安装GCF，则使用最高版本的IE内核进行渲染
4.6 字体规则
* 为了防止文件合并及编码转换时造成问题，建议将样式中文字体名字改成对应的英文名字，如：黑体(SimHei)、宋体(SimSun)、微软雅黑(Microsoft Yahei)
* 字体粗细采用具体数值，粗体bold写成700，正常normal写成400
* font-size必须以px为单位
* 为了对font-family取值进行统一，更好的支持各个操作系统上各个浏览器的兼容性，font-family不允许在业务代码中随意设置
 　　
 
#### 五、其他规范
* 不要轻易改动全站级CSS和通用CSS库，改动后，要经过全面测试
* 避免使用filter
* 避免在CSS中使用expression
* 避免过小的背景图片平铺
* 尽量不要在CSS中使用!important
* 绝对不要在CSS中使用"*"选择符
* 层级(z-index)必须清晰明确，页面弹窗、气泡为最高级(最高级为999)，不同弹窗气泡之间可在三位数之间调整，普通区块为10-90内10的倍数；区块展开、弹出为当前父层级上个位增加，禁止层级间盲目攀比
* 背景图片在情况允许，尽可能使用sprite技术，减小http请求，考虑到多人协作开发，sprite按照模块、业务、页面来划分
* 页面内部尽量避免使用style属性，CSS放在head标签中，由link标签引入，使页面的结构与表现分离
* 尽量减少使用float、position等影响性能的属性，这样可以避免新手在布局时出现的混乱
* 尽量少使用<br />来断行
* 不要连续出现多个 (空格)，也尽量少使用全角空格（英文字符集下，全角空格会变成乱码），空白应该尽量使用text-indent、maring/padding等方法来实现
* 排版如果遇到需要首行缩进的处理，可以使用text-indent:2em;
* 图片如果需要加载就在页面上用img标签写出，并指明宽高，重要的图片必须加上alt属性，给重要的元素和截断的元素上加上title
* 如果有跳转的地方，统一使用a标签，<a href="#"></a>，需要跳转到新页面，则还需要加上targent="_blank"属性，如果点击的是空链接(#)，则会自动将当前页面重置到首端，可以使用"javascript:void()"来替代原来的"#"
* 分清楚什么情况下jpg/gif/png图片
 
#### 六、 自适应页面布局（响应式布局，暂不考虑低版本IE兼容性）
6.1 布局细节
* 首先头部head中加入meta新标签　
　　　　<!-- 让viewport的宽度等于物理设备上的真实分辨率，不允许用户缩放，一般主流的web app都是这样设置 -->

　　　　<meta name="viewport" content="width=device-width, initial-scale=1">
* position：不能使用绝对定位
* width/height/margin/padding: 不能使用px，应该使用百分比、auto或em
* font: 不能使用绝对大小，应使用em
6.2 CSS3引入的Media Query模块，可自动探测屏幕宽度
* 加载相应的CSS文件，建议根据不同的屏幕分辨率，选择应用不同的CSS规则，如：@media screen and (max-width:799px) {...}
* 图片自适应：img{max-width:100%;}
 
#### 七、帮助文档
7.1 全局样式写法（reset css）

7.2 清浮动
　　需要清除浮动的地方有：
* 若子元素浮动，而父元素内容塌陷（也就是没有包住）
* 布局出现混乱，譬如下一层的跑到上一层去了
　　解决办法（四种方法）
* 给父元素同样适用浮动，保证子元素与父元素浮动后还是在同一层
* 正确使用overflow:hidden;总所周知，overflow:hidden主要意思是溢出隐藏的意思，但是同样有清浮动的效果
* 在需要的元素下面添加<div class="clear"></div>，CSS中：clear{clear:both;}（不推荐，增加代码，冗余）
* 使用clearfix来清除浮动（推荐），相当于创建一个隐形的内容为空的块的目标元素来清除浮动
　　　　.clearfix{*zoom:1;} /* 针对IE7 hack，触发IE7的haslayout，以清除浮动 */

　　　　.clearfix:before,.clearfix:after{display:table;content:"";line-height:0;}

　　　　.clearfix:after{clear:both;}
7.3 各大网站的字体样式：
* Google: font-family:arial, sans-serif;
* Yahoo: font:13px/1.25 "Helvetica Neue",Helvetica,Arial;
* Apple: font:12px/18px "Lucida Grande", "Lucida Sans Unicode",Helvetica,Arial,Verdana,sans-serif;
* Baidu: font:12px arial;
* taobao: font:12px/1.5 tahoma,arial,'Hiragino Sans GB',\5b8b\4f53,sans-serif;
* Weibo: font:12px/1.125 Arial,Helvetica,sans-serif;
* Tencent: font:12px "宋体","Arial Narrow",HELVETICA;
* Sina Weibo: font:12px/1.3 "Arial","Microsoft YaHei";
* Sina: font:12px/20px "SimSun","宋体","Arial Narrow",HELVETICA;
* JD: font:12px/150% Arial,Verdana,"宋体";
* zhihu: font-family:'Helvetica Neue', Helvetiva,Arial,Sans-serif;
　　默认字体样式：
* 兼容性好：font-family:Helvetica,Tahoma,Arial,Sans-serif;
* 更接近设计：font-family:Geogia,"Times New Roman",Times,serif;
7.4 文本多行显示添加省略号（文本溢出省略）
　　给需要的标签添加具体宽度限制、white-space:nowrap;text-overflow:ellipsis;overflow:hidden;
7.5 input框的具体样式
　　input框行高问题，一般不需要写line-height，但是在IE8/IE7需要写hack

念念不忘，必有回响。技术成就梦想！
