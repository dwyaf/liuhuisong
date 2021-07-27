  //更换购物车图片
  var oshop = document.getElementsByClassName("shop_img")[0];
  oshop.onmouseover = function(){
    oshop.src = "img/img1/ia_100000365.png"
  }
  oshop.onmouseout = function(){
    oshop.src = "img/img1/ia_100000364.png"
  }
  //头部选项卡
  var oBtns = document.getElementsByClassName("btn");
  var obox = document.getElementsByClassName("phone");
  for(var i=0;i<oBtns.length;i++){
      oBtns[i].index = i;
      oBtns[i].onmouseover = function(){
          
         
         
           obox[this.index].style.display = "block";
           obox[this.index].onmouseover = function(){ 
            this.style.display = "block"}
          obox[this.index].onmouseout = function(){ 
              this.style.display = "none"}
      }
      oBtns[i].onmouseout = function(){
        obox[this.index].style.display = "none";
      }

  }

  //搜索栏
  var osearch = document.getElementsByClassName("search")[0];
  var otxt = document.getElementsByClassName("search_txt")[0];
  var osearch1 = document.getElementsByClassName("search_joint")[0];
  osearch.onclick = function(){
    osearch.style.border = "1px solid red"
    osearch1.style.border = "1px solid red"
    osearch1.style.borderLeft = "0px solid red"
    otxt.style.display = "block"
    // alert(1)
  }
  osearch.onmouseout = function(){
    otxt.onmouseover = function(){
        osearch.style.border = "1px solid red"
        osearch1.style.border = "1px solid red"
    otxt.style.display = "block"
    }
    otxt.onmouseout = function(){
        osearch.style.border = "1px solid #ccc"
        osearch1.style.border = "1px solid #ccc"
        otxt.style.display = "none"
    }
    osearch.style.border = "1px solid #ccc"
    osearch1.style.border = "1px solid #ccc"
    otxt.style.display = "none"
    // alert(1)
  }

  //轮播图部分

 
    var img = document.getElementById('ratate');
    var box = document.querySelector('.conent');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var imgArr = ['ia_100000224.webp', 'ia_100000225.webp', 'ia_100000226.webp', 'ia_100000227.webp', 'ia_100000228.jpg'];
    var oul = document.getElementsByClassName('reb')[0];
    var li = oul.children;

    var index = 0;
    function change() {
        img.src = './img/img1/' + imgArr[index];
        //动的时候 下标样式也变化
        for (let i = 0; i< li.length; i++) {
            // if (index === i) {
            //     li[index].className='liMove'
            // }else {
            //     li[i].className=''
            // }
            li[i].className=''
        }
        li[index].className='liMove'
    //    link.href='pages/'+index+'.html'
    }
    //定义自动切换
    //定时器跳转 定义自动切换
    var timer = setInterval(nextImg,5000)

    function nextImg() {
        index++;
        if (index === imgArr.length) {
            index = 0;
        }
        //img.src = 'images/' + imgArr[index];
        change()
    }

    //向右
    right.onclick = next;
    function next() {
        //切换最小
        index++;
        if (index >=5) {
            index = 0;
        }
        change()
    }
    //向左键
    left.onclick = last;
    function last() {
        index--;
        //切换最大
        if (index < 0) {
            index = imgArr.length-1;
        }
        change()
    }

    //鼠标移入暂停 左右并显示出来
    box.onmouseover = function () {
        clearTimeout(timer);
        left.style.display = 'block';
        right.style.display = 'block';

    };
    //移走继续
    box.onmouseout = function () {
        timer = setInterval(nextImg, 5000);
        left.style.display = 'none';
        right.style.display = 'none';
    };

//给li加鼠标移入事件

    for (let i = 0; i< li.length; i++) {
        li[i].id=i;
        li[i].onclick = function () {
            // li[i].className = '';
            // img.src = 'images/' + imgArr[i];
            // li[i].className = 'liMove';
            index=this.id
            change()
        };
        // li[i].onmouseout = function () {
        //     li[i].className = '';
        // }
    }


//轮播上方选项卡

 var obarul = document.getElementsByClassName("barul")[0];
 var oBtns1 = obarul.children
var obox1 = document.getElementsByClassName("phoneMode");
for(var i=0;i<oBtns1.length;i++){
    oBtns1[i].index = i;
    oBtns1[i].onmouseover = function(){
        
        // for(var j=0;j<oBtns1.length;j++){
            
        //     obox1[j].style.display = "none";

        // }
       
       
         obox1[this.index].style.display = "block";

         obox1[this.index].onmouseover = function(){ 
           this.style.display = "block"}
         obox1[this.index].onmouseout = function(){ 
             this.style.display = "none"}
    }
    oBtns1[i].onmouseout = function(){
      obox1[this.index].style.display = "none";


       
    }

}

// 电视选项卡

var tvul = document.getElementsByClassName("atv1")[0];
var tvli = tvul.children;
var tvpic = document.getElementsByClassName("tv_pic");
for(var i=0;i<tvli.length;i++){
    tvli[i].index = i;
    tvli[i].onmouseover = function(){
        
       
       for(var j=0;j<tvpic.length;j++){
        tvli[j].className = ""
        tvpic[j].className = "tv_pic"
       }
       this.className = "atv"
       tvpic[this.index].className = "tv_pic tv_show"
    }
}

// 智能选项卡

