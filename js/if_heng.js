/**
 * Created by qq368 on 2017/5/4.
 */
function orient() {
    var $body = $('body');
    if($body.width() >  $body.height() ) {
//ipad、iphone横屏；Andriod横屏
        $body.append('<div class="heng-show vetically" style="position: fixed;left: 0;top:0;width: 100%;height: 100%;background:rgba(0,0,0,.7);color: white;font-size: 1rem;z-index: 9999999999"><p>竖屏体验更好</p></div>')
        return false;
    }
    else if($body.width() <  $body.height() ){
//ipad、iphone竖屏；Andriod竖屏
        $body.find('.heng-show').remove();
        return false;
    }
}
//页面加载时调用
$(function(){
    orient();
});
//用户变化屏幕方向时调用
$(window).bind( 'orientationchange', function(e){
    setTimeout(function () {
        orient();
    },500)
});