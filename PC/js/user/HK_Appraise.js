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
    /*评价星级部分js*/
    $(".star-tips").mouseenter(function() {
        var allstartips = $(".star-tips").length;
        var thisindex = $(this).index();
        for (var i = 0; i < allstartips; i++) {
            var str = ".star-tips:eq("+i+")"
            if (i<=thisindex) {
                $(str).addClass("bg-starsel");
            }else{
                $(str).removeClass("bg-starsel");
            }
            switch (thisindex) {
                case 0:
                    $(".face-item").text("失望");
                    $(".face-tips").css("background-image","url(../../img/user/Appraise/facev1.png)");
                    break;
                case 1:
                    $(".face-item").text("一般");
                    $(".face-tips").css("background-image","url(../../img/user/Appraise/facev2.png)");
                    break;
                case 2:
                    $(".face-item").text("满意");
                    $(".face-tips").css("background-image","url(../../img/user/Appraise/facev3.png)");
                    break;
                case 3:
                    $(".face-item").text("喜欢");
                    $(".face-tips").css("background-image","url(../../img/user/Appraise/facev4.png)");
                    break;
                case 4:
                    $(".face-item").text("超爱");
                    $(".face-tips").css("background-image","url(../../img/user/Appraise/facev5.png)");
                    break;
                default:
                    $(".face-item").text("超爱");
                    $(".face-tips").css("background-image","url(../../img/user/Appraise/facev5.png)");
                    break;
            };
        };
    });
    $(".face-main-box").mouseleave(function() {
        var recordfaceval = parseInt($(".record-face").val());
        switch (recordfaceval) {
            case 0:
                $(".star-tips").removeClass("bg-starsel");
                $(".face-item").text("超爱");
                $(".face-tips").css("background-image","url(../../img/user/Appraise/facev5.png)");
                break;
            case 1:
                $(".star-tips").removeClass("bg-starsel");
                $(".star-tipsv1").addClass("bg-starsel");
                $(".face-item").text("失望");
                $(".face-tips").css("background-image","url(../../img/user/Appraise/facev1.png)");
                break;
            case 2:
                $(".star-tips").removeClass("bg-starsel");
                $(".star-tipsv1").addClass("bg-starsel");
                $(".star-tipsv2").addClass("bg-starsel");
                $(".face-item").text("一般");
                $(".face-tips").css("background-image","url(../../img/user/Appraise/facev2.png)");
                break;
            case 3:
                $(".star-tips").removeClass("bg-starsel");
                $(".star-tipsv1").addClass("bg-starsel");
                $(".star-tipsv2").addClass("bg-starsel");
                $(".star-tipsv3").addClass("bg-starsel");
                $(".face-item").text("满意");
                $(".face-tips").css("background-image","url(../../img/user/Appraise/facev3.png)");
                break;
            case 4:
                $(".star-tips").removeClass("bg-starsel");
                $(".star-tipsv1").addClass("bg-starsel");
                $(".star-tipsv2").addClass("bg-starsel");
                $(".star-tipsv3").addClass("bg-starsel");
                $(".star-tipsv4").addClass("bg-starsel");
                $(".face-item").text("喜欢");
                $(".face-tips").css("background-image","url(../../img/user/Appraise/facev4.png)");
                break;
            case 5:
                $(".star-tips").removeClass("bg-starsel");
                $(".star-tipsv1").addClass("bg-starsel");
                $(".star-tipsv2").addClass("bg-starsel");
                $(".star-tipsv3").addClass("bg-starsel");
                $(".star-tipsv4").addClass("bg-starsel");
                $(".star-tipsv5").addClass("bg-starsel");
                $(".face-item").text("超爱");
                $(".face-tips").css("background-image","url(../../img/user/Appraise/facev5.png)");
                break;
            default:
                $(".star-tips").removeClass("bg-starsel");
                $(".face-item").text("超爱");
                $(".face-tips").css("background-image","url(../../img/user/Appraise/facev5.png)");
                break;
        };
    });
    $(".star-tips").click(function() {
        var thisindex = $(this).index();
        $(".record-face").val(thisindex+1);
    });
    /*评价列表页js*/
    $(window).scroll(function() {
        backscrollshow();
    });
    $(".appraise-backup").click(function() {
        var speed = 200;
        $('body,html').animate({ scrollTop: 0 }, speed);
    });
    /*返回顶部按钮隐藏显示*/
    backscrollshow();
    function backscrollshow(){
        //获取网页的总高度 
        var htmlHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
        //获取网页的可视高度，  
        var clientHeight = document.body.clientHeight || document.documentElement.clientHeight;
        //获取滚动条的top位置，  
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var posaapprightofftop = $("header").height();
        var posabottomofftop = htmlHeight - $(".footer").height() - 790;
        //console.log(posabottomofftop);
        //console.log($(".posa-appraiselist-rightbottom").offset().top);
        //console.log($(".aff-appraiselist-right").offset().top);
        if (scrollTop<posaapprightofftop) {
            $(".aff-tit").hide();
            $(".posa-appraiselist-righttop").show();
            $(".aff-appraiselist-right").hide();
            $(".posa-appraiselist-rightbottom").hide();
            console.log(1);
        } else if (scrollTop >=posaapprightofftop && scrollTop<posabottomofftop) {
            $(".aff-tit").show();
            $(".posa-appraiselist-righttop").hide();
            $(".aff-appraiselist-right").show();
            $(".posa-appraiselist-rightbottom").hide();
            console.log(2);
        }else if (scrollTop>=posabottomofftop){
            $(".posa-appraiselist-righttop").hide();
            $(".aff-appraiselist-right").hide();
            $(".posa-appraiselist-rightbottom").show();
            console.log(3);
        }else{
            $(".posa-appraiselist-righttop").show();
            $(".aff-appraiselist-right").hide();
            $(".posa-appraiselist-rightbottom").hide();
            console.log(4);
        }
    }
});