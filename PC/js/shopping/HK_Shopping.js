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
    /*商品页展示页添加阴影*/
    $(".shopprotips").mouseenter(function() {
        $(this).addClass("sha-allv1");
        $(this).find(".icon-shopping-cart").show();
    });
    $(".shopprotips").mouseleave(function() {
        $(this).removeClass("sha-allv1");
        $(this).find(".icon-shopping-cart").hide();
    });
});