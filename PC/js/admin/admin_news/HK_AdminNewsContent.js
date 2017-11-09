$(document).ready(function() {
    /*layui方面js*/
    layui.use(['form', 'table', 'element'], function() {
        var form = layui.form,
            layer = layui.layer,
            element = layui.element,
            table = layui.table;
    });

    /*定义ckeditor*/
    var editor = CKEDITOR.replace('editor1', {
        customConfig: 'custom/ckeditor_config.js',
        height: 600,
    });
    /*获取数据*/
    $(".getdateabout").click(function() {
        var data = CKEDITOR.instances.editor1.getData();
        console.log(data);
    });
});