var smaul = document.getElementsByClassName("sma1")[0];
var smali = smaul.children;
var smapic1 = document.getElementsByClassName("sma_pic1")[0];
var smapic=smapic1.children;
for(var i=0;i<smali.length;i++){
    smali[i].index = i;
    smali[i].onmouseover = function(){
        
       
       for(var j=0;j<smapic.length;j++){
        smali[j].className = ""
        smapic[j].className = "sma_pic"
       }
       this.className = "sma"
       smapic[this.index].className = "sma_pic sma_show"
    }
}

// 搭配选项卡

var daul = document.getElementsByClassName("sma2")[0];
var dali = daul.children;
var dapic1 = document.getElementsByClassName("sma_pic1")[1];
var dapic = dapic1.children;
for(var i=0;i<dali.length;i++){
    dali[i].index = i;
    dali[i].onmouseover = function(){
        
       
       for(var j=0;j<dapic.length;j++){
        dali[j].className = ""
        dapic[j].className = "sma_pic"
       }
       this.className = "sma"
       dapic[this.index].className = "sma_pic sma_show"
    }
}

// 配件选项卡

var peiul = document.getElementsByClassName("sma2")[1];
var peili = peiul.children;
var peipic1 = document.getElementsByClassName("sma_pic1")[2];
var peipic = peipic1.children;
for(var i=0;i<peipic.length;i++){
    peili[i].index = i;
    peili[i].onmouseover = function(){
        
       
       for(var j=0;j<peipic.length;j++){
        peili[j].className = ""
        peipic[j].className = "sma_pic"
       }
       this.className = "sma"
       peipic[this.index].className = "sma_pic sma_show"
    }
}

// 周边选项卡

var zhouul = document.getElementsByClassName("sma2")[2];
var zhouli = zhouul.children;
var zhoupic1 = document.getElementsByClassName("sma_pic1")[3];
var zhoupic = zhoupic1.children;
for(var i=0;i<zhouli.length;i++){
    zhouli[i].index = i;
    zhouli[i].onmouseover = function(){
        
       
       for(var j=0;j<zhoupic.length;j++){
        zhouli[j].className = ""
        zhoupic[j].className = "sma_pic"
       }
       this.className = "sma"
       zhoupic[this.index].className = "sma_pic sma_show"
    }
}








// 视频播放
var oval = document.getElementsByClassName("oval");
var player = document.getElementsByClassName("player")[0];
var playing = document.getElementsByClassName("playing")[0];
var stoping = document.getElementsByClassName("sto");

for(var i=0;i<oval.length;i++){
    oval[i].index = i;
    oval[i].onclick = function(){
        player.style.display = "block"
        playing.src = "img/img1/vid.mp4";
    }
    for(let j=0;j<stoping.length;j++){
        stoping[j].onclick = function(){
            player.style.display = "none"
            playing.src = "";
        }
    }
   
}



// 右侧固定位置换图片
var fixul = document.getElementsByClassName("fixul")[0];
var fixli = fixul.children;
var fiximg0 = document.getElementsByClassName("fiximg")[0];
var evens = document.getElementsByClassName("evens")[0];

var fiximg1 = document.getElementsByClassName("fiximg")[1];
var fiximg2 = document.getElementsByClassName("fiximg")[2];
var fiximg3 = document.getElementsByClassName("fiximg")[3];
var fiximg4 = document.getElementsByClassName("fiximg")[4];
var fiximg5 = document.getElementsByClassName("fiximg")[5];
fiximg0.onmouseover = function(){
    fiximg0.src = "img/img1/ia_100000356.png"
    evens.style.display = "block"
}
fiximg0.onmouseout = function(){
    fiximg0.src = "img/img1/ia_100000355.png"
    evens.style.display = "none"
}
fiximg1.onmouseover = function(){
    fiximg1.src = "img/img1/ia_100000359.png"
}
fiximg1.onmouseout = function(){
    fiximg1.src = "img/img1/ia_100000358.png"
}
fiximg2.onmouseover = function(){
    fiximg2.src = "img/img1/ia_100000361.png"
}
fiximg2.onmouseout = function(){
    fiximg2.src = "img/img1/ia_100000360.png"
}
fiximg3.onmouseover = function(){
    fiximg3.src = "img/img1/ia_100000363.png"
}
fiximg3.onmouseout = function(){
    fiximg3.src = "img/img1/ia_100000362.png"
}
fiximg4.onmouseover = function(){
    fiximg4.src = "img/img1/ia_100000365.png"
}
fiximg4.onmouseout = function(){
    fiximg4.src = "img/img1/ia_100000364.png"
}

fiximg5.onmouseover = function(){
    fiximg5.src = "img/img1/ia_200005401y.png"
}
fiximg5.onmouseout = function(){
    fiximg5.src = "img/img1/ia_200005400l.png"
}








// var arrimg = ['ia_100000356.png', 'ia_100000359.png', 'ia_100000361.png', 'ia_100000363.png', 'ia_100000265.jpg'];





// 返回顶部
window.onscroll = function (){
    var h =  document.documentElement.scrollTop || document.body.scrollTop;
    var back = document.getElementsByClassName("back")[0];
   
// console.log(h)

if(h>=1500){
    back.style.display = "block"
}else{
    back.style.display = "none"
}
back.onclick = function(){
    document.documentElement.scrollTop = document.body.scrollTop = 0
}
// back.onmouseover = function(){
//     back.src = "img/img1/ia_100000364.png"
// }


}
