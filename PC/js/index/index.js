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
    /*首页部分*/
    /*首页添加阴影*/
    $(".shodow-tip").mouseenter(function() {
        $(this).parent(".swiper-slide").addClass("z-99");
        $(this).find(".shodow-tipl").addClass("sha-leftv1");
        $(this).find(".shodow-tipr").addClass("sha-rightv1");
    });
    $(".shodow-tip").mouseleave(function() {
        $(this).parent(".swiper-slide").removeClass("z-99");
        $(this).find(".shodow-tipr").removeClass("sha-rightv1");
        $(this).find(".shodow-tipl").removeClass("sha-leftv1");
    });
    $(".shodow-tipv2").mouseenter(function() {
        $(this).parents(".swiper-slide").addClass("z-99");
        $(this).find(".shodow-tipl").addClass("sha-leftv1");
        $(this).find(".shodow-tipr").addClass("sha-rightv1");
    });
    $(".shodow-tipv2").mouseleave(function() {
        $(this).parents(".swiper-slide").removeClass("z-99");
        $(this).find(".shodow-tipr").removeClass("sha-rightv1");
        $(this).find(".shodow-tipl").removeClass("sha-leftv1");
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
    $(".swiper-pagination").mouseenter(function() {
        $(".swiper-pagination-bullet").mouseenter(function() {
            $(this).find(".mainswiper-pagination-bullet-div").removeClass("banneraniv2");
            $(this).find(".mainswiper-pagination-bullet-div").addClass("banneraniv1");
        });
        $(".swiper-pagination-bullet").mouseleave(function() {
            $(this).find(".mainswiper-pagination-bullet-div").removeClass("banneraniv1");
            $(this).find(".mainswiper-pagination-bullet-div").addClass("banneraniv2");
        });
    });
    /*宽度控制*/
    var protipswidth = $(".swiper-container-tipsv1").width() / 4;
    var protipssideheight = $(".protipssidev1").height();
    $(".protipssidev2").css("height", protipssideheight);
    $(".protipshalfheight").css("height", protipssideheight/2);
});
