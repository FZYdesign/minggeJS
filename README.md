# MingGeJS1.9.3.2016完美正式版
>HEAD

 English version is [here](README_en.md).
 
 
>PS:MingGeJS 1.9.3.完美正式版 升级

1：新增取兄弟节点API接口 $(XXX).siblings(),$(XXX).prev(),$(XXX).prevAll(),$(XXX).next(),$(XXX).nextAll()。我不介绍了，和JQUERY的接口一样的。

2：新增content 取文本节点， 不介绍了和JQUERY一样的。

3：修复选择器为 为“*”号时，取不出节点，例如$("*").filter("*"),已深度修复。

4：修复children取出来的子节点有误。

5: 修正特殊情况下$(xxx)指向被错误劫持的问题！

6: 以及部份API细节作了深度调整。

------------------------------------------------------------------------------------------------


         结语：minggeJS并不单单山寨JQUERY，更多的是融入我自己思想。minggeJS的CSS3动画做得不错的，比ZEPTO动画要好是肯定的，
　　　　　　　　例如串联动画，zepto是没有的，所以minggeJS非常合适合来做手机端，做各种复杂的ＣＳＳ３动画，
                另外minggeJS支持模块及插件形式分离开发，大致用法基本和JQUERY一致，有部份函数用法则有所稍略
                请大家看DEMO.html演试！（DEMO.html已大幅度更新）

                我是mingge,请支持国产MingGeJs



------------
继优秀作品shearphoto截图插件，本人又再推出国产山寨JQUERY，为什么我要开发一个山寨JQUERY？老实说我从来没用过JQUERY，正因为我反感JQUERY。
为什么我反感，因为我完全有开发JQUERY的能力，JQUERY的底层我都了如指掌。  
我开发插件一直都是用原生JS，大家可以看下我前面的作品shearphoto就是用原生JS写的。  虽说我反感JQUERY，但是JQUERY却在前端界占有大量的用户份额，之后我有个想法，不如重新开发一个属于自己思想，自己架构的JQUERY。有了想法就要实现我山寨JQUERY之路
继优秀作品shearphoto截图插件，本人又再推出国产山寨jQuery，为什么我要开发一个山寨jQuery？老实说我从来没用过jQuery，正因为我反感jQuery。
为什么我反感，因为我完全有开发jQuery的能力，jQuery的底层我都了如指掌。
我开发插件一直都是用原生JS，大家可以看下我前面的作品shearphoto就是用原生JS写的。  虽说我反感jQuery，但是jQuery却在前端界占有大量的用户份额，之后我有个想法，不如重新开发一个属于自己思想，自己架构的jQuery。有了想法就要实现我山寨jQuery之路
>>>>>>> pr/60

我给了他一个霸气的名字：MingGeJs，  

MingGeJs是什么？它是我一个星期完成的作品，它是一个JS类库，它拥有和jQuery相同的语法，相同函数，相同的函数用法， 但是动画，选择器性能，函数
效率都在JQ之上，同时兼容IE 6 7 8，同时与jQuery相兼容

它的名字叫MingGeJs，MingGe就是我的大名， 一看到插件名字，就知道作者是我，知道它是国产的，让别人知道国产类库一样做得很出色，出众

本人文化程度不高，初中毕业！半句英文都不会，但是我相信只要肯努力一样可以实现自己的梦想。MingGeJS的梦想有点大胆，就是在全球范围内，占据

jQuery百分之50以上的用户份额。MingGeJs已在GIT开源，欢迎各路前端高手对MingGeJs类库进行评测！  

我是mingge    请支持国产minggeJS类库，因为我们都是中国人。    

下面我介绍一下minggeJS几大优点。

minggeJS具有以下优点
1：选择器执行速度胜出jQuery，
   以十万个DIV节点测试，分别用minggeJS与jQuery选择器取出指定节点测试：
 jQuery结果 ：     IE7以上：花时1800毫秒   IE7 花时   8135毫秒     IE6   花时超过30-40秒之间，浏览器随机卡死。
 minggeJS结果：    IE7以上：花时1500毫秒   IE7花时    5132毫秒      IE6花时 23-35秒之间   浏览器也有卡死现象，但次数少。
  花时越少，选择器性能越强，从结果来看，minggeJS大获全胜。    司徒正美也开发了一个号称世界最快的选择器，我也测试了下，从结果来看和我不分上下的！
  还有一点值得提提，居闻jQuery的选择器不是自己公司原创的，是用第三方选择器改出来的！minggeJS的选择器问心无愧地说全部是我原创开发的   
2：众所周之，JQUERY的动画原理是采用定时器方原理，minggeJS原理不同，minggeJS的动画采用的是CSS3过渡原理，遗憾的是minggeJS的动画不支持IE678。 minggeJS并不是第一个采用CSS3过渡动画，zepto的动画也是采用这个原理，可惜zepto动画做得真心差，zepto是不支持串联式动画的，用zepto做复杂动画，简直是一大败笔。   minggeJS则支持动画串联，支持高效准确回调，支持接口查询是否正在动画等，可以告诉大家用minggeJS做手机动画，绝对是最佳的选择！      
3：语法，函数用法，函数名称，都与JQUERY一致，只要会JQUERY，你就会更用minggeJS,易学易用，马上上手。部份函数用法稍有不同，例如mingge新建节点是用$(XX).createNode(),比JQUERY方便很多！
  minggeJS不单单是山寨JQUERY，更多的是融入了自己的思想，想法！
4：文件体积20K左右，后期升级可能会维持在40K左右，我自己的想法就是希望不超过40K。
5： minggeJS后期的发展，更多是想往手机端发展，即使战不胜JQUERY，能战胜zepto也是赏心悦目的事。再者就是动画方面，打算采用两种模式供用户选择，1种是CSS3，第2种CSS2定时器方式，定时器方式，估计以插件方式发布！
