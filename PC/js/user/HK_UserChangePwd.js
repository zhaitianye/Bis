$(document).ready(function() {
	/*修改密码部分的校验*/
    $.validator.setDefaults({
        submitHandler: function() {
            window.location.href='HK_UserCenter.html';
        }
    });
    $().ready(function() {
        // 在键盘按下并释放及提交后验证提交表单
        $(".changepwd-validate").validate({
            rules: {
                oldpwd: {
                    required: true,
                },
                newpwd: {
                    required: true,
                    minlength:8,
                    checkpwd:true,
                },
                repetitionpwd: {
                    required: true,
                    equalTo: ".user-newpwd",
                },
            },
            messages: {
                oldpwd: {
                    required: "请输入您的原密码",
                },
                newpwd: {
                    required: "请输入您的新密码",
                    minlength:"密码最小长度8~16位",
                },
                repetitionpwd: {
                    required: "请再次输入您的新密码",
                    equalTo: "两次密码输入不一致",
                },
            }
        });
    });
    //自定义正则表达示验证方法  
    $.validator.addMethod("checkpwd",function(value,element,params){  
            var checkpwd = /^\w{8,16}$/g;  
            return this.optional(element)||(checkpwd.test(value));  
        },"只允许8-16位英文字母、数字或者下画线！"); 
});