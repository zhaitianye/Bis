$(document).ready(function() {
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
    /*收货地址鼠标移入移出*/
    $(".address-tips").mouseenter(function() {
    	$(this).find(".address-tips-in").addClass("bor-col-309DE2");
    	$(this).find(".address-tips-edit").show();

    });
    $(".address-tips").mouseleave(function() {
        $(this).find(".address-tips-in").removeClass("bor-col-309DE2");
        $(this).find(".address-tips-edit").hide();
    });
    $(".address-tipsv2").mouseenter(function() {
    	$(this).find(".address-tipsv2-in").addClass("bor-col-309DE2");
    	$(this).find(".address-tipsv2-circle").addClass("bg-309DE2i");
    	$(this).find(".address-tipsv2-text").addClass("col-555i");

    });
    $(".address-tipsv2").mouseleave(function() {
    	$(this).find(".address-tipsv2-in").removeClass("bor-col-309DE2");
        $(this).find(".address-tipsv2-circle").removeClass("bg-309DE2i");
        $(this).find(".address-tipsv2-text").removeClass("col-555i");
    });
    /*总数控制*/
    var conblocklength = $(".address-tips").length;
    if (conblocklength < 7) {
    } else {
    	/*总数大于七个隐藏其他*/
        for (var i = 7; i < conblocklength; i++) {
            var strtips = " .address-tips:eq(" + i + ")";
            $(strtips).hide();
        }
    };
    /*添加收货地址弹出层*/
    $(".add-address-control").click(function() {
    	if (conblocklength < 7) {
    		$(".show-add-shippingaddress").fadeIn();
	    } else {
	    	$(".show-full-shippingaddress").fadeIn();
	    };
        document.documentElement.style.overflow = "hidden";
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
    $(".address-tips-edit").click(function() {
        $(".show-revise-shippingaddress").fadeIn();

        var cname = $(this).siblings(".add-name").val();
        var cphone = $(this).siblings(".add-phone").val();
		var carea = $(this).siblings(".add-area").val();
        var caddress = $(this).siblings(".add-address").val();
        var cemal = $(this).siblings(".add-email").val();

        console.log(cname + cphone + caddress + cemal + carea);

        $(".inrename").val(cname);
        $(".inrephone").val(cphone);
        $(".inreemail").val(cemal);
		$(".inrearea").val(carea);
        $(".inreaddress").val(caddress);
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
});

