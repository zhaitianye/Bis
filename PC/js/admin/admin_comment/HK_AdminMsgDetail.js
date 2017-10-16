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
            elem: '#remarklist', //指定原始表格元素选择器（推荐id选择器）
            height: 600, //容器高度
            cols: [
                [ //标题栏
                    { field: 'id', title: 'ID', width: 80, sort: true },
                    { field: 'about', title: '备注内容', width: 200,event: 'aboutmsg',},
                    { field: 'time', title: '备注时间', width: 180, sort: true },
                    { field: 'remarkuser', title: '备注用户', width: 180, sort: true },
                    { field: 'state', title: '备注状态', width: 180, sort: true },
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [
                { "id": 10000, "about": "已经解决用户反映的问题。", "time": "2017/10/12 9:55:52","remarkuser": "小王","state": "未回访",},
            ],
            page: true,
        });
        //监听工具条
        table.on('tool(test)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值
            var tr = obj.tr; //获得当前行 tr 的DOM对象

            if (obj.event === 'aboutmsg') {
                layer.alert(data.about,{
                    title: '时间为 &nbsp;' + data.time + '&nbsp; 的备注信息',
                });
            }
        });
    });
});