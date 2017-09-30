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
    /*下拉列表点击时的效果*/
    $(".swiper-wrapper-li").click(function() {
        event.stopPropagation();
        var seltex = $(this).find(".linkmansel-li").text();
        var selval = $(this).find(".linkmansel-lival").val();
        console.log(seltex);
        console.log(selval);
        $(".linkmansel-span").text(seltex);
        $(".linkmansel-val").val(selval);

        $(".swiper-wrapper-ul").find(".linkmansel-li").removeClass("bg-linkmanli-act");
        $(this).find(".linkmansel-li").addClass("bg-linkmanli-act");
        $(".linkman-sellayout").slideUp(200);
        $(".linkman-sel").removeClass("input-pri");
    });
    $(".swiper-wrapper-li").mouseenter(function() {
        $(this).find(".linkmansel-li").addClass("bg-FFB779");
    });
    $(".swiper-wrapper-li").mouseleave(function() {
        $(this).find(".linkmansel-li").removeClass("bg-FFB779");
    });
    /* 用户账号安全弹出层*/
    $(".bound-phone").click(function() {
        var isval = parseInt($(".ishassecurity-phone").val());
        if (isval == 0) {
            $(".show-setphone").show();
        }else{
            $(".show-changephone").show();
        }
    });
     $(".bound-email").click(function() {
        var isval = parseInt($(".ishassecurity-email").val());
        if (isval == 0) {
            $(".show-setemail").show();
        }else{
            $(".show-changeemail").show();
        }
    });
    $(".show-setphone").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".setphone-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-setphone").hide()
        };
    })
    $(".show-changephone").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".changephone-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-changephone").hide()
        };
    })
    $(".show-setemail").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".setemail-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-setemail").hide()
        };
    })
    $(".show-changeemail").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".changeemail-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-changeemail").hide()
        };
    })

});
