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
            height: 400, //容器高度
            cols: [
                [ //标题栏
                    { field: 'id', title: 'ID', width: 80, sort: true },
                    { field: 'title', title: '文章标题', width: 200 },
                    { field: 'subtitle', title: '文章副标题', width: 200},
                    { field: 'author', title: '作者', width: 160},
                    { field: 'releasetime', title: '发布时间', width: 160,sort: true },
                    { field: 'modificationtime', title: '最后修改时间', width: 160,sort: true},
                    { field: 'weight', title: '权重', width: 80,sort: true},
                    { fixed: 'right', title: '操作', width: 180, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [
                { "id": 10000, "title": "新的模块上线啦", "subtitle": "悉心心电仪的新模块", "author": "BIS-责任编辑师", "releasetime": "2017/10/12 9:55:52", "modificationtime": "2017/10/12 9:58:52","weight": "90",},
                { "id": 10001, "title": "新的模块上线啦2", "subtitle": "悉心心电仪的新模块2", "author": "BIS-责任编辑师", "releasetime": "2017/10/12 9:55:52", "modificationtime": "2017/10/12 9:58:52","weight": "99",},
                { "id": 10002, "title": "新的模块上线啦3", "subtitle": "悉心心电仪的新模块3", "author": "BIS-责任编辑师", "releasetime": "2017/10/12 9:55:52", "modificationtime": "2017/10/12 9:58:52","weight": "80",},
                { "id": 10003, "title": "新的模块上线啦4", "subtitle": "悉心心电仪的新模块4", "author": "BIS-责任编辑师", "releasetime": "2017/10/12 9:55:52", "modificationtime": "2017/10/12 9:58:52","weight": "60",},
                { "id": 10004, "title": "新的模块上线啦5", "subtitle": "悉心心电仪的新模块5", "author": "BIS-责任编辑师", "releasetime": "2017/10/12 9:55:52", "modificationtime": "2017/10/12 9:58:52","weight": "30",},
                { "id": 10005, "title": "新的模块上线啦6", "subtitle": "悉心心电仪的新模块6", "author": "BIS-责任编辑师", "releasetime": "2017/10/12 9:55:52", "modificationtime": "2017/10/12 9:58:52","weight": "10",},
            ],
            page: true,
        });
        //监听工具条
        table.on('tool(test)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值
            var tr = obj.tr; //获得当前行 tr 的DOM对象

            if(layEvent === 'detail'){ //查看
                console.log(data.id +"的查看操作");
                /*在此处跳文章的详细页*/
            } else if (layEvent === 'delarticle') { //删除
                layer.confirm('需要要删除此文章么？', function(index) {
                    /*在这里如果点确定执行的函数*/
                    /*删除页面上的值*/
                    obj.del();
                    layer.close(index);
                });
            }else if(layEvent === 'edit'){ //编辑
                //在此处进入文章编辑框。
                console.log("编辑操作");
                //这下面也是要修改的，这里只是作为演示。同步更新缓存对应的值
                obj.update({
                  title: '新的模块上线啦2'
                  ,weight: '80'
                });
              }
        });
    });
});