responsive css : http://groundworkcss.github.io/groundwork/?url=docs/home
css naming conventions : BEM  compile: sass
js : typescript
package manager : yarn
Engineering : gulp


build flow:
    .1 webpack compile js

    responsve web : you shouldn't use specific px on wrao instead calculate percentage then use pure,
    because if as above , when you view smaller , the center will displacement and display scroll bar;

if need refer : bootstrap -> one line , multi column can't resolve the issue that mobile layout change , in other
way , if small mobile can't contain all the element or the ele will more small to show , how to deal with it ?

if the response need change the layout


:all above : you can as ui 1200 view in 1920 ; then md as percentage change ; when the layout <= 800l
by res-mobile.js change the layout;


issue : why use the multiple line? ;
