$(document).ready(function() {
	tracking_num();
	function tracking_num(){
		var tracking_num_val = $(".tracking_num_box").find(".tracking_num_val").text();
		if (tracking_num_val == "" || tracking_num_val == undefined || tracking_num_val == NaN) {
			/*当物流单号值为空的时候*/
			$(".tracking_num_box").hide();
			$(".tracking_content_empty").show();
			$(".tracking_content_not_empty").hide();
		}else{
			$(".tracking_num_box").show();
			$(".tracking_content_not_empty").show();
			$(".tracking_content_empty").hide();
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
	/*添加物流单号弹出层*/
    $(".tracking_content_empty").click(function() {
        $(".show_add_tracking").show();
    });
    $(".show_add_tracking").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".show_add_tracking_content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show_add_tracking").hide();
        };
    });
    /*修改物流单号弹出层*/
    $(".tracking_content_not_empty").click(function() {
    	var tracking_num_val = $(".tracking_num_box").find(".tracking_num_val").text();
    	var tracking_company_val = $(".tracking_num_box").find(".tracking_company").text();
    	$(".edit_tracking_company_sel").val(tracking_company_val);
    	$(".edit_tracking_val_in").val(tracking_num_val);
        $(".show_edit_tracking").show();
    });
    $(".show_edit_tracking").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".show_edit_tracking_content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show_edit_tracking").hide();
        };
    });
});