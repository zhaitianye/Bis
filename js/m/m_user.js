$(document).ready(function() {
	/*联系人列表页面单选的样式*/
    $(".way-pho-p").click(function() {
        var issel = $(".sel-phone").prop("checked");
        if (issel) {} else {
        	$(".sel-ph-img").attr("src","../../img/m/user/sele-right.png"); 
        	$(".sel-phone").attr("checked",true);
        	$(".sel-em-img").attr("src","../../img/m/user/sele-none.png"); 
        	$(".sel-email").attr("checked",false);
        }
    });
    $(".way-mai-p").click(function() {
        var issel = $(".sel-email").prop("checked");
        if (issel) {} else {
        	$(".sel-ph-img").attr("src","../../img/m/user/sele-none.png"); 
        	$(".sel-phone").attr("checked",false);
        	$(".sel-em-img").attr("src","../../img/m/user/sele-right.png"); 
        	$(".sel-email").attr("checked",true);
        }
    });
});