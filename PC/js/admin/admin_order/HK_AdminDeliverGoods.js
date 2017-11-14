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
        form.on('submit(sub_setway)', function(data) {
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
                    { checkbox: true, fixed: true },
                    { field: 'id', title: 'ID', width: 80, sort: true, fixed: true },
                    { field: 'status', title: '订单状态', width: 120, sort: true },
                    { field: 'ordernum', title: '订单号', width: 240, event: 'ordernum_e' },
                    { field: 'waybillnum', title: '运单号', width: 240, event: 'waybillnum_e' },
                    { field: 'goodscontent', title: '商品内容', width: 240, event: 'goodscontent_e' },
                    { field: 'consignee', title: '收货人', width: 160 },
                    { field: 'phone', title: '联系电话', width: 160 },
                    { field: 'address', title: '收货地址', width: 240 },
                    { field: 'time', title: '下单时间', width: 180 },
                    { field: 'logistics', title: '物流公司', width: 120, sort: true },
                    { fixed: 'right', title: '查看详细', width: 180, align: 'center', toolbar: '#barDemo' }
                ]
            ],
            /*在这里使用的是静态数据，参考layui文档，使用服务器上的数据进行更替*/
            data: [
                { "id": 10000, "ordernum": "SDJHJ5418524541541", "waybillnum": "HAHGUBUN54185245415", "goodscontent": "HC3A250 悉心心电仪", "consignee": "李小姐", "phone": "18623695862", "address": "香港国宏大道305号", "time": "2017/10/12 9:55:52", "status": "未发货", "logistics": "顺丰空运", },
                { "id": 10002, "ordernum": "SSDFF5141424541541", "waybillnum": "", "goodscontent": "电极片（*3）", "consignee": "王先森", "phone": "14851155415", "address": "深圳宝安后亭社区456号", "time": "2017/10/12 9:55:52", "status": "已发货", "logistics": "EMS", },
                { "id": 10003, "ordernum": "GRECBEW41424541541", "waybillnum": "ETTYCCXBF418524541541", "goodscontent": "血压计(*3)", "consignee": "李先森", "phone": "16698569854", "address": "深圳罗湖区34716号", "time": "2017/10/12 9:55:52", "status": "已发货", "logistics": "顺丰空运", },
            ],
            page: true,
        });
        //监听工具条
        table.on('tool(DLtest)', function(obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
            var data = obj.data; //获得当前行数据
            var layEvent = obj.event; //获得 lay-event 对应的值
            var tr = obj.tr; //获得当前行 tr 的DOM对象
            if (layEvent === 'detail') { //查看
                $(".detail_consignee").html(data.consignee);
                $(".detail_phone").html(data.phone);
                $(".detail_ordernum").html(data.ordernum);
                $(".detail_waybillnum").html(data.waybillnum);
                $(".detail_goodscontent").html(data.goodscontent);
                $(".detail_address").html(data.address);
                $(".detail_time").html(data.time);
                $(".detail_status").html(data.status);
                $(".detail_logistics").html(data.logistics);
                layer.open({
                    type: 1,
                    title: "ID为" + data.id + "的基本信息",
                    area: ['560px', '700px'], //宽高
                    btn: ['打印', '取消'],
                    btn1: function(index, layero) {
                        $(".detailcontent").print();
                    },
                    content: $('.detailcontent'),
                });
            };
            if (layEvent === 'edit') { //编辑
                $(".ipt_waybill_id").val(data.id);
                $(".ipt_waybill").val("");
                $(".detail_waybillnum").html(data.waybillnum);
                layer.open({
                    type: 1,
                    title: "编辑ID为" + data.id + "的运单信息",
                    area: ['500px', '300px'], //宽高
                    content: $('.detailwaybill'),
                });
            };
            if (obj.event === 'ordernum_e') {
                layer.alert(data.ordernum, {
                    title: 'ID 为 &nbsp;' + data.id + '&nbsp; 订单号',
                });
            };
            if (obj.event === 'waybillnum_e') {
                layer.alert(data.waybillnum, {
                    title: 'ID 为 &nbsp;' + data.id + '&nbsp; 运单号',
                });
            };
            if (obj.event === 'goodscontent_e') {
                layer.alert(data.goodscontent, {
                    title: 'ID 为 &nbsp;' + data.id + '&nbsp; 商品内容',
                });
            };
        });
        /*获取表格中数据相关操作*/
        var $ = layui.$, active = {
                getCheckData: function() {
                    /*获取选中的id*/
                    var checkStatus = table.checkStatus('DeliverList'),
                        data = checkStatus.data;
                        var jsonprintid = [];
                        var manifest_box_content = "";
                    for (var i = 0; i < data.length; i++) {
                        /*把id封装成json*/
                        var row ={};
                        row.id = data[i].id;
                        jsonprintid.push(row);
                        /*把订单添加到相应位置*/
                        manifest_box_content += "<p class=\"clear h-40 line-h-40 col-red\">";
                        manifest_box_content += data[i].ordernum;
                        manifest_box_content += "<\/p>";
                    }
                    $(".manifest_box").html(manifest_box_content);
                    //console.log(manifest_box_content);
                    //console.log(JSON.stringify(jsonprintid));
                    layer.open({
                        type: 1,
                        title: "打印发货单",
                        area: ['560px', '700px'], //宽高
                        btn: ['打印', '取消'],
                        btn1: function(index, layero) {
                            //$(".aaaaaa").print();
                            console.log(JSON.stringify(jsonprintid));
                        },
                        content: $('.sureprint'),
                    });

                }
            };
            /*这里应该是cative的回调相关操作，和上面结合用的*/
        $('.demoTable .layui-btn').on('click', function(){
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
          });
        
    });
    
    
    /*页面方面js*/
    $(".btn-sidebar").click(function() {
        $(".btn-sidebar").removeClass("layui-btn-primary");
        $(this).siblings().addClass("layui-btn-primary");
    });
    $(".wwwwww").click(function() {
        $(".aaaaaa").print();
    });

    demo();

    function demo() {
        var json2 = { "obj": [{ "sdf": 11, "sdf2": 12, "sdf3": 13, "sdf4": 14, "sdf5": 15, "sdaf": [{ "Jsdf": 111, "Jsdf2": 112, "Jsdf3": 112, "Jsdf4": 114 }, { "Jsdf": 121, "Jsdf2": 122, "Jsdf3": 123, "Jsdf4": 124, "Jsdf5": 125 }] }, { "sdf": 21, "sdf2": 22, "sdf3": 23, "sdf4": 24, "sdf5": 25, "sdaf": [{ "Jsdf": 211, "Jsdf2": 212, "Jsdf3": 212, "Jsdf4": 214 }, { "Jsdf": 221, "Jsdf2": 222, "Jsdf3": 223, "Jsdf4": 224, "Jsdf5": 225 }] }] };
        var objv1 = JSON.stringify(json2)
        //console.log(json2.obj[0].sdaf[0].Jsdf);

    }
});