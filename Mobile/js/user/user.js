$(document).ready(function() {
	/*联系人列表页面单选的样式*/
    $(".way-pho-p").click(function() {
        var issel = $(".sel-phone").prop("checked");
        if (issel) {} else {
        	$(".sel-ph-img").attr("src","../../img/user/sele-right.png"); 
        	$(".sel-phone").attr("checked",true);
        	$(".sel-em-img").attr("src","../../img/user/sele-none.png"); 
        	$(".sel-email").attr("checked",false);
        }
    });
    $(".way-mai-p").click(function() {
        var issel = $(".sel-email").prop("checked");
        if (issel) {} else {
        	$(".sel-ph-img").attr("src","../../img/user/sele-none.png"); 
        	$(".sel-phone").attr("checked",false);
        	$(".sel-em-img").attr("src","../../img/user/sele-right.png"); 
        	$(".sel-email").attr("checked",true);
        }
    });
    /*联系人列表页面下拉框样式*/
    $(".linkman-sel").click(function() {
        event.stopPropagation();
        $(".linkman-sellayout").slideToggle(200);
        if ($(".linkman-sel").hasClass("input-pri")) {
            $(".linkman-sel").removeClass("input-pri");
        } else {
            $(".linkman-sel").addClass("input-pri");
        };
    });
    $(".linkman-selimg").click(function() {
        event.stopPropagation();
        $(".linkman-sellayout").slideToggle(200);
        if ($(".linkman-sel").hasClass("input-pri")) {
            $(".linkman-sel").removeClass("input-pri");
        } else {
            $(".linkman-sel").addClass("input-pri");
        };
    });
    $(document).click(function() {
        $('.linkman-sellayout').slideUp(200);
        $(".linkman-sel").removeClass("input-pri");
    });
    $(".linkmansel-liv1").click(function() {
        event.stopPropagation();
        var seltex = $(".linkmansel-liv1").text();
        var selval = $(".linkmansel-liv1val").val();
        $(".linkmansel-span").text(seltex);
        $(".linkmansel-val").val(selval);
        $(".linkmansel-ul").find("li").removeClass("bg-linkmanli-act");
        $(this).addClass("bg-linkmanli-act");
        $(".linkman-sellayout").slideUp(200);
        $(".linkman-sel").removeClass("input-pri");
    });
    $(".linkmansel-liv1").mouseenter(function() {
        $(this).addClass("bg-FFB779");
    });
    $(".linkmansel-liv1").mouseleave(function() {
        $(this).removeClass("bg-FFB779");
    });
    $(".linkmansel-liv2").click(function() {
        event.stopPropagation();
        var seltex = $(".linkmansel-liv2").text();
        var selval = $(".linkmansel-liv2val").val();
        $(".linkmansel-span").text(seltex);
        $(".linkmansel-val").val(selval);
        $(".linkmansel-ul").find("li").removeClass("bg-linkmanli-act");
        $(this).addClass("bg-linkmanli-act");
        $(".linkman-sellayout").slideUp(200);
        $(".linkman-sel").removeClass("input-pri");
    });
    $(".linkmansel-liv2").mouseenter(function() {
        $(this).addClass("bg-FFB779");
    });
    $(".linkmansel-liv2").mouseleave(function() {
        $(this).removeClass("bg-FFB779");
    });
    $(".linkmansel-liv3").click(function() {
        event.stopPropagation();
        var seltex = $(".linkmansel-liv3").text();
        var selval = $(".linkmansel-liv3val").val();
        $(".linkmansel-span").text(seltex);
        $(".linkmansel-val").val(selval);
        $(".linkmansel-ul").find("li").removeClass("bg-linkmanli-act");
        $(this).addClass("bg-linkmanli-act");
        $(".linkman-sellayout").slideUp(200);
        $(".linkman-sel").removeClass("input-pri");
    });
    $(".linkmansel-liv3").mouseenter(function() {
        $(this).addClass("bg-FFB779");
    });
    $(".linkmansel-liv3").mouseleave(function() {
        $(this).removeClass("bg-FFB779");
    });
    $(".linkmansel-liv4").click(function() {
        event.stopPropagation();
        var seltex = $(".linkmansel-liv4").text();
        var selval = $(".linkmansel-liv4val").val();
        $(".linkmansel-span").text(seltex);
        $(".linkmansel-val").val(selval);
        $(".linkmansel-ul").find("li").removeClass("bg-linkmanli-act");
        $(this).addClass("bg-linkmanli-act");
        $(".linkman-sellayout").slideUp(200);
        $(".linkman-sel").removeClass("input-pri");
    });
    $(".linkmansel-liv4").mouseenter(function() {
        $(this).addClass("bg-FFB779");
    });
    $(".linkmansel-liv4").mouseleave(function() {
        $(this).removeClass("bg-FFB779");
    });
});
