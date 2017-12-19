//动态获取HTML 根元素的字体大小
function refreshRem() {
    var desw = 750;
    var winW = document.documentElement.clientWidth;
    var radio = winW / desw;
    document.documentElement.style.fontSize = radio * 100 + 'px';
}
refreshRem();
window.addEventListener('resize', refreshRem);//机型 * DPR =设计稿
//动态计算rem 的值
//swiper ('选择器'，{参数配置})     onTransitionEnd动画过渡结束
var  mySwiper=new Swiper('.swiper-container',{
    direction:"vertical",
    effect : 'coverflow',
    loop:'true',//无缝滚动  默认是false
    onTransitionEnd:function(swiper){
        //获取的是一个对象数组   滑块的长度
        var slides=swiper.slides,
        //滑动的当前n屏的索引值
            curIndex=swiper.activeIndex,
            total=slides.length,
            targeId='page';
        switch(curIndex){  //用swiper  会产生最后一个添加到第一个   第一个添加到最后一个  只会自动添加 两个
            case 0:
                targeId+=(total-2);
                break;
            case(total-1):
                targeId+=1;
                break;
            default:
                targeId+=curIndex
        }
        [].forEach.call(slides,function(item,index){
            if(curIndex===index){
                item.id=targeId
            }else{
                item.id=''
            }
        });
    }
});

//音乐播放器
var oMusic = document.getElementById('music');
var audioMusic = document.getElementById('audio');
window.setTimeout(function () {
    audioMusic.play();
    audioMusic.addEventListener('canplay', function () {
        oMusic.className='music musicMove';
    }, false);
}, 1000);
oMusic.onclick=function () {
    if (audioMusic.paused) {
        audioMusic.play();
        oMusic.className = 'music musicMove';
    } else {
        audioMusic.pause();
        oMusic.className = 'music';
        oMusic.style.opacity=1;
    }
};


