$(document).ready(function() {
	/*tab选项卡切换*/
    $(".Order-controlv1").click(function() {
        $(".Order-tabtips").hide();
        $(".Order-tabtipsv1").show();
        $(".Order-control").removeClass("col-active");
        $(this).addClass("col-active");
    });
    $(".Order-controlv2").click(function() {
        $(".Order-tabtips").hide();
        $(".Order-tabtipsv2").show();
        $(".Order-control").removeClass("col-active");
        $(this).addClass("col-active");
    });
    $(".Order-controlv3").click(function() {
        $(".Order-tabtips").hide();
        $(".Order-tabtipsv3").show();
        $(".Order-control").removeClass("col-active");
        $(this).addClass("col-active");
    });
    $(".Order-controlv4").click(function() {
        $(".Order-tabtips").hide();
        $(".Order-tabtipsv4").show();
        $(".Order-control").removeClass("col-active");
        $(this).addClass("col-active");
    });
});