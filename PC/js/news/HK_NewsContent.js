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
});

//高度自适应
var iframe = document.getElementById("testIframe");
var iframeHeight = function() {    
    var hash = window.location.hash.slice(1), h;
    if (hash && /height=/.test(hash)) {
        h = hash.replace("height=", "");
        iframe.height = h;
    }
    setTimeout(iframeHeight, 200);
};
iframeHeight();