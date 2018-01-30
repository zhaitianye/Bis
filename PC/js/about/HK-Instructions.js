$(document).ready(function() {
    layui.use(['element', 'layer'], function(){
      var element = layui.element;
      var layer = layui.layer;

    });
    $(".layui-colla-item").click(function(){
        var speed = 200;
        $('body,html').animate({ scrollTop: 400 }, speed);
    });
});

