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
/*滚动部分的高度*/
var wrapperheight = $("body").height() - $("header").height() - $(".select_munu").height();
$("#wrapper").css("height", wrapperheight);
function load() {
    var myScroll = new IScroll("#wrapper", {
        useTransition: true, //是否使用CSS3的Transition属性，否则使用requestAnimationFram代替
        useTransform: true, //是否使用CSS3的Transform属性
        mouseWheel: true, //是否监听鼠标滚轮事件。
        scrollbars: "custom", //只有该属性的值为"custom"，才能通过.iScrollVerticalScrollbar和.iScrollIndicator设置凹槽和滚动条的样式.(是否显示默认滚动条)
        interactiveScrollbars: true, //用户是否可以拖动滚动条
        resizeScrollbars: false, //当这个属性设置为否时,才可以通过.iScrollIndicator改变滚动条(不是凹槽的的宽和高）是否固定滚动条大小，建议自定义滚动条时可开启。  
        probeType: 3 //这个值设置为3而且必须引入iscroll-probe.js才能触发onscroll事件.需要使用iscroll-probe.js才能生效probeType：1.滚动不繁忙的时候触发2.滚动时每隔一定时间触发3.每滚动一像素触发一次
    });




    var list = document.getElementById("list");
    var step = 3; //上拉加载时的动态创建的li的个数
    var max = 30; //li的最大个数
    var flag = false; //滚动条滚动到最底部的标识
    var end = false; //数据加载完成后的标识

    myScroll.on("scroll", function() {
        var inthis = this;


        if (parseInt(inthis.y) >= 0 && inthis.directionY == -1) { //当滚动条到上方是或者判断滚动为负值时加载up层数据
            //up.style.display = "block";
            $("#scroller_up").show(); //up层显示
            if (parseInt(inthis.y) == 0) { //当滚动条归为时
                setTimeout(function() { //延迟加载
                    $("#scroller_up").hide(); //up层隐藏
                    //inthis.refresh();
                    location.reload(); //页面重新加载
                }, 1000)
            }
        }

        if (parseInt(inthis.y) == inthis.maxScrollY) {  //当滚动条的目前位置到达滚动条的最大位置的时候
             if (end) {
                $("#scroller_down").show();
                setTimeout(function() {
                         $("#scroller_down").hide();
                         inthis.refresh();
                     }, 2000)
                 return;
             }  //当页面到达底部没有更多的数据的时候，页面下拉不加载
             //var self = this; 

             setTimeout(function() {
                 $("#scroller_down").show();
                 inthis.y -= $("#list:eq(0)").height() * step;
                 inthis.refresh();
                 flag = true;
                 if ($("#list").children.length == max) {
                     $("#scroller_down").innerHTML = "没有更多数据";
                     flag = false;
                     setTimeout(function() {
                         $("#scroller_down").hide();
                         inthis.refresh(); //为了解决 down.style.display="none";之后最下面有一行空白；
                         end = true;
                     }, 2000)
                 }
             }, 1000);

         }

        if (flag && this.directionY == 1 && this.y < this.maxScrollY) {
             if (end) { 
                 return;
             }
             flag = false;
             $("#scroller_down").hide();
             var fragment = document.createDocumentFragment();
             var len = $("#list").children.length; //每次上拉时动态获取当前li的总个数
             console.log(len);
             var num = max - len; //最大个数和总个数的差值
             step = num <= step && num >= 0 ? num : step; //当两个数的差值大于等于0小于等于step的时候，step等于两者之差，否则step不变
             for (var i = 0; i < step; i++) {
                 var li = document.createElement("li");
                 li.innerHTML = $("#list").children.length + i + 1;
                 fragment.appendChild(li);
             }
             $("#list").appendChild(fragment);
         }

    });
};
window.addEventListener("load", load, false);