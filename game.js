//全局变量
var Unit;
var speed = 8;

//系统事件触发函数
document.onkeydown = WhenKeyDown;

//函数内容
function GetUnit(unit){
    Unit = unit;
}

function WhenKeyDown(even){
    //确定位移
    var Move_x = 0,Move_y = 0;
    //获取键盘码
    var jpCode = even.keyCode;
    //获取键盘上的字母键盘的字母
    var keychar=String.fromCharCode(jpCode);
    //读取操作
    switch(keychar){
        case 'W':Move_y = -1;break;
        case 'S':Move_y = 1;break;
        case 'A':Move_x = -1;break;
        case 'D':Move_x = 1;break;
    }

    //开始执行
    var now_x = Unit.offsetLeft;
    var now_y = Unit.offsetTop;
    var num = 0;

    //console.log(now_x + " " + now_y + " " + num + " ");
    
    num = now_x + Move_x * speed;
    if(num < 0)
         num = 0;
    else  if(num > 1200)
         num = 1200;
    Unit.style.left = num + 'px';

    num = now_y + Move_y * speed;
    if(num < 0)
         num = 0;
    else  if(num > 750)
         num = 750;
    Unit.style.top = num + 'px';
        
}