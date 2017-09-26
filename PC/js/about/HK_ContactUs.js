$(document).ready(function() {
    /*修改密码部分的校验*/
    $.validator.setDefaults({
        submitHandler: function() {
            alert("提交事件!");
        }
    });
    $().ready(function() {
        // 在键盘按下并释放及提交后验证提交表单
        $(".contactus-form").validate({
            rules: {
                cname: {
                    required: true,
                },
                cphone: {
                    required: true,
                    minlength:8,
                },
                cabout: {
                    required: true,
                },
            },
            messages: {
                cname: {
                    required: "请输入您的姓名",
                },
                cphone: {
                    required: "手机号不能为空",
                    minlength:"手机号最小长度6位",
                },
                cabout: {
                    required: "留言内容不能为空",
                },
            }
        });
    });
});

