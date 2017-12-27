$(document).ready(function() {
    /*退换货部分*/
    $(".btn_exchange_v1").mouseenter(function() {
        $(this).addClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_exchange_v1").mouseleave(function() {
        $(this).removeClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_exchange_v2").mouseenter(function() {
        $(this).addClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_exchange_v2").mouseleave(function() {
        $(this).removeClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_exchange_v1").click(function() {
        $(".btn_exchange_v2").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_exchange").val(1);
    });
    $(".btn_exchange_v2").click(function() {
        $(".btn_exchange_v1").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_exchange").val(2);
    });
    /*产品问题类型部分*/
    $(".btn_issue").mouseenter(function() {
        $(this).addClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_issue").mouseleave(function() {
        $(this).removeClass("bor-col-63AEFFi col-268fffi");
    });
    $(".btn_issue_v1").click(function() {
        $(".btn_issue").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_issue").val(1);
        $(".btn_issue_v4_show").slideUp();
    });
    $(".btn_issue_v2").click(function() {
        $(".btn_issue").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_issue").val(2);
        $(".btn_issue_v4_show").slideUp();
    });
    $(".btn_issue_v3").click(function() {
        $(".btn_issue").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_issue").val(3);
        $(".btn_issue_v4_show").slideUp();
    });
    $(".btn_issue_v4").click(function() {
        $(".btn_issue").removeClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(this).addClass("bor-col-63AEFFiv2 col-268fffiv2");
        $(".in_issue").val(4);
        $(".btn_issue_v4_show").slideDown();
    });
    $(".btn_issue_v4_show_textarea").keyup(function() {
        var text_val = $(".btn_issue_v4_show_textarea").val();
        $(".in_issue_v4_text").val(text_val);
    });
    $("#issue_file_in_v1").change(function() {
        /*判断浏览器是否支持FileReader*/
        if (typeof FileReader == "undefined") {
            var img_url = getFileUrl(this.id);
            $(".issue_img_sel_v1").hide();
            $(".issue_img_sel_show_v1").attr("src",img_url);
            $(".issue_img_sel_show_v1").show();
        } else {
            /*判断大小和类型*/
            var files = this.files;
            var file_0 = files[0];
            var isAllow = false;
            var maxSize = 3*1024*1024;
            if (file_0 == undefined) {
                return false; 
            }else{
                isAllow = file_0.size < maxSize;
                if (isAllow) {
                    if(!/image\/\w+/.test(file_0.type)){ 
                        layer.alert('请确保文件为图像类型');
                        return false; 
                    };
                    var reader = new FileReader(); 
                    reader.readAsDataURL(file_0); 
                    reader.onload = function(e){      
                        var urlsrc = this.result;
                        $(".issue_img_sel_v1").hide();
                        $('.issue_img_sel_show_v1').attr('src', urlsrc);
                        $(".issue_img_sel_show_v1").show();
                    };
                }else{
                    layer.alert('请确保文件大小小于3M');
                    return false; 
                };
            };
            
        };
    });
    $("#issue_file_in_v2").change(function() {
        /*判断浏览器是否支持FileReader*/
        if (typeof FileReader == "undefined") {
            var img_url = getFileUrl(this.id);
            $(".issue_img_sel_v2").hide();
            $(".issue_img_sel_show_v2").attr("src",img_url);
            $(".issue_img_sel_show_v2").show();
        } else {
            /*判断大小和类型*/
            var files = this.files;
            var file_0 = files[0];
            var isAllow = false;
            var maxSize = 3*1024*1024;
            if (file_0 == undefined) {
                return false; 
            }else{
                isAllow = file_0.size < maxSize;
                if (isAllow) {
                    if(!/image\/\w+/.test(file_0.type)){ 
                        layer.alert('请确保文件为图像类型');
                        return false; 
                    };
                    var reader = new FileReader(); 
                    reader.readAsDataURL(file_0); 
                    reader.onload = function(e){      
                        var urlsrc = this.result;
                        $(".issue_img_sel_v2").hide();
                        $('.issue_img_sel_show_v2').attr('src', urlsrc);
                        $(".issue_img_sel_show_v2").show();
                    };
                }else{
                    layer.alert('请确保文件大小小于3M');
                    return false; 
                };
            };
        };
    });
    $("#issue_file_in_v3").change(function() {
        /*判断浏览器是否支持FileReader*/
        if (typeof FileReader == "undefined") {
            var img_url = getFileUrl(this.id);
            $(".issue_img_sel_v3").hide();
            $(".issue_img_sel_show_v3").attr("src",img_url);
            $(".issue_img_sel_show_v3").show();
        } else {
            /*判断大小和类型*/
            var files = this.files;
            var file_0 = files[0];
            var isAllow = false;
            var maxSize = 3*1024*1024;
            if (file_0 == undefined) {
                return false; 
            }else{
                isAllow = file_0.size < maxSize;
                if (isAllow) {
                    if(!/image\/\w+/.test(file_0.type)){ 
                        layer.alert('请确保文件为图像类型');
                        return false; 
                    };
                    var reader = new FileReader(); 
                    reader.readAsDataURL(file_0); 
                    reader.onload = function(e){      
                        var urlsrc = this.result;
                        $(".issue_img_sel_v3").hide();
                        $('.issue_img_sel_show_v3').attr('src', urlsrc);
                        $(".issue_img_sel_show_v3").show();
                    };
                }else{
                    layer.alert('请确保文件大小小于3M');
                    return false; 
                };
            };
            
        };
    });  
    function getFileUrl(sourceId) {
        /*获取本地图片url */
        var url;
        if (navigator.userAgent.indexOf("MSIE") >= 1) { // IE 
            url = document.getElementById(sourceId).value;
        } else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox 
            url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
        } else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome 
            url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
        }
        return url;
    };
    /*寄修部分*/
    $(".post_repair_box").mouseenter(function() {
        $(this).addClass("bor-col-63AEFFi");
        $(this).find("p").addClass("col-268fffi");
    });
    $(".post_repair_box").mouseleave(function() {
        $(this).removeClass("bor-col-63AEFFi");
        $(this).find("p").removeClass("col-268fffi");
    });
    $(".post_repair_box").click(function() {
        var in_post_repair_val = parseInt($(".in_post_repair").val());
        if (in_post_repair_val==0) {
            $(".post_repair_box").addClass("bor-col-63AEFFiv2");
            $(this).find("p").addClass("col-268fffiv2");
            $(".in_post_repair").val(1);
        }else{
            $(".post_repair_box").removeClass("bor-col-63AEFFiv2");
            $(this).find("p").removeClass("col-268fffiv2");
            $(".in_post_repair").val(0);
        };
    });
});