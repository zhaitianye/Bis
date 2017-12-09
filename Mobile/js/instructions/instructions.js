$(document).ready(function() {
    /*返回顶部*/
    $(".go_up_btn").click(function(){
        var speed=200;
        $('body,html').animate({ scrollTop: 0}, speed);
    });
});
