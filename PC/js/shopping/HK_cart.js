$(document).ready(function() {
    /*购物车页面的商品单品价格相关的计算*/
    $(".cart-add").click(function() {
        var t = $(this).siblings(".cart-textbox");
        var pri = $(this).siblings(".cart-price");
        var tot = $(this).parent().parent().next().find(".cart-total");
        if (t.val() == "" || undefined || null) {
            t.val(0);
        }
        t.val(parseInt(t.val()) + 1)
        setTotal(t, pri, tot);
    })
    $(".cart-min").click(function() {
        var t = $(this).siblings(".cart-textbox");
        var pri = $(this).siblings(".cart-price");
        var tot = $(this).parent().parent().next().find(".cart-total");
        if (t.val() == "" || undefined || null) {
            t.val(0);
        }
        t.val(parseInt(t.val()) - 1)
        if (t.val() < "0") {
            t.val(0);
        }
        setTotal(t, pri, tot);
    })
    $(".cart-textbox").keyup(function() {
        var t = $(this);
        var pri = $(this).siblings(".cart-price");
        var tot = $(this).parent().parent().next().find(".cart-total");
        if (parseInt(t.val()) == "" || undefined || null || isNaN(t.val())) {
            t.val(0);
        }
        setTotal(t, pri, tot);
    })

    function setTotal(t, pri, tot) {
        var num = t.val();
        if (parseInt(num) == "" || undefined || null) {
            num = 0;
        }
        var p = pri.val();
        var s = parseInt(num) * parseFloat(p);
        if (s == undefined || null || isNaN(parseInt(s))) {
            s = 0;
        }
        $(tot).html(s.toFixed(0));
        countalltips();
    }
    /*购物车页面的删除物品的弹出层*/
    $(".car-tipsdel").click(function() {
        var cid = $(this).parent().parent().find(".cart-tips-id").val();
        $(".show-carisdelid").val(cid);
        $(".show-carisdel").show();
    });
    $(".show-carisdel").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".carisdel-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-carisdel").hide();
        };
    });
    /*购物车页面的复选框*/
    $(".car-checkall").click(function() {
        var ischecked = $(this).hasClass("is-checkall");
        var carkindslength = $(".car-kinds").length;
        if (ischecked) {
            for (var i = 0; i < carkindslength; i++) {
                carkindsstr = ".car-kinds:eq(" + i + ")";
                var strisstopcheck = $(carkindsstr).hasClass("stop-check");
                if (strisstopcheck) {

                } else {
                    $(carkindsstr).removeClass("is-checkbox");
                    $(carkindsstr).find(".car-checktips").removeClass("is-check");
                    $(carkindsstr).find(".car-checktips").removeClass("bg-activate");
                }
            }
            $(".car-checkall").removeClass("is-checkall");
            $(".car-checkall").removeClass("bg-activate");
        } else {
            for (var i = 0; i < carkindslength; i++) {
                carkindsstr = ".car-kinds:eq(" + i + ")";
                var strisstopcheck = $(carkindsstr).hasClass("stop-check");
                if (strisstopcheck) {

                } else {
                    $(carkindsstr).addClass("is-checkbox");
                    $(carkindsstr).find(".car-checktips").addClass("is-check");
                    $(carkindsstr).find(".car-checktips").addClass("bg-activate");
                }
            }
            $(".car-checkall").addClass("is-checkall");
            $(".car-checkall").addClass("bg-activate");
        }
        countalltips();
    });
    $(".car-checktips").click(function() {
        var thischecktips = $(this);
        var ischeckedtips = $(this).hasClass("is-check");

        if (ischeckedtips) {
            thischecktips.removeClass("is-check");
            $(".car-checkall").removeClass("is-checkall");
            $(".car-checkall").removeClass("bg-activate");
            thischecktips.removeClass("bg-activate");
            thischecktips.parent().parent().parent().removeClass("is-checkbox");
        } else {
            thischecktips.addClass("is-check");
            thischecktips.addClass("bg-activate");
            thischecktips.parent().parent().parent().addClass("is-checkbox");
            var carkindslength = $(".car-kinds").length;

            function isallture() {

                for (var i = 0; i < carkindslength; i++) {
                    carkindsstr = ".car-kinds:eq(" + i + ")";
                    var strisstopcheck = $(carkindsstr).hasClass("stop-check");
                    if (strisstopcheck) {} else {
                        var truele = $(carkindsstr).hasClass("is-checkbox");
                        if (truele) {} else {
                            return false;
                        }
                    }
                }
                return true;
            }
            if (isallture()) {
                $(".car-checkall").addClass("is-checkall");
                $(".car-checkall").addClass("bg-activate");
            } else {}
        }
        countalltips();
    });
    /*购物车页面计算总计和总件数等数据的函数*/
    countalltips(); //页面加载完毕进行调用一次计算总价
    function countalltips() {
        var allcheckbox = $(".is-checkbox").length;
        var allnumofcase = 0;
        var allnumoftotprices = 0;
        var combtextboxval = 0;
        for (var i = 0; i < allcheckbox; i++) {
            var carttextboxtips = ".is-checkbox:eq(" + i + ")";
            var hasstopcheck = $(carttextboxtips).hasClass("stop-check");
            if (hasstopcheck) {} else {
                combtextboxval = $(carttextboxtips).find(".cart-combo-textbox").val();
                textboxval = $(carttextboxtips).find(".cart-textbox").val();
                if (textboxval == "" || isNaN(textboxval)) {
                    textboxval = 0;
                }
                if (combtextboxval == "" || isNaN(combtextboxval)) {
                    combtextboxval = 0;
                }
                allnumofcase = parseInt(combtextboxval) + parseInt(allnumofcase) + parseInt(textboxval);
                allnumoftotprices += parseInt($(carttextboxtips).find(".cart-total").text());
            }
        }
        $(".tot-num-of-kinds").text(allcheckbox);
        $(".tot-num-of-goods").text(allnumofcase);
        $(".tot-num-of-totprice").text(allnumoftotprices.toFixed(2));
    }
    /*购物车套餐商品的价格计算以及其他部分*/
    $(".cart-combo-add").click(function() {
        var t = $(this).siblings(".cart-combo-textbox");
        var pri = $(this).siblings(".cart-price");
        var tot = $(this).parent().parent().next().find(".cart-total");
        if (t.val() == "" || undefined || null) {
            t.val(0);
        }
        t.val(parseInt(t.val()) + 1)
        setcomboTotal(t, pri, tot);
    })
    $(".cart-combo-min").click(function() {
        var t = $(this).siblings(".cart-combo-textbox");
        var pri = $(this).siblings(".cart-price");
        var tot = $(this).parent().parent().next().find(".cart-total");
        if (t.val() == "" || undefined || null) {
            t.val(0);
        }
        t.val(parseInt(t.val()) - 1)
        if (t.val() < "0") {
            t.val(0);
        }
        setcomboTotal(t, pri, tot);
    })
    $(".cart-combo-textbox").keyup(function() {
        var t = $(this);
        var pri = $(this).siblings(".cart-price");
        var tot = $(this).parent().parent().next().find(".cart-total");
        if (parseInt(t.val()) == '' || undefined || null || isNaN(t.val())) {
            t.val(0);
        }
        setcomboTotal(t, pri, tot);
    })

    function setcomboTotal(t, pri, tot) {
        var num = t.val(); //传入的input的数量
        if (num == "") {
            num = 0;
        }
        var combotips = t.parent().parent().parent().siblings(".car-combo-tips"); //套餐地址
        for (var i = 0; i < combotips.length; i++) {
            var combotipsstr = t.parent().parent().parent().siblings(".car-combo-tips:eq(" + i + ")"); //获取单独的套餐地址
            combotipsstr.find(".car-combo-tips-numcase").text(num); //给套餐内的数量赋值
            var compri = combotipsstr.find(".car-combo-tips-unp").text(); //取出单价
            combotipsstr.find(".car-combo-tips-tot").text(parseInt(num) * parseFloat(compri)); //总价赋值
        }
        var p = pri.val();
        var s = parseInt(num) * parseFloat(p);
        if (s == undefined || null || isNaN(parseInt(s))) {
            s = 0;
        }
        $(tot).html(s.toFixed(0));
        countalltips();
    }
    /*购物车服务部分的隐藏和显示*/
    /*服务一*/
    $(".car-servecontrolv1-add").click(function() {
        $(".servecontrolv1").hide();
        $(".servestipsv1").show();
        $(".servestipsv1").removeClass("stop-check");
        $(".servestipsv1").addClass("is-checkbox");
        countalltips();
    });
    $(".car-delbtn-servesv1").click(function() {
        $(".show-carservesv1").show();
    });
    $(".show-carservesv1").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".carservesv1-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-carservesv1").hide();
        };
    });
    $(".car-suredel-servesv1").click(function() {
        $(".show-carservesv1").hide();
        $(".servestipsv1").hide();
        $(".servestipsv1").addClass("stop-check");
        $(".servestipsv1").removeClass("is-checkbox");
        $(".servecontrolv1").show();
        countalltips();
    });
    /*服务二*/
    $(".car-servecontrolv2-add").click(function() {
        $(".servecontrolv2").hide();
        $(".servestipsv2").show();
        $(".servestipsv2").removeClass("stop-check");
        $(".servestipsv2").addClass("is-checkbox");
        countalltips();
    });
    $(".car-delbtn-servesv2").click(function() {
        $(".show-carservesv2").show();
    });
    $(".show-carservesv2").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".carservesv2-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-carservesv2").hide();
        };
    });
    $(".car-suredel-servesv2").click(function() {
        $(".show-carservesv2").hide();
        $(".servestipsv2").hide();
        $(".servestipsv2").addClass("stop-check");
        $(".servestipsv2").removeClass("is-checkbox");
        $(".servecontrolv2").show();
        countalltips();
    });
    /*服务三*/
    $(".car-servecontrolv3-add").click(function() {
        $(".servecontrolv3").hide();
        $(".servestipsv3").show();
        $(".servestipsv3").removeClass("stop-check");
        $(".servestipsv3").addClass("is-checkbox");
        countalltips();
    });
    $(".car-delbtn-servesv3").click(function() {
        $(".show-carservesv3").show();
    });
    $(".show-carservesv3").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".carservesv3-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-carservesv3").hide();
        };
    });
    $(".car-suredel-servesv3").click(function() {
        $(".show-carservesv3").hide();
        $(".servestipsv3").hide();
        $(".servestipsv3").addClass("stop-check");
        $(".servestipsv3").removeClass("is-checkbox");
        $(".servecontrolv3").show();
        countalltips();
    });
    /*购物车页面提交封装*/
    $(".HK-cartsubmit").click(function() {
        /*定义一个json数组*/
        var cartsubmitjson = {records: []};
        /*套餐部分的id数量遍历出来推入json*/
        var carcombokindslength = $(".car-combo").find(".car-kinds").length;
        for (var i = 0; i < carcombokindslength; i++) {
            var carcombokindsstr = ".car-kinds:eq("+i+")";
            var carcombokinds = $(".car-combo").find(carcombokindsstr);
            if (carcombokinds.hasClass("stop-check")) {
                console.log(111);
            }else{
                console.log(222);
            }


            var cartcombokindsid = carcombokinds.find(".cart-tips-id").val();
            var cartcombokindsnum = carcombokinds.find(".cart-combo-textbox").val();
            var row = {};
            row.cartid = cartcombokindsid;
            row.cartnum = cartcombokindsnum;
            cartsubmitjson.records.push(row);
        }
        /*单品部分的id数量遍历出来推入json*/
        //console.log(cartsubmitjson);
        //console.log(xxx);
    });


});