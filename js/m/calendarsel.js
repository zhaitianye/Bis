/*日历筛选部分的js*/
$(document).ready(function() {
    var nstr = new Date(); //获取当前时间Mon Aug 21 2017 09:25:26 GMT+0800 (中国标准时间)
    var ynow = nstr.getFullYear(); //获取当前年份 2017
    var mnow = nstr.getMonth(); //获取当前月份 7 （0-11）
    var dnow = nstr.getDate(); //获取当前天数 21

    var mnow_real = mnow; //把值赋给真实月份
    calendar(nstr, ynow, mnow, dnow); //把当前时间，年月日作为参数传入calendar函数里，调用此函数
    monDetail(ynow, mnow_real); //把年，和真实月份传入monDetail函数里，调用此函数



    function monDetail(ynow, mnow) {
        mnow_real = mnow + 1;
        $(".month-detail").html(ynow + "-" + mnow_real); //显示当前年月
    }



    function is_leap(year) { //判断是否为闰年瑞年为1，不是瑞年为0
        return (year % 100 == 0 ? res = (year % 400 == 0 ? 1 : 0) : res = (year % 4 == 0 ? 1 : 0));
    }

    /*上一个月下一个月按钮*/
    $(".preMonthbtn").click(function() {
        preMonth();
    });
    $(".nextMonthbtn").click(function() {
        nextMonth();
    });

    function preMonth() { //上一个月
        if (mnow <= 0) {
            mnow = 11;
            ynow = ynow - 1;
        } else {
            mnow--;
        }
        calendar(nstr, ynow, mnow, dnow);
        monDetail(ynow, mnow);

    };

    function nextMonth() { //下一个月

        if (mnow >= 11) {
            mnow = 0;
            ynow = ynow + 1;
        } else {
            mnow++;
        }
        calendar(nstr, ynow, mnow, dnow);
        monDetail(ynow, mnow);
    };


    function calendar(nstr, ynow, mnow, dnow) {
        $(".maindate-box").children().remove(); //改变月份时，先移除旧的日期

        var nlstr = new Date(ynow, mnow, 1); //当月第一天
        var firstday = nlstr.getDay(); //第一天星期几

        var m_days = new Array(31, 28 + is_leap(ynow), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); //每个月的天数

        var tr_str = Math.ceil((m_days[mnow] + firstday) / 7); //当前月天数+第一天是星期几的数值 获得 表格行数
        var i, k, idx, date_str;
        for (i = 0; i < tr_str; i++) { //表格的行
            $(".maindate-box").append("<div class='clear full-w bg-white mb-5 pt-10 pb-10'><div class='clear mg-0-auto w-350-245 date'>");
            for (k = 0; k < 7; k++) { //表格每行的单元格

                idx = i * 7 + k; //单元格自然序列号

                date_str = idx - firstday + 1; //计算日期

                (date_str <= 0 || date_str > m_days[mnow]) ? date_str = " ": date_str = idx - firstday + 1; //过滤无效日期（小于等于零的、大于月总天数的）
                date_str_append = "<span class='img-25-30-mlr dis-ib pull-left text-center col-363634 day_" + date_str + " f-w'>" + date_str + "</span>"; //标签序列化，加上类名
                $(".date").last().append(date_str_append); //添加日期元素
            }
            $(".maindate-box").last().append("</div></div>"); //闭合
        };

        /*选中状态后添加黑色框线*/
        $(".date *").not(".day_").click(function() {
            $(".date").find(".select-day").removeClass("select-day");
            $(this).addClass("select-day");
        });
        /*当前天加状态*/
        var year_today = nstr.getFullYear(); //获取当前年份 2017
        var month_today = nstr.getMonth(); //获取当前月份 7 （0-11）
        var d_today = nstr.getDate(); //获取当前天数 21
        var sel_today = ".day_" + d_today;

        if (ynow == year_today && mnow == month_today) { //判断是否为当前月
            $(sel_today).addClass("now-today");
        } else {

        };
    };

    /*例子*/
    $(".day_15").addClass("unread-report");
    $(".day_10").addClass("read-report");

});