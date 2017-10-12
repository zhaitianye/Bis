$(document).ready(function() {
    /*layui方面js*/
    layui.use(['form', 'table', 'element'], function() {
        var form = layui.form,
            layer = layui.layer,
            element = layui.element,
            table = layui.table;
        //执行渲染
        table.render({
            elem: '#commentlist', //指定原始表格元素选择器（推荐id选择器）
            height: 600, //容器高度
            cols: [
                [ //标题栏
                    { field: 'id', title: 'ID', width: 80, sort: true },
                    { field: 'userid', title: '用户ID', width: 160,sort: true },
                    { field: 'googid', title: '商品ID', width: 160,sort: true },
                    { field: 'goodname', title: '评价商品', width: 160 },
                    { field: 'grade', title: '评分', width: 120, sort: true },
                    { field: 'commentcontent', title: '评价内容', width: 180},
                    { field: 'commenttime', title: '评价时间', width: 160, sort: true },
                    { field: 'weight', title: '权重', width: 80, sort: true },
                    { fixed: 'right', title: '删除', width: 100, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [
                { "id": 10000, "userid": "DTCGH24142235", "googid": "DFE126324125442", "goodname": "HK-悉心心电仪", "grade": "5星", "commentcontent": "非常好用，太好用了，非常好用，太好用了，非常好用，太好用了，非常好用，太好用了，非常好用，太好用了","commenttime": "2017/10/12 9:55:52",  "weight": "99",},
                { "id": 10002, "userid": "DTCGH24hgrvhrc", "googid": "vrhDFE1erty442", "goodname": "HK-悉心心电仪", "grade": "3星", "commentcontent": "非常好用，太好用了，非常好用，太好用了，非常好用，太好用了，非常好用，太好用了，非常好用，太好用了","commenttime": "2017/10/12 9:55:51",  "weight": "80",},
                { "id": 10003, "userid": "deDTCGH24hgrvh", "googid": "ferhDFE1erty442", "goodname": "HK-悉心心电仪", "grade": "3星", "commentcontent": "非常好用，太好用了，非常好用，太好用了，非常好用，太好用了，非常好用，太好用了，非常好用，太好用了","commenttime": "2016/10/12 9:55:51",  "weight": "88",},
            ],
            page: true,
        });
        //监听工具条
        table.on('tool(test)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值
            var tr = obj.tr; //获得当前行 tr 的DOM对象

            if (layEvent === 'delcomment') { //删除
                layer.confirm('需要要删除此条评论么？', function(index) {
                    /*在这里如果点确定执行的函数*/
                    /*删除页面上的值*/
                    obj.del();
                    layer.close(index);
                });
            }
        });
    });
});