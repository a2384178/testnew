/**
 * Created by Administrator on 2017/4/12.
 */
function domore(obj,attr,dir,target,endFu){
    dir=parseInt(getstyle(obj,attr))<target?dir:-dir;
    clearInterval(obj.timer);
    obj.timer=setInterval(function () {
        var speed=parseInt(getstyle(obj,attr))+dir;
        if(speed>target&&dir>0||speed<target&&dir<0){
            speed=target;
        }

        obj.style[attr]=speed+'px';
        if(speed==target){
            clearInterval(obj.timer);
            /*if(endFu){
             endFu()
             }*/
            endFu&&endFu();//与上面的方法等价
        }
    },30);
}
function getstyle(obj,attr) {return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];

}
