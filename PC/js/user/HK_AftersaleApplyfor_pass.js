$(document).ready(function() {
	tracking_num();
	function tracking_num(){
		var tracking_num_val = $(".tracking_num_box").find("span").text();
		if (tracking_num_val == "" || tracking_num_val == undefined || tracking_num_val == NaN) {
			/*当物流单号值为空的时候*/
			$(".tracking_num_box").hide();
			$(".tracking_control_box").find("a").text("填写物流单号");
		}else{
			$(".tracking_num_box").show();
			$(".tracking_control_box").find("a").text("修改物流单号");
		};
	};
	$(".serve_control_show").click(function(){
	    $(".serve_content").slideDown();
	    $(this).hide();
	    $(".serve_control_hide").show();
	});
	$(".serve_control_hide").click(function(){
	    $(".serve_content").slideUp();
	    $(this).hide();
	    $(".serve_control_show").show();
	});
});