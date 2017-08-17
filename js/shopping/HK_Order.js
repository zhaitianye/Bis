$(document).ready(function() {
    $.validator.setDefaults({
        submitHandler: function() {
            alert("提交事件!");
        }
    });
    $().ready(function() {
        // 在键盘按下并释放及提交后验证提交表单
        $(".shippingaddress-add").validate({
            rules: {
                shname: {
                    required: true,
                    minlength: 2
                },
                shphone: {
                    required: true,
                    minlength: 6
                },
                shaddress: "required",
                shemail: {
                    required: true,
                    email: true
                },
            },
            messages: {
                shname: {
                    required: "请输入用户名",
                    minlength: "用户名最少由两个字母组成"
                },
                shphone: {
                    required: "请输入您的手机号码",
                    minlength: "手机号最少由6位组成"
                },
                shaddress: "请输入您的地址",
                shemail: {
                    required: "请输入您的电子邮件",
                    email: "请输入正确的电子邮件地址"
                },
            }
        });
        $(".shippingaddress-revise").validate({
            rules: {
                shname: {
                    required: true,
                    minlength: 2
                },
                shphone: {
                    required: true,
                    minlength: 6
                },
                shaddress: "required",
                shemail: {
                    required: true,
                    email: true
                },
            },
            messages: {
                shname: {
                    required: "请输入用户名",
                    minlength: "用户名最少由两个字母组成"
                },
                shphone: {
                    required: "请输入您的手机号码",
                    minlength: "手机号最少由6位组成"
                },
                shaddress: "请输入您的地址",
                shemail: {
                    required: "请输入您的电子邮件",
                    email: "请输入正确的电子邮件地址"
                },
            }
        });
    });
});