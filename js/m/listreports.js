$(document).ready(function() {
    /*报告列表日期选择按钮按下*/
    $(".cal-sel").click(function() {
        $(".cal-sel").attr("src", "../../img/listreports/calendar-screening.png");
    })
    $(".sel-class").click(function() {
        var selclassdis = $(".sel-class-show").css('display');
        var selrankdis = $(".sel-rank-show").css('display');
        if (selrankdis == 'none') {
            if (selclassdis == 'none') {
                $(".sel-class").find("img").attr("src", "../../img/listreports/pullup.png");
                $(".sel-class-show").slideDown();
            } else {
                $(".sel-class").find("img").attr("src", "../../img/listreports/pulldown.png");
                $(".sel-class-show").slideUp();
            };
        } else {
            $(".sel-rank").find("img").attr("src", "../../img/listreports/pulldown.png");
            $(".sel-rank-show").slideUp(300,);
            if (selclassdis == 'none') {
                $(".sel-class").find("img").attr("src", "../../img/listreports/pullup.png");
                $(".sel-class-show").slideDown();
            } else {
                $(".sel-class").find("img").attr("src", "../../img/listreports/pulldown.png");
                $(".sel-class-show").slideUp();
            };
        };
    })
    $(".sel-class-show").find("p").click(function() {
        $(".sel-class-show").find("p").removeClass("bg-white-sel");
        $(this).addClass("bg-white-sel");
    })
    $(".sel-rank").click(function() {
        var selclassdis = $(".sel-class-show").css('display');
        var selrankdis = $(".sel-rank-show").css('display');
        if (selclassdis == 'none') {
            if (selrankdis == 'none') {
                $(".sel-rank").find("img").attr("src", "../../img/listreports/pullup.png");
                $(".sel-rank-show").slideDown();
            } else {
                $(".sel-rank").find("img").attr("src", "../../img/listreports/pulldown.png");
                $(".sel-rank-show").slideUp();
            };
        } else {
            $(".sel-class").find("img").attr("src", "../../img/listreports/pulldown.png");
            $(".sel-class-show").slideUp(300,);
            if (selrankdis == 'none') {
                $(".sel-rank").find("img").attr("src", "../../img/listreports/pullup.png");
                $(".sel-rank-show").slideDown();
            } else {
                $(".sel-rank").find("img").attr("src", "../../img/listreports/pulldown.png");
                $(".sel-rank-show").slideUp();
            };
        };
    })
    $(".sel-rank-show").find("p").click(function() {
        $(".sel-rank-show").find("p").removeClass("bg-white-sel");
        $(this).addClass("bg-white-sel");
    })

});