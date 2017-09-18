$(document).ready(function() {
    /*订单详情页*/
    /*根据状态改变样式*/
    orderstate();

    function orderstate() {
        var orderstatenum = Number($(".order-stateinputval").val());
        switch (orderstatenum) {
            case 10:
                $(".order-statev1").show();
                break;
            case 20:
                $(".order-statev2").show();
                break;
            case 21:
                $(".order-statev3").show();
                break;
            case 22:
                $(".order-statev4").show();
                break;
            case 30:
                $(".order-statev5").show();
                break;
            case 40:
                $(".order-statev6").show();
                break;
            case 50:
                $(".order-statev7").show();
                break;
            default:
                $(".order-statev1").show();
                break;
        };
    };
});