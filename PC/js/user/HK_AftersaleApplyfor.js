$(document).ready(function() {
	$(".applyfor_product").mouseenter(function() {
        $(this).find(".applyfor_btn_dofor").show();
    });
    $(".applyfor_product").mouseleave(function() {
        $(this).find(".applyfor_btn_dofor").hide();
    });
    /*控制宽高*/
    set_h_w();
    $(window).resize(function(){
        set_h_w();
    });
    function set_h_w(){
        var img_w = $(".applyfor_product").find("img").width();
        $(".applyfor_product").find("img").height(img_w);
    };
});