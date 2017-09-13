$(document).ready(function() {
    /*登录注册部分的js*/
    $('.login-main-form').bootstrapValidator({
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
            }
        }
    });
    /*自定义input框*/
    $('.nextautocheckv1').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });
    $('.nextautocheckv1').on('ifChecked', function(event){
        $(".nextautocheckv1").val(1);
    });
    $('.nextautocheckv1').on('ifUnchecked', function(event){
        $(".nextautocheckv1").val(0);
    });
    /*发送短信验证码*/
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
        var phoneNumber=$(".userphoneinput").val();//拿到当前输入的手机号码
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
             
            

});
