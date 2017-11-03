$(document).ready(function() {
    /*填写密码校验*/
    $(".formvalidate-setpwd").validate({
        rules: {
            newpwd: {
                required: true,
                minlength: 8,
                /*自定义正则表达示验证方法*/
                checkpwd:true,
            },
            repwd: {
                required: true,
                equalTo: ".user-newpwd",
            },
        },
        messages: {
            newpwd: {
                required: "请输入您要设置的新密码。",
                minlength: "新密码最少由8位组成",
            },
            repwd: {
                required: "请再次输入您的新密码",
                equalTo: "两次密码输入不一致",
            },
        },
        submitHandler:function(form){
            /*在这里验证*/
            //console.log("提交事件!");
            //form.ajaxSubmit();
            judgealeart();
        }
    });
    //自定义正则表达示验证方法  
    $.validator.addMethod("checkpwd",function(value,element,params){  
            var checkpwd = /^\w{8,16}$/g;  
            return this.optional(element)||(checkpwd.test(value));  
        },"只允许8-16位英文字母、数字或者下画线！");
    /*页面载入时判断是否绑定了邮箱和手机*/
    isboundphoremail();
    function isboundphoremail(){
        var isboundph = parseInt($(".is-bound-phone").val());
        var isboundem = parseInt($(".is-bound-email").val());
        var ishasoldpwd = parseInt($(".is-has-oldpwd").val());
        if (isboundph == 0 && isboundem == 0) {
            $(".show-boundphonefirst").show();
            $(".show-boundphonefirst-content").removeClass("ani-selhead-logoout");
            $(".show-boundphonefirst-content").addClass("ani-selhead-logoin");
            $(".btn-sure-sub").attr({"disabled":"disabled"});
        };
        if (ishasoldpwd == 0) {
            $(".setoredit-pwd-title").text("设置密码");
            $(".btn-sure-sub").text("确认设置");
        }else{
            $(".setoredit-pwd-title").text("修改密码");
            $(".btn-sure-sub").text("确认修改");
        }
    }
    /*提交表单时执行的弹出层函数*/
    function judgealeart(){
        var isboundph = parseInt($(".is-bound-phone").val());
        var isboundem = parseInt($(".is-bound-email").val());
        if (isboundph != 0) {
            /*弹出修改手机弹出层*/
            var iptphonenum = $('.safety-phonenum').val();
            $('.faceing-phone').text(iptphonenum);
            $(".show-verifyphone").show();
            $(".verifyphone-content").removeClass("ani-selhead-logoout");
            $(".verifyphone-content").addClass("ani-selhead-logoin");
        }else if(isboundph ==0 && isboundem != 0){
            /*弹出修改绑定邮箱弹出层*/
            var iptemail = $('.safety-emailnum').val();
            $('.faceing-email').text(iptemail);
            $(".show-verifyemail").show();
            $(".verifyemail-content").removeClass("ani-selhead-logoout");
            $(".verifyemail-content").addClass("ani-selhead-logoin");
        }
    }
    /*验证手机部分js*/
        /*关闭修改手机弹出层*/
        $(".show-verifyphone").on("click", function(event) {
            event.stopPropagation();
            var target = event.target;
            if (!$(target).closest(".verifyphone-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
                $(".verifyphone-content").removeClass("ani-selhead-logoin");
                $(".verifyphone-content").addClass("ani-selhead-logoout");
                $(".show-verifyphone").fadeOut();
            };
        });
        /*修改手机内部验证*/
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
                /*如果后台修改成功之后，执行下面函数*/
                aftersuccessforphone();
            }
        });
        /*修改手机发送短信验证码*/
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
    /*验证手机部分jsEND*/
    /*验证邮箱部分js*/
        /*关闭验证弹出层*/
        $(".show-verifyemail").on("click", function(event) {
            event.stopPropagation();
            var target = event.target;
            if (!$(target).closest(".verifyemail-content").length > 0 || $(target).attr("class").indexOf("close-mod") != -1) {
                $(".verifyemail-content").removeClass("ani-selhead-logoin");
                $(".verifyemail-content").addClass("ani-selhead-logoout");
                $(".show-verifyemail").fadeOut();
            };
        });
        /*验证邮箱的内部验证*/
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
                /*如果后台修改成功之后，执行下面函数*/
                aftersuccessforemail();
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
    /*验证邮箱部分jsEND*/
    /*成功后的弹出页面*/
    function aftersuccessforphone(){
        var ishasoldpwd = parseInt($(".is-has-oldpwd").val());
        $(".verifyphone-content").removeClass("ani-selhead-logoin");
        $(".verifyphone-content").addClass("ani-selhead-logoout");
        $(".show-verifyphone").hide();
        /*判断弹出的是修改成功页面还是设置成功页面*/
        if (ishasoldpwd == 0) {
            $(".show-setpwd-success").show();
            $(".show-setpwd-success-content").removeClass("ani-selhead-logoout");
            $(".show-setpwd-success-content").addClass("ani-selhead-logoin");
            $(".btn-sure-sub").attr({"disabled":"disabled"});
        }else{
            $(".show-editpwd-success").show();
            $(".show-editpwd-success-content").removeClass("ani-selhead-logoout");
            $(".show-editpwd-success-content").addClass("ani-selhead-logoin");
            $(".btn-sure-sub").attr({"disabled":"disabled"});
        }
    };
    function aftersuccessforemail(){
        var ishasoldpwd = parseInt($(".is-has-oldpwd").val());
        $(".verifyemail-content").removeClass("ani-selhead-logoin");
        $(".verifyemail-content").addClass("ani-selhead-logoout");
        $(".show-verifyemail").fadeOut();
        /*判断弹出的是修改成功页面还是设置成功页面*/
        if (ishasoldpwd == 0) {
            $(".show-setpwd-success").show();
            $(".show-setpwd-success-content").removeClass("ani-selhead-logoout");
            $(".show-setpwd-success-content").addClass("ani-selhead-logoin");
            $(".btn-sure-sub").attr({"disabled":"disabled"});
        }else{
            $(".show-editpwd-success").show();
            $(".show-editpwd-success-content").removeClass("ani-selhead-logoout");
            $(".show-editpwd-success-content").addClass("ani-selhead-logoin");
            $(".btn-sure-sub").attr({"disabled":"disabled"});
        }
    };

});