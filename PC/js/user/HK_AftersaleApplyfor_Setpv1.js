$(document).ready(function() {
    /*退换货部分*/
	$(".btn_exchange_v1").mouseenter(function() {
        $(this).addClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_exchange_v1").mouseleave(function() {
        $(this).removeClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_exchange_v2").mouseenter(function() {
        $(this).addClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_exchange_v2").mouseleave(function() {
        $(this).removeClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_exchange_v1").click(function(){
        $(".btn_exchange_v2").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_exchange").val(1);
    });
    $(".btn_exchange_v2").click(function(){
        $(".btn_exchange_v1").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_exchange").val(2);
    });
    /*产品问题类型部分*/
    $(".btn_issue").mouseenter(function() {
        $(this).addClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_issue").mouseleave(function() {
        $(this).removeClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_issue_v1").click(function(){
        $(".btn_issue").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_issue").val(1);
        $(".btn_issue_v4_show").slideUp();
    });
    $(".btn_issue_v2").click(function(){
        $(".btn_issue").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_issue").val(2);
        $(".btn_issue_v4_show").slideUp();
    });
    $(".btn_issue_v3").click(function(){
        $(".btn_issue").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_issue").val(3);
        $(".btn_issue_v4_show").slideUp();
    });
    $(".btn_issue_v4").click(function(){
        $(".btn_issue").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_issue").val(4);
        $(".btn_issue_v4_show").slideDown();
    });
    $(".btn_issue_v4_show_textarea").keyup(function(){
        var text_val =$(".btn_issue_v4_show_textarea").val();
        $(".in_issue_v4_text").val(text_val);
    });
});