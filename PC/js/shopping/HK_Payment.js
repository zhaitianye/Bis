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