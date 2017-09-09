$(document).ready(function() {
    /*导航下划线*/
    $(".mainnav").find("a").mouseenter(function() {
        $(this).addClass("navbor");
    });
    $(".mainnav").find("a").mouseleave(function() {
        $(this).removeClass("navbor");
    });
    /*输入框变化*/
    $(".mainsearch").click(function() {
        event.stopPropagation();
        $(".mainsearchinput").fadeIn();
    });
    $(document).click(function() {
        $('.mainsearchinput').fadeOut();
    });
    /*首页添加阴影*/
    $(".shodow-tip").mouseenter(function() {
        $(this).addClass("sha-rightv1");
        $(this).find(".shodow-tips").addClass("sha-leftv1");
    });
    $(".shodow-tip").mouseleave(function() {
        $(this).removeClass("sha-rightv1");
        $(this).find(".shodow-tips").removeClass("sha-leftv1");
    });
    $(".shodow-tipv2").mouseenter(function() {
        $(this).addClass("sha-leftv1");
    });
    $(".shodow-tipv2").mouseleave(function() {
        $(this).removeClass("sha-leftv1");
    });
    /*遮罩*/
    $(".bannershadev1").mouseenter(function() {
        $(this).fadeOut();
        $(".tipsshadev1").fadeIn();
    });
    $(".tipsshadev1").mouseenter(function() {
        $(this).fadeOut();
        $(".bannershadev1").fadeIn();
    });
    /*banner进度选择*/
    $(".swiper-pagination-bullet").mouseenter(function() {
        $(this).find(".mainswiper-pagination-bullet-div").removeClass("banneraniv2");
        $(this).find(".mainswiper-pagination-bullet-div").addClass("banneraniv1");
    });
    $(".swiper-pagination-bullet").mouseleave(function() {
        $(this).find(".mainswiper-pagination-bullet-div").removeClass("banneraniv1");
        $(this).find(".mainswiper-pagination-bullet-div").addClass("banneraniv2");
    });
    /*宽度控制*/
    var protipswidth = $(".swiper-container-tipsv1").width() / 4;
    var protipssideheight = $(".protipssidev1").height();
    $(".protipssidev2").css("height", protipssideheight);
    /*商品页添加阴影*/
    $(".shopprotips").mouseenter(function() {
        $(this).addClass("sha-allv1");
        $(this).find(".icon-shopping-cart").show();
    });
    $(".shopprotips").mouseleave(function() {
        $(this).removeClass("sha-allv1");
        $(this).find(".icon-shopping-cart").hide();
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
    /*商品页焦点边框颜色*/
    $(".produ-text-outerbox").mouseenter(function() {
        $(".produ-text-outerbox").removeClass("bor-col-B2B2B2");
        $(".produ-text-outerbox").addClass("bor-col-309DE2");
    });
    $(".produ-text-outerbox").mouseleave(function() {
        $(".produ-text-outerbox").removeClass("bor-col-309DE2");
        $(".produ-text-outerbox").addClass("bor-col-B2B2B2");
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
        $(".pro-submit-selid").text(comboiputcid);
        /*悉心平安服务方面的滑入滑出*/
        if ($(this).find(".combotips-div").hasClass("combotips-div-biaopei")) {
            $(".shieldframe").slideDown();
        } else {
            $(".shieldframe").removeClass("bor-col-activate");
            $(".shieldframe_circle").css("background-color", "#B1B1B1");
            $(".shieldframe_sel").val("0");
            $(".pro-submit-ischeckserve").val("0");
            $(".shieldframe").slideUp();
        }
    });
    /*页面加载完毕后获取标配的id赋值给需要提交的部分*/
    var comboiputcidbiaopei = $(".combotips-div-biaopei").siblings(".comboiput-cid").val();
    $(".pro-submit-selid").text(comboiputcidbiaopei);
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


    /*确认订单页收货地址*/
    /*页面加载完毕后进行收货地址的初始排序*/
    var conblocklength = $(".conanorder-block").length
    if (conblocklength < 4) {
        $(".conanorder-moreaddress").hide();
    } else {
        $(".conanorder-moreaddress").show();
        for (var i = 3; i < conblocklength; i++) {
            var strtips = " .conanorder-block:eq(" + i + ")";
            $(strtips).hide();
        }
    }
    $(".conanorder-moreaddress").click(function() {
        if (conblocklength < 8) {
            for (var i = 0; i < conblocklength; i++) {
                var strtips = " .conanorder-block:eq(" + i + ")";
                $(strtips).show();
            }
        } else {
            for (var i = 0; i < 7; i++) {
                var strtips = " .conanorder-block:eq(" + i + ")";
                $(strtips).show();
            }
        };
        $(".conanorder-moreaddress").hide();
        $(".conanorder-moreaddresspullup").show();

    });
    $(".conanorder-moreaddresspullup").click(function() {
        for (var i = 3; i < conblocklength; i++) {
            var strtips = " .conanorder-block:eq(" + i + ")";
            $(strtips).hide();
        }
        $(".conanorder-moreaddress").show();
        $(".conanorder-moreaddresspullup").hide();
    });
    /*鼠标移动*/
    $(".conanorder-tips").mouseenter(function() {
        $(this).addClass("bor-col-309DE2");
        $(this).find(".conanorder-tips-alter").show();
    });
    $(".conanorder-tips").mouseleave(function() {
        $(this).removeClass("bor-col-309DE2");
        $(this).addClass("bor-col-7A7A7A");
        $(this).find(".conanorder-tips-alter").hide();
    });
    $(".conanorder-tipsadd").mouseenter(function() {
        $(this).addClass("bor-col-309DE2");
        $(this).find(".conanorder-tips-add").removeClass("col-B2B2B2");
        $(this).find(".conanorder-tips-add").addClass("col-309DE2");
        $(this).find(".conanorder-tips-addv2").removeClass("bg-eee");
        $(this).find(".conanorder-tips-addv2").addClass("bg-309DE2");
    });
    $(".conanorder-tipsadd").mouseleave(function() {
        $(this).removeClass("bor-col-309DE2");
        $(this).addClass("bor-col-7A7A7A");
        $(this).find(".conanorder-tips-add").addClass("col-B2B2B2");
        $(this).find(".conanorder-tips-add").removeClass("col-309DE2");
        $(this).find(".conanorder-tips-addv2").addClass("bg-eee");
        $(this).find(".conanorder-tips-addv2").removeClass("bg-309DE2");
    });
    $(".conanorder-moreaddress").mouseenter(function() {
        $(this).find("i").removeClass("col-252525");
        $(this).find("i").addClass("col-white");
    });
    $(".conanorder-moreaddress").mouseleave(function() {
        $(this).find("i").addClass("col-252525");
        $(this).find("i").removeClass("col-white");
    });
    $(".conanorder-moreaddresspullup").mouseenter(function() {
        $(this).find("i").removeClass("col-252525");
        $(this).find("i").addClass("col-white");
    });
    $(".conanorder-moreaddresspullup").mouseleave(function() {
        $(this).find("i").addClass("col-252525");
        $(this).find("i").removeClass("col-white");
    });
    /*页面加载完毕后执行初始地址赋值*/
    var cphonelength = $(".conanorder-tips-phone").length
    if (cphonelength > 0) {
        var cfirstname = $(".conanorder-tips-name:eq(0)").text();
        var cfirstphone = $(".conanorder-tips-phone:eq(0)").text();
        var cfirstaddress = $(".conanorder-tips-address:eq(0)").text();
        var cfirstemal = $(".conanorder-tips-emal:eq(0)").val();
        var cfirstabout = $(".conanorder-tips-about:eq(0)").val();
        $(".conanorder-tips-showmsg-name").text(cfirstname);
        $(".conanorder-tips-showmsg-phone").text(cfirstphone);
        $(".conanorder-tips-showmsg-address").text(cfirstaddress);
        $(".conanorder-tips-showmsg-emal").val(cfirstemal);
        $(".conanorder-tips-showmsg-about").val(cfirstabout);
    } else {
        $(".conanorder-tips-showmsg-name").text("请添加收货地址！");
    }
    /*鼠标点击收货地址发生的变化*/
    $(".conanorder-tips").click(function() {
        $(".conanorder-tips").removeClass("bor-col-activate");
        $(this).addClass("bor-col-activate");
        var cname = $(this).find(".conanorder-tips-name").text();
        var cphone = $(this).find(".conanorder-tips-phone").text();
        var caddress = $(this).find(".conanorder-tips-address").text();
        var cemal = $(this).find(".conanorder-tips-emal").val();
        var cabout = $(this).find(".conanorder-tips-about").val();
        $(".conanorder-tips-showmsg-name").text(cname);
        $(".conanorder-tips-showmsg-phone").text(cphone);
        $(".conanorder-tips-showmsg-address").text(caddress);
        $(".conanorder-tips-showmsg-emal").val(cemal);
        $(".conanorder-tips-showmsg-about").val(cabout);
    });
    /*添加收货地址弹出层相关的*/
    $(".show-input-shipping").mouseenter(function() {
        $(this).removeClass("bor-col-B2B2B2");
        $(this).addClass("bor-col-999");
    });
    $(".show-input-shipping").mouseleave(function() {
        $(this).addClass("bor-col-B2B2B2");
        $(this).removeClass("bor-col-999");
    });
    $(".show-input-shipping").focusin(function() {
        var shipplaceholder = $(this).siblings(".show-input-shipping-value").val();
        var thispoint = $(this);
        $(this).addClass("bor-col-309DE2");
        $(this).siblings(".show-div-shipping").addClass("col-309DE2");
        $(this).siblings(".show-div-shipping").animate({ 'top': '-6px', 'font-size': '12px' }, 300);
        setTimeout(function() { thispoint.attr("placeholder", shipplaceholder) }, 300);
    });

    $(".show-input-shipping").focusout(function() {
        var shipinputval = $(this).val();
        if (shipinputval == "" || undefined || null || NaN) {
            $(this).siblings(".show-div-shipping").animate({ 'top': '11px', 'font-size': '14px' }, 300);
        } else {}
        $(this).attr("placeholder", "");
        $(this).removeClass("bor-col-309DE2");
        $(this).siblings(".show-div-shipping").removeClass("col-309DE2");
    });
    /*添加收货地址弹出层*/
    $(".conanorder-tipsadd").click(function() {
        if (conblocklength < 7) {
            $(".show-add-shippingaddress").fadeIn();
            document.documentElement.style.overflow = "hidden";
        } else {
            $(".show-full-shippingaddress").fadeIn();
            document.documentElement.style.overflow = "hidden";
        }
    });
    $(".show-add-shippingaddress").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".show-add-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-add-shippingaddress").fadeOut();
            document.documentElement.style.overflow = "scroll";
        };
    });
    $(".show-full-shippingaddress").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".show-full-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-full-shippingaddress").fadeOut();
            document.documentElement.style.overflow = "scroll";
        };
    });

    /*修改收货地址弹出层*/
    $(".conanorder-tips-alter").click(function() {
        $(".show-revise-shippingaddress").fadeIn();
        var cname = $(this).parent().siblings().find(".conanorder-tips-name").text();
        var cphone = $(this).parent().siblings().find(".conanorder-tips-phone").text();
        var caddress = $(this).parent().siblings().find(".conanorder-tips-address").text();
        var cemal = $(this).parent().siblings(".conanorder-tips-emal").val();
        var cabout = $(this).parent().siblings(".conanorder-tips-about").val();
        console.log(cname + cphone + caddress + cemal + cabout);
        $(".inrename").val(cname);
        $(".inrephone").val(cphone);
        $(".inreaddress").val(caddress);
        $(".inreemail").val(cemal);
        $(".inreabout").val(cabout);
        $(".show-revise-shippingaddress").find(".show-div-shipping").animate({ 'top': '-6px', 'font-size': '12px' }, 10);
        document.documentElement.style.overflow = "hidden";
    });
    $(".show-revise-shippingaddress").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".show-revise-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-revise-shippingaddress").fadeOut();
            document.documentElement.style.overflow = "scroll";
        };
    });
    $(".main-order-tips-alter").click(function() {
        $(".show-revise-shippingaddress").fadeIn();
        var cname = $(".conanorder-tips-showmsg-name").text();
        var cphone = $(".conanorder-tips-showmsg-phone").text();
        var caddress = $(".conanorder-tips-showmsg-address").text();
        var cemal = $(".conanorder-tips-showmsg-emal").val();
        var cabout = $(".conanorder-tips-showmsg-about").val();
        $(".inrename").val(cname);
        $(".inrephone").val(cphone);
        $(".inreaddress").val(caddress);
        $(".inreemail").val(cemal);
        $(".inreabout").val(cabout);
        $(".show-revise-shippingaddress").find(".show-div-shipping").animate({ 'top': '-6px', 'font-size': '12px' }, 10);
        document.documentElement.style.overflow = "hidden";
    });
    /*订单提交成功页弹出微信二维码*/
    $(".weixinpay").click(function() {
        $(".show-weixinpay").fadeIn();
    });
    $(".show-weixinpay").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".weixinpay-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-weixinpay").fadeOut();
        };
    });
    /*订单提交成功页弹出支付宝二维码*/
    $(".zhifubaopay").click(function() {
        $(".show-zhifubaopay").fadeIn();
    });
    $(".show-zhifubaopay").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".zhifubaopay-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-zhifubaopay").fadeOut();
        };
    });
    /*订单提交成功页支付方式的边框颜色改变*/
    $(".pay-way").find("img").mouseenter(function() {
        $(this).addClass("bor-col-309DE2");
    });
    $(".pay-way").find("img").mouseleave(function() {
        $(this).removeClass("bor-col-309DE2");
    });
});
