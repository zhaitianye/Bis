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
    var protipswidth = $(".swiper-container-tipsv1").width()/4;
    var protipssideheight = $(".protipssidev1").height();
    $(".protipssidev2").css("height",protipssideheight);
    /*商品页添加阴影*/
    $(".shopprotips").mouseenter(function() {
        $(this).addClass("sha-allv1");
    });
    $(".shopprotips").mouseleave(function() {
        $(this).removeClass("sha-allv1");
    });
    /*商品页图片转换*/
    $(".produ-min-tips").mouseenter(function() {
        var produsrc = $(this).attr("src");
        $(".produ-max-show").attr("src",produsrc);
        $(this).siblings("img").removeClass("bor-col-309DE2");
        $(this).addClass("bor-col-309DE2");
        $(this).removeClass("bor-col-B2B2B2");
    });
    $(".produ-min-tips").mouseleave(function() {
        $(this).addClass("bor-col-B2B2B2");
    });
    /*商品页数量增加减*/
    $(".produ-min").click(function() {  
        var t = $(this).siblings('.produ-text-box');
        if(t.val()==""||undefined||null){  
            t.val(0);  
        }  
        t.val(parseInt(t.val()) - 1)  
        if(parseInt(t.val()) < 0) {  
            t.val(0);  
        }
    })  
    $(".produ-max").click(function() {  
        var t = $(this).siblings('.produ-text-box');
        if(t.val()==""||undefined||null){  
            t.val(0);  
        }  
        t.val(parseInt(t.val()) + 1);
    })
    /*商品页焦点边框颜色*/
    $(".produ-text-outerbox").mouseenter(function(){
        $(".produ-text-outerbox").removeClass("bor-col-B2B2B2");
        $(".produ-text-outerbox").addClass("bor-col-309DE2");
    });
      $(".produ-text-outerbox").mouseleave(function(){
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
    $(window).scroll(function(){
    var floatscroll =  $(".header").height()+$(".cont-other").height();+$(".prode-desc-tit").height();
        if($(this).scrollTop()>floatscroll){
            $(".sha-prode-floatv1").show();
        }
        else{
            $(".sha-prode-floatv1").hide();
        }
    });
    /*确认订单页收货地址*/
    /*鼠标移动*/
    $(".conanorder-tips").mouseenter(function() {
        $(this).addClass("bor-col-309DE2");
    });
    $(".conanorder-tips").mouseleave(function() {
        $(this).removeClass("bor-col-309DE2");
        $(this).addClass("bor-col-7A7A7A");
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
    /*鼠标点击*/
    $(".conanorder-tips").click(function() {
        $(".conanorder-tips").removeClass("bor-col-activate");
        $(".conanorder-tips-alter").hide();
        $(this).find(".conanorder-tips-alter").show();
        $(this).addClass("bor-col-activate");
    });
});
