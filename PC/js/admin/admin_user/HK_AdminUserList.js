$(document).ready(function() {
    /*layui方面js*/
    layui.use(['form', 'table', 'element'], function() {
        var form = layui.form,
            layer = layui.layer,
            element = layui.element,
            table = layui.table;
        //监听提交 用户管理搜索提交事件
        //提交事件在这里里面调用参数
        form.on('submit(search1)', function(data) {
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            return false;
        });
        //监听提交 手机号提交事件
        form.on('submit(subphone)', function(data) {
            layer.closeAll();
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            return false;
        });
        //监听提交 邮箱提交事件
        form.on('submit(subemail)', function(data) {
            layer.closeAll();
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            return false;
        });
        //执行渲染表格
        //有关表格的重载参考layui数据表格
        table.render({
            elem: '#demo', //指定原始表格元素选择器（推荐id选择器）
            height: 400, //容器高度
            cols: [
                [ //标题栏
                    /*id是隐藏的*/
                    //{ field: 'id', title: 'ID', width: 80, sort: true },
                    { field: 'username', title: '用户ID', width: 160 },
                    { field: 'phonenum', title: '手机号', width: 160 },
                    { field: 'email', title: '邮箱', width: 240 },
                    { field: 'weixinnum', title: '微信号', width: 160, sort: true },
                    { field: 'registertime', title: '注册时间', width: 160, sort: true },
                    { field: 'lastlogintime', title: '最近登录时间', width: 160, sort: true },
                    { field: 'state', title: '状态', width: 120, sort: true },
                    { fixed: 'right', title: '操作', width: 240, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [
                { "id": 10000, "username": "小叶", "phonenum": "13395684256", "email": "13395684256@bisa.hk.com", "weixinnum": "bisasupper", "registertime": "2017/10/12 9:49:11", "lastlogintime": "2017/12/20 9:49:11", "state": "正常", },
                { "id": 10002, "username": "小张", "phonenum": "保密", "email": "13395684256@bisa.hk.com", "weixinnum": "保密", "registertime": "2017/10/12 9:49:11", "lastlogintime": "2017/12/20 9:49:11", "state": "正常", },
                { "id": 10003, "username": "小李", "phonenum": "保密", "email": "13395684256@bisa.hk.com", "weixinnum": "保密", "registertime": "2017/10/12 9:49:11", "lastlogintime": "2017/12/20 9:49:11", "state": "异常", },
                { "id": 10004, "username": "小王", "phonenum": "13395684256", "email": "保密", "weixinnum": "保密", "registertime": "2017/10/12 9:49:11", "lastlogintime": "2017/12/20 9:49:11", "state": "正常", },

            ],

        });
        //监听工具条
        table.on('tool(test)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值
            var tr = obj.tr; //获得当前行 tr 的DOM对象

            if (layEvent === 'sendmsg') { //重置密码发送手机短信
                $(".userid-phone").val(data.id);
                var senmsgcontent = $(".layerdiscontentv1").html();
                layer.open({
                    type: 1,
                    title: '向&nbsp;'+data.username+'&nbsp;发送密码重置短信',
                    area: ['420px', '220px'], //宽高
                    content: senmsgcontent,
                });
            } else if (layEvent === 'sendemail') { //重置密码发送邮件
                $(".userid-email").val(data.id);
                var senemailcontent = $(".layerdiscontentv2").html();
                layer.open({
                    type: 1,
                    title: '向&nbsp;'+data.username+'&nbsp;发送密码重置邮件',
                    area: ['420px', '220px'], //宽高
                    content: senemailcontent,
                });
            }
        });
    });
});