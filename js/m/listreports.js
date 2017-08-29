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
            $(".sel-rank-show").slideUp(300, );
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
            $(".sel-class-show").slideUp(300, );
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
/*滚动部分js*/
$(document).ready(function() {
/*滚动部分的高度*/
var wrapperheight = $("body").height() - $("header").height() - $(".select_munu").height();
$("#wrapper").css("height", wrapperheight);
    /*定义滚动区域*/
    var myScroll = new IScroll("#wrapper", {
        useTransition: true, //是否使用CSS3的Transition属性，否则使用requestAnimationFram代替
        useTransform: true, //是否使用CSS3的Transform属性
        mouseWheel: true, //是否监听鼠标滚轮事件。
        scrollbars: "custom", //只有该属性的值为"custom"，才能通过.iScrollVerticalScrollbar和.iScrollIndicator设置凹槽和滚动条的样式.(是否显示默认滚动条)
        interactiveScrollbars: true, //用户是否可以拖动滚动条
        resizeScrollbars: false, //当这个属性设置为否时,才可以通过.iScrollIndicator改变滚动条(不是凹槽的的宽和高）是否固定滚动条大小，建议自定义滚动条时可开启。  
        probeType: 3 //这个值设置为3而且必须引入iscroll-probe.js才能触发onscroll事件.需要使用iscroll-probe.js才能生效probeType：1.滚动不繁忙的时候触发2.滚动时每隔一定时间触发3.每滚动一像素触发一次
    });

    var list = $("#list");
    var step = 5; //上拉加载时的动态创建的li的个数
    var max = $(".listallnumbs").val(); //li的最大个数
    var end = false; //数据加载完成后的标识
    var flag = false; //数据到达底部标识

    myScroll.on("scroll", function() {
        var inthis = this;
        if (parseInt(inthis.y) >= 0 && inthis.directionY == -1) { //当滚动条到上方是或者判断滚动为负值时加载up层数据
            $("#scroller_up").show(); //up层显示
            if (parseInt(inthis.y) == 0) { //当滚动条归为时
                setTimeout(function() { //延迟加载
                    $("#scroller_up").hide(); //up层隐藏
                    //inthis.refresh();
                    location.reload(); //页面重新加载
                }, 1000)
            }
        }
        if (parseInt(inthis.y) == inthis.maxScrollY && inthis.directionY == 1) { //当滚动条的目前位置到达滚动条的最大位置的时候
            if (end) { //如果数据加载完毕后
                $("#scroller_down").html("没有更多数据");
                $("#scroller_down").show();
                if (parseInt(inthis.y) == inthis.maxScrollY) { //当滚动条归为时
                    setTimeout(function() { //延迟加载
                        $("#scroller_down").hide(); //up层隐藏
                        inthis.refresh(); //页面重新加载
                    }, 1000);
                };
            } else { //当数据没有加载完毕
                var lilenght = ($("#list").find("li").length); 
                if (lilenght == max) {
                    end = true;
                    $("#scroller_down").html("没有更多数据");
                    $("#scroller_down").show();
                    if (parseInt(inthis.y) == inthis.maxScrollY) { //当滚动条归为时
                        setTimeout(function() { //延迟加载
                            $("#scroller_down").hide(); //up层隐藏
                            inthis.refresh(); //页面重新加载
                        }, 1000);
                    };
                }else{
                    $("#scroller_down").show();
                    var flag = true;
                    console.log(inthis.y);
                    console.log(inthis.maxScrollY);
                    if (parseInt(inthis.y) == inthis.maxScrollY && inthis.directionY == 1 && flag == true) { //当滚动条归为时
                        setTimeout(function() { //延迟加载
                            $("#scroller_down").hide(); //up层隐藏
                            cartnewlistli ();
                            inthis.refresh(); //页面重新加载
                            inthis.y -= $("#list").find("li:eq(0)").height() * step;//滚动条位置定位
                        }, 1000)
                        flag = false;
                    };
                };
            };
        };
        function cartnewlistli (){
            var lilenght = ($("#list").find("li").length); //获取目前的li的数量
            var diffnum = max - lilenght; //最大个数和总个数的差值
            step = diffnum <= step && diffnum >= 0 ? diffnum : step; //当两个数的差值大于等于0小于等于step的时候，step等于两者之差，否则step不变
            for (var i = 0; i < step; i++) {
                var txtv1="";
                    txtv1 += "<li class=\"clear mg-10 radius-10 bg-white pt-20 pb-15\">";
                    txtv1 += " <div class=\"col-xs-3 pl-20 pr-20\">";
                    txtv1 += "     <img src=\"..\/..\/img\/listreports\/15reportsv1.png\" class=\"full-w\" alt=\"\">";
                    txtv1 += " <\/div>";
                    txtv1 += " <div class=\"col-xs-9 pl-15 pr-0\">";
                    txtv1 += "     <p class=\"f-16 col-5F5F5F f-w pt-10 pb-10\">";
                    txtv1 += "         15分钟快速监测报告";
                    txtv1 += "     <\/p>";
                    txtv1 += "     <p class=\"f-16 col-5F5F5F f-w pt-10 \">";
                    txtv1 += "         2017\/6\/20 18:34:43 <span class=\"col-FF2E24 f-14 pull-right dis-ib mr-20\">未读<\/span>";
                    txtv1 += "     <\/p>";
                    txtv1 += " <\/div>";
                    txtv1 += "<\/li>";
                $("#list").append(txtv1);
            }
        };
    });
});