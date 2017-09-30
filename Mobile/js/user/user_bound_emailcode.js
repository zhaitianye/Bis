$(document).ready(function() {
    /*绑定邮箱部分js*/
     $.validator.setDefaults({
        submitHandler: function() {
            alert("提交事件!");
        }
    });
    $().ready(function() {
        // 在键盘按下并释放及提交后验证提交表单
        $(".bound-email-form").validate({
            rules: {
                boundcode: {
                    required: true,
                    minlength: 4
                },
            },
            messages: {
                boundcode: {
                    required: "请输入您接收到的验证码",
                    minlength: "验证码长度为4位"
                },
            }
        });
    });
     /*发送短信验证码*/
    $(".sendMessagebtn").click(function(){
        sendMessage()
    });
    function sendMessage(){
        var InterValObj; //timer变量，控制时间  
        var count = 30; //间隔函数，1秒执行  
        var curCount;//当前剩余秒数  
        var code = ""; //验证码  
        var codeLength = 4;//验证码长度 
        var curCount = count;

        //产生验证码 ,向用户手机发送验证码由后台实现,前台实现了倒计时
        //设置button效果，开始计时  
        $(".sendMessagebtn").attr("disabled", "true");//禁用重新发送按钮  
        $(".sendMessagetext").css("color", "#909090");//修改按钮值颜色
        $(".sendMessagetext").text(curCount + "s后获取");//按钮值修改为 '倒计时' + '重新发送'  
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
                $(".sendMessagebtn").removeAttr("disabled");//启用重新发送按钮
                $(".sendMessagetext").text("重新发送");  //按钮值修改为重新发送
                code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效      
            }  
            else {  
                curCount--;  //当倒计时不等于0时 
                $(".sendMessagetext").text(curCount + "s后获取");//倒计时执行计数 
            }  
        };

    };

});
