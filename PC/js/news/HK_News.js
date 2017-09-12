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
    /*健康咨询页js*/
    wh169();
    function wh169(){
        var wh169h = $(".wh16-9").width()*9/16;
        $(".wh16-9").css("height",wh169h);
    };
    /*购物指南页js*/
    $(".HTS-list").click(function() {
        $(this).parent().find(".col-active").removeClass("col-active");
        $(this).addClass("col-active");
    }); 
    $(".HTS-listv1").click(function() {
        $(".HTS-tips").hide();
        $(".HTS-tipsv1").show();
    }); 
    $(".HTS-listv2").click(function() {
        $(".HTS-tips").hide();
        $(".HTS-tipsv2").show();
    });
    $(".HTS-listv3").click(function() {
        $(".HTS-tips").hide();
        $(".HTS-tipsv3").show();
    });
    $(".HTS-listv4").click(function() {
        $(".HTS-tips").hide();
        $(".HTS-tipsv4").show();
    });
    $(".HTS-listv5").click(function() {
        $(".HTS-tips").hide();
        $(".HTS-tipsv5").show();
    });
    $(".HTS-listv6").click(function() {
        $(".HTS-tips").hide();
        $(".HTS-tipsv6").show();
    });
});