// 参考 https://www.zhihu.com/question/20240397/answer/14449578
var homemsg = '内容整合来自某<a href="https://liuli.in/wp/?lang=zh">神社(https://liuli.in/wp/?lang=zh)</a>。<style>body\{background:\#fff!important\}\#zdy_wz0\{display:none!important\}\#dzx,\#lyz,\#idczq,\#ystop\{border:unset!important;background:\#fff!important;box\-shadow:0 4px 5px 0 rgba\(0,0,0,\.14\),0 1px 10px 0 rgba\(0,0,0,\.12\),0 2px 4px \-1px rgba\(0,0,0,\.3\)\}\#idtop\{min\-height:0!important;background:\#2196f3!important\}\#sylj\{margin:0\}\#kjbt\{display:none\}img\[src=\'http://zy\.ys168\.com/f_zy/tp/point\.gif\']{display:none\}\#sylj\{font\-size:1\.15rem;line\-height:110%\}\#sylj a\{color:\#fff!important\}\.tdtop\{border\-bottom:unset\}\#ysmenu1,\.cdq div\{border:unset!important;background:\#fff!important\}\.lysm,\.lynr,\.lyk>div:nth\-child\(3\)\{color:\#000!important\}\.lynr\{background:unset\}\.ta_wjq\{display:none\}img\[src=\'http://zy\.ys168\.com/f_zy/tp/ml/t01\.gif\']{display:none\}\.lyk>div>label:nth\-child\(2\)\{display:none\}\#menuList li\.gml\{border\-bottom:unset!important\}\.menu\{border\-left:unset!important\}\#sxts,\.lxts\{display:none\}\#dzx\{padding:1%\}\#menuList li ul\{min\-height:unset!important\}\.ml\{font\-size:16px!important;font\-weight:400;letter\-spacing:\.04em\}\.zml a,\.xwj a\{font\-size:14px!important;font\-weight:400;letter\-spacing:\.04em\}</style>';
var homemsgtarget = document.getElementById('idsyjy');
homemsgtarget.innerHTML = homemsg;

var links = '<a href="https://mega.nz/#F!aJh3HaCa!stMfUQHElMdgT5JuC_HQ1g" target="_blank">限流备用(MEGA)</a>&nbsp;<a href="https://asytech.cn/cloud/index.php/s/YbFkkjrmkqcmaEe" target="_blank">限流备用（易云）</a>&nbsp;<a href="https://pan.baidu.com/s/1eTYVLPC" target="_blank">小8酱整理</a>&nbsp;<a href="https://liuli.in/wp/?lang=zh">神社</a>'
var linkstarget = document.getElementById('sylj');
linkstarget.innerHTML = links;