$(document).ready(function() {
    /*选择头像的弹出层*/
    $(".set-heads").click(function() {
        $(".show-selhead").show();
        $(".selhead-content").removeClass("ani-selhead-logoout");
        $(".selhead-content").addClass("ani-selhead-logoin");
    });
    $(".show-selhead").on("click", function(event) {
        event.stopPropagation();
        var target = event.target;
        if (!$(target).closest(".selhead-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
            $(".selhead-content").removeClass("ani-selhead-logoin");
            $(".selhead-content").addClass("ani-selhead-logoout");
            $(".show-selhead").fadeOut();
        };
    });
    /*选择头像部分图像操作部分js*/
    cutimg();

    function cutimg() {
        $('#show-main-img').cropper({
            aspectRatio: 1 / 1,
            crop: function(e) {
                var nowspace = $('#show-main-img').cropper("getCroppedCanvas", { width: 200, height: 200 });
                var dataurl = nowspace.toDataURL('image/jpeg');
                $("#show-little-imgv1").attr("src", dataurl);
                $("#show-little-imgv2").attr("src", dataurl);
            }
        });
    };
    $('#sel-file').change(function(e) {
        var file = e.target.files[0];
        var bloburl = URL.createObjectURL(file);
        $('#show-main-img').attr("src", bloburl);
        $('#show-main-img').cropper("destroy");
        cutimg();
    });
    $(".cro-btn-big").click(function() {
        $('#show-main-img').cropper("zoom", 0.1);
    })
    $(".cro-btn-small").click(function() {
        $('#show-main-img').cropper("zoom", -0.1);
    })
    $(".cro-btn-left").click(function() {
        $('#show-main-img').cropper("rotate", -90);
    })
    $(".cro-btn-right").click(function() {
        $('#show-main-img').cropper("rotate", 90);
    })
    $(".cro-btn-reset").click(function() {
        $('#show-main-img').cropper("reset");
    })
    $(".cro-btn-submit").click(function() {
        var submitspace = $('#show-main-img').cropper("getCroppedCanvas", { width: 200, height: 200 });
        var submiturl = submitspace.toDataURL('image/jpeg');
        console.log(submiturl);

        var layindex = layer.load(2, {
            shade: [0.4, '#000'] //0.1透明度的白色背景
        });
        //此处用setTimeout演示ajax的回调
        setTimeout(function() {
            layer.close(layindex);
        }, 3000);
    })
    /*绑定手机，绑定邮箱部分相关js*/
    /*相关初始化*/
        setphoneemail();
        function setphoneemail() {
            var iptphonenum = $('.ipt-bound-phonenum').val();
            var iptemail = $('.ipt-bound-email').val();
            /*绑定手机部分初始化*/
            setphone(iptphonenum);
            function setphone(iptphonenum) {
                if (iptphonenum == "" || iptphonenum == null || iptphonenum == undefined) {
                    var strboundphone = "";
                    strboundphone += "绑定手机：<span class=\"bound-phonenum\">未绑定<\/span><span class=\"col-309DE2 cur-p f-16 add-bound-phone ml-20\">立即绑定<\/span>";
                    $(".p-bound-phonenum").append(strboundphone);
                } else {
                    var strboundphone = "";
                    strboundphone += "绑定手机：<span class=\"bound-phonenum\">"+iptphonenum+"<\/span><span class=\"col-309DE2 cur-p f-16 edit-bound-phone ml-20\">修改<\/span>";
                    $(".p-bound-phonenum").append(strboundphone);
                }
            }
            /*绑定邮箱部分初始化*/
            setemail(iptemail);
            function setemail(iptemail) {
                if (iptemail == "" || iptemail == null || iptemail == undefined) {
                    var strboundemail="";
                    strboundemail += "绑定邮箱：<span class=\"bound-email\">未绑定<\/span><span class=\"col-309DE2 cur-p f-16 add-bound-email ml-20\">立即绑定<\/span>";
                    $(".p-bound-email").append(strboundemail);
                } else {
                    var strboundemail="";
                    strboundemail += "绑定邮箱：<span class=\"bound-email\">"+iptemail+"<\/span><span class=\"col-309DE2 cur-p f-16 edit-bound-email ml-20\">修改<\/span>";
                    $(".p-bound-email").append(strboundemail);
                }
            }
        }
    /*相关初始化END*/
    /*修改绑定手机弹出层*/
        /*打开弹层*/
        $(".edit-bound-phone").click(function() {
            var iptphonenum = $('.ipt-bound-phonenum').val();
            $('.faceing-phone').text(iptphonenum);
            $(".show-verifyphone").show();
            $(".verifyphone-content").removeClass("ani-selhead-logoout");
            $(".verifyphone-content").addClass("ani-selhead-logoin");
        });
        /*关闭弹出层*/
        $(".show-verifyphone").on("click", function(event) {
            event.stopPropagation();
            var target = event.target;
            if (!$(target).closest(".verifyphone-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
                $(".verifyphone-content").removeClass("ani-selhead-logoin");
                $(".verifyphone-content").addClass("ani-selhead-logoout");
                $(".show-verifyphone").fadeOut();
            };
        });
        /*内部验证*/
        $(".formvalidate-edit-bound-phone").validate({
            rules: {
                edbophone_code: {
                    required: true,
                    minlength: 4,
                },
            },
            messages: {
                edbophone_code: {
                    required: "请输入验证码",
                    minlength: "验证码最少由4位组成",
                },
            },
            submitHandler:function(form){
                /*在这里验证*/
                console.log("绑定手机弹出层提交事件!");   
                //form.ajaxSubmit();
            }
        });
        /*发送短信验证码*/
            $(".sendphonemsg").click(function(){
                sendphonemsg();
            });
            function sendphonemsg(){
                var InterValObj; //timer变量，控制时间  
                var count = 30; //间隔函数，1秒执行  
                var curCount;//当前剩余秒数  
                var code = ""; //验证码  
                var codeLength = 4;//验证码长度 
                var curCount = count;
                var phoneNumber=$(".faceing-phone").text();//拿到当前输入的手机号码
                var passverify =$(".phonecode-box").hasClass("has-success");
                //产生验证码 ,向用户手机发送验证码由后台实现,前台实现了倒计时
                //设置button效果，开始计时  
                $(".sendphonemsg").attr("disabled", "true");//禁用重新发送按钮  
                $(".sendphonemsg").css("color", "#666");//修改按钮值颜色
                $(".sendphonemsg").text(curCount + "s重新发送");//按钮值修改为 '倒计时' + '重新发送'  
                InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次  
                //向后台发送处理数据  
                /*$.ajax({  //当点击发送验证码时,可能向后台执行的ajax事件
                    type: "POST", //用POST方式传输  
                    dataType: "text", //数据格式:JSON  
                    url: 'Login.ashx', //目标地址  
                    data: "phoneNumber=" + phoneNumber + "&code=" + code,  
                    error: function (XMLHttpRequest, textStatus, errorThrown) { },  
                    success: function (msg){ }  
                }); */
                //timer处理函数  
                function SetRemainTime() {  
                    if (curCount == 0) { //当倒计时等于0时            
                        window.clearInterval(InterValObj);//停止计时器  
                        $(".sendphonemsg").removeAttr("disabled");//启用重新发送按钮
                        $(".sendphonemsg").css("background-color", "#D7DCDE");
                        $(".sendphonemsg").css("border-color", "#D7DCDE");  
                        $(".sendphonemsg").css("color", "#868b8a");//修改按钮值颜色
                        $(".sendphonemsg").text("重新发送");  //按钮值修改为重新发送
                        code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效      
                    }  
                    else {  
                        curCount--;  //当倒计时不等于0时 
                        $(".sendphonemsg").text(curCount + "s重新发送");//倒计时执行计数 
                    }  
                };
            };
    /*修改手机弹出层END*/
    /*添加绑定手机弹出层*/
        /*打开弹层*/
        $(".add-bound-phone").click(function() {
            $(".show-addphone").show();
            $(".addphone-content").removeClass("ani-selhead-logoout");
            $(".addphone-content").addClass("ani-selhead-logoin");
        });
        /*关闭弹出层*/
        $(".show-addphone").on("click", function(event) {
            event.stopPropagation();
            var target = event.target;
            if (!$(target).closest(".addphone-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
                $(".addphone-content").removeClass("ani-selhead-logoin");
                $(".addphone-content").addClass("ani-selhead-logoout");
                $(".show-addphone").fadeOut();
            };
        });
        /*内部验证*/
        $(".formvalidate-add-bound-phone").validate({
            rules: {
                edbophone_code: {
                    required: true,
                    minlength: 4,
                },
                add_new_phone: {
                    required: true,
                    minlength: 6,
                    digits:true
                },
            },
            messages: {
                edbophone_code: {
                    required: "请输入验证码",
                    minlength: "验证码最少由4位组成",
                },
                add_new_phone: {
                    required: "请输入您的手机号码",
                    minlength: "手机号最少由6位组成",
                    digits:"请不要输入其他非数字字符"
                },
            },
            submitHandler:function(form){
                /*在这里验证*/
                console.log("添加手机弹出层提交事件!");   
                //form.ajaxSubmit();
            }
        });
        /*发送短信验证码*/
            $(".add-sendphonemsg").click(function(){
                sendphonemsgv2();
            });
            function sendphonemsgv2(){
                var InterValObj; //timer变量，控制时间  
                var count = 30; //间隔函数，1秒执行  
                var curCount;//当前剩余秒数  
                var code = ""; //验证码  
                var codeLength = 4;//验证码长度 
                var curCount = count;
                var phoneNumber=$(".ipt-new-phonenum").val();//拿到当前输入的手机号码
                var passverify =$(".ipt-new-phonenum").hasClass("error");
                if(passverify || phoneNumber == "" || phoneNumber == null || phoneNumber == undefined){  //验证手机号
                    $("#add_new_phone-error").text("请输入正确的手机号码！");
                    $(".ipt-new-phonenum").focus();//获取手机号输入框input焦点
                    return false;
                }else{
                    //产生验证码 ,向用户手机发送验证码由后台实现,前台实现了倒计时
                    //设置button效果，开始计时  
                    $(".add-sendphonemsg").attr("disabled", "true");//禁用重新发送按钮  
                    $(".add-sendphonemsg").css("color", "#666");//修改按钮值颜色
                    $(".add-sendphonemsg").text(curCount + "s重新发送");//按钮值修改为 '倒计时' + '重新发送'  
                    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次  
                    //向后台发送处理数据  
                    /*$.ajax({  //当点击发送验证码时,可能向后台执行的ajax事件
                        type: "POST", //用POST方式传输  
                        dataType: "text", //数据格式:JSON  
                        url: 'Login.ashx', //目标地址  
                        data: "phoneNumber=" + phoneNumber + "&code=" + code,  
                        error: function (XMLHttpRequest, textStatus, errorThrown) { },  
                        success: function (msg){ }  
                    }); */
                    //timer处理函数
                }
                function SetRemainTime() {  
                    if (curCount == 0) { //当倒计时等于0时            
                        window.clearInterval(InterValObj);//停止计时器  
                        $(".add-sendphonemsg").removeAttr("disabled");//启用重新发送按钮
                        $(".add-sendphonemsg").css("background-color", "#D7DCDE");
                        $(".add-sendphonemsg").css("border-color", "#D7DCDE");  
                        $(".add-sendphonemsg").css("color", "#868b8a");//修改按钮值颜色
                        $(".add-sendphonemsg").text("重新发送");  //按钮值修改为重新发送
                        code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效      
                    }  
                    else {  
                        curCount--;  //当倒计时不等于0时 
                        $(".add-sendphonemsg").text(curCount + "s重新发送");//倒计时执行计数 
                    }  
                };
            };
    /*添加绑定手机弹出层END*/
    /*修改绑定邮箱弹出层*/
        $(".edit-bound-email").click(function() {
            var iptemail = $('.ipt-bound-email').val();
            $('.faceing-email').text(iptemail);
            $(".show-verifyemail").show();
            $(".verifyemail-content").removeClass("ani-selhead-logoout");
            $(".verifyemail-content").addClass("ani-selhead-logoin");
        });
        /*关闭弹出层*/
        $(".show-verifyemail").on("click", function(event) {
            event.stopPropagation();
            var target = event.target;
            if (!$(target).closest(".verifyemail-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
                $(".verifyemail-content").removeClass("ani-selhead-logoin");
                $(".verifyemail-content").addClass("ani-selhead-logoout");
                $(".show-verifyemail").fadeOut();
            };
        });
        /*内部验证*/
        $(".formvalidate-edit-bound-email").validate({
            rules: {
                edboemail_code: {
                    required: true,
                    minlength: 4,
                },
            },
            messages: {
                edboemail_code: {
                    required: "请输入验证码",
                    minlength: "验证码最少由4位组成",
                },
            },
            submitHandler:function(form){
                /*在这里验证*/
                console.log("验证邮箱弹出层提交事件!");   
                //form.ajaxSubmit();
            }
        });
        /*发送邮箱验证码*/
            $(".sendemailmsg").click(function(){
                sendemailmsg();
            });
            function sendemailmsg(){
                var InterValObj; //timer变量，控制时间  
                var count = 30; //间隔函数，1秒执行  
                var curCount;//当前剩余秒数  
                var code = ""; //验证码  
                var codeLength = 4;//验证码长度 
                var curCount = count;
                var phoneNumber=$(".ipt-bound-email").text();//拿到当前输入的邮箱
                //产生验证码 ,向用户手机发送验证码由后台实现,前台实现了倒计时
                //设置button效果，开始计时  
                $(".sendemailmsg").attr("disabled", "true");//禁用重新发送按钮  
                $(".sendemailmsg").css("color", "#666");//修改按钮值颜色
                $(".sendemailmsg").text(curCount + "s重新发送");//按钮值修改为 '倒计时' + '重新发送'  
                InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次  
                //向后台发送处理数据  
                /*$.ajax({  //当点击发送验证码时,可能向后台执行的ajax事件
                    type: "POST", //用POST方式传输  
                    dataType: "text", //数据格式:JSON  
                    url: 'Login.ashx', //目标地址  
                    data: "phoneNumber=" + phoneNumber + "&code=" + code,  
                    error: function (XMLHttpRequest, textStatus, errorThrown) { },  
                    success: function (msg){ }  
                }); */
                //timer处理函数  
                function SetRemainTime() {  
                    if (curCount == 0) { //当倒计时等于0时            
                        window.clearInterval(InterValObj);//停止计时器  
                        $(".sendemailmsg").removeAttr("disabled");//启用重新发送按钮
                        $(".sendemailmsg").css("background-color", "#D7DCDE");
                        $(".sendemailmsg").css("border-color", "#D7DCDE");  
                        $(".sendemailmsg").css("color", "#868b8a");//修改按钮值颜色
                        $(".sendemailmsg").text("重新发送");  //按钮值修改为重新发送
                        code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效      
                    }  
                    else {  
                        curCount--;  //当倒计时不等于0时 
                        $(".sendemailmsg").text(curCount + "s重新发送");//倒计时执行计数 
                    }  
                };
            };
    /*修改绑定邮箱弹出层END*/
    /*添加绑定邮箱弹出层*/
        /*打开弹层*/
        $(".add-bound-email").click(function() {
            $(".show-addemail").show();
            $(".addemail-content").removeClass("ani-selhead-logoout");
            $(".addemail-content").addClass("ani-selhead-logoin");
        });
        /*关闭弹出层*/
        $(".show-addemail").on("click", function(event) {
            event.stopPropagation();
            var target = event.target;
            if (!$(target).closest(".addemail-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
                $(".addemail-content").removeClass("ani-selhead-logoin");
                $(".addemail-content").addClass("ani-selhead-logoout");
                $(".show-addemail").fadeOut();
            };
        });
        /*内部验证*/
        $(".formvalidate-add-bound-email").validate({
            rules: {
                adboemail_code: {
                    required: true,
                    minlength: 4,
                },
                add_new_email: {
                    required: true,
                    email:true,
                },
            },
            messages: {
                adboemail_code: {
                    required: "请输入验证码",
                    minlength: "验证码最少由4位组成",
                },
                add_new_email: {
                    required: "请输入您的邮箱号码",
                    email: "请输入正确的邮箱号码",
                },
            },
            submitHandler:function(form){
                /*在这里验证提交*/
                console.log("添加邮箱弹出层提交事件!");   
                //form.ajaxSubmit();
            }
        });
        /*发送邮箱验证码*/
            $(".add-sendemialmsg").click(function(){
                sendemailv2();
            });
            function sendemailv2(){
                var InterValObj; //timer变量，控制时间  
                var count = 30; //间隔函数，1秒执行  
                var curCount;//当前剩余秒数  
                var code = ""; //验证码  
                var codeLength = 4;//验证码长度 
                var curCount = count;
                var emailNumber=$(".ipt-new-emailnum").val();//拿到当前输入的手机号码
                var passverify =$(".ipt-new-emailnum").hasClass("error");
                if(passverify || emailNumber == "" || emailNumber == null || emailNumber == undefined){  //验证手机号
                    $("#add_new_email-error").text("请输入正确的邮箱号码！");
                    $(".ipt-new-emailnum").focus();//获取手机号输入框input焦点
                    return false;
                }else{
                    //产生验证码 ,向用户手机发送验证码由后台实现,前台实现了倒计时
                    //设置button效果，开始计时  
                    $(".add-sendemialmsg").attr("disabled", "true");//禁用重新发送按钮  
                    $(".add-sendemialmsg").css("color", "#666");//修改按钮值颜色
                    $(".add-sendemialmsg").text(curCount + "s重新发送");//按钮值修改为 '倒计时' + '重新发送'  
                    InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次  
                    //向后台发送处理数据  
                    /*$.ajax({  //当点击发送验证码时,可能向后台执行的ajax事件
                        type: "POST", //用POST方式传输  
                        dataType: "text", //数据格式:JSON  
                        url: 'Login.ashx', //目标地址  
                        data: "phoneNumber=" + phoneNumber + "&code=" + code,  
                        error: function (XMLHttpRequest, textStatus, errorThrown) { },  
                        success: function (msg){ }  
                    }); */
                    //timer处理函数
                }
                function SetRemainTime() {  
                    if (curCount == 0) { //当倒计时等于0时            
                        window.clearInterval(InterValObj);//停止计时器  
                        $(".add-sendemialmsg").removeAttr("disabled");//启用重新发送按钮
                        $(".add-sendemialmsg").css("background-color", "#D7DCDE");
                        $(".add-sendemialmsg").css("border-color", "#D7DCDE");  
                        $(".add-sendemialmsg").css("color", "#868b8a");//修改按钮值颜色
                        $(".add-sendemialmsg").text("重新发送");  //按钮值修改为重新发送
                        code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效      
                    }  
                    else {  
                        curCount--;  //当倒计时不等于0时 
                        $(".add-sendemialmsg").text(curCount + "s重新发送");//倒计时执行计数 
                    }  
                };
            };
    /*添加绑定邮箱弹出层END*/
});