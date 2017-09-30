$(document).ready(function() {
    /*联系人列表页面下拉框样式*/
    $(".linkman-sel").click(function() {
        event.stopPropagation();
        $(".linkman-sellayout").slideToggle(200);
        if ($(".linkman-sel").hasClass("input-pri")) {
            $(".linkman-sel").removeClass("input-pri");
        } else {
            $(".linkman-sel").addClass("input-pri");
        };
    });
    $(".linkman-selimg").click(function() {
        event.stopPropagation();
        $(".linkman-sellayout").slideToggle(200);
        if ($(".linkman-sel").hasClass("input-pri")) {
            $(".linkman-sel").removeClass("input-pri");
        } else {
            $(".linkman-sel").addClass("input-pri");
        };
    });
    $(document).click(function() {
        $('.linkman-sellayout').slideUp(200);
        $(".linkman-sel").removeClass("input-pri");
    });
    /*下拉列表点击时的效果*/
    $(".swiper-wrapper-li").click(function() {
        event.stopPropagation();
        var seltex = $(this).find(".linkmansel-li").text();
        var selval = $(this).find(".linkmansel-lival").val();
        console.log(seltex);
        console.log(selval);
        $(".linkmansel-span").text(seltex);
        $(".linkmansel-val").val(selval);

        $(".swiper-wrapper-ul").find(".linkmansel-li").removeClass("bg-boundmanli-act");
        $(this).find(".linkmansel-li").addClass("bg-boundmanli-act");
        $(".linkman-sellayout").slideUp(200);
        $(".linkman-sel").removeClass("input-pri");
    });
    $(".swiper-wrapper-li").mouseenter(function() {
        $(this).find(".linkmansel-li").addClass("bg-0084c2");
    });
    $(".swiper-wrapper-li").mouseleave(function() {
        $(this).find(".linkmansel-li").removeClass("bg-0084c2");
    });
    /*绑定手机部分js*/
     $.validator.setDefaults({
        submitHandler: function() {
            alert("提交事件!");
        }
    });
    $().ready(function() {
        // 在键盘按下并释放及提交后验证提交表单
        $(".bound-phone-form").validate({
            rules: {
                boundphone: {
                    required: true,
                    minlength: 6
                },
            },
            messages: {
                boundphone: {
                    required: "请输入您的手机号码",
                    minlength: "手机号码不能少于6位"
                },
            }
        });
    });
});
