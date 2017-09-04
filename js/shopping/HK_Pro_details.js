$(document).ready(function() {
    /*头部导航下划线*/
    $(".mainnav").find("a").mouseenter(function() {
        $(this).addClass("navbor");
    });
    $(".mainnav").find("a").mouseleave(function() {
        $(this).removeClass("navbor");
    });
    /*头部输入框变化*/
    $(".mainsearch").click(function() {
        event.stopPropagation();
        $(".mainsearchinput").fadeIn();
    });
    $(document).click(function() {
        $('.mainsearchinput').fadeOut();
    });
    /*商品展示页浮层定位*/
    $(window).scroll(function() {
        var floatscroll = $(".header").height();
        if ($(this).scrollTop() > floatscroll) {
            $(".flo-menuv2-aff").show();
        } else {
            $(".flo-menuv2-aff").hide();
        }
    });
   $(window).scroll(function() {
        //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8  
        var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        //clientHeight是网页在浏览器中的可视高度，  
        var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
        //scrollTop是浏览器滚动条的top位置，  
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
        var starbgpos = $(".header").height() + $(".flo-menuv2").height() + $(".first-floor").height()+ $(".second-floor").height()+ $(".third-floor").height() - clientHeight;

        var endbgpos = $(".header").height() + $(".first-floor").height()+ $(".second-floor").height()+ $(".third-floor").height()+ $(".fourth-floor").height();
        var speed = 200;
        if (scrollTop>=starbgpos && scrollTop<=endbgpos) {
            var changebgpos = [(scrollTop-starbgpos)/(endbgpos-starbgpos)-0.5]*-800-500;
            var changste = changebgpos + "px";
            //$(".fourth-floor").css("background-position",changste);
            //$(".fourth-floor").css({"background-position":changste});
            $(".img-peodetailfv4-1").css({"top": changste});
            console.log(changste);
        }

        //$('body,html').animate({ scrollTop: endbgpos}, speed);
    });
});
