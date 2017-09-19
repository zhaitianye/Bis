$(document).ready(function() {
    /*评价部分js*/
    $(".appraise-protips").mouseenter(function() {
        $(this).find(".appraise-btninto").stop(true);
        $(this).find(".appraise-btninto").fadeIn(500);
    });
    $(".appraise-protips").mouseleave(function() {
        $(this).find(".appraise-btninto").stop(true);
        $(this).find(".appraise-btninto").fadeOut(500);
    });
    /*选项卡切换*/
    $(".Appraise-controlv1").click(function() {
        $(".Appraise-tabtips").hide();
        $(".Appraise-tabtipsv1").show();
        $(".Appraise-control").removeClass("col-active");
        $(this).addClass("col-active");
    });
    $(".Appraise-controlv2").click(function() {
        $(".Appraise-tabtips").hide();
        $(".Appraise-tabtipsv2").show();
        $(".Appraise-control").removeClass("col-active");
        $(this).addClass("col-active");
    });
    $(".Appraise-controlv3").click(function() {
        $(".Appraise-tabtips").hide();
        $(".Appraise-tabtipsv3").show();
        $(".Appraise-control").removeClass("col-active");
        $(this).addClass("col-active");
    });
});