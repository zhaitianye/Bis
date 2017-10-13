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
            elem: '#orderlist', //指定原始表格元素选择器（推荐id选择器）
            height: 400, //容器高度
            cols: [
                [ //标题栏
                    { field: 'id', title: 'ID', width: 80, sort: true },
                    { field: 'orderid', title: '订单号', width: 240 , event: 'orderidabout', },
                    { field: 'goodscontent', title: '商品内容', width: 180, event: 'goodsabout', },
                    { field: 'ordertime', title: '下单时间', width: 180 },
                    { field: 'state', title: '状态', width: 120, sort: true },
                    { field: 'logistics', title: '物流公司', width: 120 },
                    { field: 'wid', title: '运单号', width: 240, event: 'widabout', },
                    { field: 'receipttime', title: '收货时间', width: 180, sort: true },
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [
                { "id": "10000", "orderid": "KSD1514515461SD414541", "goodscontent": "套餐A*1 </br>服务B（3个月）*1</br> 套餐B*5 套餐C*3</br>", "ordertime": "2017/10/12 9:55:52", "state": "正常", "logistics": "顺丰", "wid": "WEDCJHI545174ADF", "receipttime": "2017/10/18 14:30:10", },
            ],
            page: true,
        });
        //监听单元格事件
        table.on('tool(test)', function(obj) {
            var data = obj.data;
            if (obj.event === 'goodsabout') {
                layer.alert(data.goodscontent,{
                    title: 'ID 为 &nbsp;' + data.id + '&nbsp; 的商品内容',
                });
            }else if (obj.event === 'orderidabout') {
                layer.alert(data.orderid,{
                    title: 'ID 为 &nbsp;' + data.id + '&nbsp; 的订单号',
                });
            }else if (obj.event === 'widabout') {
                layer.alert(data.wid,{
                    title: 'ID 为 &nbsp;' + data.id + '&nbsp; 的运单号',
                });
            }
        });
    });
});