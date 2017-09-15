$(document).ready(function() {
    /*找回密码部分js*/
    /*手机找回密码部分校验*/
    $(".findpwd-main-formphone").bootstrapValidator({
        fields: {
            userphone: {
                container: '.userphonemsg',
                validators: {
                    notEmpty: {
                        message: '手机号码不能为空值.'
                    },
                    stringLength: {
                        min: 6,
                        max: 15,
                        message: '手机号码不能小于6或者大于15.'
                    },
                    regexp: {
                        regexp: /^[0-9-]+$/,
                        message: '手机号码只能包含数字和连接符.'
                    },
                }
            },
            usercode: {
                container: '.usercodemsg',
                validators: {
                    notEmpty: {
                        message: '动态密码不能为空值.'
                    },
                    digits: {
                        message: '只能是数字！'
                    },
                    stringLength: {
                        min: 4,
                        max: 4,
                        message: '必须是4位数字!'
                    }
                }
            },
            usersetpwd: {
                container: '.usersetpwdmsg',
                validators: {
                    notEmpty: {
                        message: '密码不能为空值.'
                    },
                    different: {
                        field: 'userphone',
                        message: '密码和手机号不能一样'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: '密码只能包含大写、小写、数字或下划线.'
                    },
                    stringLength: {
                        min: 6,
                        max: 16,
                        message: '密码长度不能小于6位,不能大于16位.'
                    },
                }
            },
            userpasspwd: {
                container: '.userpasspwdmsg',
                validators: {
                    notEmpty: {
                        message: '确认密码不能为空值.'
                    },
                    identical: {
                        field: 'usersetpwd',
                        message: '两次密码不一致.'
                    },
                }
            },
        }
    });
    /*发送短信验证码手机找回方式*/
    $(".sendMessagebtn").click(function(){//点击微信登录
        sendMessage()
    });
    function sendMessage(){
        var InterValObj; //timer变量，控制时间  
        var count = 30; //间隔函数，1秒执行  
        var curCount;//当前剩余秒数  
        var code = ""; //验证码  
        var codeLength = 4;//验证码长度 
        var curCount = count;
        var phoneNumber=$(".findpwdphoneinput").val();//拿到当前输入的手机号码
        var passverify =$(".phonecode-box").hasClass("has-success");

        if(passverify){  //验证手机号
            //产生验证码 ,向用户手机发送验证码由后台实现,前台实现了倒计时
            //设置button效果，开始计时  
            $(".sendMessagebtn").attr("disabled", "true");//禁用重新发送按钮  
            $(".sendMessagebtn").css("color", "#666");//修改按钮值颜色
            $(".sendMessagebtn").text(curCount + "s重新发送");//按钮值修改为 '倒计时' + '重新发送'  
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
        }else{
            $(".userphonemsg").find("small:visible").text("请输入正确的手机号码！");
            $(".userphoneinput").focus();//获取手机号输入框input焦点
            return false;
        }
        //timer处理函数  
        function SetRemainTime() {  
            if (curCount == 0) { //当倒计时等于0时            
                window.clearInterval(InterValObj);//停止计时器  
                $(".sendMessagebtn").removeAttr("disabled");//启用重新发送按钮
                $(".sendMessagebtn").css("background-color", "#D7DCDE");
                $(".sendMessagebtn").css("border-color", "#D7DCDE");  
                $(".sendMessagebtn").css("color", "#868b8a");//修改按钮值颜色
                $(".sendMessagebtn").text("重新发送");  //按钮值修改为重新发送
                code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效      
            }  
            else {  
                curCount--;  //当倒计时不等于0时 
                $(".sendMessagebtn").text(curCount + "s重新发送");//倒计时执行计数 
            }  
        };
    };
    /*tab选项卡切换*/
    $(".findpwd-tabcontrolv1").mouseenter(function() {
        $(this).find("img").attr("src","../../img/reg/tabcontrolv1h.jpg");
        $(this).find("span").css("color","black");
    });
    $(".findpwd-tabcontrolv1").mouseleave(function() {
        $(this).find("img").attr("src","../../img/reg/tabcontrolv1.jpg");
        $(this).find("span").css("color","#999");
    });
    $(".findpwd-tabcontrolv2").mouseenter(function() {
        $(this).find("img").attr("src","../../img/reg/tabcontrolv2h.png");
        $(this).find("span").css("color","black");
    });
    $(".findpwd-tabcontrolv2").mouseleave(function() {
        $(this).find("img").attr("src","../../img/reg/tabcontrolv2.png");
        $(this).find("span").css("color","#999");
    });
    $(".findpwd-tabcontrolv3").mouseenter(function() {
        $(this).find("img").attr("src","../../img/reg/tabcontrolv3h.png");
        $(this).find("span").css("color","black");
    });
    $(".findpwd-tabcontrolv3").mouseleave(function() {
        $(this).find("img").attr("src","../../img/reg/tabcontrolv3.png");
        $(this).find("span").css("color","#999");
    });
    $(".findpwd-tabcontrolv1").click(function() {
        $(".findpwd-tabcontentv2").hide();
        $(".findpwd-tabcontentv1").show();
    });
    $(".findpwd-tabcontrolv2").click(function() {
        $(".findpwd-tabcontentv1").hide();
        $(".findpwd-tabcontentv2").show();
    });
    /*邮箱找回密码部分校验*/
    $(".findpwd-main-formemail").bootstrapValidator({
        fields: {
            useremail: {
                container: '.useremailmsg',
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空值.'
                    },
                    emailAddress: {
                        message: '请输入正确的邮箱号码.'
                    },
                },
            },
            emailcode: {
                container: '.emailcodemsg',
                validators: {
                    notEmpty: {
                        message: '动态密码不能为空值.'
                    },
                    digits: {
                        message: '只能是数字！'
                    },
                    stringLength: {
                        min: 4,
                        max: 4,
                        message: '必须是4位数字!'
                    }
                }
            },
            emailsetpwd: {
                container: '.emailsetpwdmsg',
                validators: {
                    notEmpty: {
                        message: '密码不能为空值.'
                    },
                    different: {
                        field: 'userphone',
                        message: '密码和手机号不能一样'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: '密码只能包含大写、小写、数字或下划线.'
                    },
                    stringLength: {
                        min: 6,
                        max: 16,
                        message: '密码长度不能小于6位,不能大于16位.'
                    },
                }
            },
            emailpasspwd: {
                container: '.emailpasspwdmsg',
                validators: {
                    notEmpty: {
                        message: '确认密码不能为空值.'
                    },
                    identical: {
                        field: 'emailsetpwd',
                        message: '两次密码不一致.'
                    },
                }
            },
        }
    });
    /*发送短信验证码邮箱找回方式*/
    $(".sendMessagebtn-emailcode").click(function(){//点击微信登录
        sendMessageemail()
    });
    function sendMessageemail(){
        var InterValObj; //timer变量，控制时间  
        var count = 30; //间隔函数，1秒执行  
        var curCount;//当前剩余秒数  
        var code = ""; //验证码  
        var codeLength = 4;//验证码长度 
        var curCount = count;
        var phoneNumber=$(".findpwdemailinput").val();//拿到当前输入的手机号码
        var passverify =$(".emailcode-box").hasClass("has-success");

        if(passverify){  //验证手机号
            //产生验证码 ,向用户手机发送验证码由后台实现,前台实现了倒计时
            //设置button效果，开始计时  
            $(".sendMessagebtn-emailcode").attr("disabled", "true");//禁用重新发送按钮  
            $(".sendMessagebtn-emailcode").css("color", "#666");//修改按钮值颜色
            $(".sendMessagebtn-emailcode").text(curCount + "s重新发送");//按钮值修改为 '倒计时' + '重新发送'  
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
        }else{
            $(".useremailmsg").find("small:visible").text("请输入正确的邮箱账号！");
            $(".findpwdemailinput").focus();//获取手机号输入框input焦点
            return false;
        }
        //timer处理函数  
        function SetRemainTime() {  
            if (curCount == 0) { //当倒计时等于0时            
                window.clearInterval(InterValObj);//停止计时器  
                $(".sendMessagebtn-emailcode").removeAttr("disabled");//启用重新发送按钮
                $(".sendMessagebtn-emailcode").css("background-color", "#D7DCDE");
                $(".sendMessagebtn-emailcode").css("border-color", "#D7DCDE");  
                $(".sendMessagebtn-emailcode").css("color", "#868b8a");//修改按钮值颜色
                $(".sendMessagebtn-emailcode").text("重新发送");  //按钮值修改为重新发送
                code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效      
            }  
            else {  
                curCount--;  //当倒计时不等于0时 
                $(".sendMessagebtn-emailcode").text(curCount + "s重新发送");//倒计时执行计数 
            }  
        };
    };

});
