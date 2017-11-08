/*定义加载高度函数，循环控制文章高度*/
/*这里有跨域问题，必须在服务器上测试*/
var iframeheight;
var id = setInterval("test()",1000); 
function test(){
    iframeheight =$('#maindes').contents().find('html').height();
    $('#maindes').height(iframeheight);
}
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
    //高度自适应页面加载完毕后执行一次
    $('#maindes').ready(function () {
        iframeheight =$('#maindes').contents().find('html').height();
        $('#maindes').height(iframeheight);
    });
});
