$(document).ready(function() {
	/*选择头像的弹出层*/
    $(".set-heads").click(function() {
        $(".show-selhead").show();
        $(".selhead-content").removeClass("ani-selhead-logoout");
        $(".selhead-content").addClass("ani-selhead-logoin");
    });
    $(".show-selhead").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".selhead-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".selhead-content").removeClass("ani-selhead-logoin");
            $(".selhead-content").addClass("ani-selhead-logoout");
            $(".show-selhead").fadeOut();
        };
    });
});