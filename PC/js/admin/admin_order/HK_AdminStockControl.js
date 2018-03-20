$(document).ready(function() {
    /*layui方面js*/
    layui.use(['form', 'table', 'element'], function() {
        var form = layui.form,
            layer = layui.layer,
            element = layui.element,
            table = layui.table;
        //监听提交
        /*查找部分的提交*/
        form.on('submit(search1)', function(data) {
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            //console.log(JSON.stringify(data.field));
            return false;
        });
        /*设置运单号部分的提交*/
        form.on('submit(search1)', function(data) {
            /*获取此时的id*/
            var this_id = $(".ipt_waybill_id").val();
            layer.closeAll();
            layer.alert(JSON.stringify(data.field), {
                title: '最终的提交信息'
            })
            //console.log(JSON.stringify(data.field));
            return false;
        });
        //执行渲染
        table.render({
            elem: '#DeliverList', //指定原始表格元素选择器（推荐id选择器）
            id: 'DeliverList',
            height: 400, //容器高度
            cols: [
                [ //标题栏
                    { field: 'sn_num', title: 'SN码', width: "25%", sort: true, fixed: true },
                    { field: 'status', title: '产品类型', width: "25%"},
                    { field: 'inventory_status', title: '在库状态', width: "25%", sort: true},
                    { fixed: 'right', title: '查看详细', width: "25%", align: 'center', toolbar: '#barDemo' }
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            /*sn码，产品类型，在库状态（在库，已售出），订单号，用户名，下单时间，收货人，收货电话，收货地址，保修状态*/
            data: [
                { "sn_num": "HC000000001", "status": "悉心心电仪 HC3A250", "inventory_status": "在库", "ordernum": "无", "username": "无", "ordertime": "无", "addressname": "无", "phone": "无",  "address": "无", "warrantystatus": "无", },
                { "sn_num": "HC000000002", "status": "悉心心电仪 HC3A250", "inventory_status": "已售出", "ordernum": "000000000000001", "username": "youguoqiang1", "ordertime": "2018-03-19 23：15：24", "addressname": "游国强1", "phone": "13800138000",  "address": "中国 广东省 深圳市 宝安区 全至科技创新园10E", "warrantystatus": "保修中", },
                { "sn_num": "HC000000003", "status": "悉心心电仪 HC3A250", "inventory_status": "已售出", "ordernum": "000000000000002", "username": "youguoqiang2", "ordertime": "2018-03-19 23：15：24", "addressname": "游国强2", "phone": "13800138002",  "address": "中国 广东省 深圳市 宝安区 全至科技创新园10E", "warrantystatus": "未保修", }
            ],
            page: true,
        });
        //监听工具条
        table.on('tool(DLtest)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值
            var tr = obj.tr; //获得当前行 tr 的DOM对象
            if (layEvent === 'detail') { //查看
                if (data.inventory_status == "已售出") {
                    $(".detail_consignee").html(data.addressname);
                    $(".detail_phone").html(data.phone);
                    $(".detail_address").html(data.address);
                    $(".detail_ordernum").html(data.ordernum);
                    $(".detail_username").html(data.username);
                    $(".detail_snnum").html(data.sn_num);
                    $(".detail_goodsstatus").html(data.status);
                    $(".detail_time").html(data.ordertime);
                    $(".detail_warrantystatus").html(data.warrantystatus);
                    layer.closeAll();
                    layer.open({
                        type: 1,
                        title: "SN码为" + data.sn_num + "的基本信息",
                        area: ['800px', '700px'], //宽高
                        btn: ['我知道了'],
                        content: $('.detailcontent'),
                    });
                } else{
                    layer.msg("只有已售出的商品才能查看信息!", { icon: 5, anim: 6 });
                }
            };
            if (layEvent === 'del') { //编辑
                if (data.inventory_status == "在库") {
                    layer.msg("在这里进行删除操作!", { icon: 6});
                } else{
                    layer.msg("只有在库商品才能删除，已售出的不允许删除!", { icon: 5, anim: 6 });
                }
            };

        });
        
    });
});