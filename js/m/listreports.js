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
            $(".sel-rank-show").slideUp(300);
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
            $(".sel-class-show").slideUp(300);
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
$("#mescroll").css("height", wrapperheight);
$(document).ready(function() {
    $(function() {
        //创建MeScroll对象,内部已默认开启下拉刷新,自动执行up.callback,重置列表数据;
        var mescroll = new MeScroll("mescroll", {
            up: {
                page: { size: 3 }, //每次加载1条数据,模拟loadFull
                loadFull: {
                    use: true, //列表数据过少,不足以滑动触发上拉加载,是否自动加载下一页,直到满屏或者无更多数据为止;默认false,因为可通过调高page.size避免这个情况
                    delay: 500 //延时执行的毫秒数; 延时是为了保证列表数据或占位的图片都已初始化完成,且下拉刷新上拉加载中区域动画已执行完毕;
                },
                clearEmptyId: "dataList", //1.下拉刷新时会自动先清空此列表,再加入数据; 2.无任何数据时会在此列表自动提示空
                callback: getListData, //上拉回调,此处可简写; 相当于 callback: function (page) { getListData(page); }
            }
        });

        /*联网加载列表数据  page = {num:1, size:10}; num:当前页 从1开始, size:每页数据条数 */
        function getListData(page) {
            //联网加载数据
            console.log("page.num==" + page.num);
            getListDataFromNet(page.num, page.size, function(data) {
                //联网成功的回调,隐藏下拉刷新和上拉加载的状态;
                mescroll.endSuccess(data.length); //传参:数据的总数; mescroll会自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
                //设置列表数据,因为配置了emptyClearId,第一页会清空dataList的数据,所以setListData应该写在最后;
                setListData(data);
            }, function() {
                //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                mescroll.endErr();
            });
        }

        /*设置列表数据*/
        function setListData(data) {
            var listDom = document.getElementById("dataList");
            for (var i = 0; i < data.length; i++) {
                var pd = data[i];

                var str="";
                    str += "<li class=\"clear mg-10 radius-10 bg-white pt-20 pb-15\">";
                    str += "    <div class=\"col-xs-3 pl-20 pr-20\">";
                    str += "        <img src=\""+ pd.pdImg +"\" class=\"full-w\" alt=\"\">";
                    str += "    <\/div>";
                    str += "    <div class=\"col-xs-9 pl-15 pr-0\">";
                    str += "        <p class=\"f-16 col-5F5F5F f-w pt-10 pb-10\">";
                    str += "            " + pd.pdName + "";
                    str += "        <\/p>";
                    str += "        <p class=\"f-16 col-5F5F5F f-w pt-10 \">";
                    str += "            "+ pd.pdTime +" <span class=\""+ pd.pdCol +" f-14 pull-right dis-ib mr-20\">"+ pd.pdstate +"<\/span>";
                    str += "        <\/p>";
                    str += "    <\/div>";
                    str += "<\/li>";
                var liDom = document.createElement("li");
                liDom.innerHTML = str;
                listDom.appendChild(liDom);
            }
        }
        /*联网加载列表数据*/
        function getListDataFromNet(pageNum, pageSize, successCallback, errorCallback) {
            //延时一秒,模拟联网
            setTimeout(function() {
                //                  $.ajax({
                //                      type: 'GET',
                //                      url: 'xxx',
                //                      url: 'xxx?num='+pageNum+"&size="+pageSize,
                //                      dataType: 'json',
                //                      success: function(data){
                var data = pdlist1; // 模拟数据: ../res/pdlist1.js
                //模拟分页数据
                var listData = [];
                for (var i = (pageNum - 1) * pageSize; i < pageNum * pageSize; i++) {
                    if (i == data.length) break;
                    listData.push(data[i]);
                }
                successCallback(listData);
                //                      },
                //                      error: errorCallback
                //                  });
            }, 500)
        }

        //禁止PC浏览器拖拽图片,避免与下拉刷新冲突;如果仅在移动端使用,可删除此代码
        document.ondragstart = function() { return false; }
    });
});