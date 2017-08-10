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
    /*添加阴影*/
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
});
