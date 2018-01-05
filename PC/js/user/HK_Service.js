$(document).ready(function() {
	/*激活服务部分的校验*/
    $.validator.setDefaults({
        submitHandler: function() {
            window.location.href='HK_ServiceActivateSuccessv1.html';
        }
    });
    $().ready(function() {
        // 在键盘按下并释放及提交后验证提交表单
        $(".servicact-validate").validate({
            rules: {
                appcode: {
                    required: true,
                },
                appid: {
                    required: true,
                },
                appidagain: {
                    required: true,
                    equalTo: ".activate-cid",
                },
            },
            messages: {
                appcode: {
                    required: "请输入您的激活码",
                },
                appid: {
                    required: "请输入悉心APP帐号",
                },
                appidagain: {
                    required: "请再次输入悉心APP帐号",
                    equalTo: "两次账号输入不一致",
                },
            }
        });
    });

    /*激活部分选项框的样式*/
    $('.activatecheckv1').iCheck({
        checkboxClass: 'icheckbox_flat-blue',
        radioClass: 'iradio_flat-blue'
    });
    $('.activatecheckv1').on('ifChecked', function(event){
        $(".activatecheckv1").val(1);
        var sqlcid = $(".sql-activatg-cid").val();
        $(".activate-cid").val(sqlcid);
        $(".activate-cidagain").val(sqlcid);

    });
    $('.activatecheckv1').on('ifUnchecked', function(event){
        $(".activatecheckv1").val(0);
        $(".activate-cid").val("");
        $(".activate-cidagain").val("");
    });
});

