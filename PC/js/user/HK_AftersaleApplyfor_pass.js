$(document).ready(function() {
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
	/*根据条目的多少动态绘制左边图*/
	canvas_ridio();
	function canvas_ridio(){
		var num_length =  $(".num_state").length;
		if (num_length == 1) {
			var num_one="";
				num_one += "<div class=\"clear\"> ";
				num_one += "	<div class=\"clear img-12 full-radius bg-83c441 pull-right\"><\/div>";
				num_one += "<\/div>";
		$(".state_left_ridio").empty();
		$(".state_left_ridio").html(num_one);
		} else if(num_length > 1) {
			var num_other="";
			num_other += "<div class=\"clear\"> ";
			num_other += "	<div class=\"clear img-12 full-radius bg-83c441 pull-right\"><\/div>";
			num_other += "<\/div>";
			for (var i = 1; i < num_length; i++) {
				num_other += "<div class=\"clear\"> ";
				num_other += "	<div class=\"clear h-33 bor bor-r bor-2px bor-col-e0e0e0 pull-right mr-5\"><\/div>";
				num_other += "<\/div>";
				num_other += "<div class=\"clear\"> ";
				num_other += "	<div class=\"clear img-12 full-radius bg-e0e0e0 pull-right\"><\/div>";
				num_other += "<\/div>";
			}
			$(".state_left_ridio").empty();
			$(".state_left_ridio").html(num_other);
			
		}
	};
	
});