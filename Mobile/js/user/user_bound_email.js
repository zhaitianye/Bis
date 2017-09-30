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
                boundemail: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                boundemail: {
                    required: "请输入您的邮箱地址",
                    email: "请输入正确的邮箱地址"
                },
            }
        });
    });
});
