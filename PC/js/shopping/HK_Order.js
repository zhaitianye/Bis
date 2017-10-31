$(document).ready(function() {
    /*头部导航下划线*/
    $(".mainnav").find("a").mouseenter(function() {
        $(this).addClass("navbor");
    });
    $(".mainnav").find("a").mouseleave(function() {
        $(this).removeClass("navbor");
    });
    /*头部输入框变化*/
    $(".mainsearch").click(function() {
        event.stopPropagation();
        $(".mainsearchinput").fadeIn();
    });
    $(document).click(function() {
        $('.mainsearchinput').fadeOut();
    });
    
    /*确认订单页面校验部分*/
    $.validator.setDefaults({
        submitHandler: function() {
            alert("提交事件!");
        }
    });
    $().ready(function() {
        // 在键盘按下并释放及提交后验证提交表单
        $(".shippingaddress-add").validate({
            rules: {
                shname: {
                    required: true,
                    minlength: 2
                },
                shphone: {
                    required: true,
                    minlength: 6
                },
                shaddress: "required",
                shemail: {
                    required: true,
                    email: true
                },
            },
            messages: {
                shname: {
                    required: "请输入用户名",
                    minlength: "用户名最少由两个字母组成"
                },
                shphone: {
                    required: "请输入您的手机号码",
                    minlength: "手机号最少由6位组成"
                },
                shaddress: "请输入您的地址",
                shemail: {
                    required: "请输入您的电子邮件",
                    email: "请输入正确的电子邮件地址"
                },
            }
        });
        $(".shippingaddress-revise").validate({
            rules: {
                shname: {
                    required: true,
                    minlength: 2
                },
                shphone: {
                    required: true,
                    minlength: 6
                },
                shaddress: "required",
                shemail: {
                    required: true,
                    email: true
                },
            },
            messages: {
                shname: {
                    required: "请输入用户名",
                    minlength: "用户名最少由两个字母组成"
                },
                shphone: {
                    required: "请输入您的手机号码",
                    minlength: "手机号最少由6位组成"
                },
                shaddress: "请输入您的地址",
                shemail: {
                    required: "请输入您的电子邮件",
                    email: "请输入正确的电子邮件地址"
                },
            }
        });
    });
    /*确认订单页面页面控制部分js*/
    /*确认订单页收货地址*/
    /*页面加载完毕后进行收货地址的初始排序*/
    var conblocklength = $(".conanorder-block").length
    if (conblocklength < 4) {
        $(".conanorder-moreaddress").hide();
    } else {
        $(".conanorder-moreaddress").show();
        for (var i = 3; i < conblocklength; i++) {
            var strtips = " .conanorder-block:eq(" + i + ")";
            $(strtips).hide();
        }
    }
    $(".conanorder-moreaddress").click(function() {
        if (conblocklength < 8) {
            for (var i = 0; i < conblocklength; i++) {
                var strtips = " .conanorder-block:eq(" + i + ")";
                $(strtips).show();
            }
        } else {
            for (var i = 0; i < 7; i++) {
                var strtips = " .conanorder-block:eq(" + i + ")";
                $(strtips).show();
            }
        };
        $(".conanorder-moreaddress").hide();
        $(".conanorder-moreaddresspullup").show();

    });
    $(".conanorder-moreaddresspullup").click(function() {
        for (var i = 3; i < conblocklength; i++) {
            var strtips = " .conanorder-block:eq(" + i + ")";
            $(strtips).hide();
        }
        $(".conanorder-moreaddress").show();
        $(".conanorder-moreaddresspullup").hide();
    });
    /*鼠标移动*/
    $(".conanorder-tips").mouseenter(function() {
        $(this).addClass("bor-col-309DE2");
        $(this).find(".conanorder-tips-alter").show();
        $(this).find(".conanorder-tips-del").show();
    });
    $(".conanorder-tips").mouseleave(function() {
        $(this).removeClass("bor-col-309DE2");
        $(this).addClass("bor-col-7A7A7A");
        $(this).find(".conanorder-tips-alter").hide();
        $(this).find(".conanorder-tips-del").hide();
    });
    $(".conanorder-tipsadd").mouseenter(function() {
        $(this).addClass("bor-col-309DE2");
        $(this).find(".conanorder-tips-add").removeClass("col-B2B2B2");
        $(this).find(".conanorder-tips-add").addClass("col-309DE2");
        $(this).find(".conanorder-tips-addv2").removeClass("bg-eee");
        $(this).find(".conanorder-tips-addv2").addClass("bg-309DE2");
    });
    $(".conanorder-tipsadd").mouseleave(function() {
        $(this).removeClass("bor-col-309DE2");
        $(this).addClass("bor-col-7A7A7A");
        $(this).find(".conanorder-tips-add").addClass("col-B2B2B2");
        $(this).find(".conanorder-tips-add").removeClass("col-309DE2");
        $(this).find(".conanorder-tips-addv2").addClass("bg-eee");
        $(this).find(".conanorder-tips-addv2").removeClass("bg-309DE2");
    });
    $(".conanorder-moreaddress").mouseenter(function() {
        $(this).find("i").removeClass("col-252525");
        $(this).find("i").addClass("col-white");
    });
    $(".conanorder-moreaddress").mouseleave(function() {
        $(this).find("i").addClass("col-252525");
        $(this).find("i").removeClass("col-white");
    });
    $(".conanorder-moreaddresspullup").mouseenter(function() {
        $(this).find("i").removeClass("col-252525");
        $(this).find("i").addClass("col-white");
    });
    $(".conanorder-moreaddresspullup").mouseleave(function() {
        $(this).find("i").addClass("col-252525");
        $(this).find("i").removeClass("col-white");
    });
    /*页面加载完毕后执行初始地址赋值*/
    var cphonelength = $(".conanorder-tips-phone").length
    if (cphonelength > 0) {
        var cfirstname = $(".conanorder-tips-name:eq(0)").text();
        var cfirstphone = $(".conanorder-tips-phone:eq(0)").text();
        var cfirstaddress = $(".conanorder-tips-address:eq(0)").text();
        var cfirstemal = $(".conanorder-tips-emal:eq(0)").val();
        var cfirstabout = $(".conanorder-tips-about:eq(0)").val();
        $(".conanorder-tips-showmsg-name").text(cfirstname);
        $(".conanorder-tips-showmsg-phone").text(cfirstphone);
        $(".conanorder-tips-showmsg-address").text(cfirstaddress);
        $(".conanorder-tips-showmsg-emal").val(cfirstemal);
        $(".conanorder-tips-showmsg-about").val(cfirstabout);
    } else {
        $(".conanorder-tips-showmsg-name").text("请添加收货地址！");
    }
    /*鼠标点击收货地址发生的变化*/
    $(".conanorder-tips").click(function() {
        $(".conanorder-tips").removeClass("bor-col-activate");
        $(this).addClass("bor-col-activate");
        var cname = $(this).find(".conanorder-tips-name").text();
        var cphone = $(this).find(".conanorder-tips-phone").text();
        var caddress = $(this).find(".conanorder-tips-address").text();
        var cemal = $(this).find(".conanorder-tips-emal").val();
        var cabout = $(this).find(".conanorder-tips-about").val();
        $(".conanorder-tips-showmsg-name").text(cname);
        $(".conanorder-tips-showmsg-phone").text(cphone);
        $(".conanorder-tips-showmsg-address").text(caddress);
        $(".conanorder-tips-showmsg-emal").val(cemal);
        $(".conanorder-tips-showmsg-about").val(cabout);
    });
    /*添加收货地址弹出层相关的*/
    $(".show-input-shipping").mouseenter(function() {
        $(this).removeClass("bor-col-B2B2B2");
        $(this).addClass("bor-col-999");
    });
    $(".show-input-shipping").mouseleave(function() {
        $(this).addClass("bor-col-B2B2B2");
        $(this).removeClass("bor-col-999");
    });
    $(".show-input-shipping").focusin(function() {
        var shipplaceholder = $(this).siblings(".show-input-shipping-value").val();
        var thispoint = $(this);
        $(this).addClass("bor-col-309DE2");
        $(this).siblings(".show-div-shipping").addClass("col-309DE2");
        $(this).siblings(".show-div-shipping").animate({ 'top': '-6px', 'font-size': '12px' }, 300);
        setTimeout(function() { thispoint.attr("placeholder", shipplaceholder) }, 300);
    });

    $(".show-input-shipping").focusout(function() {
        var shipinputval = $(this).val();
        if (shipinputval == "" || undefined || null || NaN) {
            $(this).siblings(".show-div-shipping").animate({ 'top': '11px', 'font-size': '14px' }, 300);
        } else {}
        $(this).attr("placeholder", "");
        $(this).removeClass("bor-col-309DE2");
        $(this).siblings(".show-div-shipping").removeClass("col-309DE2");
    });
    /*添加收货地址弹出层*/
    $(".conanorder-tipsadd").click(function() {
        if (conblocklength < 7) {
            $(".show-add-shippingaddress").fadeIn();
            document.documentElement.style.overflow = "hidden";
        } else {
            $(".show-full-shippingaddress").fadeIn();
            document.documentElement.style.overflow = "hidden";
        }
    });
    $(".show-add-shippingaddress").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".show-add-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-add-shippingaddress").fadeOut();
            document.documentElement.style.overflow = "scroll";
        };
    });
    $(".show-full-shippingaddress").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".show-full-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-full-shippingaddress").fadeOut();
            document.documentElement.style.overflow = "scroll";
        };
    });
    /*修改收货地址弹出层*/
    $(".conanorder-tips-alter").click(function() {
        $(".show-revise-shippingaddress").fadeIn();
        var cname = $(this).parent().siblings().find(".conanorder-tips-name").text();
        var cphone = $(this).parent().siblings().find(".conanorder-tips-phone").text();
        var caddress = $(this).parent().siblings().find(".conanorder-tips-address").text();
        var cemal = $(this).parent().siblings(".conanorder-tips-emal").val();
        var cabout = $(this).parent().siblings(".conanorder-tips-about").val();
        $(".inrename").val(cname);
        $(".inrephone").val(cphone);
        $(".inreaddress").val(caddress);
        $(".inreemail").val(cemal);
        $(".inreabout").val(cabout);
        $(".show-revise-shippingaddress").find(".show-div-shipping").animate({ 'top': '-6px', 'font-size': '12px' }, 10);
        document.documentElement.style.overflow = "hidden";
    });
    $(".show-revise-shippingaddress").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".show-revise-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-revise-shippingaddress").fadeOut();
            document.documentElement.style.overflow = "scroll";
        };
    });
    $(".main-order-tips-alter").click(function() {
        $(".show-revise-shippingaddress").fadeIn();
        var cname = $(".conanorder-tips-showmsg-name").text();
        var cphone = $(".conanorder-tips-showmsg-phone").text();
        var caddress = $(".conanorder-tips-showmsg-address").text();
        var cemal = $(".conanorder-tips-showmsg-emal").val();
        var cabout = $(".conanorder-tips-showmsg-about").val();
        $(".inrename").val(cname);
        $(".inrephone").val(cphone);
        $(".inreaddress").val(caddress);
        $(".inreemail").val(cemal);
        $(".inreabout").val(cabout);
        $(".show-revise-shippingaddress").find(".show-div-shipping").animate({ 'top': '-6px', 'font-size': '12px' }, 10);
        document.documentElement.style.overflow = "hidden";
    });
    /*删除收货地址弹出层*/
    $(".conanorder-tips-del").click(function() {
        $(".show-del-shippingaddress").fadeIn();
        var cid = $(this).parent().siblings(".conanorder-tips-id").val();
        $(".is-del-shippingaddress-id").val(cid);
        document.documentElement.style.overflow = "hidden";
    });
    $(".show-del-shippingaddress").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".show-del-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".show-del-shippingaddress").fadeOut();
            document.documentElement.style.overflow = "scroll";
        };
    });
});