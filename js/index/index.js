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
    /*商品页数量增加减*/
    $(".produ-min").click(function() {
        var t = $(this).siblings('.produ-text-box');
        if (t.val() == "" || undefined || null) {
            t.val(0);
        }
        t.val(parseInt(t.val()) - 1)
        if (parseInt(t.val()) < 0) {
            t.val(0);
        }
    })
    $(".produ-max").click(function() {
        var t = $(this).siblings('.produ-text-box');
        if (t.val() == "" || undefined || null) {
            t.val(0);
        }
        t.val(parseInt(t.val()) + 1);
    })
    /*商品页焦点边框颜色*/
    $(".produ-text-outerbox").mouseenter(function() {
        $(".produ-text-outerbox").removeClass("bor-col-B2B2B2");
        $(".produ-text-outerbox").addClass("bor-col-309DE2");
    });
    $(".produ-text-outerbox").mouseleave(function() {
        $(".produ-text-outerbox").removeClass("bor-col-309DE2");
        $(".produ-text-outerbox").addClass("bor-col-B2B2B2");
    });
    /*选项卡切换*/
    $(".prode-describev1").click(function() {
        $(".prode-describev1").addClass("col-309DE2");
        $(".prode-describev2").removeClass("col-309DE2");
        $(".prode-describev3").removeClass("col-309DE2");
        $(".prode-describev1-show").show();
        $(".prode-describev2-show").hide();
        $(".prode-describev3-show").hide();
    })
    $(".prode-describev2").click(function() {
        $(".prode-describev2").addClass("col-309DE2");
        $(".prode-describev1").removeClass("col-309DE2");
        $(".prode-describev3").removeClass("col-309DE2");
        $(".prode-describev2-show").show();
        $(".prode-describev1-show").hide();
        $(".prode-describev3-show").hide();
    })
    $(".prode-describev3").click(function() {
        $(".prode-describev3").addClass("col-309DE2");
        $(".prode-describev1").removeClass("col-309DE2");
        $(".prode-describev2").removeClass("col-309DE2");
        $(".prode-describev3-show").show();
        $(".prode-describev1-show").hide();
        $(".prode-describev2-show").hide();
    })
    /*浮层定位*/
    $(window).scroll(function() {
        var floatscroll = $(".header").height() + $(".cont-other").height(); + $(".prode-desc-tit").height();
        if ($(this).scrollTop() > floatscroll) {
            $(".sha-prode-floatv1").show();
        } else {
            $(".sha-prode-floatv1").hide();
        }
    });
    /*确认订单页收货地址*/
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
    /*页面加载完毕后执行电话加密*/
    /*var cphonelength = $(".conanorder-tips-phone").length
    for (var i=0;i<cphonelength;i++)
    {   
        var cphoneunencryptionstr =".conanorder-tips-phone:eq("+i+")"
        var cphoneunencryption = $(cphoneunencryptionstr).text();


        console.log(cphoneunencryption);
    }*/

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
    }
    else
    {
        $(".conanorder-tips-showmsg-name").text("请添加收货地址！");
    }

    //console.log(cphoneencryption2);
    /*鼠标点击收货地址发生的变化*/
    $(".conanorder-tips").click(function() {
        $(".conanorder-tips").removeClass("bor-col-activate");
        $(this).addClass("bor-col-activate");
        var cname = $(this).find(".conanorder-tips-name").text();
        var cphone = $(this).find(".conanorder-tips-phone").text();
        var caddress = $(this).find(".conanorder-tips-address").text();
        var cemal = $(this).find(".conanorder-tips-emal").val();
        var cabout = $(this).find(".conanorder-tips-about").val();
        console.log(cname + cphone + caddress + cemal + cabout);
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
    $(".show-input-shipping").focusin(function(){
        var shipplaceholder = $(this).siblings(".show-input-shipping-value").val();
        $(this).addClass("bor-col-309DE2");
        $(this).siblings(".show-div-shipping").addClass("col-309DE2");
        $(this).siblings(".show-div-shipping").animate({'top':'-6px','font-size':'12px'},300);
        $(this).attr("placeholder",shipplaceholder);
    });

    $(".show-input-shipping").focusout(function(){
        var shipinputval =  $(this).val();
        if (shipinputval == ""||undefined||null||NaN) {
            $(this).siblings(".show-div-shipping").animate({'top':'11px','font-size':'14px'},300);
        }
        else{ 
        }
        $(this).attr("placeholder","");
        $(this).removeClass("bor-col-309DE2");
        $(this).siblings(".show-div-shipping").removeClass("col-309DE2");
        
    });
});

/* 弹出层*/
/*function payshow_show(){
  $(".payshow").show();
}
$(".payshow").on("click",function(event){
     event.stopPropagation();
     var target=event.target;
     if (!$(target).closest(".modal-content").length>0||$(target).attr("class").indexOf("close-mod")!=-1) {
        $(".payshow").hide()
     };
})*/