$(document).ready(function() {
    /*layui方面js*/
    layui.use(['form', 'table', 'element'], function() {
        var form = layui.form,
            layer = layui.layer,
            element = layui.element,
            table = layui.table;
        //监听提交
        form.on('submit(search1)', function(data) {
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            //console.log(JSON.stringify(data.field));
            return false;
        });
        //执行渲染
        table.render({
            elem: '#demo', //指定原始表格元素选择器（推荐id选择器）
            height: 400, //容器高度
            width: 1146,
            cols: [
                [ //标题栏
                    { field: 'id', title: 'ID', width: 80, sort: true },
                    { field: 'username', title: '用户名', width: 160 },
                    { field: 'phonenum', title: '手机号', width: 160 },
                    { field: 'email', title: '邮箱', width: 240 },
                    { field: 'weixinnum', title: '微信号', width: 160, sort: true },
                    { field: 'state', title: '状态', width: 120, sort: true },
                    { fixed: 'right', title: '操作', width: 200, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [
                { "id": 10000, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "bisasupper", "state": "正常", },
                { "id": 10002, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "已禁用", },
                { "id": 10003, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "已禁用", },
                { "id": 10004, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10005, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10006, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10007, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10008, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10009, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10010, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10011, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10012, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10013, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10014, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10015, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10016, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10017, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10018, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10019, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
                { "id": 10020, "username": "MR.sink", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "sinashin", "state": "正常", },
            ],
            page: true,
        });
        //监听工具条
        table.on('tool(test)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值
            var tr = obj.tr; //获得当前行 tr 的DOM对象

            if (layEvent === 'resetpwd') { //重置密码提示
                layer.confirm('需要发送重置密码提示短信么？', function(index) {
                    /*在这里如果点确定执行的函数*/
                    layer.alert('ID：' + data.id + '的发送重置密码提示短信操作');
                    layer.close(index);
                });
            } else if (layEvent === 'forbidden') { //禁用
                layer.confirm('确定要禁用此用户么？', function(index) {
                    /*在这里入数据库进行修改用户的状态*/
                    //同步更新缓存对应的值
                    obj.update({
                        state: '已禁用',
                    });
                    layer.close(index);
                });
            }
        });
    });
    /*页面方面js*/
    $(".btn-sidebar").click(function() {
    	$(".btn-sidebar").removeClass("layui-btn-primary");
        $(this).siblings().addClass("layui-btn-primary");
    });
});