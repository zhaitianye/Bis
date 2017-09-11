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
    /*商品页图片转换*/
    $(".prode-zoom-img").mouseenter(function() {
        var smallImage = $(this).attr("data-image");
        var largeImage = $(this).attr("data-zoom-image");
        var ez = $('#prode-zoom-main').data('elevateZoom');
        ez.swaptheimage(smallImage, largeImage);
        $(this).siblings().find("img").removeClass("bor-col-309DE2");
        $(this).find("img").addClass("bor-col-309DE2");
        $(this).find("img").removeClass("bor-col-B2B2B2");
    });
    $(".prode-zoom-img").mouseleave(function() {
        $(this).find("img").addClass("bor-col-B2B2B2");
    });
    /*商品页菜单浮层定位*/
    $(window).scroll(function() {
        var floatscroll = $(".header").height();
        if ($(this).scrollTop() > floatscroll) {
            $(".flo-menuv2-aff").show();
        } else {
            $(".flo-menuv2-aff").hide();
        }
    });
    /*商品页楼层定位*/
    $(".sf-pointer").click(function() {
        var speed = 200;

        var HKbegindescribeheight = $(".HK-begin-describe").offset().top;

        $('body,html').animate({ scrollTop: HKbegindescribeheight }, speed);
        return false;
    });
    /*商品页返回顶部*/
    $(window).scroll(function() {
        //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8  
        var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        //clientHeight是网页在浏览器中的可视高度，  
        var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
        //scrollTop是浏览器滚动条的top位置，  
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；  

        var headerheight = $(".header").height() + $(".flo-menuv2").height() + $(".flo-menuv2-aff").height();
        var bannerheight = $(".cont-other").height();
        if (scrollTop < headerheight) {
            $(".hk-upbtn").hide();
        }
        if (scrollTop >= headerheight && scrollTop < headerheight + bannerheight) {
            var vss = (scrollTop - headerheight) / bannerheight;
            var strvss = "rgba(155,210,244," + vss + ")"
            $(".hk-upbtn").show();
            $(".hk-upbtn").css({ "background": strvss });
        }
        if (scrollTop >= headerheight + bannerheight) {
            $(".hk-upbtn").show();
            $(".hk-upbtn").addClass("bg-9BD2F4");
        }
    })
    $(".hk-upbtn").click(function() {
        var speed = 200;
        $('body,html').animate({ scrollTop: 0 }, speed);
    });
    /*商品页悉心平安服务边框*/
    $(".shieldframe").click(function() {
        if ($(".shieldframe").hasClass("bor-col-activate")) {
            $(this).removeClass("bor-col-activate");
            $(".shieldframe_circle").css("background-color", "#B1B1B1");
            $(".shieldframe_sel").val("0");
            $(".pro-submit-ischeckserve").val("0");
        } else {
            $(this).addClass("bor-col-activate");
            $(".shieldframe_circle").css("background-color", "#309DE2");
            $(".shieldframe_sel").val("1");
            $(".pro-submit-ischeckserve").val("1");
        }
    });
    /*商品页套餐部分*/
    $(".combotips").click(function() {
        /*边框隐藏显示*/
        $(".combomainbox").find(".combotips-div").removeClass("bor-col-activate");
        $(this).find(".combotips-div").addClass("bor-col-activate");
        /*四张介绍图显示*/
        var prodezoomimgv1 = $(this).find(".comboiput-prodezoomimgv1").val();
        var prodezoomimgv2 = $(this).find(".comboiput-prodezoomimgv2").val();
        var prodezoomimgv3 = $(this).find(".comboiput-prodezoomimgv3").val();
        var prodezoomimgv4 = $(this).find(".comboiput-prodezoomimgv4").val();
        $(".prode-zoom-img-v1").attr("data-image",prodezoomimgv1);
        $(".prode-zoom-img-v1").attr("data-zoom-image",prodezoomimgv1);
        $(".prode-zoom-img-v1").find(".produ-min-tips").attr("src",prodezoomimgv1);
        $(".prode-zoom-img-v2").attr("data-image",prodezoomimgv2);
        $(".prode-zoom-img-v2").attr("data-zoom-image",prodezoomimgv2);
        $(".prode-zoom-img-v2").find(".produ-min-tips").attr("src",prodezoomimgv2);
        $(".prode-zoom-img-v3").attr("data-image",prodezoomimgv3);
        $(".prode-zoom-img-v3").attr("data-zoom-image",prodezoomimgv3);
        $(".prode-zoom-img-v3").find(".produ-min-tips").attr("src",prodezoomimgv3);
        $(".prode-zoom-img-v4").attr("data-image",prodezoomimgv4);
        $(".prode-zoom-img-v4").attr("data-zoom-image",prodezoomimgv4);
        $(".prode-zoom-img-v4").find(".produ-min-tips").attr("src",prodezoomimgv4);
        $(".produ-max-show").attr("data-zoom-image",prodezoomimgv1);
        $(".produ-max-show").attr("src",prodezoomimgv1);
        var ez = $('#prode-zoom-main').data('elevateZoom');
        ez.swaptheimage(prodezoomimgv1, prodezoomimgv1);
        /*价格赋值*/
        var comboiputprice = $(this).find(".comboiput-price").val();
        $(".pro-main-price").text(comboiputprice);
        /*主标题副标题赋值*/
        var comboiputmaindir = $(this).find(".comboiput-maindir").val();
        var comboiputdepdir = $(this).find(".comboiput-depdir").val();
        $(".pro-main-dir").text(comboiputmaindir);
        $(".pro-dep-dir").text(comboiputdepdir);
        /*id赋值*/
        var comboiputcid = $(this).find(".comboiput-cid").val();
        $(".pro-submit-selid").val(comboiputcid);
        /*悉心平安服务方面的滑入滑出*/
        if ($(this).find(".combotips-div").hasClass("combotips-div-biaopei")) {
            $(".shieldframe").slideDown();
            $(".pro-submit-issingleorcombo").val(0);
        } else {
            $(".shieldframe").removeClass("bor-col-activate");
            $(".shieldframe_circle").css("background-color", "#B1B1B1");
            $(".shieldframe_sel").val("0");
            $(".pro-submit-ischeckserve").val("0");
            $(".shieldframe").slideUp();
            $(".pro-submit-issingleorcombo").val(1);
        }
    });
    /*页面加载完毕后获取标配的id赋值给需要提交的部分*/
    var comboiputcidbiaopei = $(".combotips-div-biaopei").siblings(".comboiput-cid").val();
    $(".pro-submit-selid").val(comboiputcidbiaopei);
    /*当页面加载完毕后判断套餐的数量，对样式进行排序*/
    
    Sortingpackages();
    function Sortingpackages(){
        var combotipslength =  $(".combomainbox").find(".combotips").length;
        
        if (combotipslength<=3) {
            $(".combomainbox").addClass("mb-40-20-ipad");
            $(".combotips").addClass("mt-40-20-ipad");
            console.log(1111);
        }
        if (3<combotipslength && combotipslength<=6) {
            $(".combomainbox").addClass("mb-20-10-ipad");
            $(".combotips").addClass("mt-20-10-ipad");
        }
        if (6<combotipslength) {
            for (var i = 6; i < combotipslength; i++) {
                var combostrtips = " .combotips:eq(" + i + ")";
                $(combostrtips).hide();
            }
            $(".combomainbox").addClass("mb-20-10-ipad");
            $(".combotips").addClass("mt-20-10-ipad");
        }
    };
});
