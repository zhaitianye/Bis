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

        //console.log(t.siblings(".cart-tips-id").val());
        //console.log(t.val());
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

        //console.log(t.siblings(".cart-tips-id").val());
        //console.log(t.val());
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
    countsingletips();//页面加载完毕后进行一次每个商品的总价的计算
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
        if (allnumoftotprices == undefined || null || isNaN(parseInt(allnumoftotprices))) {
            allnumoftotprices = 0;
        }
        $(".tot-num-of-kinds").text(allcheckbox);
        $(".tot-num-of-goods").text(allnumofcase);
        $(".tot-num-of-totprice").text(allnumoftotprices.toFixed(2));
    }
    function countsingletips(){
        /*套餐部分*/
        var combotipslength = $(".car-combo").find(".car-kinds").length;
        for (var i = 0; i < combotipslength; i++) {
            var combotipsstr = ".car-kinds:eq(" + i + ")";
            var comboprice = $(".car-combo").find(combotipsstr).find(".cart-price").val();
            var combonum = $(".car-combo").find(combotipsstr).find(".cart-combo-textbox").val();
            $(".car-combo").find(combotipsstr).find(".cart-price-show").text(comboprice);
            $(".car-combo").find(combotipsstr).find(".cart-total").text(combonum*comboprice);
            var combotipslengthv = $(".car-combo").find(combotipsstr).siblings(".car-combo-tips").length;
            for (var j = 0; j < combotipslengthv; j++) {
                var carcombotipsstr = ".car-combo-tips:eq(" + j + ")";
                var comboprice = $(".car-combo").find(combotipsstr).siblings(carcombotipsstr).find(".car-combo-tips-unp").text();
                $(".car-combo").find(combotipsstr).siblings(carcombotipsstr).find(".car-combo-tips-numcase").text(combonum);
                $(".car-combo").find(combotipsstr).siblings(carcombotipsstr).find(".car-combo-tips-tot").text(comboprice*combonum);
            };
        };
        /*单品部分*/
        var singletipslength = $(".car-single").find(".car-kinds").length;
        for (var i = 0; i < singletipslength; i++) {
            var singletipsstr = ".car-kinds:eq(" + i + ")";
            var singleprice = $(".car-single").find(singletipsstr).find(".cart-price").val();
            var singlenum = $(".car-single").find(singletipsstr).find(".cart-textbox").val();
            $(".car-single").find(singletipsstr).find(".cart-price-show").text(singleprice);
            $(".car-single").find(singletipsstr).find(".cart-total").text(singleprice*singlenum);
        };
    };
    /*购物车页面提交封装*/
    $(".HK-cartsubmit").click(function() {
        /*定义一个json数组*/
        var cartsubmitjson = { records: [] };
        /*套餐部分的id数量遍历出来推入json*/
        var carcombokindslength = $(".car-combo").find(".car-kinds").length;
        for (var i = 0; i < carcombokindslength; i++) {
            var carcombokindsstr = ".car-kinds:eq(" + i + ")";
            var carcombokinds = $(".car-combo").find(carcombokindsstr);
            if (carcombokinds.hasClass("stop-check")) {

            } else {
                if (carcombokinds.hasClass("is-checkbox")) {
                    var cartcombokindsid = carcombokinds.find(".cart-tips-id").val();
                    var cartcombokindsnum = carcombokinds.find(".cart-combo-textbox").val();
                    var cartcombokindimg = carcombokinds.find(".cart-maintips-img").attr("src");
                    var cartcombokinddir = carcombokinds.find(".cart-maintips-dir").text();
                    var cartcombokindprice = carcombokinds.find(".cart-price").val();
                    var row = {};
                    row.cartid = cartcombokindsid;
                    row.cartnum = cartcombokindsnum;
                    row.cartkind = 1;
                    row.cartimg = cartcombokindimg;
                    row.cartdir = cartcombokinddir;
                    row.cartprice = cartcombokindprice;
                    cartsubmitjson.records.push(row);
                } else {};
            };
        };
        /*单品部分的id数量遍历出来推入json*/
        var carsinglekindslength = $(".car-single").find(".car-kinds").length;
        for (var i = 0; i < carsinglekindslength; i++) {
            var carsinglekindsstr = ".car-kinds:eq(" + i + ")";
            var carsinglekinds = $(".car-single").find(carsinglekindsstr);
            if (carsinglekinds.hasClass("stop-check")) {} else {
                if (carsinglekinds.hasClass("is-checkbox")) {
                    var cartsinglekindsid = carsinglekinds.find(".cart-tips-id").val();
                    var cartsinglekindsnum = carsinglekinds.find(".cart-textbox").val();
                    var cartsinglekindimg = carsinglekinds.find(".cart-maintips-img").attr("src");
                    var cartsinglekinddir = carsinglekinds.find(".cart-maintips-dir").text();
                    var cartsinglekindprice = carsinglekinds.find(".cart-price").val();
                    var row = {};
                    row.cartid = cartsinglekindsid;
                    row.cartnum = cartsinglekindsnum;
                    row.cartkind = 0;
                    row.cartimg = cartsinglekindimg;
                    row.cartdir = cartsinglekinddir;
                    row.cartprice = cartsinglekindprice;
                    cartsubmitjson.records.push(row);
                } else {};
            };
        };
        /*获取了全部的可选并选中的id，数量。封装在一个json里。在下面进行其他操作*/
        var JSONcartsubmit = JSON.stringify(cartsubmitjson);
        $(".HK-cartsubmitinput").val(JSONcartsubmit);
        console.log(JSONcartsubmit);
        window.location.href='HK_Order.html';
    });
    /*当页面加载完毕之后，判断有没有购买悉心平安服务进行的一系列操作*/
    charfuwuisbuy();
    function charfuwuisbuy(){
        var cartservecidv1 = $(".servecontrolv1").find(".cart-serve-cid").val();
        var cartservecidv2 = $(".servecontrolv2").find(".cart-serve-cid").val();
        var cartservecidv3 = $(".servecontrolv3").find(".cart-serve-cid").val();
        /*套餐部分判断*/
        var combotipslength = $(".car-combo").find(".car-kinds").length;
        for (var i = 0; i < combotipslength; i++) {
            var combotipsstr = ".car-kinds:eq(" + i + ")";
            var combocid = $(".car-combo").find(combotipsstr).find(".cart-tips-id").val();
            if (cartservecidv1 == combocid) {
                $(".servecontrolv1").hide();
            }else if (cartservecidv2 == combocid) {
                $(".servecontrolv2").hide();
            }else if (cartservecidv3 == combocid) {
                $(".servecontrolv3").hide();
            }else{
            }
        };
        /*单品部分判断*/
        var singletipslength = $(".car-single").find(".car-kinds").length;
        for (var i = 0; i < singletipslength; i++) {
            var singletipsstr = ".car-kinds:eq(" + i + ")";
            var singlecid = $(".car-single").find(singletipsstr).find(".cart-tips-id").val();
            if (cartservecidv1 == singlecid) {
                $(".servecontrolv1").hide();
            }else if (cartservecidv2 == singlecid) {
                $(".servecontrolv2").hide();
            }else if (cartservecidv3 == singlecid) {
                $(".servecontrolv3").hide();
            }else{
            }
        };
        /*购物车为空的时候的判断*/
        var isemptycart = parseInt($(".is-emptycart-control").val());
        if (isemptycart == 0 ) {
            $(".is-emptycart-side").show();
        }
    };
});