$(document).ready(function() {
    /*联系人列表页数据校验*/
    $.validator.setDefaults({
        submitHandler: function() {
            alert("提交事件!");
        }
    });
    $().ready(function() {
        // 在键盘按下并释放及提交后验证提交表单
        $(".link-man-validate").validate({
            rules: {
                link_name: {
                    required: true,
                    minlength: 2
                },
                link_phone: {
                    required: true,
                    minlength: 6,
                    digits:true
                },
            },
            messages: {
                link_name: {
                    required: "请输入用户名",
                    minlength: "用户名最少由两个字母组成"
                },
                link_phone: {
                    required: "请输入您的手机号码",
                    minlength: "手机号最少由6位组成",
                    digits:"请不要输入其他非数字字符"
                },
            }
        });

    });

});