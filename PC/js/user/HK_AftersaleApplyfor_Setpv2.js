$(document).ready(function() {
    /*选择取件方式部分*/
    $(".takeaway_box").mouseenter(function() {
        $(this).addClass("bor-col-63AEFFi");
        $(this).find("p").addClass("col-268fffi");
    });
    $(".takeaway_box").mouseleave(function() {
        $(this).removeClass("bor-col-63AEFFi");
        $(this).find("p").removeClass("col-268fffi");
    });
    $(".takeaway_box").click(function() {
        var in_post_repair_val = parseInt($(".in_takeaway").val());
        if (in_post_repair_val==0) {
            $(".takeaway_box").addClass("bor-col-63AEFFiv2");
            $(this).find("p").addClass("col-268fffiv2");
            $(".in_takeaway").val(1);
        }else{
            $(".takeaway_box").removeClass("bor-col-63AEFFiv2");
            $(this).find("p").removeClass("col-268fffiv2");
            $(".in_takeaway").val(0);
        };
    });
    /*收货地址部分相关的*/
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
    /*icheck部分*/
    $(".information_same").iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
      });
    $(".information_same").on('ifChecked', function(event){
        /*选中时*/
        $(".information_same_box").slideUp();
    });
    $(".information_same").on('ifUnchecked', function(event){
        /*未选中时执行赋值操作*/
        var take_good_name_val =  $("#take_good_name").val();
        var take_good_phonenum_val =  $("#take_good_phonenum").val();
        if (take_good_name_val == "" || undefined || null || NaN) {
            $("#visit_good_name").siblings(".show-div-shipping").animate({ 'top': '11px', 'font-size': '14px' }, 0);
        }else{
            $("#visit_good_name").siblings(".show-div-shipping").animate({ 'top': '-6px', 'font-size': '12px' }, 0);
        }
        if (take_good_phonenum_val == "" || undefined || null || NaN) {
            $("#visit_good_phonenum").siblings(".show-div-shipping").animate({ 'top': '11px', 'font-size': '14px' }, 0);
        }else{
            $("#visit_good_phonenum").siblings(".show-div-shipping").animate({ 'top': '-6px', 'font-size': '12px' }, 0);
        }
        $("#visit_good_name").val(take_good_name_val);
        $("#visit_good_phonenum").val(take_good_phonenum_val);
        $(".information_same_box").slideDown();
    });
});