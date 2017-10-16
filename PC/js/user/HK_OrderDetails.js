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
    /*layer部分*/
    layui.use('layer', function(){
    var layer = layui.layer;
    $(".cancellorder").click(function(){
        layer.confirm('您确定要取消订单？', {
              btn: ['确定','取消'] //按钮
            }, function(){
              layer.msg('我很伤心。', {icon: 5});
            }, function(){
              layer.msg('谢谢你。', {icon: 6},{
                time: 20000, //20s后自动关闭
                btn: ['明白了', '知道了']
              });
            });
      });
    });
});