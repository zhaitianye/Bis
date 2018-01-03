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
            elem: '#commentlist', //指定原始表格元素选择器（推荐id选择器）
            height: 600, //容器高度
            cols: [
                [ //标题栏
                    { field: 'id', title: 'ID', width: 80, sort: true },
                    { field: 'name', title: '姓名', width: 140},
                    { field: 'phone', title: '电话', width: 140},
                    { field: 'email', title: '邮箱', width: 180},
                    { field: 'about', title: '留言内容', width: 260 },
                    { field: 'time', title: '留言时间', width: 180, sort: true },
                    { field: 'newremark', title: '最新备注', width: 180, event: 'newsremarkmsg', },
                    { field: 'state', title: '回访状态', width: 120, sort: true},
                    { fixed: 'right', title: '查看详细', width: 180, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [
                { "id": 10000, "name": "叶晓晓", "phone": "18546684415", "email": "15515@hk.com","about": "在使用过程中遇到了一个问题，请帮我解决一下。", "time": "2017/10/12 9:55:52", "newremark": "用户说明了问题我们解决了问题。","state": "未回访",},
                { "id": 10002, "name": "叶晓晓2", "phone": "18546684416", "email": "123515@hk.com","about": "在使用过程中遇到了一个问题，请帮我解决一下2。", "time": "2017/10/12 12:55:52", "newremark": "2用户说明了问题我们解决了问题。","state": "未回访",},
                { "id": 10003, "name": "叶晓晓3", "phone": "18546684417", "email": "15414515@hk.com","about": "在使用过程中遇到了一个问题，请帮我解决一下3。", "time": "2017/10/12 14:55:52","newremark": "3用户说明了问题我们解决了问题。", "state": "已回访",},
                { "id": 10004, "name": "叶晓晓4", "phone": "18546684418", "email": "15dsf515@hk.com","about": "在使用过程中遇到了一个问题，请帮我解决一下4。", "time": "2017/10/12 16:55:52", "newremark": "4用户说明了问题我们解决了问题。","state": "已回访",},
            ],
            page: true,
        });
        //监听工具条
        table.on('tool(test)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值
            var tr = obj.tr; //获得当前行 tr 的DOM对象

            if (layEvent === 'detail') {
                window.location.href='HK_AdminMsgDetail.html';
                //layer.alert(data.id +"的查看操作");
            }else if (obj.event === 'newsremarkmsg') {
                layer.alert(data.newremark,{
                    title: 'ID 为 &nbsp;' + data.id + '&nbsp; 的最新备注信息',
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